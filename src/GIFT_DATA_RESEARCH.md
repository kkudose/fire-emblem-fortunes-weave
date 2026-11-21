# Gift reaction research audit

## Banned sources (user instruction, 2026-11-21)

Do not consult, cite, or use Anna's Notebook, GameWith, the Fortune's Weave community compilation, Nintendo Insider, or KeenGamer again. Their source data and project references were removed. Yuphas Temple is eligible again by user instruction dated 2026-11-21.



## Current source-only SQLite consolidation (2026-11-21)

The database was rebuilt from external source captures and 48 explicit user confirmations. The previous 1,441-pair result came from imported app data and is not the current database population. App arrays are no longer read by the SQLite import or consolidation scripts. Current counts, source handling, and tier mappings are in [`../data/README.md`](../data/README.md).

Game8 US was not added as a source. Its supplied gift transcription was used only to inform the Japanese label crosswalk; the original labels remain preserved in source rows. Dork's Confirmed, Consistent, and Inferred entries are eligible as one source; Suspected and Not known entries remain stored but do not corroborate reactions.

## Audit consistency postmortem and required workflow (2026-10-10)



Apply this workflow to every future audit:

1. **Preserve the current record while researching.** Prepare a proposed delta first; do not edit `gifts.ts` during initial source gathering.
2. **Check at least two independent sources for every public-source change.** Both must support the exact character, exact item, and relevant reaction tier. A broad preference category can guide candidate searches but does not count as exact-pair corroboration. User-confirmed in-game reactions are authoritative and do not require a second source.
3. **Check source independence.** Syndicated/reposted articles, derivative databases, and exports of the same source count as one source. Record provenance/source ancestry rather than counting URLs.
4. **Keep tiers separate.** A broad recommendation without a reaction tier is candidate evidence only. An explicit tiered umbrella such as Raider King's “Any Ghosh” is expanded only to catalogued family members and counts as one source assignment per exact variant. A same-source named item entry takes precedence over that source's umbrella. The user clarified that source-language coffee variant labels correspond to the English coffee gifts; mapped strongest-positive rows support the four English coffee gifts without distinguishing arrow count.
5. **Resolve tier conflicts conservatively.** If eligible sources agree a gift is strongly positive but disagree between Loved and Really Liked, record it as Really Liked and do not mark it unverified solely because of that tier disagreement. Direct in-game user confirmations override guide conflicts. Before interpreting a repeated or systematic tier mismatch as a real disagreement, check for translation or tier-label mapping issues in the affected source; document any mapping and apply it consistently.
6. **Treat omissions as unknown.** No source listing an item is not evidence that the character dislikes it. Do not remove a pair solely because it is absent from a partial list.
7. **Record the change and its basis together.** For each changed pair, note old state → new state, sources and their independence, tier mapping, and any remaining uncertainty. Keep user confirmations explicitly identified so later audits cannot downgrade them based on guide omissions.

These rules are intended to prevent audit-driven churn. An audit should not silently rewrite neighboring pairs: only researched, evidence-supported deltas should change. A Really Liked/Loved disagreement alone is not an uncertainty flag; uncertainty may remain for lack of reliable positive evidence, source independence, or whether the pair is positive at all.

## 2–8 verified-item list audit (2026-10-10)

The first report of this audit was materially incomplete: it described a limited conflict screen as a comprehensive audit and said no other pairs changed. That was incorrect. On recheck of exact per-character reaction tables, several pairs already present only as unverified candidates had two-source, exact-item positive corroboration. Those pairs have now been promoted conservatively to Really Liked, and the erroneous Kiroc downgrade has been corrected. The original cohort contained 27 characters with 2–8 verified Loved/Really Liked entries; unverified candidates did not count toward that cohort.

**Newly corroborated Really Liked pairs:** Leda — Eastern Black Silk, Eastern Earrings, Portrait of Yu Phas, Volcano Ghosh; Peter — Saraminian Sweets; Mu — Garum, coffee-family evidence, Kitten Figurine, Morfis Tea, Portrait of Yu Phas; Guzran — Crimson Ghosh, Volcano Ghosh; Sha Lan — Energizing Ghosh, Garum, coffee-family evidence, Kitten Figurine, Blue-Rose Bouquet, Rare Spices; Kiroc — coffee-family evidence, Mature Ghosh, Flexible Fishing Rod, Rare Spices, Arrowhead Gem, Crimson Ghosh, Volcano Ghosh. This is 25 exact item-character pairs newly promoted from unverified candidates. Mu now has 12 verified Really Liked entries and falls outside the original 2–8 range; the others remain within it. Peter's existing user-confirmed Strong Cervi and Jamel Milk entries remain unchanged.



