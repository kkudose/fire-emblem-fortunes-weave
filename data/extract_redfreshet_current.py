"""Extract Redfreshet character gift tables from a directory of saved HTML."""
import csv
import re
import sys
from collections import Counter
from html.parser import HTMLParser
from pathlib import Path


class TableParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.tables = []
        self.table = None
        self.row = None
        self.cell = None

    def handle_starttag(self, tag, attrs):
        if tag == 'table':
            self.table = []
            self.tables.append(self.table)
        elif self.table is not None and tag == 'tr':
            self.row = []
            self.table.append(self.row)
        elif self.row is not None and tag in ('td', 'th'):
            self.cell = ''

    def handle_endtag(self, tag):
        if tag in ('td', 'th') and self.row is not None:
            self.row.append(self.cell or '')
            self.cell = None
        elif tag == 'tr':
            self.row = None
        elif tag == 'table':
            self.table = None

    def handle_data(self, data):
        if self.cell is not None:
            self.cell += data.strip()


def main():
    pages = Path(sys.argv[1])
    old_csv = Path(sys.argv[2])
    destination = Path(sys.argv[3])
    character_names = {
        row['character_id']: row['character_name_ja']
        for row in csv.DictReader(old_csv.open(encoding='utf-8-sig'))
    }
    records = set()
    for page in sorted(pages.glob('char_*.html')):
        character = character_names.get(page.stem)
        if not character:
            continue
        parser = TableParser()
        parser.feed(page.read_text(encoding='utf-8'))
        for table in parser.tables:
            if not table or '相手と反応' not in ''.join(table[0]):
                continue
            for row in table[1:]:
                if len(row) < 4 or character not in row[3]:
                    continue
                match = re.search(r'(まあまあ気に入った|大好き|好き)', row[3])
                if match:
                    tier = match.group(1)
                    reaction_class = {
                        '大好き': 'febg-gift-love',
                        '好き': 'febg-gift-positive',
                        'まあまあ気に入った': 'febg-gift-lower-positive',
                    }[tier]
                    records.add((page.stem, character, row[0], tier, reaction_class))
    with destination.open('w', encoding='utf-8', newline='') as f:
        writer = csv.writer(f, lineterminator='\n')
        writer.writerow(['character_id', 'character_name_ja', 'gift_name_ja',
                         'reaction_label_ja', 'reaction_class'])
        writer.writerows(sorted(records))
    print(f'extracted {len(records)} Redfreshet rows; tiers={dict(Counter(r[3] for r in records))}')


if __name__ == '__main__':
    main()
