# Saved gift-source reconciliation — 2026-10-24

This pass reviewed the 24 source-specific records in [`2026-10-23`](../2026-10-23/README.md), including every saved reaction table, recommendation table, and limitation note. The source-separated captures remain unchanged. The original reconciliation totals below are historical and are superseded by the Yuphas exclusion update at the end of this document. The machine-readable pair ledgers make the evidence and later changes auditable:

- [`reaction-pair-evidence.csv`](reaction-pair-evidence.csv) records exact tier assignments from Game8, Yuphas Temple, Raider King, and Anna's Notebook, source by source.
- [`strong-positive-evidence.csv`](strong-positive-evidence.csv) records mapped item rows where GameWith or Redfreshet reports its strongest positive reaction. Original Japanese labels are preserved in the source snapshots and represented here as `大好き`.
- [`family-category-evidence.csv`](family-category-evidence.csv) expands tiered Raider King umbrella rows to catalogued gifts and records the user-approved translated coffee-family translation as arrow-unspecified evidence.
- [`category-recommendation-evidence.csv`](category-recommendation-evidence.csv) preserves 242 source lines from other saved recommendation/category pages that mention the tracked families; these rows have no exact arrow tier.

## What each saved source can establish

### Exact reaction-tier tables

- **Game8:** 61 character rows and 894 tier assignments in the user-provided transcription. Direct retrieval of the linked page returned HTTP 402, so this is attributed to the transcription, not called an independent scrape.
- **Yuphas Temple:** 61 characters and 1,778 Loved/Really Liked assignments from its saved JSON. The site credits community contributions but does not document row-level verification or data ancestry.
- **Raider King:** its visible table supplies exact Loved and Really Liked columns, but the guide is marked WIP. The initial exact-name comparison used 564 explicitly named, non-`?` assignments after mapping source typos and abbreviations. The later family pass expanded explicit tiered umbrella rows to catalogued variants; see `family-category-evidence.csv`. The source's characterization of Loved as the double-arrow reaction was retained.
- **Anna's Notebook:** 87 exact Favorite/Likes assignments for Cai, Dietrich, Leda, and Theodora. Favorites map to Loved; Likes are the lower gift tier. Its aggregate database remains restricted, so this source provides no all-roster evidence.

The four datasets yielded 1,886 normalized character/item keys: 1,100 had the same exact tier in at least two saved datasets, and 90 had conflicting exact tier labels. This was the original all-source reconciliation. The archive does not document every publisher’s research ancestry. Applying your rule, datasets with differing character coverage or reaction rows are treated as independent. The later Yuphas exclusion update removes Yuphas from that comparison.

### Strong-positive tables that do not distinguish arrows

- **GameWith:** all 62 archived character sections were reviewed. Exact linked gift names in its top `大好き` tier were mapped where the Japanese item name had a clear English equivalent: 74 character/item rows across 35 mapped characters. Family/category examples were not expanded. GameWith says its top label corresponds to the game's strong “really liked” notification, which does not tell one arrow from two.
- **Redfreshet:** its saved CSV has 877 exact rows across 55 characters and preserves three labels (`大好き`, `好き`, `まあまあ気に入った`). The strongest label was mapped for 183 character/item rows where both character and item names had a clear English match. The eight empty character filters remain unknown; no omitted row is treated as a negative. This source does not expose the one-arrow/two-arrow distinction. Unmapped Japanese labels remain in the original CSV and were not guessed.

The mapped strongest-positive rows from these two sources overlap on 8 exact character/item pairs. Where a strongest-positive row corroborated an exact Really Liked row, it supported Really Liked under the project's conservative tier rule. Where the exact-tier tables disagreed, the pair was left disputed.

### Recommendation, partial, and screened sources

