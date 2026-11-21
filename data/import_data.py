"""Rebuild SQLite from source captures and explicit user confirmations only."""
import csv
import re
import sqlite3
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
DB = ROOT / "data/gifts.sqlite"
RESEARCH = ROOT / "src/research/gift-sources/2026-11-21"
REFRESH = RESEARCH / "current-refresh"

SOURCE_INFO = {
    "Game8 JP": (
        "https://game8.jp/fe-banshisenko/816847",
        "guide",
        "Japanese Game8 gift table captured 2026-11-21. Both positive labels are retained; the tier crosswalk is documented separately.",
    ),
    "Raider King": (
        "https://raiderking.com/fire-emblem-fortunes-weave-all-loved-gifts-guide/",
        "guide",
        "Rechecked 2026-11-21; the visible table labels itself WIP and the page publication date is 2026-09-30.",
    ),
    "Redfreshet": (
        "https://redfreshet.com/game-tools/fe-banshisenko/characters/",
        "database",
        "Current character gift tables captured 2026-11-21.",
    ),
    "Altema": (
        "https://altema.jp/febansisenkou/sukinamono",
        "guide",
        "Captured 2026-11-21; page last updated 2026-11-01. The source labels are preserved with a conservative tier mapping.",
    ),
    "Yuphas Temple": (
        "https://yuphastemple.com/gifts/",
        "database",
        "Current data endpoint captured 2026-11-21; community-contributed data, with row-level provenance not documented.",
    ),
    "Dork": (
        None,
        "community compilation",
        "User-supplied CSV captured 2026-11-21. The source's Confirmed and Consistent rows count as one Dork source; Inferred, Suspected, and Not known rows are retained but do not count as corroborating evidence. Underlying sources are not listed row by row.",
    ),
    "Direct in-game confirmation": (
        None,
        "user confirmation",
        "Active, explicit user confirmations only. Retractions and statements that merely rule out a top-tier reaction are not stored as reactions.",
    ),
}


def read_csv(path):
    with path.open(newline="", encoding="utf-8-sig") as f:
        return list(csv.DictReader(f))


GIFT_ALIASES = {
    row["source_name"]: row["canonical_name"]
    for row in read_csv(ROOT / "data/gift-name-aliases.csv")
}


def canonical_gift(name):
    return GIFT_ALIASES.get(name, name)


def exact_score(value):
    if not value:
        return None
    if re.fullmatch(r"\d+", value):
        return int(value)
    return None


def source_records():
    records = []

    def add(source, character, gift, tier, status="Published", score="", context="", row=None,
            character_raw=None, gift_raw=None):
        records.append({
            "source": source,
            "character": character.strip(),
            "character_raw": (character_raw or character).strip(),
            "gift": canonical_gift(gift.strip()),
            "gift_raw": (gift_raw or gift).strip(),
            "tier": tier.strip(),
            "status": status.strip() or "Published",
            "score": score.strip(),
            "context": context.strip(),
            "row": row,
        })

    for index, row in enumerate(read_csv(REFRESH / "game8-reactions-mapped.csv"), 2):
        add("Game8 JP", row["character"], row["gift"], row["source_tier_ja"], row=index,
            character_raw=row["character_name_ja"], gift_raw=row["gift_name_ja"])

    for row in read_csv(RESEARCH / "altema-reactions-mapped.csv"):
        add("Altema", row["character"], row["gift"], row["source_tier_ja"],
            row=int(row["source_page_line"]), character_raw=row["character_name_ja"],
            gift_raw=row["gift_name_ja"])

    for index, row in enumerate(read_csv(REFRESH / "redfreshet-reactions-mapped.csv"), 2):
        add("Redfreshet", row["character"], row["gift"], row["source_tier_ja"], row=index,
            character_raw=row["character_name_ja"], gift_raw=row["gift_name_ja"])

    for index, row in enumerate(read_csv(REFRESH / "yuphas-reactions.csv"), 2):
        add("Yuphas Temple", row["character"], row["gift"], row["source_tier_raw"],
            score=row["source_score"], row=index, gift_raw=row["gift"])

    for index, row in enumerate(read_csv(REFRESH / "reaction-pair-evidence.csv"), 2):
        if row["Raider King"].strip():
            add("Raider King", row["character"], row["gift"], row["Raider King"], row=index)

    for row in read_csv(RESEARCH / "dork-reactions.csv"):
        add("Dork", row["character"], row["gift"], row["source_tier_raw"],
            status=row["source_status"], score=row["source_score_raw"],
            context=row["source_context"], row=int(row["source_row"]),
            character_raw=row["character_raw"], gift_raw=row["gift_raw"])

    return records


