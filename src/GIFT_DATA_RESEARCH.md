# Gift reaction research audit

## Why confirmed pairs were missing

The original research basis was too narrow: a WIP community reaction table and a second community compilation with only partial roster coverage. Their omissions were treated as if the source pass had been broad enough. It had not. A wider comparison found useful Japanese guides and a per-character item database, but these also have distinct limits:

- [Raider King's reaction table](https://raiderking.com/fire-emblem-fortunes-weave-all-loved-gifts-guide/) separates the game's one-arrow and two-arrow reactions and marks some guesses, but calls itself a work in progress. It omits several pairs subsequently confirmed in-game by the user.
- [GameWith's table](https://gamewith.jp/fefw/577115) says it lists gifts it has confirmed and maps its top `大好き` tier to the in-game “really liked” notification. It includes exact item entries and broad item families, but that notification alone does not distinguish one support arrow from two.
- [Game8's table](https://game8.jp/fe-banshisenko/816847) separates the in-game `とても気に入った` and `気に入った` labels, but not the one-arrow/two-arrow distinction used by this app. Its published coverage has explicit “no data” entries.
- [Altema's table](https://altema.jp/febansisenkou/sukinamono) gives extensive item-level preferences, but does not document a method that separates the two arrow counts. Treat it as corroboration for a preference, not definitive proof of this app's Loved tier.
- [Redfreshet's per-character database](https://redfreshet.com/game-tools/fe-banshisenko/characters/) distinguishes profile hints from individual item reactions and says its specific reaction entries are game-checked. Its published reaction coverage is still partial; an absent pair is not evidence of a negative reaction.
- The [Fortune's Weave community gift table](https://fortunesweave.co.uk/wiki/gifts) and [Raider King comments](https://www.reddit.com/r/FE_Fortunes_Weave/comments/1wpxbom/all_loved_gifts_guide/) add reported observations, but share incomplete community coverage. Some third-party guides, including [Nintendo Insider](https://www.nintendo-insider.com/fire-emblem-fortunes-weave-characters-gifts-likes-and-interests/) and [Keengamer](https://www.keengamer.com/articles/guides/fire-emblem-fortunes-weave-best-gifts-guide/), map interests to gift categories rather than report exact reactions.

That explains the failure: checking two incomplete compilations and extrapolating from character/item categories gave false confidence about coverage. Several of the new pairs are absent from the WIP matrix; others appear only as a category-level preference in Japanese tables. In particular, GameWith's table includes Simon with Pickled Vegetables, while Raider King's table lists Pickled Bulbs but not Pickled Vegetables. Altema explicitly lists Honey Pastries for Halvin, while Raider King's Halvin row lists other pastry types. These are examples of why absence from one list cannot be used to reject an observed pair.

## Current confirmed additions

The following pairs were supplied as in-game confirmations by the user and are recorded in `gifts.ts` as Really Liked:

- Simon — Pickled Vegetables
- Nezha — Pickled Vegetables; Potted Vegetables
- Peter — Jamel Milk
- Nydine — Mane Ornament
- Halvin — Honey Pastries
- Jester — Village Recipes
- Tialla — Village Recipes

These direct confirmations resolve the pair and tier even where guide coverage is missing or less precise. They should take precedence over omissions and category-based inferences in external tables.

## Tier rule and remaining coverage limits

The available public sources do not provide a complete, authoritative matrix with both exact item and one-arrow/two-arrow reaction. Use the positive-tier evidence they do provide: Japanese `大好き` / `とても気に入った` entries establish the top positive reaction. When the source cannot establish whether that earns one or two arrows, record it as Really Liked; reserve Loved for two-arrow evidence. This preserves confirmed strong reactions without overstating the Loved tier.

Broad profile interests and item-description categories alone are not exact reactions. Keep category-only expansions marked low confidence until checked in-game or corroborated by an exact item reaction source. Absence remains unknown, not disliked. The remaining research task is to continue comparing the unrepresented roster and exact item entries against these sources, applying the lower-tier rule wherever the top positive reaction is known but the arrow count is not.