The ten complete visible recommendation tables—Polygon's GameSky mirror, Ranzware, GameSpot, How To Video Game, CarameloRaro, KeenGamer, Hit Crit, Sin Koutrocom, Fortune's Weave Hub, and Fortune's Weave Wiki—were reviewed as candidate-gift evidence. They do not give exact reaction tiers consistently enough to classify Loved versus Really Liked. Known repetitions were not counted as separate corroboration: GameSky and Ranzware are Polygon-derived, GameSpot is in the Game8 source family, and Hit Crit substantially overlaps GameSpot.

The remaining saved records also do not establish a roster-wide exact tier matrix: AppMedia lacks tiers and is partially exposed; Fortune's Weave Guide's dynamic table did not expose rows; Gamescafe says exact correspondences are not all verified; Nintendo Insider gives profile preferences/category advice; 108GAME was inaccessible and republishes Polygon; Dork is Polygon-derived; hyperWiki is an item/category catalog; iTechGuides describes selection methods. Anna's four individual pages are described above. The source-specific files in the archive document retrieval and coverage for each one.

## Confidence rule applied to every listed item

For this update, source datasets count as independent when they differ in the available character data or exact reaction rows, as you instructed. A tier is verified when directly confirmed in-game, or when at least two such independent sources agree on the exact item and exact tier with no unresolved conflict. An explicit tiered family umbrella is expanded over only the catalogued members and counts as that source's tier assignment for each variant. Within one source, a named item row takes precedence over its umbrella. For Really Liked, a strongest-positive row can corroborate one exact Really Liked row; two matching strongest-positive rows also support Really Liked when no exact-tier source conflicts. Strong-positive evidence alone cannot establish Loved. Unresolved Loved/Really Liked conflicts default to Really Liked and remain unverified unless directly confirmed in-game. A conflicting Neutral/Disliked family row from another source marks a positive candidate unverified; a same-source named item row overrides that umbrella assignment. Recommendation-only categories remain candidate evidence and do not establish an exact arrow tier. Source omissions are not negative evidence.

The data update added **77** exact-tier pairs, reclassified **39** existing pairs where exact-tier evidence agreed, and added **10** Really Liked pairs supported by positive-tier corroboration. The later conflict fallback also placed all **90** conflicting pairs in Really Liked, including **35** previously absent pairs. Confidence was recalculated for **all 1,465 listed entries**:

- **1,150 verified:** 292 Loved and 789 Really Liked with matching exact-tier sources; 19 Really Liked with the permitted strong-positive corroboration; and 50 additional pairs whose verified status relies on direct in-game confirmation.
- **315 unverified:** 86 entries with unresolved exact-tier conflicts, 11 Loved entries without two matching Loved sources, and 218 Really Liked entries without sufficient matching tier evidence.

The user corrected the earlier in-game confirmation for Dante — School Scandal: it is Loved, not Really Liked. The item is now in Dante's Loved list and remains verified; this corrected tier agrees with the exact-tier source rows. The user also directly confirmed Alexandra — Garum as Really Liked, resolving its source tier conflict, and confirmed 33 Really Liked gifts for Sofia, including 14 previously unverified pairs. All 90 source-conflict pairs are recorded as Really Liked; four now have direct in-game confirmation and the other 86 remain unverified. Sofia — Candy Crystals remains unverified due to an exact Loved/Really Liked source conflict; Sofia — Eastern Tea Leaves remains unverified because only one saved exact-tier source lists it. The source ledgers show each comparison; `unverified` marks entries that do not meet the confidence cutoff.

## Correction to the 2026-10-23 comparison totals

The earlier note reported 836 Game8/Yuphas agreements and 54 tier conflicts. Re-parsing the saved files for this pass found that those totals were wrong: after removing sentence punctuation from the final item in each transcription row, the two datasets share 890 character/item keys, agree on 840 exact tiers (181 Loved and 659 Really Liked), and assign different tiers to 50 shared keys. The earlier totals should not be repeated. The updated pair-level CSV records the rows used in this reconciliation.

## Family expansion and roster-wide refresh (2026-10-24)