def rebuild():
    DB.parent.mkdir(parents=True, exist_ok=True)
    con = sqlite3.connect(DB)
    con.execute("PRAGMA foreign_keys = OFF")
    for table in (
        "reactions", "manual_confirmations", "source_reactions", "source_reactions_raw",
        "source_tier_mappings", "data_sources", "gifts", "characters",
    ):
        con.execute(f"DROP TABLE IF EXISTS {table}")
    con.executescript((ROOT / "data/schema.sql").read_text())
    con.execute("PRAGMA foreign_keys = ON")

    source_ids = {}
    for name, (url, source_type, notes) in SOURCE_INFO.items():
        use_status = "eligible"
        cur = con.execute(
            "INSERT INTO data_sources(name,url,source_type,use_status,notes) VALUES(?,?,?,?,?)",
            (name, url, source_type, use_status, notes),
        )
        source_ids[name] = cur.lastrowid

    mappings = {}
    for row in read_csv(ROOT / "data/source-tier-mappings.csv"):
        source = row["source"]
        if source not in source_ids:
            raise ValueError(f"Tier mapping references unknown source {source!r}")
        key = (source, row["source_tier_raw"])
        mappings[key] = row
        con.execute(
            """INSERT INTO source_tier_mappings
               (source_id,source_tier_raw,normalized_tier,eligible_for_confidence,notes)
               VALUES(?,?,?,?,?)""",
            (source_ids[source], row["source_tier_raw"], row["normalized_tier"],
             int(row["eligible_for_confidence"].lower() == "true"), row["notes"]),
        )

    records = source_records()
    manual = read_csv(ROOT / "data/manual-confirmations.csv")
    characters = {row["character"].strip() for row in manual}
    gifts = {canonical_gift(row["gift"].strip()) for row in manual}
    for record in records:
        characters.add(record["character"])
        gifts.add(record["gift"])

    con.executemany("INSERT INTO characters(name) VALUES(?)", [(name,) for name in sorted(characters)])
    con.executemany("INSERT INTO gifts(name) VALUES(?)", [(name,) for name in sorted(gifts)])
    character_ids = {name: cid for cid, name in con.execute("SELECT character_id,name FROM characters")}
    gift_ids = {name: gid for gid, name in con.execute("SELECT gift_id,name FROM gifts")}

    for record in records:
        mapping = mappings.get((record["source"], record["tier"]))
        if mapping is None:
            raise ValueError(
                f"No tier mapping for {record['source']!r} label {record['tier']!r}"
            )
        eligible = mapping["eligible_for_confidence"].lower() == "true"
        if record["source"] == "Dork":
            eligible = eligible and record["status"] in ("Confirmed", "Consistent")
        if record["context"]:
            eligible = False
        con.execute(
            """INSERT INTO source_reactions_raw
               (source_id,character_name_raw,gift_name_raw,source_tier_raw,source_status,
                source_score_raw,source_context,source_row)
               VALUES(?,?,?,?,?,?,?,?)""",
            (source_ids[record["source"]], record["character_raw"], record["gift_raw"],
             record["tier"], record["status"], record["score"], record["context"], record["row"]),
        )
        con.execute(
            """INSERT INTO source_reactions
               (source_id,character_id,gift_id,source_tier_raw,normalized_tier,source_status,
                source_context,source_score_raw,eligible_for_confidence,source_row)
               VALUES(?,?,?,?,?,?,?,?,?,?)""",
            (source_ids[record["source"]], character_ids[record["character"]],
             gift_ids[record["gift"]], record["tier"], mapping["normalized_tier"],
             record["status"], record["context"], record["score"], int(eligible), record["row"]),
        )

    for row in manual:
        character = row["character"].strip()
        gift = canonical_gift(row["gift"].strip())
        con.execute(
            """INSERT INTO manual_confirmations(character_id,gift_id,source_id,tier,notes)
               VALUES(?,?,?,?,?)""",
            (character_ids[character], gift_ids[gift], source_ids["Direct in-game confirmation"],
             row["tier"].strip(), row["notes"].strip()),
        )

    con.commit()
    result = {
        "characters": con.execute("SELECT COUNT(*) FROM characters").fetchone()[0],
        "gifts": con.execute("SELECT COUNT(*) FROM gifts").fetchone()[0],
        "sources": con.execute("SELECT COUNT(*) FROM data_sources").fetchone()[0],
        "source_rows": con.execute("SELECT COUNT(*) FROM source_reactions").fetchone()[0],
        "manual_confirmations": con.execute("SELECT COUNT(*) FROM manual_confirmations").fetchone()[0],
    }
    con.close()
    return result


if __name__ == "__main__":
    print(rebuild())
