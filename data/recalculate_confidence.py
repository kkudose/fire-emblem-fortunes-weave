"""Consolidate positive source evidence into the source-only reactions table."""
import csv
import sqlite3
from collections import defaultdict
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
DB = ROOT / "data/gifts.sqlite"
REPORT = ROOT / "data/consolidated-reactions.csv"
MINIMUM_INDEPENDENT_SOURCES = 2
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
             AND sr.normalized_tier IN ('Loved','Really Liked')"""
    ).fetchall()

    by_pair_source = defaultdict(lambda: defaultdict(set))
    for character_id, gift_id, character, gift, source, tier in source_rows:
        by_pair_source[(character_id, gift_id, character, gift)][source].add(tier)

    manual_rows = con.execute(
        """SELECT mc.character_id,mc.gift_id,c.name,g.name,mc.tier,mc.notes
           FROM manual_confirmations mc
           JOIN characters c USING(character_id)
           JOIN gifts g USING(gift_id)"""
    ).fetchall()
    manual = {(row[0], row[1]): row[4:] for row in manual_rows}

    report = []
    for key in sorted(set(by_pair_source) | {
        (row[0], row[1], row[2], row[3]) for row in manual_rows
        if row[4] in POSITIVE_TIERS
    }):
        character_id, gift_id, character, gift = key
        source_tiers = by_pair_source.get(key, {})
        source_names = sorted(source_tiers)
        source_level_tiers = set()
        intra_source_conflict = False
        for tiers in source_tiers.values():
            if tiers == POSITIVE_TIERS:
                source_level_tiers.add("Really Liked")
                intra_source_conflict = True
            else:
                source_level_tiers.update(tiers)

        direct = manual.get((character_id, gift_id))
        direct_tier = direct[0] if direct else None
        if direct_tier and direct_tier not in POSITIVE_TIERS:
            continue
        if direct_tier in POSITIVE_TIERS:
            tier = direct_tier
            verified = True
            conflict = intra_source_conflict or len(source_level_tiers) > 1
            note = "Direct user confirmation overrides source disagreement." if conflict else "Direct user confirmation."
        else:
            conflict = intra_source_conflict or source_level_tiers == POSITIVE_TIERS
            tier = "Really Liked" if conflict else next(iter(source_level_tiers))
            verified = len(source_names) >= MINIMUM_INDEPENDENT_SOURCES
            note = "Loved/Really Liked disagreement normalized to Really Liked." if conflict else None

        status = "verified" if verified else "unverified"
        con.execute(
            """INSERT INTO reactions
               (character_id,gift_id,tier,verification_status,eligible_source_count,
                eligible_sources,tier_conflict_normalized,direct_confirmation,notes)
               VALUES(?,?,?,?,?,?,?,?,?)""",
            (character_id, gift_id, tier, status, len(source_names), "; ".join(source_names),
             int(conflict), int(direct_tier in POSITIVE_TIERS), note),
        )
        report.append({
            "character": character,
            "gift": gift,
            "tier": tier,
            "verification_status": status,
            "eligible_source_count": len(source_names),
            "eligible_sources": "; ".join(source_names),
            "tier_conflict_normalized": str(conflict).lower(),
            "direct_confirmation": str(direct_tier in POSITIVE_TIERS).lower(),
        })

    with REPORT.open("w", newline="", encoding="utf-8") as report_file:
        writer = csv.DictWriter(report_file, fieldnames=report[0].keys(), lineterminator="\n")
        writer.writeheader()
        writer.writerows(report)

    con.commit()
    summary = {
        "positive_pairs": len(report),
        "verified": sum(row["verification_status"] == "verified" for row in report),
        "unverified": sum(row["verification_status"] == "unverified" for row in report),
        "directly_confirmed_positive": sum(row["direct_confirmation"] == "true" for row in report),
        "tier_conflicts_normalized": sum(row["tier_conflict_normalized"] == "true" for row in report),
    }
    con.close()
    return summary


if __name__ == "__main__":
    print(consolidate())
