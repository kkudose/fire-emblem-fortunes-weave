"""Rebuild positive reaction evidence ledgers from current source captures."""
import csv
from collections import defaultdict
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
REFRESH = ROOT / 'src/research/gift-sources/2026-11-21/current-refresh'
RAIDER_LEDGER = ROOT / 'src/research/gift-sources/2026-10-24/reaction-pair-evidence.csv'
PAIR_LEDGER = REFRESH / 'reaction-pair-evidence.csv'
STRONG_LEDGER = REFRESH / 'strong-positive-evidence.csv'

evidence = defaultdict(dict)

# Keep the explicitly tiered Raider King assignments from its current page
# review. Its visible publication date remains 2026-09-30.
with RAIDER_LEDGER.open(newline='', encoding='utf-8-sig') as f:
    for row in csv.DictReader(f):
        tier = row.get('Raider King', '').strip()
        if tier in ('Loved', 'Really Liked'):
            evidence[(row['character'], row['gift'])]['Raider King'] = tier

# Game8's current top preference label is a strong positive, but its page does
# not establish the app's one-arrow/two-arrow distinction. Keep it Really Liked.
with (REFRESH / 'game8-reactions-mapped.csv').open(newline='', encoding='utf-8-sig') as f:
    for row in csv.DictReader(f):
        if row['source_tier_ja'] == 'とても気に入った':
            evidence[(row['character'], row['gift'])]['Game8'] = 'Really Liked'

# Yuphas's current endpoint labels its positive groups loved and liked.
with (REFRESH / 'yuphas-reactions.csv').open(newline='', encoding='utf-8-sig') as f:
    for row in csv.DictReader(f):
        if row['source_tier_raw'] in ('loved', 'liked'):
            gift = {"The Knight's Suitors": "The Knight’s Suitors",
                    "Trader's Handbook": "Trader’s Handbook"}.get(row['gift'], row['gift'])
            tier = 'Loved' if row['source_tier_raw'] == 'loved' else 'Really Liked'
            evidence[(row['character'], gift)]['Yuphas Temple'] = tier

old_fields = ['character', 'gift', 'Game8', 'Yuphas Temple', 'Raider King', 'status']
with PAIR_LEDGER.open('w', newline='', encoding='utf-8') as f:
    writer = csv.DictWriter(f, fieldnames=old_fields, lineterminator='\n')
    writer.writeheader()
    for pair, sources in sorted(evidence.items()):
        tiers = set(sources.values())
        if tiers == {'Loved', 'Really Liked'}:
            status = 'tier disagreement; normalize to Really Liked'
        elif len(sources) >= 2:
            status = 'multiple eligible source records'
        else:
            status = 'single eligible source record'
        writer.writerow({'character': pair[0], 'gift': pair[1],
                         'Game8': sources.get('Game8', ''),
                         'Yuphas Temple': sources.get('Yuphas Temple', ''),
                         'Raider King': sources.get('Raider King', ''),
                         'status': status})

with (REFRESH / 'redfreshet-reactions-mapped.csv').open(newline='', encoding='utf-8-sig') as f:
    strongest = [row for row in csv.DictReader(f) if row['source_tier_ja'] == '大好き']
with STRONG_LEDGER.open('w', newline='', encoding='utf-8') as f:
    writer = csv.DictWriter(f, fieldnames=['character', 'gift', 'Redfreshet original label'],
                            lineterminator='\n')
    writer.writeheader()
    writer.writerows({'character': row['character'], 'gift': row['gift'],
                      'Redfreshet original label': row['source_tier_ja']}
                     for row in strongest)

print(f'pair ledger: {len(evidence)} pairs; Redfreshet strongest-positive rows: {len(strongest)}')
