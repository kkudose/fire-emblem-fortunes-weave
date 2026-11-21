"""Recalculate current gift confidence from eligible archived evidence."""
import csv
import json
import re
import subprocess
from collections import Counter
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
GIFT_FILE = ROOT / 'src' / 'gifts.ts'
EVIDENCE = ROOT / 'src/research/gift-sources/2026-11-21/current-refresh/reaction-pair-evidence.csv'
STRONG = ROOT / 'src/research/gift-sources/2026-11-21/current-refresh/strong-positive-evidence.csv'
FAMILY = ROOT / 'src/research/gift-sources/2026-10-24/family-category-evidence.csv'
REPORT = ROOT / 'data/confidence-recalculation.csv'
MINIMUM_INDEPENDENT_SOURCES = 2

chars = json.loads(subprocess.check_output(
    ['bun', '-e', 'import { characters } from "./src/gifts.ts"; console.log(JSON.stringify(characters))'],
    cwd=ROOT, text=True,
))

# Eligible structured exact-pair sources in the refreshed evidence set.
# Game8, Yuphas Temple, and Raider King give tiers; Redfreshet establishes
# strongest positive. Altema's labels do not map to the app's reaction tiers.
tiers = {}
with EVIDENCE.open(newline='', encoding='utf-8-sig') as f:
    for row in csv.DictReader(f):
        pair = (row['character'], row['gift'])
        tiers[pair] = {
            source: row[source].strip()
            for source, row_key in [('Game8', 'Game8'), ('Yuphas Temple', 'Yuphas Temple'),
                                    ('Raider King', 'Raider King')]
            if row[row_key].strip()
        }
strong_positive = set()
with STRONG.open(newline='', encoding='utf-8-sig') as f:
    for row in csv.DictReader(f):
        # Use only Redfreshet's source-labeled evidence from this ledger.
        if row['Redfreshet original label'].strip():
            strong_positive.add((row['character'], row['gift']))

# Explicitly tiered Raider King umbrella rows are source evidence for each
# catalogued family member in this ledger; they remain one Raider King source.
with FAMILY.open(newline='', encoding='utf-8-sig') as f:
    for row in csv.DictReader(f):
        tier = row['source_tier'].strip()
        if row['source'] == 'Raider King' and tier in ('Loved', 'Really Liked'):
            tiers.setdefault((row['character'], row['item']), {})['Raider King'] = tier

# Direct in-game confirmations recorded in the research log. These override
# public-source tiers and require no corroborating guide.
confirmed = {
    ('Simon', 'Pickled Vegetables'), ('Nezha', 'Pickled Vegetables'),
    ('Nezha', 'Potted Vegetables'), ('Peter', 'Jamel Milk'),
    ('Nydine', 'Mane Ornament'), ('Halvin', 'Honey Pastries'),
    ('Jester', 'Village Recipes'), ('Tialla', 'Village Recipes'),
    ('Tialla', 'Trader’s Handbook'), ('Nezha', 'Training Weights'),
    ('Ludia', 'Sturdy Rucksack'), ('Nezha', 'Training Bracelet'),
    ('Nezha', 'Training Pillar'), ('Noctula', 'Training Bracelet'),
    ('Peppe', 'Common Coffee'), ('Peppe', 'Select Coffee'),
    ('Sha Lan', 'Special “Medicine”'), ('Sha Lan', 'Smooth Garum'),
    ('Alexandra', 'Dual Fish Knives'), ('Alexandra', 'Niiza Garum'),
    ('Sha Lan', 'Alecto Garum'), ('Sha Lan', 'Pastry Cookbook'),
    ('Fabio', 'Jade Ghosh'), ('Goliath', 'Jade Ghosh'),
    ('Noctula', 'Strategy Manuscript'), ('Seteth', 'The Works of Dante'),
    ('Seteth', 'Tales of the Arena'), ('Dante', 'School Scandal'),
    ('Diego', 'Joint-Relief Gloves'), ('Noctula', 'Training Pillar'),
    ('Esmeralda', 'Gaudy Bangle'), ('Nydine', 'Sturdy Rucksack'),
    ('Sha Lan', 'Concentrated Garum'), ('Alexandra', 'Garum'),
    ('Goliath', 'Mature Ghosh'), ('Goliath', 'Mature Shosh'),
    ('Majide', 'Mature Ghosh'), ('Majide', 'Sun Ghosh'),
    ('Majide', 'Energizing Ghosh'), ('Majide', 'Jade Ghosh'),
    ('Majide', 'Secret Ghosh'), ('Majide', 'Southern Ghosh'),
    ('Majide', 'Aromatic Shosh'), ('Guzran', 'Mature Ghosh'),
    ('Guzran', 'Energizing Ghosh'),
}
confirmed_tiers = {
    ('Sha Lan', 'Special “Medicine”'): 'loved',
    ('Dante', 'School Scandal'): 'loved',
    ('Ninae', 'Blue-Rose Bouquet'): 'exclude',
}
confirmed.update({('Goliath', 'Mature Ghosh'), ('Goliath', 'Mature Shosh')})