**Second pass — newly found missing pairs:** The recheck then compared the same original 27-character cohort against exact, character-specific high-reaction tables. It found 21 strong-positive item-character pairs that were absent from both verified lists and unverified candidates, and added them as Really Liked: Leda — Morfis Almanac; Lilian — Morfis Almanac; Olympia — Eastern Black Silk, coffee-family evidence, Morfis Almanac; Buccar — Garum, Crimson Ghosh, Dual Fish Knives; Guzran — coffee-family evidence, Strategy Manuscript, Morfis Almanac; Goliath — Simple Pastries, Strategy Manuscript; Nydine — Morfis Almanac, Strategy Manuscript; Seteth — Morfis Almanac, Poems of the Greats, Strategy Manuscript; Peppe — Simple Pastries, coffee-family evidence, Arrowhead Gem. Olympia's Eastern Earrings was a separate unverified-to-verified promotion, not a missing item. No items were promoted to Loved because the cross-checks established strong-positive reactions but did not establish the app's two-arrow threshold.

Exact per-character cross-checks: [Game8's tables](https://game8.jp/fe-banshisenko/816417) and [Redfreshet's item reactions](https://redfreshet.com/game-tools/fe-banshisenko/characters/char_007/) for Leda; [Game8](https://game8.jp/fe-banshisenko/816426) and [Redfreshet](https://redfreshet.com/game-tools/fe-banshisenko/characters/char_016/) for Lilian; [Game8](https://game8.jp/fe-banshisenko/816430) and [Redfreshet](https://redfreshet.com/game-tools/fe-banshisenko/characters/char_020/) for Olympia; [Game8](https://game8.jp/fe-banshisenko/816428) and [Redfreshet](https://redfreshet.com/game-tools/fe-banshisenko/characters/char_018/) for Buccar; [Game8](https://game8.jp/fe-banshisenko/816440) and [Redfreshet](https://redfreshet.com/game-tools/fe-banshisenko/characters/char_030/) for Guzran; [Game8](https://game8.jp/fe-banshisenko/816453) and [Redfreshet](https://redfreshet.com/game-tools/fe-banshisenko/characters/char_043/) for Goliath; [Game8](https://game8.jp/fe-banshisenko/816443) and [Redfreshet](https://redfreshet.com/game-tools/fe-banshisenko/characters/char_033/) for Nydine; [Game8](https://game8.jp/fe-banshisenko/816450) and Raider King's [tiered table](https://raiderking.com/fire-emblem-fortunes-weave-all-loved-gifts-guide/) for Seteth; [Game8](https://game8.jp/fe-banshisenko/816449) and [Redfreshet](https://redfreshet.com/game-tools/fe-banshisenko/characters/char_039/) for Peppe. These are separate publications; their agreement is recorded without assuming undisclosed source independence or shared-data provenance. Items shown only as broad interests, omitted from a table, or supported by only one exact-reaction source were not added. For example, Diego's Arrowhead Gem is explicitly in a weaker positive tier in Raider King's table, so it was excluded; possible Io and Orchel additions did not meet the two exact-source rule in this pass.

**Kiroc correction:** the prior report was wrong to make Light Shosh unverified merely because the checked table omitted it. It is restored as a verified existing entry; omission is unknown. `Mature Shosh` and `Young Shosh` were removed from Really Liked because Game8 and Redfreshet explicitly put them in the lower positive `気に入った` / `好き` group. They are not marked disliked. The original seven-item upper-tier Kiroc set is now recorded alongside Light Shosh; see the two exact tables linked above. Do not reintroduce the two lower-tier Shosh entries to Really Liked unless direct user confirmation overrides the guides.

The remaining original-cohort records were reviewed against the available exact-item tables, but a missing table entry was not treated as evidence against a stored pair, and broad profile/category recommendations were not promoted to exact reactions. This pass supports specific additions and the Kiroc tier correction; it does not establish that every retained pair in every list is independently verified in-game. Existing direct user confirmations, including Peter's Cervi/Milk reactions and Sha Lan's Special “Medicine”, remain authoritative.

## Why confirmed pairs were missing

The original research basis was too narrow: a WIP community reaction table and a second community compilation with only partial roster coverage. Their omissions were treated as if the source pass had been broad enough. It had not. A wider comparison found useful Japanese guides and a per-character item database, but these also have distinct limits:





## Current confirmed additions

The following pairs were supplied as in-game confirmations by the user and are recorded in `gifts.ts` as Really Liked:

- Simon — Pickled Vegetables
- Nezha — Pickled Vegetables; Potted Vegetables
- Peter — Jamel Milk
- Nydine — Mane Ornament
- Halvin — Honey Pastries
- Jester — Village Recipes
- Tialla — Village Recipes
- Tialla — Trader’s Handbook
- Nezha — Training Weights

These direct confirmations resolve the pair and tier even where guide coverage is missing or less precise. They should take precedence over omissions and category-based inferences in external tables.

## Tier rule and remaining coverage limits

The available public sources do not provide a complete, authoritative matrix with both exact item and one-arrow/two-arrow reaction. Use the positive-tier evidence they do provide: Japanese `大好き` / `とても気に入った` entries establish the top positive reaction. When the source cannot establish whether that earns one or two arrows, record it as Really Liked; reserve Loved for two-arrow evidence. This preserves confirmed strong reactions without overstating the Loved tier.

Broad profile interests and item-description categories alone are not exact reactions. Keep category-only expansions marked low confidence until checked in-game or corroborated by an exact item reaction source. Absence remains unknown, not disliked. The remaining research task is to continue comparing the unrepresented roster and exact item entries against these sources, applying the lower-tier rule wherever the top positive reaction is known but the arrow count is not.

## Ultand preference audit (2026-10-03)

Game8's [Ultand-specific gift table](https://game8.jp/fe-banshisenko/816420), updated October 3, separates its strongest positive category from weaker “liked” and “somewhat liked” categories. It lists Garum, Village Recipes, Dual Fish Knives, and Secret Ghosh in the strongest category; Spirit Board Game, Blue-Rose Bouquet, Crimson Ghosh, The Knight's Suitors, Outdoor Cooking Set, and Pastry Cookbook in the weaker liked category; and Saraminian Sweets and a coffee-family variant as somewhat liked. Under this project's tier rule, the strongest category is recorded as Really Liked because the source does not establish the one-arrow versus two-arrow distinction.

The audit found that Ultand's old record had combined Raider King's Really Liked and Liked columns. Removed that source's lower Liked group from the Really Liked array; this includes Imitation Medal, independently confirmed by the user as only liked. Game8 independently places Crimson Ghosh, Outdoor Cooking Set, The Knight's Suitors, and Spirit Board Game in its weaker Liked category. Added Village Recipes, Dual Fish Knives, and Secret Ghosh from Game8's strongest positive category to the existing Garum entry. Under this project's arrow-count rule, that top category stays in Really Liked rather than being promoted to Loved.

The retained exact pairs are from Raider King's [WIP item-by-item table](https://raiderking.com/fire-emblem-fortunes-weave-all-loved-gifts-guide/) or Game8's top category. Alecto Garum is retained only as an unverified family-based lead: no exact Ultand reaction for that variant was found. Game8's omission of other retained items is not treated as a negative reaction; those entries remain pending direct checks.

A separate secondary [Game8-data export](https://fire-emblem-fortunes-weave.turam.dev/en/entry/goliath/?route=leda) reports Strategy Manuscript and Volcano Ghosh as Loved and a different Ghosh/Shosh family as Really liked. Because that export labels its gift data unverified and conflicts with other item-level reports, those entries were not promoted to Loved without direct two-arrow evidence; reconcile them with an in-game check.

## Nuzzuo preference audit (2026-10-03)

Game8's [Nuzzuo-specific gift table](https://game8.jp/fe-banshisenko/816462) explicitly separates `とても気に入った` (strong positive), `気に入った` (liked), and `まあまあ気に入った` (somewhat liked). Its strong-positive entries include a coffee-family variant, Arrowhead Gem, and Dual Fish Knives. It puts Crimson Ghosh, Kitten Figurine, Niiza Garum, Outdoor Cooking Set, Pickled Vegetables, and Protection Figurine in the weaker liked category; Mature Ghosh, Pickled Bulbs, and Thin Cervi are somewhat liked. Only the three strong-positive items were added from this page.

The prior Nuzzuo array included the weaker Game8 items as Really Liked, plus Home-Recipe Book, Village Recipes, and Morfis Tea. These were removed. The [Raider King WIP table](https://raiderking.com/fire-emblem-fortunes-weave-all-loved-gifts-guide/) independently puts those latter three in its lower Liked column, while its Really Liked column contains the retained pastries, broad Garum and Coffee families, Potted Vegetables, seasonings, recipe guide, tea leaves, and other retained items. For source conflicts, the explicit character table's lower-tier classification takes precedence: e.g. Pickled Vegetables and Niiza Garum were removed despite Raider King's higher-tier listing.

Alecto Garum remains marked unverified as a family-based expansion of the broadly listed Garum preference; it is not a verified exact-item reaction. The retained Really Liked entries are supported by Raider King's separately labeled Really Liked column or Game8's top positive category. As elsewhere, that top positive category is recorded as Really Liked because the source does not establish the one-arrow versus two-arrow distinction. Weaker `liked` and `somewhat liked` reactions are excluded from this app's lists.

## High-count Really Liked audit (2026-10-03)

Audited the 31 characters whose Really Liked lists had at least 10 entries before this pass. Compared exact entries against Game8's [character-by-character gift table](https://game8.jp/fe-banshisenko/816847) and character pages, and Raider King's [tiered WIP table](https://raiderking.com/fire-emblem-fortunes-weave-all-loved-gifts-guide/). Game8 distinguishes `とても気に入った` (strongest positive) from `気に入った` and `まあまあ気に入った`; Raider King separates Loved, Really Liked, Liked, Neutral, and Disliked columns. Where a source explicitly placed an exact pair in a weaker positive tier, removed it from Really Liked, including when another compilation put it higher. Omitted pairs were left alone because missing entries are not negative evidence. Direct in-game confirmations from the user take precedence over guide conflicts.

Removed lower-tier entries from: Alexandra (Alecto Garum, Smooth Garum, Aromatic Shosh, Strong Seasonings, Home-Recipe Book, Herbal Recipe Guide, Sturdy Rucksack, Mane Ornament, Dagda Beard Grass, Horse-Grooming Kit); Bonaventure (Jade Ghosh, Pastry Cookbook, Rare Spices, Secret Ghosh, Strong Seasonings, Sun Ghosh, Tales of the Arena, Thick Foreign Tome, Village Recipes); Buccar (Arrowhead Gem, Rustic Ghosh, Young Ghosh, Light/Mature/Young Shosh); Catania (Dagda Beard Grass, Horse-Grooming Kit, Pack of Pastels); Dadao (Ginji Cervi, Saraminian Sweets); Dante (Arrowhead Gem, Crimson Ghosh, The Works of Dante, Pack of Pastels); Dietrich (Arrowhead Gem, Board-Game Tactics, Ginji Cervi, Honey Milk, Pastry Cookbook, Training Pillar, Training Weights); Esmeralda (Simple Pastries, Mellow Pastries, Huge Fish Eyeball); Fabio (Jade, Mature, Rustic, Secret, Southern, Sun, and Young Ghosh; Aromatic, Light, and Mature Shosh; Eastern Black Silk); Gaitz (Aromatic Shosh); Goliath (Jade, Rustic, Secret, Southern, Sun, and Young Ghosh; Aromatic and Light Shosh; Young Shosh); Guzran (Jade, Rustic, Secret, Southern, Sun, and Young Ghosh; Aromatic, Light, Mature, and Young Shosh); Halvin (Simple Pastries); Jasmine (Jamel Milk, Pure-White Cervi, Honey Pastries, Training Pillar, Training Weights, Arrowhead Gem, Pastry Cookbook, Protection Figurine); Jester (Crimson Ghosh, Aromatic Shosh); Loretta (Arrowhead Gem, Crimson Ghosh, Honey Milk, Mellow Pastries); Majide (Rustic, Volcano, and Young Ghosh; Blue, Light, Mature, and Young Shosh); Mikaela (Jade, Mature, Rustic, Secret, Southern, Sun, and Young Ghosh; Aromatic, Light, and Mature Shosh; Home-Recipe Book); Nezha (Sturdy Rucksack, Training Bracelet, Wing Fletching); Olympia (Exquisite Ring, Gaudy Bangle); Sirocco (Jade, Mature, Rustic, Secret, Southern, Sun, and Young Ghosh; Light, Mature, and Young Shosh; Pack of Pastels); Sofia (Jamel Milk, Yarc Milk, Ginji and Pure-White Cervi, Honey Pastries, Niiza Garum, Crimson Ghosh, Pickled Vegetables, Outdoor Cooking Set); and Talimun (Ceremonial Spear).

The earlier Nuzzuo and Ultand corrections are included in this audit: Nuzzuo's weaker-tier entries were removed and its three Game8 strongest-positive entries were added; Ultand's lower Liked group was removed and its Game8 top-tier entries were added. Six other in-scope lists had no exact lower-tier overlap found in these sources. This pass does not establish that every retained pair has been individually tested in-game, and source coverage remains incomplete. The user's confirmed Jester — Village Recipes pair was retained despite a guide-tier conflict.

## Remaining character audit (2026-10-03)



Removed these exact pairs because a source explicitly put them in a weaker category: Cai (Arrowhead Gem, Crimson Ghosh, Sharp Fishhook); Diego (Crimson Ghosh, Protection Figurine); Fianna (Crimson Ghosh); Io (Arrowhead Gem, Training Weights, Mane Ornament, Horse-Grooming Kit); Leda (Mature, Rustic, Secret, Southern, Sun, and Young Ghosh); Mu (Arrowhead Gem, Pure-White Cervi); Nydine (Training Weights, Kitten Figurine); Ninae (Arrowhead Gem); Noctula (Protection Figurine); Peppe (Crimson Ghosh); Peter (Ginji Cervi, Mature Dried Cervi); Seteth (Flexible Fishing Rod); Simon (Crimson Ghosh); Theodora (Eastern Black Silk); Zarcone (Potted Vegetables); and Bertrand (Garum, listed in Raider King's Liked rather than Really Liked column).

Kept direct user confirmations even where a source differed: Peter — Jamel Milk; Nydine — Mane Ornament; Simon — Pickled Vegetables. Those pairs are therefore not counted among removals. Several remaining entries still lack exact item-level coverage and retain their `unverified` marker. Characters with empty Really Liked lists have no existing positives to downgrade; source omissions were not used to invent preferences or assert that no strong preferences exist.

## Orgus Coffee tier recheck (2026-10-03)

Rechecked every `Orgus Coffee` entry in `gifts.ts` against Raider King's column labels, including entries covered by a broad “Any Coffee” group. Raider King places Ultand's Orgus Coffee in the weaker Liked column, not Really Liked. It was removed from Ultand's Really Liked list and remains absent there. Game8's Ultand page does not list Orgus Coffee in its stronger, liked, or somewhat-liked groups, so it does not override Raider King's explicit lower-tier placement.

The current Really Liked entries for Bonaventure, Fabio, Fianna, Gaitz, Mikaela, Mu, Nuzzuo, Olympia, Seteth, Sofia, and Ursula align with Raider King's Really Liked column or a broad coffee group in that column. Peppe's Orgus Coffee entry remains marked `unverified`; Raider King's table does not establish that pair. Raider King also places Orgus Coffee in a weaker tier for Anatolia, Diego, Goliath, Jasmine, and Sirocco; those pairs are absent from this app's Really Liked arrays. This recheck validates tier assignment only where a source has an explicit entry; omission remains unknown.

## User-confirmed equipment reactions (2026-10-04)

The user verified these exact Really Liked pairs in-game: Ludia — Sturdy Rucksack; Nezha — Training Bracelet and Training Pillar; Noctula — Training Bracelet. Removed the `unverified` marker from Ludia's Sturdy Rucksack and recorded the remaining confirmations as verified entries in `gifts.ts`.

## User-confirmed Peppe coffee reactions (2026-10-21)

The user confirmed Peppe — Common Coffee and Peppe — Select Coffee as Really Liked. Removed their `unverified` markers in `gifts.ts`. Public guides do not agree on or independently establish both exact tiers; this change follows the user's confirmation.

## Gift-family inference and directionality (2026-10-04)

### Working rule

Record exact character/item reactions as the source of truth. A confirmed preference for a broad family is a strong directional clue that sibling variants will also be positive, but it is not proof that every variant has the same reaction tier. A confirmed preference for one named variant does not justify expanding that reaction to its whole family. In particular, never infer “likes all Ghosh” from liking Southern Ghosh alone. Keep inferred exact pairs marked `unverified` until checked in-game or established by an exact item reaction source.

This matches the user's in-game observations so far: they have not found a counterexample to general/common family affinity extending positively to distinctive variants, and have observed the reverse not to hold. The public sources reviewed here show the same directional pattern and no explicit contrary example, but their coverage is incomplete; treat “likely, perhaps nearly universal” as a strong working heuristic, not a proven game mechanic.

### Family vocabulary

- **Fermented drinks** is the broad description family. It includes **Ghosh** and **Shosh**, which remain separate subfamilies for tracking. The Ghosh variants in this catalogue are Young, Mature, Sun, Energizing, Rustic, Jade, Secret, Southern, Volcano, and Crimson Ghosh. Shosh variants are Young, Mature, Light, Blue, and Aromatic Shosh.
- **Training gifts** is a practical family for Training Weights, Training Pillar, and Training Bracelet. Keep this separate from the character-profile interest “training” or “鍛錬” until an item description or exact reaction establishes the scope: a profile interest is a family-level clue, not an exact item reaction.
- Other source-described gift families (books, pastries, coffee, etc.) may be tracked by the same rule, but only where the item's in-game description or an explicit source category defines membership. Similar names or themes alone are insufficient grounds to add an item to a family.

### Evidence checked



### Data handling

Keep family membership and exact reactions conceptually distinct. When a source confirms a general family preference, use it to prioritize sibling checks and, if useful, record sibling pairs as low-confidence leads. Do not silently turn a broad category into verified exact pairs or promote every sibling to the same tier. When only one unusual variant is confirmed, retain only that pair. Update this section if an in-game check finds a character with a confirmed positive general/common variant and a confirmed neutral or negative distinctive sibling; that would be a real counterexample to the proposed direction.

## Sha Lan fishing-item correction (2026-10-10)

The user confirmed that Sha Lan only Liked Sharp Fishhook, so it was removed from her Really Liked list. Checked whether Flexible Fishing Rod had strong exact-pair evidence before retaining it. No such evidence was found: Raider King's [tiered table](https://raiderking.com/fire-emblem-fortunes-weave-all-loved-gifts-guide/) does not list the rod for Sha Lan; broad fishing-item recommendations from [Polygon/108GAME](https://108game.com/best-gifts-for-each-character-in-fire-emblem-fortune-s-weave-95743.html) and other guide summaries associate fishing gifts with Seteth or Esmeralda, while describing Sha Lan's preferences as cooking gifts and tea. These omissions do not establish a negative reaction, but they do not support a Really Liked classification. Removed Flexible Fishing Rod from Sha Lan's Really Liked list pending direct confirmation.



## Sha Lan cooking-item follow-up (2026-10-10)

The user directly confirmed that Smooth Garum is Really Liked by Sha Lan. Added it to her Really Liked list; this direct in-game confirmation establishes the exact item and tier and overrides the lack of an exact public-source entry.



## Additional direct gift confirmations (2026-10-11)

The user confirmed these exact Really Liked reactions in-game: Alexandra — Dual Fish Knives and Niiza Garum; Sha Lan — Alecto Garum and Pastry Cookbook; Fabio — Jade Ghosh; Goliath — Jade Ghosh; Noctula — Strategy Manuscript; Seteth — The Works of Dante. Alexandra's Niiza Garum was already listed as verified; the other five were added, and Sha Lan's Pastry Cookbook was promoted from unverified. User shorthand “Alexa” was resolved to Alexandra and “Noctu” to Noctula from the matching roster names and item context.

The user initially confirmed Dante — School Scandal as Really Liked in-game. On 2026-10-24, the user corrected that confirmation: Dante Loved School Scandal. The item is recorded in `loved` and remains verified; the corrected tier agrees with the exact-tier source rows.

The user confirmed Seteth — Tales of the Arena as Really Liked in-game; added it as verified.

The user corrected Ninae — Blue-Rose Bouquet: she Likes it, but does not Really Like it. Removed it from Ninae's Really Liked candidates. This is a tier correction only; it is not a disliked reaction.

The user previously confirmed Alexandra — Pegasus Panorama as Really Liked in-game, then retracted that confirmation on 2026-11-21. Do not treat it as a direct confirmation. The remaining archived eligible guide evidence lists it as Loved; the app retains it as an unverified Really Liked entry pending eligible corroboration or a new in-game confirmation.

The user also confirmed that Simon does not Love or Really Like Outdoor Cooking Set. Removed that unverified candidate from his lists. This does not establish a negative reaction; it only rules out the two tiers tracked in this catalogue.

## Additional direct gift confirmations (2026-10-12)

The user confirmed in-game that Diego Really Likes Joint-Relief Gloves and Noctula Really Likes Training Pillar. Added both exact item-character pairs to their verified Really Liked lists.

## Additional direct gift confirmation (2026-10-16)

The user confirmed in-game that Esmeralda Really Likes Gaudy Bangle; added it as verified.

The user confirmed in-game that Nydine Really Likes Sturdy Rucksack; added it as verified.

The user confirmed in-game that Sha Lan Really Likes Concentrated Garum; added it as verified.

The user confirmed in-game that Alexandra Really Likes Garum. Its tier is now verified despite the Game8/Yuphas source conflict.

The previous blanket statement that Sofia's current Really Liked list had been confirmed in-game was removed on 2026-11-21 because the original confirmation could not be substantiated from the available conversation record. Do not treat Sofia's list as a set of direct confirmations. Recalculate each pair using the same source threshold and evidence rules as the rest of the roster. The historical source comparison is retained in [`sofia-former-unverified-audit.md`](research/gift-sources/2026-10-24/sofia-former-unverified-audit.md).

The user directly confirmed Really Liked in-game: Goliath — Mature Ghosh, Mature Shosh; Majide — Mature Ghosh, Sun Ghosh, Energizing Ghosh, Jade Ghosh, Secret Ghosh, Southern Ghosh, Aromatic Shosh; Guzran — Mature Ghosh, Energizing Ghosh. These 11 pairs are verified; the three Mature Ghosh/Shosh tier conflicts are resolved by the direct checks.

## Four-protagonist gift audit (updated 2026-10-23)











Current exact tables are more informative than inferred category-wide preferences. The game can display the same “really liked” wording for both the one-arrow liked tier and the two-arrow favorite tier, so the dataset keeps these tiers distinct. Unverified flags indicate unresolved cross-source disagreement or a single-source candidate; absence from a guide is not itself treated as a negative reaction.

## Dated source extracts (2026-10-23)

The source-separated archive in [`research/gift-sources/2026-10-23/`](research/gift-sources/2026-10-23/README.md) now covers the full character rows for every source whose full visible roster table could be captured. The README distinguishes complete visible tables from partial pages, inaccessible dynamic data, and recommendation/category guides that do not establish exact reaction tiers. Profile Likes/Interests are excluded. The archive pass did not change `gifts.ts`.

### Game8 all-character transcription supplied by the user (2026-10-23)

The user supplied the Game8 `Loved Gifts` and `Really Liked Gifts` table for the roster. [`game8-623690.md`](research/gift-sources/2026-10-23/game8-623690.md) records every character row with one or both explicit reaction sections, omitting profile Likes and Interests. Direct retrieval of the linked page returned HTTP 402; therefore the data is attributed to the user's transcription and is not described as independently scraped. The archive README also records which other sources were captured roster-wide and which were partial or restricted.

### Roster-wide source capture expansion (2026-10-23)







## Roster-wide saved-source reconciliation (2026-10-24)

The original all-source reconciliation is documented in [`source-reconciliation.md`](research/gift-sources/2026-10-24/source-reconciliation.md); its historical totals have since been superseded by the confidence recalculation above.

### Family-category reconciliation (2026-10-24)



For each source, a named item reaction supersedes that source's umbrella assignment for the same pair. Exact Loved/Really Liked conflicts use Really Liked and are not unverified solely because of that tier difference. A conflicting Neutral/Disliked family row from another source may leave a positive candidate unverified; a same-source named item row overrides that umbrella assignment. Recommendation-only family mentions do not establish an exact arrow tier.

These were the pre-exclusion totals and are superseded by the latest policy below.


### Yuphas Temple data restored

Yuphas Temple is eligible again by user instruction dated 2026-11-21. Its archived 1,778 reaction assignments are included as source-specific records in `data/gifts.sqlite`; this change does not by itself alter the current guide tiers or confidence flags.
