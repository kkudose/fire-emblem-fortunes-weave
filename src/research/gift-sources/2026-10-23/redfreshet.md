# Redfreshet — full character-filtered gift reactions

- Source: [Gift list and character filter](https://redfreshet.com/fe-banshisenkou-gifts2/) and its [character index](https://redfreshet.com/game-tools/fe-banshisenko/characters/).
- Retrieved: 2026-10-23.
- Data file: [`redfreshet-all-characters.csv`](redfreshet-all-characters.csv).
- Method: used the source page’s own “recipient” filter for every non-empty character option, with the reaction filter cleared. This exposed the source’s item-level reaction rows in the page’s first gift table. The HTML contained two copies of the filter options; duplicate character/item/reaction rows were removed.
- Coverage: 63 distinct recipient options were fetched; 55 returned at least one explicit gift reaction. The CSV contains 877 unique character/item rows. Eight options returned no gift rows: `kiryk`, `nathan`, `char_002`, `char_003`, `char_001`, `aswan`, `klapka`, and `tahonia`. Their absence is recorded as no row returned by this source, not as neutral or disliked reactions.
- The source’s exact Japanese reaction labels and CSS classes are preserved. `大好き` is its strongest listed reaction; `好き` and `まあまあ気に入った` are distinct lower positive labels. They are not silently mapped to another guide’s tiers. The page does not expose negative reactions in these filtered rows.
- The character-profile preference hints are excluded. No reaction was inferred from those hints or from a missing row.

This replaces the earlier partial capture of only Leda and Theodora. Their rows, along with Cai and Dietrich’s, are included in the full CSV.
