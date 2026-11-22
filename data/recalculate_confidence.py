"""Consolidate source tiers and direct user confirmations."""
import csv
import sqlite3
from collections import defaultdict
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
DB = ROOT / "data/gifts.sqlite"
REPORT = ROOT / "data/consolidated-reactions.csv"
MINIMUM_INDEPENDENT_SOURCES = 2
TIER_RANK = {"Disliked": 0, "Neutral": 1, "Liked": 2, "Really Liked": 3, "Loved": 4}
POSITIVE_TIERS = {"Loved", "Really Liked"}


def consolidate():
    con = sqlite3.connect(DB)
    con.execute("PRAGMA foreign_keys = ON")
    con.execute("DELETE FROM reactions")

    source_rows = con.execute(
        """SELECT sr.character_id,sr.gift_id,c.name,g.name,d.name,sr.normalized_tier
           FROM source_reactions sr
           JOIN characters c USING(character_id)
           JOIN gifts g USING(gift_id)
           JOIN data_sources d USING(source_id)
           WHERE sr.eligible_for_confidence=1
             AND sr.source_context=''
             AND sr.normalized_tier IN ('Loved','Really Liked','Liked','Neutral','Disliked')"""
    ).fetchall()

    by_pair_source = defaultdict(lambda: defaultdict(set))
    names_by_pair = {}
    for character_id, gift_id, character, gift, source, tier in source_rows:
        key = (character_id, gift_id)
        by_pair_source[key][source].add(tier)
        names_by_pair[key] = (character, gift)

    manual_rows = con.execute(
        """SELECT mc.character_id,mc.gift_id,c.name,g.name,mc.tier,mc.notes
           FROM manual_confirmations mc
           JOIN characters c USING(character_id)
           JOIN gifts g USING(gift_id)"""
    ).fetchall()
    manual = {(row[0], row[1]): row[4:] for row in manual_rows}
    for row in manual_rows:
        names_by_pair[(row[0], row[1])] = (row[2], row[3])

    # This table remains a compilation of claimed high-tier gifts (plus direct
    # confirmations). Lower-tier-only source pairs are not added as new items;
    # lower tiers can revise an existing high-tier candidate by consensus.
    candidate_keys = {
        key for key, source_tiers in by_pair_source.items()
        if any(tier in POSITIVE_TIERS for tiers in source_tiers.values() for tier in tiers)
    }
    candidate_keys.update((row[0], row[1]) for row in manual_rows)

    report = []
    lower_tier_overrides = 0
    for key in sorted(candidate_keys):
        character_id, gift_id = key
        character, gift = names_by_pair[key]
        raw_source_tiers = by_pair_source.get(key, {})
        source_votes = {}
        intra_source_conflict = False
        for source, tiers in raw_source_tiers.items():
            if len(tiers) > 1:
                intra_source_conflict = True
            # A source that assigns conflicting tiers is represented by its
            # least favorable explicit tier. Its rows still count as one source.
            source_votes[source] = min(tiers, key=TIER_RANK.__getitem__)
            if tiers == POSITIVE_TIERS:
                source_votes[source] = "Really Liked"

        direct = manual.get(key)
        direct_tier = direct[0] if direct else None
        positive_sources = {
            source: tier for source, tier in source_votes.items()
            if tier in POSITIVE_TIERS
        }
        lower_votes = defaultdict(set)
        for source, tier in source_votes.items():
            if tier not in POSITIVE_TIERS:
                lower_votes[tier].add(source)
        tier_votes = defaultdict(set)
        for source, tier in source_votes.items():
            tier_votes[tier].add(source)
        plurality_tiers = [
            tier for tier, sources in tier_votes.items()
            if all(
                len(sources) > len(other_sources)
                for other_tier, other_sources in tier_votes.items()
                if other_tier != tier
            )
        ]

        conflict = intra_source_conflict or len(set(positive_sources.values())) > 1
        if direct_tier:
            tier = direct_tier
            verified = True
            selected_sources = {
                source for source, source_tier in source_votes.items()
                if source_tier == tier
            }
            note = "Direct user confirmation overrides source disagreement."
            if not conflict and not selected_sources:
                note = "Direct user confirmation."
        else:
            lower_consensus = [
                tier for tier, sources in lower_votes.items()
                if len(sources) >= MINIMUM_INDEPENDENT_SOURCES
            ]
            if plurality_tiers:
                tier = plurality_tiers[0]
                selected_sources = set(tier_votes[tier])
                verified = len(selected_sources) >= MINIMUM_INDEPENDENT_SOURCES
                conflict = conflict or len(tier_votes) > 1
                if tier not in POSITIVE_TIERS:
                    lower_tier_overrides += 1
                    note = "Lower tier selected because more independent sources support it than any competing tier."
                else:
                    note = "Tier selected by the most independent source votes." if conflict else None
            elif len(positive_sources) >= MINIMUM_INDEPENDENT_SOURCES:
                # On unresolved positive-tier ties, keep the conservative
                # Loved/Really Liked resolution used before source voting.
                tier = "Really Liked" if "Really Liked" in positive_sources.values() else "Loved"
                selected_sources = set(positive_sources)
                verified = True
                note = "Loved/Really Liked disagreement normalized to Really Liked." if len(set(positive_sources.values())) > 1 else None
            elif lower_consensus:
                # Two sources agreeing below a lone higher claim override it.
                # If several lower tiers have a two-source consensus, choose
                # the highest tier with the largest supporting group.
                tier = max(
                    lower_consensus,
                    key=lambda candidate: (
                        len(lower_votes[candidate]), TIER_RANK[candidate]
                    ),
                )
                selected_sources = set(lower_votes[tier])
                verified = True
                lower_tier_overrides += 1
                conflict = True
                note = "Lower tier selected by agreement of multiple independent sources."
            elif positive_sources:
                tier = next(iter(positive_sources.values()))
                selected_sources = set(positive_sources)
                verified = False
                note = "Only one eligible source supports this positive tier."
            else:
                # Lower-only source pairs are retained in source tables but
                # are not added to the positive gift compilation.
                continue

        source_names = sorted(selected_sources)
        con.execute(
            """INSERT INTO reactions
               (character_id,gift_id,tier,verification_status,eligible_source_count,
                eligible_sources,tier_conflict_normalized,direct_confirmation,notes)
               VALUES(?,?,?,?,?,?,?,?,?)""",
            (character_id, gift_id, tier, "verified" if verified else "unverified",
             len(source_names), "; ".join(source_names), int(conflict),
             int(direct_tier is not None), note),
        )
        report.append({
            "character": character,
            "gift": gift,
            "tier": tier,
            "verification_status": "verified" if verified else "unverified",
            "eligible_source_count": len(source_names),
            "eligible_sources": "; ".join(source_names),
            "tier_conflict_normalized": str(conflict).lower(),
            "direct_confirmation": str(direct_tier is not None).lower(),
        })

    with REPORT.open("w", newline="", encoding="utf-8") as report_file:
        writer = csv.DictWriter(report_file, fieldnames=report[0].keys(), lineterminator="\n")
        writer.writeheader()
        writer.writerows(report)

    con.commit()
    summary = {
        "compiled_pairs": len(report),
        "verified": sum(row["verification_status"] == "verified" for row in report),
        "unverified": sum(row["verification_status"] == "unverified" for row in report),
        "lower_tier_overrides": lower_tier_overrides,
        "directly_confirmed": sum(row["direct_confirmation"] == "true" for row in report),
    }
    con.close()
    return summary


if __name__ == "__main__":
    print(consolidate())
