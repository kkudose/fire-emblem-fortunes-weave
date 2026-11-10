# Gift-source reconciliation — 2026-10-24

This directory records the comprehensive comparison of the source data archived in [`../2026-10-23/README.md`](../2026-10-23/README.md).

- [`source-reconciliation.md`](source-reconciliation.md) documents source coverage, limitations, tier rules, applied changes, and correction of the earlier comparison totals.
- [`reaction-pair-evidence.csv`](reaction-pair-evidence.csv) gives exact tier evidence source by source.
- [`strong-positive-evidence.csv`](strong-positive-evidence.csv) records mapped strongest-positive pairs from GameWith and Redfreshet while preserving their lack of an arrow-specific tier.
- [`family-category-evidence.csv`](family-category-evidence.csv) expands tiered Raider King family rows and records coffee family-to-English-coffee mappings without inventing arrow-specific reactions.
- [`category-recommendation-evidence.csv`](category-recommendation-evidence.csv) preserves 242 relevant family/category lines from other saved recommendation sources; these are candidate evidence only.
- [`sofia-former-unverified-audit.md`](sofia-former-unverified-audit.md) checks the full saved source archive against Sofia's 14 gifts that were unverified before her direct confirmation.
- [`yuphas-only-excluded.csv`](yuphas-only-excluded.csv) audits 533 prior guide entries removed because Yuphas Temple was their only positive item-reaction source.
- [`strong-positive-verification-audit.csv`](strong-positive-verification-audit.csv) records 87 Really Liked entries verified by combining exact-tier and independent GameWith/Redfreshet strongest-positive evidence, including tiered family evidence where applicable.

The 2026-10-24 family pass restricts Cervi to catalog gifts whose names contain “Cervi”; Jamel Milk and Yarc Milk are excluded. Ghosh and Shosh form the fermented-drink family. coffee strongest-positive records are mapped to all four English coffee gifts per the user's translation clarification.

## Yuphas exclusion update (2026-10-24)

Yuphas Temple is retained in the raw source archive and pair ledger for traceability, but its assignments are excluded from guide inclusion, tier reconciliation, and reliability flags. If Yuphas is the only source for a positive item reaction, the pair is omitted unless directly confirmed in-game. If Yuphas alone disagrees with the remaining evidence, its disagreement is ignored and does not make the pair unreliable. The current guide contains 1,441 pairs (443 verified, 998 unverified); these totals supersede earlier counts in the reconciliation history.

The comprehensive cross-check also reviewed all saved recommendation/category evidence. Those sources are preserved as candidate leads; they do not distinguish Loved from Really Liked. Current guide totals include the 87 confidence upgrades recorded in the audit CSV.
