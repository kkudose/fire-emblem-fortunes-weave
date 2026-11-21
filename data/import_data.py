import csv
import json
import re
import sqlite3
import subprocess
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
DB = ROOT / 'data' / 'gifts.sqlite'
SOURCE_INFO = {
    'Game8': ('https://game8.jp/fe-banshisenko/816847', 'guide', 'Eligible; current Japanese preference table captured 2026-11-21. Strongest positive tier does not distinguish arrow counts.'),
    'Raider King': ('https://raiderking.com/fire-emblem-fortunes-weave-all-loved-gifts-guide/', 'guide', 'Eligible; rechecked 2026-11-21; source labels its reaction table WIP and page publication date is 2026-09-30.'),
    'Redfreshet': ('https://redfreshet.com/game-tools/fe-banshisenko/characters/', 'database', 'Eligible; current character gift tables captured 2026-11-21.'),
    'Altema': ('https://altema.jp/febansisenkou/sukinamono', 'guide', 'Eligible; captured 2026-11-21; page last updated 2026-11-01; preference tiers do not establish arrow counts.'),
    'Yuphas Temple': ('https://yuphastemple.com/gifts/', 'database', 'Eligible by user instruction; current data endpoint captured 2026-11-21; community-contributed data, provenance not documented row by row.'),
    'Current guide data': (None, 'compiled dataset', 'Current application records; source provenance is not encoded per pair.'),
    'Direct in-game confirmation': (None, 'user confirmation', 'Direct confirmations recorded in the research log; individual provenance needs structured audit.'),
}

con = sqlite3.connect(DB)
con.execute('DROP TABLE IF EXISTS source_reactions')
con.execute('DROP TABLE IF EXISTS source_reactions_raw')
con.executescript((ROOT / 'data' / 'schema.sql').read_text())
con.execute('DELETE FROM source_reactions_raw')
con.execute('DELETE FROM reactions')
con.execute('DELETE FROM gifts')
con.execute('DELETE FROM characters')
con.execute('DELETE FROM data_sources')

for name, (url, kind, notes) in SOURCE_INFO.items():
    status = 'historical' if name == 'Current guide data' else 'eligible'
    con.execute('INSERT INTO data_sources(name,url,source_type,use_status,notes) VALUES(?,?,?,?,?)', (name,url,kind,status,notes))
source_ids = {name: sid for sid, name in con.execute('SELECT source_id,name FROM data_sources')}

chars = json.loads(subprocess.check_output(
    ['bun', '-e', 'import { characters } from "./src/gifts.ts"; console.log(JSON.stringify(characters))'],
    cwd=ROOT,
    text=True,
))
for c in chars:
    con.execute('INSERT INTO characters(name,automatic_recruitment) VALUES(?,?)', (c['name'], c.get('automaticRecruitment')))
character_ids = {name: cid for cid, name in con.execute('SELECT character_id,name FROM characters')}

order_text = (ROOT / 'src' / 'item-order.ts').read_text()
ordered = re.findall(r"'([^']+)'", order_text.split('] as const')[0])
all_gifts = set(ordered)
for c in chars:
    for tier in ('loved','reallyLiked'):
        all_gifts.update(g['name'] for g in c[tier])
for pos, name in enumerate(ordered, 1):
    con.execute('INSERT OR IGNORE INTO gifts(name,menu_position) VALUES(?,?)', (name,pos))

def canonical_source_gift(name):
    return {
        "The Knight's Suitors": "The Knight’s Suitors",
        "Trader's Handbook": "Trader’s Handbook",
    }.get(name, name)

yuphas_path = ROOT / 'src/research/gift-sources/2026-11-21/current-refresh/yuphas-reactions.csv'
with yuphas_path.open(newline='', encoding='utf-8-sig') as f:
    for row in csv.DictReader(f):
        all_gifts.add(canonical_source_gift(row['gift']))
for filename in ('game8-reactions-mapped.csv', 'redfreshet-reactions-mapped.csv'):
    path = ROOT / 'src/research/gift-sources/2026-11-21/current-refresh' / filename
    with path.open(newline='', encoding='utf-8-sig') as f:
        for row in csv.DictReader(f):
            all_gifts.add(row['gift'])
ledger = ROOT / 'src/research/gift-sources/2026-11-21/current-refresh/reaction-pair-evidence.csv'
with ledger.open(newline='', encoding='utf-8-sig') as f:
    all_gifts.update(row['gift'] for row in csv.DictReader(f))
positive = ROOT / 'src/research/gift-sources/2026-11-21/current-refresh/strong-positive-evidence.csv'
with positive.open(newline='', encoding='utf-8-sig') as f:
    all_gifts.update(row['gift'] for row in csv.DictReader(f))
for name in sorted(all_gifts - {row[0] for row in con.execute('SELECT name FROM gifts')}):
    con.execute('INSERT OR IGNORE INTO gifts(name) VALUES(?)', (name,))
gift_ids = {name: gid for gid, name in con.execute('SELECT gift_id,name FROM gifts')}

# Current application records; a NULL source means pair-level provenance was not encoded.
for c in chars:
    for tier, entries in (('Loved', c['loved']), ('Really Liked', c['reallyLiked'])):
        for g in entries:
            con.execute('''INSERT INTO reactions(character_id,gift_id,source_id,tier,verification_status,evidence_type,notes)
                           VALUES(?,?,NULL,?,?,?,?)''', (character_ids[c['name']],gift_ids[g['name']],tier,
                           'unverified' if g.get('unverified') else 'verified','current_guide',
                           'Current gifts.ts record; pair-level source provenance is not encoded.'))

