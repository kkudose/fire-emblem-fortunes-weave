# Altema gift preferences — 2026-11-21

Source: [Altema — Gift and preference list](https://altema.jp/febansisenkou/sukinamono). The page displayed a last-updated date of 2026-11-01 when captured.

The archived page snapshot is [`altema-page.txt`](altema-page.txt). [`altema-reactions.csv`](altema-reactions.csv) extracts the explicit `大好き` and `好き` character/item entries, preserving their original Japanese names and page line numbers. It contains 1,944 preference entries for 61 characters and 146 gift labels: 1,214 `大好き` and 730 `好き` rows. Profile interests and unrelated prose are excluded.

The shared [`jp-name-mapping.csv`](../../../../data/jp-name-mapping.csv) maps Japanese character and gift labels from Altema, Game8, and Redfreshet to the app's canonical English names. The mapping script is [`map_jp_sources.py`](../../../../data/map_jp_sources.py). Altema's mapped pairs are in [`altema-reactions-mapped.csv`](altema-reactions-mapped.csv); its unresolved list is [`altema-reactions-unmapped.csv`](altema-reactions-unmapped.csv). The current Game8 and Redfreshet captures, with mapped files and unresolved lists, are in [`current-refresh`](current-refresh/README.md). All captured rows currently map successfully.

SQLite preserves the original Altema rows in `source_reactions_raw` and source-specific normalized rows for both sources in `source_reactions`. Altema's `大好き` and `好き` labels do not identify the game's one-arrow/two-arrow reaction count, so they remain source-tier text and are not converted into app `Loved`/`Really Liked` reactions. Redfreshet's three Japanese positive labels are likewise retained exactly; its lower tiers are not promoted into the app reaction list by this mapping step.

**Refresh completed 2026-11-21:** Altema's current page still reports a 2026-11-01 update date and its same-day 1,944-row capture is retained. See the new Game8, Redfreshet, and Yuphas Temple snapshots and extraction counts in [`current-refresh/README.md`](current-refresh/README.md). Raider King's page was also rechecked; it still displays its 2026-09-30 publication date and WIP notice.
