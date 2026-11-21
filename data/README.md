# Source-only gift database

`gifts.sqlite` is rebuilt from external captures and explicit user confirmations. The rebuild does not import `src/gifts.ts`, `src/item-order.ts`, or any prior app compilation.

## Current database

- 64 characters and 127 canonical gifts, drawn from source rows and manual confirmations.
- 6 external sources: Altema, Dork, Game8 JP, Raider King, Redfreshet, and Yuphas Temple. The direct in-game confirmation ledger is stored as a separate seventh source.
- 15,657 source rows across the six external sources; all source labels, lower tiers, statuses, and available scores are retained.
- 48 active manual confirmations: 43 Really Liked, 2 Loved, and 3 Liked.
- 3,293 consolidated Loved/Really Liked pairs: 1,940 verified and 1,353 unverified. Verified tiers are 248 Loved and 1,692 Really Liked; unverified tiers are 502 Loved and 851 Really Liked. The unverified pairs each have one qualifying source.
- 280 Loved/Really Liked tier disagreements were normalized to Really Liked. A tier disagreement by itself does not cause an otherwise corroborated pair to be unverified.

The previous 1,441-pair app compilation was removed from SQLite. The app's own arrays remain separate from this research database and are not used by its import or consolidation scripts.

## Source and manual data

- [`schema.sql`](schema.sql) defines `characters`, `gifts`, `data_sources`, `source_tier_mappings`, raw and normalized source reaction tables, `manual_confirmations`, and the consolidated `reactions` table.
- [`manual-confirmations.csv`](manual-confirmations.csv) contains only active direct user reports. Retracted confirmations and statements that merely rule out the top two tiers are not entered as reactions. The three direct Liked records remain in this ledger and suppress any conflicting top-tier source compilation for the same pair.
- [`source-tier-mappings.csv`](source-tier-mappings.csv) documents all source label mappings and whether a row can count toward confidence.
- [`gift-name-aliases.csv`](gift-name-aliases.csv) maps alternate source spellings to canonical gift names. In particular, `Bagua Divination Set` is normalized to `Divination Bagua`.
- The Game8 US transcription is not included as a source. It informed the Japanese label crosswalk only. Japanese Game8's `気に入った` maps to Really Liked (472 of 475 shared pairs were US Really Liked). `とても気に入った` also maps conservatively to Really Liked because the shared pairs split nearly evenly between US Loved (64) and Really Liked (68). Altema's `大好き` maps conservatively to Really Liked (376 of 430 shared pairs were US Really Liked); its lower `好き` tier is retained as Liked and does not count toward the two-source high-tier threshold.
- Dork is imported from the user-supplied [`source snapshot`](../src/research/gift-sources/2026-11-21/dork.csv). Its 8,064 extracted rows cover 126 gifts. Confirmed and Consistent upper-tier rows count as one Dork source. Inferred, Suspected, and Not known rows are retained but do not count as corroboration. Peter Part 3 rows retain their context and are excluded from the character-wide consolidation.

## Rebuild

1. Run `python3 data/extract_dork.py` to create the normalized Dork extract from the archived CSV.
2. Run `python3 data/import_data.py` to rebuild the database from external captures and manual confirmations only.
3. Run `python3 data/recalculate_confidence.py` to regenerate the `reactions` table and [`consolidated-reactions.csv`](consolidated-reactions.csv).

The consolidation counts distinct source names, so duplicate rows within one source do not increase corroboration. Direct confirmations override source tiers. For source-only pairs, two qualifying sources verify the pair; a Loved/Really Liked disagreement resolves to Really Liked. Source omissions are not negative evidence.
