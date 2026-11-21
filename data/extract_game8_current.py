"""Extract current Game8 gift preference rows while preserving Japanese tiers."""
import csv
import html
import re
import sys
from pathlib import Path


def plain(fragment):
    return html.unescape(re.sub(r'<[^>]+>', '', fragment)).strip()


def extract(source):
    text = source.read_text(encoding='utf-8')
    table_match = re.search(
        r'<table class="a-table a-table table--fixed flexible-cell a-table"[^>]*>(.*?)</table>',
        text, re.S,
    )
    if not table_match:
        raise ValueError('could not locate Game8 character preference table')
    records = []
    for tr in re.findall(r'<tr\b[^>]*>(.*?)</tr>', table_match.group(1), re.S):
        cells = re.findall(r'<td\b[^>]*>(.*?)</td>', tr, re.S)
        if len(cells) < 2:
            continue
        character = plain(cells[0])
        tier = ''
        for event in re.finditer(
            r'<span class="a-label-tag[^\"]*">(.*?)</span>|'
            r'<div class="align">(.*?)</div>', cells[1], re.S,
        ):
            label, gift = event.groups()
            if label is not None:
                tier = plain(label)
            elif tier:
                item = plain(gift)
                if item and item != '現在データなし':
                    records.append((character, item, tier))
    return records


def main():
    source = Path(sys.argv[1])
    destination = Path(sys.argv[2])
    records = extract(source)
    with destination.open('w', encoding='utf-8', newline='') as f:
        writer = csv.writer(f, lineterminator='\n')
        writer.writerow(['character_name_ja', 'gift_name_ja', 'source_tier_ja'])
        writer.writerows(records)
    print(f'extracted {len(records)} Game8 rows')


if __name__ == '__main__':
    main()
