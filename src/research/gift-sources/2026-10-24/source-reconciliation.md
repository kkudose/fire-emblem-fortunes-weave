# Saved gift-source reconciliation — 2026-10-24

This pass reviewed the 24 source-specific records in [`2026-10-23`](../2026-10-23/README.md), including every saved reaction table, recommendation table, and limitation note. The source-separated captures remain unchanged. The original reconciliation totals below are historical and are superseded by the Yuphas exclusion update at the end of this document. The machine-readable pair ledgers make the evidence and later changes auditable:



## What each saved source can establish

### Exact reaction-tier tables



The four datasets yielded 1,886 normalized character/item keys: 1,100 had the same exact tier in at least two saved datasets, and 90 had conflicting exact tier labels. This was the original all-source reconciliation. The archive does not document every publisher’s research ancestry. Applying your rule, datasets with differing character coverage or reaction rows are treated as independent. The later Yuphas exclusion update removes Yuphas from that comparison.

### Strong-positive tables that do not distinguish arrows



The mapped strongest-positive rows from these two sources overlap on 8 exact character/item pairs. Where a strongest-positive row corroborated an exact Really Liked row, it supported Really Liked under the project's conservative tier rule. Where the exact-tier tables disagreed, the pair was left disputed.

### Recommendation, partial, and screened sources





## Confidence rule applied to every listed item

For this update, source datasets count as independent when they differ in the available character data or exact reaction rows, as you instructed. A tier is verified when directly confirmed in-game, or when at least two such independent sources agree on the exact item and exact tier with no unresolved conflict. An explicit tiered family umbrella is expanded over only the catalogued members and counts as that source's tier assignment for each variant. Within one source, a named item row takes precedence over its umbrella. For Really Liked, a strongest-positive row can corroborate one exact Really Liked row; two matching strongest-positive rows also support Really Liked when no exact-tier source conflicts. Strong-positive evidence alone cannot establish Loved. Unresolved Loved/Really Liked conflicts default to Really Liked and remain unverified unless directly confirmed in-game. A conflicting Neutral/Disliked family row from another source marks a positive candidate unverified; a same-source named item row overrides that umbrella assignment. Recommendation-only categories remain candidate evidence and do not establish an exact arrow tier. Source omissions are not negative evidence.

The data update added **77** exact-tier pairs, reclassified **39** existing pairs where exact-tier evidence agreed, and added **10** Really Liked pairs supported by positive-tier corroboration. The later conflict fallback also placed all **90** conflicting pairs in Really Liked, including **35** previously absent pairs. Confidence was recalculated for **all 1,465 listed entries**:

- **1,150 verified:** 292 Loved and 789 Really Liked with matching exact-tier sources; 19 Really Liked with the permitted strong-positive corroboration; and 50 additional pairs whose verified status relies on direct in-game confirmation.
- **315 unverified:** 86 entries with unresolved exact-tier conflicts, 11 Loved entries without two matching Loved sources, and 218 Really Liked entries without sufficient matching tier evidence.

The user corrected the earlier in-game confirmation for Dante — School Scandal: it is Loved, not Really Liked. The item is now in Dante's Loved list and remains verified; this corrected tier agrees with the exact-tier source rows. The user also directly confirmed Alexandra — Garum as Really Liked, resolving its source tier conflict. A later note claimed blanket Sofia confirmations, but that claim was removed on 2026-11-21 because its original confirmation could not be substantiated from the available conversation record. The Sofia confirmation and associated status claims in this historical reconciliation are not current. Its source counts and conflict totals describe the 2026-10-24 dataset only; use the current confidence report for present status.

## Correction to the 2026-10-23 comparison totals

The earlier note reported 836 Game8/Yuphas agreements and 54 tier conflicts. Re-parsing the saved files for this pass found that those totals were wrong: after removing sentence punctuation from the final item in each transcription row, the two datasets share 890 character/item keys, agree on 840 exact tiers (181 Loved and 659 Really Liked), and assign different tiers to 50 shared keys. The earlier totals should not be repeated. The updated pair-level CSV records the rows used in this reconciliation.

## Family expansion and roster-wide refresh (2026-10-24)



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



The audit preserved unresolved non-Yuphas tier conflicts as unverified and retained Yuphas-only disagreements as irrelevant. Other archived recommendation/category sources were checked as well; they can identify candidate gifts but do not distinguish one-arrow Really Liked from two-arrow Loved, so they cannot resolve an exact-tier confidence gap. Pairs supported by only one exact-tier source or only one strongest-positive source remain unverified for lack of corroboration, not because Yuphas disagrees.

After this correction, the guide contains **1,441 pairs across 62 characters**: **443 verified** (82 Loved, 361 Really Liked) and **998 unverified** (276 Loved, 722 Really Liked).