changes = {}
stats = Counter()
audit = []
for character in chars:
    for tier_name in ('loved', 'reallyLiked'):
        for gift in character[tier_name]:
            pair = (character['name'], gift['name'])
            tier_evidence = tiers.get(pair, {})
            tier_values = set(tier_evidence.values())
            tier_conflict = tier_values == {'Loved', 'Really Liked'}
            source_count = len(tier_evidence) + int(pair in strong_positive)
            promote_two = source_count >= MINIMUM_INDEPENDENT_SOURCES
            # A Loved/Really Liked-only disagreement is resolved downward to
            # Really Liked and is never itself an uncertainty reason.
            normalized_tier = confirmed_tiers.get(
                pair, 'reallyLiked' if tier_conflict else tier_name
            )
            should_verify = promote_two or tier_conflict or pair in confirmed or pair in confirmed_tiers
            changes[pair] = (normalized_tier, not should_verify)
            stats['total'] += 1
            if gift.get('unverified') and should_verify:
                stats['promoted'] += 1
            if tier_conflict:
                stats['tier_conflicts_normalized'] += 1
            if not should_verify:
                stats['still_unverified'] += 1
            audit.append({
                'character': pair[0], 'gift': pair[1],
                'old_tier': tier_name, 'new_tier': normalized_tier,
                'eligible_source_count': source_count,
                'eligible_sources': '; '.join([*tier_evidence, *(['Redfreshet'] if pair in strong_positive else [])]),
                'tier_conflict_normalized': str(tier_conflict).lower(),
                'unverified_after_recalculation': str(not should_verify).lower(),
            })

by_character = {c['name']: {'loved': [], 'reallyLiked': []} for c in chars}
for character in chars:
    for tier_name in ('loved', 'reallyLiked'):
        for gift in character[tier_name]:
            tier, unverified = changes[(character['name'], gift['name'])]
            if tier == 'exclude':
                continue
            entry = {'name': gift['name']}
            if unverified:
                entry['unverified'] = True
            by_character[character['name']][tier].append(entry)

def key_for(name):
    return name if re.fullmatch(r'[A-Za-z_$][\w$]*', name) else json.dumps(name, ensure_ascii=False)

def render_items(items):
    rendered = []
    for item in items:
        gift_name = json.dumps(item['name'], ensure_ascii=False)
        rendered.append('      ' + (f'{{ name: {gift_name}, unverified: true }}' if item.get('unverified') else gift_name))
    return ',\n'.join(rendered)

blocks = []
for character in chars:
    data = by_character[character['name']]
    if not data['loved'] and not data['reallyLiked']:
        continue
    blocks.append(
        f"  {key_for(character['name'])}: {{\n"
        f"    loved: [\n{render_items(data['loved'])}\n    ],\n"
        f"    reallyLiked: [\n{render_items(data['reallyLiked'])}\n    ]\n  }}"
    )
text = GIFT_FILE.read_text()
records_start = text.index('const records: Record<string, GiftRecord> = {')
records_end = text.index('\n};\n\n// Automatic joins', records_start)
replacement = 'const records: Record<string, GiftRecord> = {\n' + ',\n\n'.join(blocks)
GIFT_FILE.write_text(text[:records_start] + replacement + text[records_end:])

with REPORT.open('w', newline='', encoding='utf-8') as f:
    writer = csv.DictWriter(f, fieldnames=audit[0].keys())
    writer.writeheader()
    writer.writerows(audit)

print(json.dumps(stats, sort_keys=True))