# Source-specific exact tier evidence from eligible sources.
with ledger.open(newline='') as f:
    for row in csv.DictReader(f):
        for source in ('Game8','Yuphas Temple','Raider King'):
            tier = row.get(source, '').strip()
            if not tier:
                continue
            con.execute('''INSERT OR IGNORE INTO reactions(character_id,gift_id,source_id,tier,verification_status,evidence_type,notes)
                           VALUES(?,?,?,?,?,?,?)''', (character_ids[row['character']],gift_ids.setdefault(row['gift'], None),source_ids[source],tier,
                           'source_record','published_source','Exact tier captured in archived source ledger.'))
            if source == 'Raider King':
                con.execute('''INSERT INTO source_reactions_raw(source_id,character_name_raw,gift_name_raw,source_tier_raw)
                               VALUES(?,?,?,?)''', (source_ids[source], row['character'], row['gift'], tier))
                con.execute('''INSERT INTO source_reactions(source_id,character_id,gift_id,source_tier_raw,source_reaction_class)
                               VALUES(?,?,?,?,?)''', (source_ids[source], character_ids[row['character']],
                               gift_ids[row['gift']], tier, tier))

# Redfreshet's strongest-positive class establishes a positive reaction, but
# does not distinguish one-arrow Really Liked from two-arrow Loved.
with positive.open(newline='', encoding='utf-8-sig') as f:
    for row in csv.DictReader(f):
        if not row['Redfreshet original label'].strip():
            continue
        con.execute('''INSERT OR IGNORE INTO reactions(character_id,gift_id,source_id,tier,verification_status,evidence_type,notes)
                       VALUES(?,?,?,?,?,?,?)''', (character_ids[row['character']], gift_ids[row['gift']],
                       source_ids['Redfreshet'], 'Really Liked', 'source_record', 'published_source',
                       'Strong positive only; arrow count unspecified in source.'))

refresh = ROOT / 'src/research/gift-sources/2026-11-21/current-refresh'
altema = ROOT / 'src/research/gift-sources/2026-11-21/altema-reactions.csv'
with altema.open(newline='', encoding='utf-8-sig') as f:
    for row in csv.DictReader(f):
        con.execute('''INSERT INTO source_reactions_raw(source_id,character_name_raw,gift_name_raw,source_tier_raw,source_page_line)
                       VALUES(?,?,?,?,?)''', (source_ids['Altema'], row['character_name_ja'], row['gift_name_ja'],
                       row['source_tier_ja'], row['source_page_line']))
with (ROOT / 'src/research/gift-sources/2026-11-21/altema-reactions-mapped.csv').open(newline='', encoding='utf-8-sig') as f:
    for row in csv.DictReader(f):
        con.execute('''INSERT INTO source_reactions(source_id,character_id,gift_id,source_tier_raw,source_reaction_class,source_page_line)
                       VALUES(?,?,?,?,?,?)''', (source_ids['Altema'], character_ids[row['character']],
                       gift_ids[row['gift']], row['source_tier_ja'], None, row['source_page_line']))

source_files = [
    ('game8-reactions.csv', 'game8-reactions-mapped.csv', 'Game8',
     'character_name_ja', 'gift_name_ja', 'source_tier_ja', 'source_tier_ja'),
    ('redfreshet-reactions.csv', 'redfreshet-reactions-mapped.csv', 'Redfreshet',
     'character_name_ja', 'gift_name_ja', 'reaction_label_ja', 'source_tier_ja'),
]
for raw_file, mapped_file, source_name, char_col, gift_col, raw_tier_col, mapped_tier_col in source_files:
    with (refresh / raw_file).open(newline='', encoding='utf-8-sig') as f:
        raw_rows = list(csv.DictReader(f))
    with (refresh / mapped_file).open(newline='', encoding='utf-8-sig') as f:
        mapped_rows = {(r[char_col], r[gift_col], r[mapped_tier_col]): r for r in csv.DictReader(f)}
    for row in raw_rows:
        mapped = mapped_rows[(row[char_col], row[gift_col], row[raw_tier_col])]
        con.execute('''INSERT INTO source_reactions_raw(source_id,character_name_raw,gift_name_raw,source_tier_raw)
                       VALUES(?,?,?,?)''', (source_ids[source_name], row[char_col], row[gift_col], row[raw_tier_col]))
        con.execute('''INSERT INTO source_reactions(source_id,character_id,gift_id,source_tier_raw,source_reaction_class)
                       VALUES(?,?,?,?,?)''', (source_ids[source_name], character_ids[mapped['character']],
                       gift_ids[mapped['gift']], row[raw_tier_col], mapped.get('source_reaction_class') or row[raw_tier_col]))

with (refresh / 'yuphas-reactions.csv').open(newline='', encoding='utf-8-sig') as f:
    for row in csv.DictReader(f):
        gift = canonical_source_gift(row['gift'])
        score = int(row['source_score']) if row['source_score'] else None
        con.execute('''INSERT INTO source_reactions_raw(source_id,character_name_raw,gift_name_raw,source_tier_raw)
                       VALUES(?,?,?,?)''', (source_ids['Yuphas Temple'], row['character'], row['gift'], row['source_tier_raw']))
        con.execute('''INSERT INTO source_reactions(source_id,character_id,gift_id,source_tier_raw,source_reaction_class,source_score)
                       VALUES(?,?,?,?,?,?)''', (source_ids['Yuphas Temple'], character_ids[row['character']],
                       gift_ids[gift], row['source_tier_raw'], row['source_tier_raw'], score))

# Ensure ledger-only gift names exist before relying on their IDs (repair any absent names).
con.commit()
con.close()