Expanded Raider King's explicit tiered family rows across the catalogued variants and mapped GameWith/Redfreshet coffee strongest-positive rows to Common, Select, Southern, and Orgus Coffee at the user's direction. the mapped coffee-family evidence remains arrow-unspecified. Cervi membership includes only the five catalog gifts whose names contain “Cervi”; Jamel Milk and Yarc Milk are excluded. Ghosh and Shosh remain separate subfamilies and together form fermented drinks.

The family ledger records 332 tiered Raider King variant assignments plus 72 translated coffee-family mappings. It retains positive and lower-tier assignments. The separate category recommendation ledger preserves 242 relevant source lines from the other archived category/recommendation pages. Those recommendations were considered as family-level evidence, but they do not establish an exact arrow tier. The source snapshots remain separated by publisher and date.

The guide then included 1,974 entries across 62 characters. These are historical totals and are superseded by the later Yuphas exclusion update below.


## Yuphas exclusion update (2026-10-24)

Following the user's report that Yuphas Temple assigns many incorrect reactions, its data is preserved for audit but excluded from guide inclusion, tier reconciliation, and reliability decisions. The current guide uses non-Yuphas exact-tier sources, non-Yuphas strongest-positive evidence under the existing tier rules, and direct in-game confirmations.

- A pair whose only positive item-reaction source is Yuphas is omitted unless the user directly confirmed it in-game. This removed 533 pairs that had been in the guide; the complete list is in [`yuphas-only-excluded.csv`](yuphas-only-excluded.csv).
- When Yuphas alone disagrees with the other available evidence, its outlier claim is ignored. It does not create a tier conflict or an unreliable flag. If only one non-Yuphas exact-tier source remains, the pair may still be unverified for lack of corroboration.
- The ledger retains the Yuphas column as raw archived evidence and labels it excluded/ignored in the status field.

The current guide contains **1,441 pairs across 62 characters**: **443 verified** (82 Loved, 361 Really Liked) and **998 unverified** (276 Loved, 722 Really Liked). The evidence ledger has 1,886 normalized rows and retains Yuphas only as excluded audit evidence. Direct confirmations remain verified. These totals supersede all earlier guide totals in this file.


### Dante coffee corroboration correction

Dante — Common Coffee and Select Coffee are Really Liked by Game8 and independently receive Redfreshet strongest-positive coffee evidence, mapped to the English coffee variants per the user's clarification. The earlier Yuphas-exclusion pass left them marked unverified because it recalculated exact-tier evidence without applying the separate strongest-positive ledger. They are now verified under the existing rule allowing strongest-positive evidence to corroborate one exact Really Liked source. Dante — Southern Coffee and Orgus Coffee have Redfreshet strongest-positive evidence but no non-Yuphas exact-tier corroboration, so they do not meet that verification rule.


## Comprehensive strongest-positive cross-check (2026-10-24)

A full audit compared every current unverified guide pair against all saved non-Yuphas exact-tier rows, Raider King's tiered family assignments, and the GameWith/Redfreshet strongest-positive ledger. It found **87 Really Liked pairs** with corroboration that the previous refresh had failed to apply: 82 have a named exact Really Liked source plus an independent strongest-positive source; five use Raider King's explicit tiered family evidence plus independent strongest-positive evidence. All 87 are now verified. Their source combinations are listed in [`strong-positive-verification-audit.csv`](strong-positive-verification-audit.csv), and each pair-ledger row now records the corroboration.

The audit preserved unresolved non-Yuphas tier conflicts as unverified and retained Yuphas-only disagreements as irrelevant. Other archived recommendation/category sources were checked as well; they can identify candidate gifts but do not distinguish one-arrow Really Liked from two-arrow Loved, so they cannot resolve an exact-tier confidence gap. Pairs supported by only one exact-tier source or only one strongest-positive source remain unverified for lack of corroboration, not because Yuphas disagrees.

After this correction, the guide contains **1,441 pairs across 62 characters**: **443 verified** (82 Loved, 361 Really Liked) and **998 unverified** (276 Loved, 722 Really Liked).
