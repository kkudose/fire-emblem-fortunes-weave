# Gift source snapshots — 2026-10-23

This dated archive records gift-reaction data and gift recommendations from the sources actually inspected. Each source has a separate file. Source terminology is preserved: `Loved`, `Really Liked`, `favorite`, `top gifts`, and broad category advice are not silently treated as equivalent.

These are curated extracts, not byte-for-byte page archives. Profile Likes and Interests are excluded from reaction tables. No source omission is treated as a negative reaction. Every entry notes how it was retrieved and what it can establish.

## Full-roster reaction datasets captured

- [Game8](game8-623690.md) — all character rows with explicit Loved and/or Really Liked sections in the full table transcription you supplied. Direct retrieval returned HTTP 402, so these rows are attributed to your transcription, not an independent scrape.
- [Raider King](raider-king.md) — complete visible five-column table; retains the author's WIP caveat and `?` markers.
- [GameWith](gamewith.md) — all 62 character entries in the Japanese `大好き` and `好き` gift sections; separate profile-interest fields are excluded.
- [Redfreshet](redfreshet.md) and [its CSV](redfreshet-all-characters.csv) — the site's own character filter was queried for all 63 recipient options. It returned 877 unique reaction rows for 55 characters; eight options returned no rows, recorded as unknown rather than negative.
- [Yuphas Temple gift finder](yuphasbosom.md) and [its JSON extract](yuphasbosom-gifts.json) — the page's linked data file contains Loved and Really Liked gift lists for 61 characters. The source credits community contributions but does not document row-by-row verification.

## Full visible recommendation tables captured

These are useful for discovering candidate gifts, but they do not supply a complete exact-reaction table.

- [Polygon via GameSky's RSS mirror](polygon-gamesky-mirror.md) — all 52 visible character rows from Josh Broadwell's table. The original Polygon URL returned HTTP 502; the mirror identifies Polygon and links to the original.
- [Ranzware](ranzware.md) — full visible table; appears Polygon-derived and is not independent corroboration.
- [GameSpot](gamespot.md) — every row exposed in its visible table, retrieved through a text proxy. A source catalog identifies the Yahoo republication as the same source family as Game8, so it is saved for traceability but not counted as independent evidence.
- [How To Video Game](how-to-video-game.md) — all visible `Character | Top gifts | Also likes` rows.
- [CarameloRaro](carameloraro.md) — all visible rows from its Spanish favorite/alternative gift table.
- [KeenGamer](keengamer.md) — every row in its visible character recommendation table.
- [Hit Crit](hit-crit.md) — all entries in its character-specific recommendation section; it cites and substantially overlaps GameSpot.
- [Sin Koutrocom](sin-koutrocom.md) — every visible character row in its one-affordable-gift quick-reference table.
- [Fortune's Weave Hub](fortunes-weave-hub.md) — all 31 rows in its visible character suggestion table; the site says it is not an exhaustive Loved Gifts database.
- [Fortune's Weave Wiki](fortunesweave-wiki.md) — all four rows in its visible “notable characters” recommendation table; the article is not a full roster table.

## Partial, inaccessible, or screened sources

- [Anna's Notebook](anna-s-notebook.md) — lists from four individual pages only. Its aggregate database prohibits AI bulk collection without an owner-issued key; no key is available, so no all-roster collection was attempted.
- [AppMedia](appmedia.md) — the full visible reverse gift-to-character table is saved, but the page says its data is still being collected and its character-specific table was only partially exposed. It gives no reaction tiers.
- [Fortune's Weave Guide](fortunes-weave-guide.md) — method and tier legend captured, but its interactive character/item pivot did not expose its rows.
- [Gamescafe](gamescafe.md) — screened; its material says exact reaction correspondences are not all verified.
- [Nintendo Insider](nintendo-insider.md) — screened; it provides profile Likes/Interests and broad matching advice, not item reaction rows.
- [108GAME](108game.md) — direct retrieval returned HTTP 403. It republishes Polygon material; the accessible GameSky mirror is separately archived above.
- [Dork](dork.md) — screened as a Polygon-derived category guide; it adds no independent exact reaction table.
- [hyperWiki](hyperwiki.md) — screened as an item-description/category catalog without character reaction pairs.
- [iTechGuides](itechguides.md) — screened; its article discusses gift-selection methods but supplies no character table.
- [Source-lineage notes](source-lineage.md) — provenance catalog used to identify known reprints and avoid treating them as independent datasets; it supplies no gift-reaction rows.

The archive is comprehensive for the visible tables and data files listed above, not for every gift guide on the internet. The limitations above are part of the record; they are not filled with guessed data.
