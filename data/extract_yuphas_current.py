"""Extract current Yuphas Temple gift preferences and score values."""
import csv
import json
import sys
from pathlib import Path


def main():
    source = Path(sys.argv[1])
    destination = Path(sys.argv[2])
    characters = json.loads(source.read_text(encoding='utf-8'))['characterGifts']
    rows = []
    for character, data in characters.items():
        for group in data.get('gifts', []):
            for tier in ('loved', 'liked'):
                for gift, score in group.get(tier, []):
                    rows.append((character, gift, tier, score))
        for gift in data.get('disliked_gifts', []):
            rows.append((character, gift, 'disliked', ''))
    with destination.open('w', encoding='utf-8', newline='') as f:
        writer = csv.writer(f, lineterminator='\n')
        writer.writerow(['character', 'gift', 'source_tier_raw', 'source_score'])
        writer.writerows(rows)
    print(f'extracted {len(rows)} Yuphas Temple rows across {len(characters)} characters')


if __name__ == '__main__':
    main()
