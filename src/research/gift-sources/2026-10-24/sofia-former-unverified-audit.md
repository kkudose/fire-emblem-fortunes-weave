# Sofia’s former unverified gifts — source audit (2026-10-24)

## Scope and finding

This checks the 14 Sofia Really Liked gifts that had been marked unverified before the user directly confirmed them: Alecto Garum, Concentrated Garum, Fragrant Pastries, Garum, Honey Milk, Mature Dried Cervi, Meaty Delicacy, Mellow Pastries, Orgus Coffee, Select Coffee, Simple Pastries, Southern Coffee, Strong Cervi, and Weak Cervi. The user has since confirmed these 14 in-game, so their `unverified` flags were removed. This audit explains the prior flags; it does not supersede those direct confirmations.

The earlier explanation was incomplete because it checked the exact-tier pair ledger and only a few source extracts. This pass checked every saved Sofia-specific row and candidate recommendation in the 2026-10-23 archive. The previous confidence cutoff required direct confirmation or adequate exact-item, exact-tier corroboration. A recommendation that a character likes a category or gift does not prove the reaction tier.

## Exact and strongest-positive source evidence

| Formerly unverified gift | Saved item-level evidence | Why it was unverified before the user’s confirmation |
|---|---|---|
| Alecto Garum | Yuphas Temple explicitly says Really Liked. Raider King places “Any Garum” in Really Liked. | One exact item-tier row; the second source is a family umbrella that the pair ledger did not expand. |
| Concentrated Garum | Yuphas Temple explicitly says Really Liked. Raider King says “Any Garum” in Really Liked. | Same single exact-tier row plus an unexpanded umbrella. |
| Fragrant Pastries | Yuphas Temple explicitly says Really Liked. Raider King says “Any Pastries” in Really Liked. | One exact row; the other is a broad pastry category. |
| Mellow Pastries | Yuphas Temple explicitly says Really Liked. Raider King says “Any Pastries” in Really Liked. | One exact row; the other is a broad pastry category. |
| Simple Pastries | Yuphas Temple explicitly says Really Liked. Raider King says “Any Pastries” in Really Liked. | One exact row; the other is a broad pastry category. |
| Garum | Yuphas Temple says Loved. Raider King says “Any Garum” in Really Liked. Redfreshet’s strongest label is `大好き`; GameWith describes cooking gifts with Niiza Garum as an example. | The exact source and category source indicate different tiers, while Redfreshet/GameWith do not distinguish one-arrow Really Liked from two-arrow Loved for this pair. |
| Honey Milk | The user-provided Game8 transcription says Really Liked; Yuphas Temple says Loved. Redfreshet labels it `大好き`. | Exact-tier disagreement; the other source’s strongest label does not settle the arrow count. |
| Mature Dried Cervi | Raider King has “Any Cervi” in Really Liked. No saved exact Sofia row from Game8, Yuphas Temple, or Redfreshet. | Only a generic Cervi-category assignment; it was not expanded to this exact item. |
| Strong Cervi | Raider King has “Any Cervi” in Really Liked. No saved exact Sofia row from Game8, Yuphas Temple, or Redfreshet. | Only a generic Cervi-category assignment. |
| Weak Cervi | Raider King has “Any Cervi” in Really Liked. No saved exact Sofia row from Game8, Yuphas Temple, or Redfreshet. | Only a generic Cervi-category assignment. |
| Orgus Coffee | Raider King has “Any Coffee” in Really Liked. Other Sofia guides mention coffee only as a category or do not mention it. | Category-only reaction evidence; no exact Sofia/Orgus Coffee tier row. |
| Select Coffee | Raider King has “Any Coffee” in Really Liked. GameWith discusses coffee-family as a category and names Southern Coffee as an example. | Category-level evidence, not an exact reaction row for Select Coffee. |
| Southern Coffee | Raider King has “Any Coffee” in Really Liked. GameWith names Southern Coffee in Sofia’s strong-preference category. | Item/category hints exist, but no exact tier-specific Sofia/Southern Coffee row. |
| Meaty Delicacy | Raider King explicitly lists it as Really Liked. | One exact-tier source row; no second exact source or direct confirmation was recorded at the time. |

Game8’s Sofia row is from the user’s transcription, not a successful direct scrape. Among these 14 it explicitly lists Honey Milk as Really Liked and provides no row for the other 13. Yuphas Temple has exact rows for Alecto Garum, Concentrated Garum, Fragrant Pastries, Garum, Honey Milk, Mellow Pastries, and Simple Pastries; it does not list the other seven. Raider King’s complete saved Sofia row contains the explicit Meaty Delicacy entry plus the “Any Garum,” “Any Milk,” “Any Cervi,” “Any Pastries,” and “Any Coffee” entries. The pair ledger intentionally preserved named item rows and did not turn those umbrella entries into exact variants.

Redfreshet’s Sofia rows among the 14 are Garum and Honey Milk at `大好き`; this source label does not say whether the gift gives one or two arrows. GameWith’s Sofia entry recommends broad types—cooking/Garum, children’s gifts such as Jamel Milk, sweets such as Honey Milk, and coffee-family such as Southern Coffee—rather than a full per-item tier table.

## Other saved recommendation sources

- GameSpot, Hit Crit, and How To Video Game mention Honey Milk by name among Sofia’s recommendations and also suggest cooking, Garum, or sweets. Their tables do not identify the game’s exact one-arrow/two-arrow reaction. Hit Crit substantially overlaps GameSpot; GameSpot is in the Game8 source family.
- CarameloRaro names Garum, Coffee Pastries, Honey Pastries, Jamel Milk, and Volcano Ghosh as Sofia’s favorite gifts, and gives sweets, honey milk, and cooking utensils as accepted categories. It does not give on-screen reaction tiers.
- Polygon’s GameSky mirror, Ranzware, and KeenGamer give Sofia broad cooking/Garum/sweets recommendations, not exact reaction tiers. Ranzware is Polygon-derived.
- Fortune’s Weave Hub, Fortune’s Weave Wiki, and Sin Koutrocom have no Sofia row in the saved visible tables. AppMedia supplies no character reaction tiers. Fortune’s Weave Guide’s dynamic table did not expose rows. Anna’s Notebook archive covers Cai, Dietrich, Leda, and Theodora, not Sofia.
- Gamescafe, Nintendo Insider, 108GAME, Dork, hyperWiki, and iTechGuides do not provide an accessible, independent, exact-tier Sofia gift row in the saved captures; their documented limitations remain in the source archive README.

These sources showed that most of the former flags reflected the earlier audit’s strict exact-pair threshold and failure to expand or reconcile category recommendations, not evidence that Sofia dislikes those gifts. The user’s direct in-game confirmation now resolves all 14 former flags.
