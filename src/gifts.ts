import { databaseGiftRecords } from "./gift-data.generated";

export type GiftItem = {
  name: string;
  unverified?: boolean;
};

export type CharacterGifts = {
  name: string;
  loved: GiftItem[];
  reallyLiked: GiftItem[];
  automaticRecruitment?: string;
};

const names =
  `Eshmel|Cai|Dietrich|Theodora|Leda|Hong Hua|Troy|Tialla|Peter|Ultand|Fabio|Esmeralda|Mikaela|Bonaventure|Tobias|Lysander|Lilian|Buccar|Sirocco|Mu|Olympia|Bertrand|Gaitz|Dante|Goliath|Jester|Talimun|Ursula|Simon|Ludia|Fianna|Orchel|Diego|Ninae|Seteth|Loretta|Anatolia|Sha Lan|Nezha|Dadao|Halvin|Nathan|Creek|Guzran|Nydine|Io|Catania|Noctula|Yang Jie|Nuzzuo|Majide|Sofia|Centurio|Anna|Aswan|Tahonia|Alexandra|Zarcone|Jasmine|Inyoni|Kiroc|Peppe|Klapka|Sothis|Fortuna|Aurora|Mars|Kalla|Smyrnos|Credna|Jurah|Solel|Dagda|Balor|Yu Phas|Benditz|Maria|Raksha|The Lady of Lillies`.split(
    "|",
  );

// Automatic-join notes are independent of gift reactions and remain curated here.
const automaticRecruitment: Record<string, string> = {
  Cai: "Automatically joins on Cai's Path.",
  Tialla: "Automatically joins on Cai's Path.",
  Peter: "Automatically joins on Cai's Path.",
  Ultand: "Automatically joins on Cai's Path.",
  Dietrich: "Automatically joins on Dietrich's Path.",
  Fabio: "Automatically joins on Dietrich's Path.",
  Esmeralda: "Automatically joins on Dietrich's Path.",
  Mikaela: "Automatically joins on Dietrich's Path.",
  Theodora: "Automatically joins on Theodora's Path.",
  Bonaventure: "Automatically joins on Theodora's Path.",
  Tobias: "Automatically joins on Theodora's Path.",
  Lilian: "Automatically joins on Theodora's Path.",
  Lysander: "Automatically joins on Theodora's Path.",
  Leda: "Automatically joins on Leda's Path.",
  Buccar: "Automatically joins on Leda's Path.",
  Sirocco: "Automatically joins on Leda's Path.",
  Olympia: "Automatically joins on Leda's Path.",
  Mu: "Automatically joins on Leda's Path.",
  Guzran: "Automatically joins on Cai's Path during the recruitment tutorial.",
  "Yang Jie":
    "Automatically joins on Dietrich's Path during the recruitment tutorial.",
  Sofia:
    "Automatically joins on Theodora's Path during the recruitment tutorial.",
  Catania:
    "Automatically joins on Leda's Path during the recruitment tutorial.",
};

export const characters: CharacterGifts[] = names.map((name) => {
  const record = databaseGiftRecords[name] ?? { loved: [], reallyLiked: [] };
  return {
    name,
    loved: [...record.loved].sort((a, b) => a.name.localeCompare(b.name)),
    reallyLiked: [...record.reallyLiked].sort((a, b) => a.name.localeCompare(b.name)),
    automaticRecruitment: automaticRecruitment[name],
  };
});

export type GiftPreferenceCount = {
  name: string;
  lovedCount: number;
  reallyLikedCount: number;
  totalCount: number;
};

/** Rebuild item preference counts from the current database-backed character data. */
export const getGiftPreferenceCounts = (): GiftPreferenceCount[] => {
  const counts = new Map<string, GiftPreferenceCount>();

  for (const character of characters) {
    for (const [tier, gifts] of [
      ["lovedCount", character.loved],
      ["reallyLikedCount", character.reallyLiked],
    ] as const) {
      for (const gift of gifts) {
        const count = counts.get(gift.name) ?? {
          name: gift.name,
          lovedCount: 0,
          reallyLikedCount: 0,
          totalCount: 0,
        };
        count[tier] += 1;
        count.totalCount += 1;
        counts.set(gift.name, count);
      }
    }
  }

  return [...counts.values()].sort((a, b) => a.name.localeCompare(b.name));
};
