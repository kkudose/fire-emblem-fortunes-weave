# Altema gift preferences — 2026-11-21

Source: [Altema — Gift and preference list](https://altema.jp/febansisenkou/sukinamono). The page displayed a last-updated date of 2026-11-01 when captured.

The archived page snapshot is [`altema-page.txt`](altema-page.txt). [`altema-reactions.csv`](altema-reactions.csv) extracts the explicit `大好き` and `好き` character/item entries, preserving their original Japanese names and page line numbers. It contains 1,944 preference entries for 61 characters and 146 gift labels: 1,214 `大好き` and 730 `好き` rows. Profile interests and unrelated prose are excluded.

The shared [`jp-name-mapping.csv`](../../../../data/jp-name-mapping.csv) maps Japanese character and gift labels from Altema, Game8, and Redfreshet to canonical English names. The mapping script is [`map_jp_sources.py`](../../../../data/map_jp_sources.py). Altema's mapped pairs are in [`altema-reactions-mapped.csv`](altema-reactions-mapped.csv); its unresolved list is [`altema-reactions-unmapped.csv`](altema-reactions-unmapped.csv). The current Game8 and Redfreshet captures, with mapped files and unresolved lists, are in [`current-refresh`](current-refresh/README.md). All captured rows currently map successfully.

SQLite preserves the original Altema labels in `source_reactions_raw` and normalized labels in `source_reactions`. The source-only crosswalk maps `大好き` conservatively to Really Liked and keeps `好き` as a lower tier. Redfreshet's three Japanese positive labels are likewise retained exactly; only its strongest positive label counts toward high-tier consolidation.

**Refresh completed 2026-11-21:** Altema's current page still reports a 2026-11-01 update date and its same-day 1,944-row capture is retained. See the new Game8, Redfreshet, and Yuphas Temple snapshots and extraction counts in [`current-refresh/README.md`](current-refresh/README.md). Raider King's page was also rechecked; it still displays its 2026-09-30 publication date and WIP notice.

## Dork source snapshot and consolidation

[`dork.csv`](dork.csv) is the user-supplied Dork export, archived on 2026-11-21. It contains 126 gift sections and 8,064 labeled rows after parsing. [`dork-reactions.csv`](dork-reactions.csv) preserves each raw tier, Dork confidence group, score text, row number, and Peter Part 3 context. The latest US Game8 gift transcription is archived in [`game8-us-623690.md`](game8-us-623690.md) as a label-crosswalk reference only; it is not a separate source in SQLite.

Dork's Confirmed and Consistent Loved/Really Liked rows count as one Dork source in the consolidation. Inferred, Suspected, and Not known rows remain in the source tables but are not treated as corroboration. The Dork export does not identify its underlying sources row by row.

The source-only SQLite database is documented in [`data/README.md`](../../../../data/README.md). The supplied US Game8 transcription informed the Japanese label crosswalk but is not a separate source in SQLite.
