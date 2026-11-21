# Source-only gift database

`gifts.sqlite` is rebuilt from external captures and explicit user confirmations. The rebuild does not import `src/gifts.ts`, `src/item-order.ts`, or any prior app compilation.

## Current database

- 64 characters and 127 canonical gifts, drawn from source rows and manual confirmations.
- 6 external sources: Altema, Dork, Game8 JP, Raider King, Redfreshet, and Yuphas Temple. The direct in-game confirmation ledger is stored as a separate seventh source.
- 15,657 source rows across the six external sources; all source labels, lower tiers, statuses, and available scores are retained.
- 48 active manual confirmations: 43 Really Liked, 2 Loved, and 3 Liked.
- 3,563 compiled high-tier candidates and their outcomes: 2,626 verified and 937 unverified. Outcomes are 490 verified Loved, 2,081 verified Really Liked, 55 verified Liked, 215 unverified Loved, and 722 unverified Really Liked.
- 52 previously unverified higher-tier candidates now resolve to a lower tier because two independent sources agree on that lower tier. Those lower-tier sources are listed in `eligible_sources`; the higher-tier outlier is omitted. Three additional Liked outcomes are direct user confirmations.
- Loved/Really Liked disagreements resolve to Really Liked when at least two independent sources support those upper-positive tiers. A tier disagreement by itself does not make such a pair unverified.

The previous 1,441-pair app compilation was removed from SQLite. The app's own arrays remain separate from this research database and are not used by its import or consolidation scripts.

## Source and manual data

- [`schema.sql`](schema.sql) defines `characters`, `gifts`, `data_sources`, `source_tier_mappings`, raw and normalized source reaction tables, `manual_confirmations`, and the consolidated `reactions` table.
- [`manual-confirmations.csv`](manual-confirmations.csv) contains only active direct user reports. Retracted confirmations and statements that merely rule out the top two tiers are not entered as reactions. The three direct Liked records remain in this ledger and suppress any conflicting top-tier source compilation for the same pair.
- [`source-tier-mappings.csv`](source-tier-mappings.csv) documents source label mappings. Known mapped tiers can support tier consensus; Unknown and source statuses marked Suspected or Not known do not count.
- [`gift-name-aliases.csv`](gift-name-aliases.csv) maps alternate source spellings to canonical gift names. In particular, `Bagua Divination Set` is normalized to `Divination Bagua`.
- The Game8 US transcription is not included as a source. It informed the Japanese label crosswalk only. Japanese Game8's `気に入った` maps to Really Liked (472 of 475 shared pairs were US Really Liked). `とても気に入った` also maps conservatively to Really Liked because the shared pairs split nearly evenly between US Loved (64) and Really Liked (68). Altema's `大好き` maps conservatively to Really Liked (376 of 430 shared pairs were US Really Liked); its lower `好き` tier maps to Liked and can support a lower-tier consensus.
- Dork is imported from the user-supplied [`source snapshot`](../src/research/gift-sources/2026-11-21/dork.csv). Its 8,064 extracted rows cover 126 gifts. Confirmed, Consistent, and Inferred rows count as one Dork source. Suspected and Not known rows are retained but do not count as corroboration. Peter Part 3 rows retain their context and are excluded from the character-wide consolidation.

## Rebuild

1. Run `python3 data/extract_dork.py` to create the normalized Dork extract from the archived CSV.
2. Run `python3 data/import_data.py` to rebuild the database from external captures and manual confirmations only.
3. Run `python3 data/recalculate_confidence.py` to regenerate the `reactions` table and [`consolidated-reactions.csv`](consolidated-reactions.csv).

The consolidation counts distinct source names, so duplicate rows within one source do not increase corroboration. Direct confirmations override source tiers. Two sources supporting Loved/Really Liked verify the positive tier; a Loved/Really Liked disagreement resolves to Really Liked. If an otherwise unverified higher-tier pair has two independent sources agreeing on the same lower tier, that lower tier is selected and the higher-tier outlier is omitted from `eligible_sources`. Lower-tier-only pairs are not added to the high-tier gift compilation. Source omissions are not negative evidence.
