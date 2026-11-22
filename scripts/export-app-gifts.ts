import { Database } from "bun:sqlite";
import { writeFileSync } from "node:fs";

type ReactionRow = {
  character: string;
  gift: string;
  rarity: "Common" | "Common/Uncommon" | "Unknown";
  tier: "Loved" | "Really Liked";
  verification_status: "verified" | "unverified";
};

type GiftItem = { name: string; rarity: "Common" | "Common/Uncommon" | "Unknown"; unverified?: boolean };
type CharacterGiftRecord = { loved: GiftItem[]; reallyLiked: GiftItem[] };

const database = new Database("data/gifts.sqlite", { readonly: true });
const rows = database
  .query(
    `SELECT c.name AS character,g.name AS gift,g.rarity,r.tier,r.verification_status
       FROM reactions r
       JOIN characters c USING(character_id)
       JOIN gifts g USING(gift_id)
       WHERE r.tier IN ('Loved','Really Liked')
       ORDER BY c.name,g.name`,
  )
  .all() as ReactionRow[];
database.close();

const records: Record<string, CharacterGiftRecord> = {};
for (const row of rows) {
  const record = records[row.character] ??= { loved: [], reallyLiked: [] };
  const gift: GiftItem = {
    name: row.gift,
    rarity: row.rarity,
    ...(row.verification_status === "unverified" ? { unverified: true } : {}),
  };
  record[row.tier === "Loved" ? "loved" : "reallyLiked"].push(gift);
}

writeFileSync(
  "src/gift-data.generated.ts",
  `// Generated from data/gifts.sqlite by scripts/export-app-gifts.ts. Do not edit.\n` +
    `export const databaseGiftRecords: Record<string, { loved: { name: string; rarity: "Common" | "Common/Uncommon" | "Unknown"; unverified?: boolean }[]; reallyLiked: { name: string; rarity: "Common" | "Common/Uncommon" | "Unknown"; unverified?: boolean }[] }> = ${JSON.stringify(records, null, 2)};\n`,
);

console.log(`Exported ${rows.length} Loved/Really Liked reactions for ${Object.keys(records).length} characters.`);
