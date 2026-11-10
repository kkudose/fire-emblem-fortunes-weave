# Yuphas Temple gift finder — full character gift-reaction dataset

- Source page: [Gift list](https://yuphasbosom.party/gifts/), which currently redirects to [Yuphas Temple](https://yuphastemple.com/gifts/).
- Data endpoint fetched: `https://yuphastemple.com/data/gifts.json?h=d750ad2f76` on 2026-10-23. The page's asset manifest associates this hash with `gifts.json`; the browser view exposes the page controls but not the dynamically rendered rows.
- Saved extract: [`yuphasbosom-gifts.json`](yuphasbosom-gifts.json), retaining only `loved_gifts` and `really_liked_gifts` from the source's `characterGifts` object. Meal, play, temple, and unrelated item data are excluded.
- Coverage: 61 character records, 396 Loved pairs, and 1,382 Really Liked pairs. The raw data omits the `loved_gifts` key for Theodora and Aswan; those missing keys are preserved as missing and are not converted into a claim of no Loved gifts.
- The page thanks community contributors and invites corrections, but does not name the evidence or verification method for individual rows. Treat it as a community dataset, not independently verified in-game data. Its independence from other guides is not established.
