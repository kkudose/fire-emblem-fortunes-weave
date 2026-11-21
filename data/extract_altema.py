"""Extract Altema's published Japanese gift preference pairs from the snapshot."""
import csv
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
snapshot = ROOT / 'src/research/gift-sources/2026-11-21/altema-page.txt'
output = ROOT / 'src/research/gift-sources/2026-11-21/altema-reactions.csv'
rows = []
character = tier = None

for line in snapshot.read_text().splitlines():
    heading = re.match(r'L\d+: 【\d+†([^】]+)】', line)
    if heading:
        character, tier = heading.group(1), None
        continue
    if re.search(r'L\d+:\s*\* \* \*', line):
        tier = None
        continue
    tier_heading = re.search(r'〖(大好き|好き)〗', line)
    if tier_heading and character:
        tier = tier_heading.group(1)
        continue
    if not character or not tier or not re.match(r'L\d+:', line):
        continue
    source_line = int(re.match(r'L(\d+):', line).group(1))
    content = re.sub(r'^L\d+:\s*', '', line).strip()
    if '/' not in content:
        continue
    for gift in content.split('/'):
        gift = gift.strip()
        if gift:
            rows.append((character, gift, tier, source_line))

with output.open('w', encoding='utf-8', newline='') as f:
    writer = csv.writer(f, lineterminator='\n')
    writer.writerow(['character_name_ja', 'gift_name_ja', 'source_tier_ja', 'source_page_line'])
    writer.writerows(rows)
print(f'{len(rows)} preference entries; {len({r[0] for r in rows})} characters; {len({r[1] for r in rows})} gift labels')
