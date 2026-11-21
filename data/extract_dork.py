"""Parse the user-supplied Dork gift matrix without discarding its provenance labels."""
import csv
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / "src/research/gift-sources/2026-11-21/dork.csv"
OUTPUT = ROOT / "src/research/gift-sources/2026-11-21/dork-reactions.csv"

TIER_HEADER = re.compile(
    r"^(Loved|Really liked|Liked|Neutral|Disliked|Not known) \(\d+\)$"
)
STATUS_HEADER = re.compile(
    r"^▸ (Confirmed|Consistent|Inferred|Suspected|Unverified|Not known) \(\d+\)$"
)
REACTION_ROW = re.compile(
    r"^(?P<character>.+?) \((?P<score>\d+(?:[–-]\d+| or \d+)?\??)\)$"
)


def is_gift_start(rows, index):
    return (
        index + 1 < len(rows)
        and bool(rows[index][0].strip())
        and len(rows[index + 1]) == 6
        and all(TIER_HEADER.fullmatch(cell.strip()) for cell in rows[index + 1])
    )


def canonical_gift(name):
    return {
        "Fódlan Tea": "Fodlan Tea",
        "The Knight's Suitors": "The Knight’s Suitors",
        "Trader's Handbook": "Trader’s Handbook",
    }.get(name, name)


def parse():
    with SOURCE.open(newline="", encoding="utf-8-sig") as source_file:
        rows = list(csv.reader(source_file))

    extracted = []
    index = 0
    while index < len(rows):
        if not is_gift_start(rows, index):
            index += 1
            continue

        gift_raw = rows[index][0].strip()
        gift = canonical_gift(gift_raw)
        tiers = [TIER_HEADER.fullmatch(cell.strip()).group(1) for cell in rows[index + 1]]
        statuses = [""] * 6
        row_index = index + 2

        while row_index < len(rows) and not is_gift_start(rows, row_index):
            for column, raw_cell in enumerate(rows[row_index]):
                cell = raw_cell.strip()
                status_match = STATUS_HEADER.fullmatch(cell)
                if status_match:
                    statuses[column] = status_match.group(1)
                    continue
                if not cell or cell == "—":
                    continue

                reaction_match = REACTION_ROW.fullmatch(cell)
                if reaction_match:
                    character_raw = reaction_match.group("character").strip()
                    score_raw = reaction_match.group("score")
                elif cell.endswith(" (Part 3)"):
                    character_raw = cell
                    score_raw = ""
                elif tiers[column] == "Not known" and cell != "—":
                    character_raw = cell
                    score_raw = ""
                else:
                    raise ValueError(
                        f"Unparsed Dork row {row_index + 1}, column {column + 1}: {cell!r}"
                    )

                context = "Part 3" if character_raw.endswith(" (Part 3)") else ""
                character = (
                    character_raw.removesuffix(" (Part 3)")
                    if context
                    else character_raw
                )
                extracted.append(
                    {
                        "character": character,
                        "character_raw": character_raw,
                        "gift": gift,
                        "gift_raw": gift_raw,
                        "source_tier_raw": tiers[column],
                        "source_status": statuses[column],
                        "source_score_raw": score_raw,
                        "source_context": context,
                        "source_row": row_index + 1,
                    }
                )
            row_index += 1
        index = row_index

    fields = [
        "character", "character_raw", "gift", "gift_raw", "source_tier_raw",
        "source_status", "source_score_raw", "source_context", "source_row",
    ]
    with OUTPUT.open("w", newline="", encoding="utf-8") as output_file:
        writer = csv.DictWriter(output_file, fieldnames=fields, lineterminator="\n")
        writer.writeheader()
        writer.writerows(extracted)
    return extracted


if __name__ == "__main__":
    records = parse()
    print(f"Dork: extracted {len(records)} labeled rows from 126 gift blocks")
