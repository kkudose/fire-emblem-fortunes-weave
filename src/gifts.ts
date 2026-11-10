export type GiftItem = {
  name: string;
  unverified?: boolean;
};

type GiftRecordItem = string | GiftItem;

type GiftRecord = {
  loved?: GiftRecordItem[];
  reallyLiked?: GiftRecordItem[];
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

// Research checked: Raider King's item-by-item reaction table
// (https://raiderking.com/fire-emblem-fortunes-weave-all-loved-gifts-guide/),
// the community compilation (https://fortunesweave.co.uk/wiki/gifts),
// GameWith's Japanese gift-preference table (https://gamewith.jp/fefw/577115),
// Game8's Japanese table (https://game8.jp/fe-banshisenko/816847),
// Altema's Japanese preference table (https://altema.jp/febansisenkou/sukinamono),
// and Redfreshet's per-character gift database
// (https://redfreshet.com/game-tools/fe-banshisenko/characters/). Secondary
// category guides checked include Nintendo Insider, Keengamer, and Polygon's
// gift guide. These sources have different coverage and are not all
// independent: some reproduce preference categories, while some report
// individual item reactions. Raider King distinguishes one-arrow and
// two-arrow reactions but labels the table WIP; the Japanese tables report
// item/category preferences at a coarser tier and do not distinguish those
// arrow counts. No public source checked is a complete, authoritative reaction
// matrix. Absence from this file means unknown, not disliked. Explicitly tiered
// umbrella rows are expanded only across the documented family membership and
// count as one source assignment per variant; a same-source named item row
// overrides its umbrella. Recommendation-only categories remain candidate
// leads and do not establish an arrow tier. For public-source verification,
// require two independent sources supporting the exact item and tier; derivative
// copies do not count as corroboration. If Loved and Really Liked conflict,
// default to Really Liked and keep the pair unverified unless direct in-game
// confirmation resolves it. If sources establish the top positive reaction but
// not whether it earns one or two
// arrows, place it in Really Liked; reserve Loved for two-arrow evidence.
// Yuphas Temple is excluded from guide inclusion and confidence decisions: a
// Yuphas-only positive claim is omitted unless directly confirmed in-game, and
// a Yuphas-only disagreement does not create an unreliable flag.
// Direct in-game confirmations supplied by the user override source conflicts.
// See GIFT_DATA_RESEARCH.md for the audit workflow and provenance notes.
const records: Record<string, GiftRecord> = {
  Cai: {
    loved: [
      { name: "Ceremonial Spear", unverified: true },
      { name: "Dagda Beard Grass", unverified: true },
      { name: "Horse-Grooming Kit", unverified: true },
      { name: "Mane Ornament", unverified: true },
      { name: "Pegasus Panorama", unverified: true },
      { name: "Portrait of Yu Phas", unverified: true },
      { name: "Rancid Garum", unverified: true },
      { name: "Strategy Manuscript", unverified: true },
      { name: "Training Bracelet", unverified: true }
    ],
    reallyLiked: [
      "Arrowhead Gem",
      "Crimson Ghosh",
      { name: "Flower Painting", unverified: true },
      { name: "Sharp Dagger", unverified: true },
      "Sharp Fishhook"
    ]
  },

  Dietrich: {
    loved: [
      { name: "Candy Crystals", unverified: true },
      { name: "Ebony Game Board", unverified: true },
      { name: "Fragrant Pastries", unverified: true },
      { name: "Mellow Pastries", unverified: true },
      "Pegasus Panorama",
      { name: "Portrait of Yu Phas", unverified: true },
      { name: "Rugged Blade", unverified: true },
      { name: "Shield Portrait", unverified: true },
      "Strategy Manuscript"
    ],
    reallyLiked: [
      "Arrowhead Gem",
      { name: "Blue-Rose Bouquet", unverified: true },
      "Board-Game Tactics",
      { name: "Crimson Ghosh", unverified: true },
      { name: "Eastern Black Silk", unverified: true },
      { name: "Flower Painting", unverified: true },
      { name: "Ginji Cervi", unverified: true },
      "Honey Milk",
      "Honey Pastries",
      { name: "Huge Fish Eyeball", unverified: true },
      "Joint-Relief Gloves",
      "Kitten Figurine",
      "Pastry Cookbook",
      "Protection Figurine",
      "Pure-White Cervi",
      { name: "Saraminian Sweets", unverified: true },
      "Simple Pastries",
      "Spirit Board Game",
      "Training Pillar",
      "Training Weights"
    ]
  },

  Theodora: {
    loved: [
      { name: "Ceremonial Spear", unverified: true },
      "Pegasus Panorama",
      { name: "Portrait of Yu Phas", unverified: true }
    ],
    reallyLiked: [
      { name: "Arrowhead Gem", unverified: true },
      "Dagda Beard Grass",
      { name: "Decorative Arrows", unverified: true },
      { name: "Decorative Bow", unverified: true },
      { name: "Dual Fish Knives", unverified: true },
      "Eastern Black Silk",
      { name: "Eastern Earrings", unverified: true },
      "Eastern Tea Leaves",
      { name: "Exquisite Ring", unverified: true },
      { name: "Flower Painting", unverified: true },
      { name: "Gaudy Bangle", unverified: true },
      "Horse-Grooming Kit",
      { name: "Joint-Relief Gloves", unverified: true },
      { name: "Orgus Coffee", unverified: true },
      { name: "Rare Spices", unverified: true },
      { name: "Rugged Blade", unverified: true },
      { name: "Sharp Dagger", unverified: true },
      { name: "Shield Portrait", unverified: true },
      { name: "Strong Seasonings", unverified: true },
      { name: "Training Bracelet", unverified: true },
      { name: "Wing Fletching", unverified: true }
    ]
  },

  Leda: {
    loved: [
      { name: "Arrowhead Gem", unverified: true },
      { name: "Crimson Ghosh", unverified: true },
      "Eastern Black Silk",
      "Eastern Earrings",
      { name: "Exquisite Ring", unverified: true },
      { name: "Flower Painting", unverified: true },
      { name: "Full Sewing Kit", unverified: true },
      { name: "History of a Master", unverified: true },
      "Portrait of Yu Phas",
      { name: "Skin Balm", unverified: true },
      "Tales of Adventure",
      "Volcano Ghosh"
    ],
    reallyLiked: [
      "Aromatic Shosh",
      { name: "Blue Shosh", unverified: true },
      "Brined Fish Guts",
      "Dagda Beard Grass",
      "Eastern Tea Leaves",
      { name: "Energizing Ghosh", unverified: true },
      { name: "Gaudy Bangle", unverified: true },
      "Horse-Grooming Kit",
      "Huge Fish Eyeball",
      "Jade Ghosh",
      "Kitten Figurine",
      "Light Shosh",
      "Magic-Trick Set",
      "Mature Ghosh",
      "Mature Shosh",
      { name: "Meaty Delicacy", unverified: true },
      "Pack of Pastels",
      { name: "Pegasus Panorama", unverified: true },
      "Rustic Ghosh",
      "Secret Ghosh",
      { name: "Shield Portrait", unverified: true },
      "Southern Ghosh",
      "Sun Ghosh",
      "Training Bracelet",
      "Young Ghosh"
    ]
  },

  "Hong Hua": {
    loved: [
      { name: "Fodlan Tea", unverified: true },
      { name: "History of a Master", unverified: true },
      { name: "Portrait of Yu Phas", unverified: true }
    ],
    reallyLiked: [
      { name: "Ahm Lu Cloth", unverified: true },
      { name: "Candy Crystals", unverified: true },
      "Coffee Pastries",
      { name: "Common Coffee", unverified: true },
      { name: "Flower Painting", unverified: true },
      { name: "Magic-Trick Set", unverified: true },
      { name: "Mature Dried Cervi", unverified: true },
      { name: "Mellow Pastries", unverified: true },
      { name: "Morfis Almanac", unverified: true },
      { name: "Orgus Coffee", unverified: true },
      { name: "Select Coffee", unverified: true },
      { name: "Southern Coffee", unverified: true },
      { name: "Strong Cervi", unverified: true },
      { name: "Tome from Away", unverified: true },
      { name: "Weak Cervi", unverified: true }
    ]
  },

  Troy: {
    loved: [
      { name: "History of a Master", unverified: true },
      { name: "Morfis Almanac", unverified: true },
      { name: "Portrait of Yu Phas", unverified: true },
      { name: "Rancid Garum", unverified: true }
    ],
    reallyLiked: [
      { name: "Ahm Lu Cloth", unverified: true },
      { name: "Board-Game Tactics", unverified: true },
      { name: "Candy Crystals", unverified: true },
      { name: "Coffee Pastries", unverified: true },
      { name: "Flower Painting", unverified: true },
      { name: "Fodlan Tea", unverified: true },
      { name: "Kitten Figurine", unverified: true },
      { name: "Magic-Trick Set", unverified: true },
      { name: "Mature Dried Cervi", unverified: true },
      { name: "Spirit Board Game", unverified: true },
      { name: "Strong Cervi", unverified: true },
      { name: "Tome from Away", unverified: true },
      { name: "Weak Cervi", unverified: true }
    ]
  },

  Tialla: {
    loved: [
      { name: "Blue-Rose Bouquet", unverified: true },
      { name: "Dual Fish Knives", unverified: true },
      "Eastern Board Game",
      "Ebony Game Board",
      { name: "Flower Painting", unverified: true },
      { name: "History of a Master", unverified: true },
      "Morfis Almanac",
      { name: "Morfis Tea", unverified: true },
      "Portrait of Yu Phas",
      { name: "School Scandal", unverified: true },
      "Tome from Away"
    ],
    reallyLiked: [
      { name: "Ahm Lu Cloth", unverified: true },
      { name: "Alecto Garum", unverified: true },
      { name: "Arrowhead Gem", unverified: true },
      "Board-Game Tactics",
      { name: "Ceremonial Spear", unverified: true },
      { name: "Concentrated Garum", unverified: true },
      { name: "Eastern Black Silk", unverified: true },
      { name: "Eastern Love Story", unverified: true },
      { name: "Eastern Tea Leaves", unverified: true },
      { name: "Everyday Scenes", unverified: true },
      "Garum",
      "Ginji Cervi",
      "Herbal Recipe Guide",
      "Home-Recipe Book",
      "Jamel Milk",
      "Mature Dried Cervi",
      { name: "Niiza Garum", unverified: true },
      { name: "Outdoor Cooking Set", unverified: true },
      { name: "Pastry Cookbook", unverified: true },
      "Pickled Bulbs",
      { name: "Potted Vegetables", unverified: true },
      { name: "Protection Figurine", unverified: true },
      { name: "Skin Balm", unverified: true },
      { name: "Smooth Garum", unverified: true },
      { name: "Solomon Coffee", unverified: true },
      "Spirit Board Game",
      { name: "Strategy Manuscript", unverified: true },
      "Strong Cervi",
      "Strong Seasonings",
      { name: "Tales of Adventure", unverified: true },
      { name: "Tales of the Arena", unverified: true },
      "The Knight’s Suitors",
      { name: "The Works of Dante", unverified: true },
      { name: "Thick Foreign Tome", unverified: true },
      "Trader’s Handbook",
      "Village Recipes",
      "Weak Cervi",
      { name: "Yarc Milk", unverified: true }
    ]
  },

  Peter: {
    loved: [
      { name: "Arrowhead Gem", unverified: true },
      { name: "Candy Crystals", unverified: true },
      { name: "Decorative Arrows", unverified: true },
      { name: "History of a Master", unverified: true },
      { name: "Portrait of Yu Phas", unverified: true }
    ],
    reallyLiked: [
      { name: "Ceremonial Spear", unverified: true },
      { name: "Coffee Pastries", unverified: true },
      { name: "Dagda Beard Grass", unverified: true },
      { name: "Eastern Tea Leaves", unverified: true },
      { name: "Flower Painting", unverified: true },
      { name: "Fragrant Pastries", unverified: true },
      { name: "Ginji Cervi", unverified: true },
      { name: "Honey Pastries", unverified: true },
      "Jamel Milk",
      { name: "Kitten Figurine", unverified: true },
      { name: "Mature Dried Cervi", unverified: true },
      { name: "Mellow Pastries", unverified: true },
      { name: "Pastry Cookbook", unverified: true },
      "Saraminian Sweets",
      { name: "Simple Pastries", unverified: true },
      "Strong Cervi",
      { name: "Tales of Adventure", unverified: true },
      { name: "Weak Cervi", unverified: true },
      { name: "Wing Fletching", unverified: true },
      { name: "Yarc Milk", unverified: true }
    ]
  },

  Ultand: {
    loved: [
      { name: "Dual Fish Knives", unverified: true },
      { name: "History of a Master", unverified: true },
      { name: "Legendary Garum", unverified: true },
      "Portrait of Yu Phas",
      "Rancid Garum",
      { name: "Tales of Adventure", unverified: true }
    ],
    reallyLiked: [
      { name: "Ahm Lu Cloth", unverified: true },
      { name: "Arrowhead Gem", unverified: true },
      { name: "Blue-Rose Bouquet", unverified: true },
      { name: "Candy Crystals", unverified: true },
      "Ceremonial Spear",
      { name: "Concentrated Garum", unverified: true },
      "Crimson Ghosh",
      { name: "Eastern Black Silk", unverified: true },
      { name: "Eastern Board Game", unverified: true },
      { name: "Eastern Love Story", unverified: true },
      { name: "Exquisite Ring", unverified: true },
      "Flower Painting",
      { name: "Full Sewing Kit", unverified: true },
      "Garum",
      { name: "Herbal Recipe Guide", unverified: true },
      { name: "Home-Recipe Book", unverified: true },
      "Morfis Almanac",
      "Niiza Garum",
      "Outdoor Cooking Set",
      { name: "Pastry Cookbook", unverified: true },
      { name: "Rugged Blade", unverified: true },
      { name: "Skin Balm", unverified: true },
      { name: "Strong Seasonings", unverified: true },
      "The Knight’s Suitors",
      { name: "Tome from Away", unverified: true }
    ]
  },

  Fabio: {
    loved: [
      { name: "Flower Painting", unverified: true },
      { name: "Pegasus Panorama", unverified: true },
      { name: "Rare Southern Seeds", unverified: true },
      { name: "Tales of Adventure", unverified: true }
    ],
    reallyLiked: [
      { name: "Aromatic Shosh", unverified: true },
      { name: "Brined Fish Guts", unverified: true },
      "Coffee Pastries",
      "Common Coffee",
      { name: "Crimson Ghosh", unverified: true },
      { name: "Dagda Beard Grass", unverified: true },
      "Eastern Black Silk",
      "Eastern Tea Leaves",
      { name: "Energizing Ghosh", unverified: true },
      { name: "Huge Fish Eyeball", unverified: true },
      "Jade Ghosh",
      { name: "Light Shosh", unverified: true },
      "Mature Ghosh",
      { name: "Mature Shosh", unverified: true },
      { name: "Morfis Almanac", unverified: true },
      "Orgus Coffee",
      { name: "Pack of Pastels", unverified: true },
      { name: "Potted Vegetables", unverified: true },
      { name: "Rugged Blade", unverified: true },
      "Rustic Ghosh",
      "Secret Ghosh",
      "Select Coffee",
      "Southern Coffee",
      "Southern Ghosh",
      "Sun Ghosh",
      { name: "Tome from Away", unverified: true },
      { name: "Volcano Ghosh", unverified: true },
      "Young Ghosh"
    ]
  },

  Esmeralda: {
    loved: [
      { name: "Arrowhead Gem", unverified: true },
      { name: "Dual Fish Knives", unverified: true },
      { name: "Eastern Black Silk", unverified: true },
      "Eastern Earrings",
      { name: "Flower Painting", unverified: true },
      "Tales of Adventure"
    ],
    reallyLiked: [
      { name: "Ahm Lu Cloth", unverified: true },
      { name: "Alecto Garum", unverified: true },
      { name: "Blue-Rose Bouquet", unverified: true },
      { name: "Bow Repair Kit", unverified: true },
      { name: "Ceremonial Spear", unverified: true },
      "Coffee Pastries",
      { name: "Dagda Beard Grass", unverified: true },
      { name: "Eastern Tea Leaves", unverified: true },
      { name: "Exquisite Ring", unverified: true },
      "Flexible Fishing Rod",
      { name: "Fragrant Pastries", unverified: true },
      "Garum",
      "Gaudy Bangle",
      { name: "Herbal Recipe Guide", unverified: true },
      { name: "Home-Recipe Book", unverified: true },
      { name: "Horse-Grooming Kit", unverified: true },
      "Huge Fish Eyeball",
      { name: "Kitten Figurine", unverified: true },
      { name: "Mellow Pastries", unverified: true },
      { name: "Pastry Cookbook", unverified: true },
      "Portrait of Yu Phas",
      { name: "Red Hair Clip", unverified: true },
      "Saraminian Sweets",
      "Sharp Fishhook",
      { name: "Simple Pastries", unverified: true },
      { name: "Skin Balm", unverified: true },
      { name: "Smooth Garum", unverified: true },
      { name: "Strong Seasonings", unverified: true },
      { name: "Tome from Away", unverified: true },
      { name: "Training Bracelet", unverified: true },
      { name: "Village Recipes", unverified: true }
    ]
  },

  Mikaela: {
    loved: [
      { name: "Rugged Blade", unverified: true },
      { name: "Strategy Manuscript", unverified: true },
      { name: "Tales of Adventure", unverified: true }
    ],
    reallyLiked: [
      { name: "Alecto Garum", unverified: true },
      { name: "Aromatic Shosh", unverified: true },
      { name: "Arrowhead Gem", unverified: true },
      { name: "Coffee Pastries", unverified: true },
      "Common Coffee",
      { name: "Crimson Ghosh", unverified: true },
      { name: "Eastern Tea Leaves", unverified: true },
      { name: "Energizing Ghosh", unverified: true },
      { name: "Flower Painting", unverified: true },
      "Garum",
      { name: "Herbal Recipe Guide", unverified: true },
      "Home-Recipe Book",
      { name: "Huge Fish Eyeball", unverified: true },
      "Jade Ghosh",
      "Light Shosh",
      "Mature Ghosh",
      { name: "Mature Shosh", unverified: true },
      "Orgus Coffee",
      { name: "Pastry Cookbook", unverified: true },
      { name: "Rare Spices", unverified: true },
      "Rustic Ghosh",
      "Secret Ghosh",
      "Select Coffee",
      "Southern Coffee",
      "Southern Ghosh",
      { name: "Strong Seasonings", unverified: true },
      "Sun Ghosh",
      { name: "Tome from Away", unverified: true },
      { name: "Training Pillar", unverified: true },
      { name: "Training Weights", unverified: true },
      { name: "Village Recipes", unverified: true },
      { name: "Volcano Ghosh", unverified: true },
      { name: "Wing Fletching", unverified: true },
      "Young Ghosh"
    ]
  },

  Bonaventure: {
    loved: [
      { name: "Dual Fish Knives", unverified: true },
      { name: "Morfis Almanac", unverified: true },
      { name: "Poems of the Greats", unverified: true },
      { name: "School Scandal", unverified: true },
      "Strategy Manuscript",
      { name: "Tome from Away", unverified: true }
    ],
    reallyLiked: [
      { name: "Aromatic Shosh", unverified: true },
      { name: "Blue Shosh", unverified: true },
      { name: "Ceremonial Spear", unverified: true },
      { name: "Common Coffee", unverified: true },
      { name: "Crimson Ghosh", unverified: true },
      { name: "Eastern Black Silk", unverified: true },
      { name: "Eastern Tea Leaves", unverified: true },
      { name: "Energizing Ghosh", unverified: true },
      "Garum",
      { name: "Herbal Recipe Guide", unverified: true },
      "Home-Recipe Book",
      "Jade Ghosh",
      { name: "Light Shosh", unverified: true },
      { name: "Magic-Trick Set", unverified: true },
      { name: "Mature Ghosh", unverified: true },
      { name: "Mature Shosh", unverified: true },
      { name: "Orgus Coffee", unverified: true },
      "Pastry Cookbook",
      { name: "Protection Figurine", unverified: true },
      "Rare Spices",
      { name: "Rugged Blade", unverified: true },
      { name: "Rustic Ghosh", unverified: true },
      "Secret Ghosh",
      { name: "Select Coffee", unverified: true },
      { name: "Southern Coffee", unverified: true },
      { name: "Southern Ghosh", unverified: true },
      { name: "Strong Seasonings", unverified: true },
      "Sun Ghosh",
      "Tales of the Arena",
      { name: "The Works of Dante", unverified: true },
      { name: "Thick Foreign Tome", unverified: true },
      { name: "Village Recipes", unverified: true },
      { name: "Volcano Ghosh", unverified: true },
      { name: "Young Ghosh", unverified: true },
      { name: "Young Shosh", unverified: true }
    ]
  },

  Tobias: {
    loved: [
      { name: "Strategy Manuscript", unverified: true },
      { name: "Tales of Adventure", unverified: true },
      { name: "Volcano Ghosh", unverified: true }
    ],
    reallyLiked: [
      { name: "Alecto Garum", unverified: true },
      { name: "Dagda Beard Grass", unverified: true },
      { name: "Eastern Black Silk", unverified: true },
      { name: "Eastern Tea Leaves", unverified: true },
      "Garum",
      { name: "Herbal Recipe Guide", unverified: true },
      { name: "Home-Recipe Book", unverified: true },
      { name: "Horse-Grooming Kit", unverified: true },
      { name: "Huge Fish Eyeball", unverified: true },
      { name: "Jade Ghosh", unverified: true },
      { name: "Kitten Figurine", unverified: true },
      { name: "Mature Ghosh", unverified: true },
      { name: "Mature Shosh", unverified: true },
      { name: "Pastry Cookbook", unverified: true },
      { name: "Rustic Ghosh", unverified: true },
      { name: "Secret Ghosh", unverified: true },
      { name: "Sharp Fishhook", unverified: true },
      { name: "Smooth Garum", unverified: true },
      { name: "Southern Ghosh", unverified: true },
      { name: "Strong Seasonings", unverified: true },
      { name: "Sturdy Rucksack", unverified: true },
      "Sun Ghosh",
      { name: "Training Bracelet", unverified: true },
      { name: "Village Recipes", unverified: true },
      { name: "Wing Fletching", unverified: true },
      { name: "Young Ghosh", unverified: true }
    ]
  },

  Lysander: {
    loved: [
      { name: "Ceremonial Spear", unverified: true },
      { name: "Flower Painting", unverified: true },
      { name: "Pegasus Panorama", unverified: true },
      { name: "Portrait of Yu Phas", unverified: true },
      { name: "Shield Portrait", unverified: true }
    ],
    reallyLiked: [
      { name: "Dagda Beard Grass", unverified: true },
      { name: "Eastern Tea Leaves", unverified: true },
      { name: "Horse-Grooming Kit", unverified: true },
      { name: "Mane Ornament", unverified: true },
      { name: "Sharp Dagger", unverified: true },
      "Training Weights",
      { name: "Wing Fletching", unverified: true }
    ]
  },

  Lilian: {
    loved: [
      "Eastern Earrings",
      "Eastern Tea Leaves",
      "Poems of the Greats",
      "Strategy Manuscript",
      { name: "Tales of Adventure", unverified: true }
    ],
    reallyLiked: [
      { name: "Decorative Arrows", unverified: true },
      { name: "Gaudy Bangle", unverified: true },
      { name: "Herbal Recipe Guide", unverified: true },
      { name: "Home-Recipe Book", unverified: true },
      { name: "Morfis Almanac", unverified: true },
      { name: "Pastry Cookbook", unverified: true },
      { name: "Rare Spices", unverified: true },
      { name: "Strong Seasonings", unverified: true },
      { name: "Trader’s Handbook", unverified: true },
      { name: "Training Bracelet", unverified: true },
      { name: "Village Recipes", unverified: true },
      { name: "Wing Fletching", unverified: true }
    ]
  },

  Buccar: {
    loved: [
      "Crimson Ghosh",
      { name: "Dual Fish Knives", unverified: true },
      { name: "Legendary Garum", unverified: true },
      { name: "Pegasus Panorama", unverified: true },
      { name: "Portrait of Yu Phas", unverified: true },
      "Rancid Garum",
      { name: "Shield Portrait", unverified: true },
      { name: "Special “Medicine”", unverified: true }
    ],
    reallyLiked: [
      { name: "Aromatic Shosh", unverified: true },
      "Arrowhead Gem",
      { name: "Blue Shosh", unverified: true },
      { name: "Ceremonial Spear", unverified: true },
      { name: "Eastern Tea Leaves", unverified: true },
      "Energizing Ghosh",
      { name: "Flower Painting", unverified: true },
      "Garum",
      { name: "Home-Recipe Book", unverified: true },
      { name: "Jade Ghosh", unverified: true },
      "Light Shosh",
      "Mature Ghosh",
      "Mature Shosh",
      "Niiza Garum",
      { name: "Outdoor Cooking Set", unverified: true },
      { name: "Rare Spices", unverified: true },
      "Rustic Ghosh",
      { name: "Secret Ghosh", unverified: true },
      { name: "Southern Ghosh", unverified: true },
      { name: "Sun Ghosh", unverified: true },
      { name: "Village Recipes", unverified: true },
      { name: "Volcano Ghosh", unverified: true },
      "Young Ghosh",
      "Young Shosh"
    ]
  },

  Sirocco: {
    loved: [
      "Arrowhead Gem",
      "Crimson Ghosh",
      { name: "Eastern Earrings", unverified: true },
      "Flower Painting",
      "History of a Master",
      { name: "Poems of the Greats", unverified: true },
      "Portrait of Yu Phas",
      { name: "Shield Portrait", unverified: true },
      { name: "Tales of Adventure", unverified: true },
      "Volcano Ghosh"
    ],
    reallyLiked: [
      { name: "Crimson Bull Figure", unverified: true },
      { name: "Eastern Board Game", unverified: true },
      { name: "Eastern Love Story", unverified: true },
      { name: "Energizing Ghosh", unverified: true },
      { name: "Gaudy Bangle", unverified: true },
      "Jade Ghosh",
      { name: "Jade Panther Figure", unverified: true },
      { name: "Joint-Relief Gloves", unverified: true },
      { name: "Light Shosh", unverified: true },
      "Mature Ghosh",
      { name: "Mature Shosh", unverified: true },
      "Pack of Pastels",
      "Rustic Ghosh",
      { name: "Secret Ghosh", unverified: true },
      { name: "Skin Balm", unverified: true },
      { name: "Southern Ghosh", unverified: true },
      { name: "Sun Ghosh", unverified: true },
      { name: "Tome from Away", unverified: true },
      "Young Ghosh",
      { name: "Young Shosh", unverified: true }
    ]
  },

  Mu: {
    loved: [
      { name: "Candy Crystals", unverified: true },
      { name: "History of a Master", unverified: true },
      { name: "Portrait of Yu Phas", unverified: true },
      { name: "Tales of Adventure", unverified: true }
    ],
    reallyLiked: [
      "Arrowhead Gem",
      { name: "Ginji Cervi", unverified: true },
      { name: "Honey Pastries", unverified: true },
      "Jamel Milk",
      { name: "Mature Dried Cervi", unverified: true },
      { name: "Morfis Almanac", unverified: true },
      { name: "Morfis Tea", unverified: true },
      "Orgus Coffee",
      { name: "Outdoor Cooking Set", unverified: true },
      { name: "Pickled Vegetables", unverified: true },
      "Pure-White Cervi",
      "Saraminian Sweets",
      { name: "Strong Cervi", unverified: true },
      { name: "Tome from Away", unverified: true },
      "Weak Cervi",
      { name: "Yarc Milk", unverified: true }
    ]
  },

  Olympia: {
    loved: [
      { name: "Arrowhead Gem", unverified: true },
      { name: "Blue-Rose Bouquet", unverified: true },
      { name: "Eastern Earrings", unverified: true },
      { name: "Eastern Tea Leaves", unverified: true },
      "Flower Painting",
      { name: "History of a Master", unverified: true },
      { name: "Pegasus Panorama", unverified: true },
      "Portrait of Yu Phas",
      { name: "Red Hair Clip", unverified: true },
      { name: "Shield Portrait", unverified: true },
      "Tales of Adventure"
    ],
    reallyLiked: [
      "Coffee Pastries",
      "Common Coffee",
      { name: "Exquisite Ring", unverified: true },
      { name: "Gaudy Bangle", unverified: true },
      { name: "Morfis Almanac", unverified: true },
      { name: "Orgus Coffee", unverified: true },
      { name: "Pack of Pastels", unverified: true },
      "Select Coffee",
      { name: "Skin Balm", unverified: true },
      "Southern Coffee"
    ]
  },

  Bertrand: {
    loved: [
      { name: "Dual Fish Knives", unverified: true },
      { name: "Ebony Game Board", unverified: true },
      { name: "Legendary Garum", unverified: true },
      { name: "Rancid Garum", unverified: true },
      { name: "Strategy Manuscript", unverified: true }
    ],
    reallyLiked: [
      { name: "Ahm Lu Cloth", unverified: true },
      "Alecto Garum",
      { name: "Ceremonial Spear", unverified: true },
      { name: "Concentrated Garum", unverified: true },
      { name: "Eastern Love Story", unverified: true },
      { name: "Garum", unverified: true },
      { name: "Herbal Recipe Guide", unverified: true },
      { name: "Home-Recipe Book", unverified: true },
      { name: "Morfis Almanac", unverified: true },
      { name: "Poems of the Greats", unverified: true },
      { name: "Smooth Garum", unverified: true },
      { name: "Sturdy Rucksack", unverified: true },
      { name: "Tales of Adventure", unverified: true },
      { name: "The Works of Dante", unverified: true },
      { name: "Tome from Away", unverified: true },
      { name: "Trader’s Handbook", unverified: true },
      "Training Bracelet"
    ]
  },

  Gaitz: {
    loved: [
      { name: "Ahm Lu Cloth", unverified: true },
      "Ceremonial Spear",
      { name: "Decorative Arrows", unverified: true },
      { name: "Eastern Black Silk", unverified: true },
      { name: "Eastern Board Game", unverified: true },
      { name: "Ebony Game Board", unverified: true },
      "Flower Painting",
      { name: "History of a Master", unverified: true },
      "Morfis Almanac",
      { name: "Pegasus Panorama", unverified: true },
      "Portrait of Yu Phas",
      { name: "Rancid Garum", unverified: true },
      { name: "Rugged Blade", unverified: true },
      { name: "School Scandal", unverified: true },
      { name: "Shield Portrait", unverified: true },
      { name: "Tales of Adventure", unverified: true },
      "Tome from Away"
    ],
    reallyLiked: [
      "Arrowhead Gem",
      { name: "Board-Game Tactics", unverified: true },
      "Coffee Pastries",
      "Common Coffee",
      { name: "Crafting Knives", unverified: true },
      { name: "Crimson Bull Figure", unverified: true },
      "Crimson Ghosh",
      { name: "Dagda Beard Grass", unverified: true },
      { name: "Herbal Recipe Guide", unverified: true },
      { name: "Home-Recipe Book", unverified: true },
      "Horse-Grooming Kit",
      { name: "Jade Panther Figure", unverified: true },
      "Joint-Relief Gloves",
      { name: "Mane Ornament", unverified: true },
      "Orgus Coffee",
      { name: "Pack of Pastels", unverified: true },
      { name: "Protection Figurine", unverified: true },
      { name: "Sharp Dagger", unverified: true },
      { name: "Spirit Board Game", unverified: true },
      { name: "Sturdy Rucksack", unverified: true },
      { name: "The Knight’s Suitors", unverified: true },
      "The Works of Dante",
      { name: "Thick Foreign Tome", unverified: true },
      "Training Pillar",
      "Training Weights"
    ]
  },

  Dante: {
    loved: [
      { name: "Ahm Lu Cloth", unverified: true },
      { name: "Decorative Arrows", unverified: true },
      { name: "Flower Painting", unverified: true },
      { name: "History of a Master", unverified: true },
      { name: "Morfis Almanac", unverified: true },
      "Poems of the Greats",
      "Portrait of Yu Phas",
      { name: "Rancid Garum", unverified: true },
      "School Scandal",
      { name: "Tales of Adventure", unverified: true },
      { name: "Tome from Away", unverified: true }
    ],
    reallyLiked: [
      "Arrowhead Gem",
      { name: "Ceremonial Spear", unverified: true },
      { name: "Coffee Pastries", unverified: true },
      "Common Coffee",
      { name: "Crafting Knives", unverified: true },
      { name: "Crimson Bull Figure", unverified: true },
      "Crimson Ghosh",
      { name: "Eastern Black Silk", unverified: true },
      { name: "Everyday Scenes", unverified: true },
      { name: "Herbal Recipe Guide", unverified: true },
      { name: "Home-Recipe Book", unverified: true },
      { name: "Jade Panther Figure", unverified: true },
      { name: "Magic-Trick Set", unverified: true },
      "Pack of Pastels",
      "Select Coffee",
      { name: "Sharp Dagger", unverified: true },
      { name: "Tales of the Arena", unverified: true },
      "The Works of Dante"
    ]
  },

  Goliath: {
    loved: [
      { name: "Crimson Ghosh", unverified: true },
      { name: "Rancid Garum", unverified: true },
      { name: "Special “Medicine”", unverified: true },
      "Strategy Manuscript",
      "Volcano Ghosh"
    ],
    reallyLiked: [
      "Aromatic Shosh",
      { name: "Blue Shosh", unverified: true },
      { name: "Eastern Board Game", unverified: true },
      { name: "Eastern Tea Leaves", unverified: true },
      { name: "Energizing Ghosh", unverified: true },
      "Jade Ghosh",
      { name: "Kitten Figurine", unverified: true },
      "Light Shosh",
      "Mature Ghosh",
      "Mature Shosh",
      { name: "Protection Figurine", unverified: true },
      "Rustic Ghosh",
      "Secret Ghosh",
      "Southern Ghosh",
      { name: "Spirit Board Game", unverified: true },
      { name: "Sturdy Rucksack", unverified: true },
      "Sun Ghosh",
      { name: "Training Bracelet", unverified: true },
      { name: "Wing Fletching", unverified: true },
      "Young Ghosh",
      { name: "Young Shosh", unverified: true }
    ]
  },

  Jester: {
    loved: [
      "Arrowhead Gem",
      { name: "Legendary Garum", unverified: true },
      { name: "Portrait of Yu Phas", unverified: true }
    ],
    reallyLiked: [
      { name: "Board-Game Tactics", unverified: true },
      "Ceremonial Spear",
      "Common Coffee",
      "Crimson Ghosh",
      "Dual Fish Knives",
      { name: "Herbal Recipe Guide", unverified: true },
      { name: "Home-Recipe Book", unverified: true },
      { name: "Joint-Relief Gloves", unverified: true },
      "Orgus Coffee",
      { name: "Outdoor Cooking Set", unverified: true },
      "Pastry Cookbook",
      "Rare Spices",
      "Select Coffee",
      "Southern Coffee",
      { name: "Spirit Board Game", unverified: true },
      { name: "Strong Seasonings", unverified: true },
      "Village Recipes"
    ]
  },

  Talimun: {
    loved: [
      { name: "Blue-Rose Bouquet", unverified: true },
      { name: "Flower Painting", unverified: true },
      { name: "History of a Master", unverified: true },
      { name: "Portrait of Yu Phas", unverified: true },
      "Volcano Ghosh"
    ],
    reallyLiked: [
      { name: "Arrowhead Gem", unverified: true },
      "Ceremonial Spear",
      { name: "Coffee Pastries", unverified: true },
      { name: "Crimson Bull Figure", unverified: true },
      { name: "Crimson Ghosh", unverified: true },
      { name: "Energizing Ghosh", unverified: true },
      { name: "Jade Ghosh", unverified: true },
      { name: "Jade Panther Figure", unverified: true },
      { name: "Mature Ghosh", unverified: true },
      { name: "Rustic Ghosh", unverified: true },
      "Secret Ghosh",
      "Southern Ghosh",
      { name: "Sun Ghosh", unverified: true },
      "Young Ghosh"
    ]
  },

  Ursula: {
    loved: [
      "Flower Painting",
      { name: "History of a Master", unverified: true },
      "Pegasus Panorama",
      "Portrait of Yu Phas",
      { name: "Shield Portrait", unverified: true }
    ],
    reallyLiked: [
      { name: "Ahm Lu Cloth", unverified: true },
      "Arrowhead Gem",
      "Coffee Pastries",
      "Common Coffee",
      { name: "Crimson Ghosh", unverified: true },
      { name: "Eastern Black Silk", unverified: true },
      { name: "Eastern Love Story", unverified: true },
      { name: "Kitten Figurine", unverified: true },
      { name: "Mane Ornament", unverified: true },
      { name: "Pack of Pastels", unverified: true },
      "Select Coffee"
    ]
  },

  Simon: {
    loved: [
      { name: "Ceremonial Spear", unverified: true },
      { name: "History of a Master", unverified: true },
      "Portrait of Yu Phas",
      "Rancid Garum",
      { name: "Shield Portrait", unverified: true }
    ],
    reallyLiked: [
      "Arrowhead Gem",
      "Crimson Ghosh",
      { name: "Dual Fish Knives", unverified: true },
      { name: "Eastern Board Game", unverified: true },
      { name: "Eastern Tea Leaves", unverified: true },
      { name: "Flower Painting", unverified: true },
      { name: "Joint-Relief Gloves", unverified: true },
      "Pickled Vegetables",
      { name: "Protection Figurine", unverified: true },
      { name: "Solomon Coffee", unverified: true }
    ]
  },

  Ludia: {
    loved: [
      { name: "Arrowhead Gem", unverified: true },
      "Eastern Black Silk",
      { name: "Eastern Earrings", unverified: true },
      { name: "Eastern Love Story", unverified: true },
      { name: "Eastern Tea Leaves", unverified: true },
      { name: "Flower Painting", unverified: true },
      { name: "Pegasus Panorama", unverified: true },
      { name: "Portrait of Yu Phas", unverified: true },
      { name: "Red Hair Clip", unverified: true },
      { name: "Strategy Manuscript", unverified: true },
      "Tales of Adventure"
    ],
    reallyLiked: [
      { name: "Ceremonial Spear", unverified: true },
      { name: "Coffee Pastries", unverified: true },
      "Common Coffee",
      { name: "Everyday Scenes", unverified: true },
      { name: "Gaudy Bangle", unverified: true },
      { name: "Herbal Recipe Guide", unverified: true },
      { name: "Home-Recipe Book", unverified: true },
      { name: "Magic-Trick Set", unverified: true },
      "Orgus Coffee",
      { name: "Pack of Pastels", unverified: true },
      { name: "Pastry Cookbook", unverified: true },
      "Select Coffee",
      { name: "Sharp Fishhook", unverified: true },
      { name: "Skin Balm", unverified: true },
      "Southern Coffee",
      "Sturdy Rucksack",
      { name: "Trader’s Handbook", unverified: true },
      { name: "Training Bracelet", unverified: true },
      { name: "Village Recipes", unverified: true }
    ]
  },

  Fianna: {
    loved: [
      "Arrowhead Gem",
      "Blue-Rose Bouquet",
      { name: "Eastern Black Silk", unverified: true },
      { name: "Eastern Earrings", unverified: true },
      { name: "Eastern Tea Leaves", unverified: true },
      { name: "Flower Painting", unverified: true },
      { name: "Morfis Almanac", unverified: true },
      { name: "Portrait of Yu Phas", unverified: true },
      { name: "Rare Southern Seeds", unverified: true },
      "Volcano Ghosh"
    ],
    reallyLiked: [
      "Common Coffee",
      "Crimson Ghosh",
      { name: "Joint-Relief Gloves", unverified: true },
      "Orgus Coffee",
      "Rare Spices",
      "Select Coffee",
      { name: "Skin Balm", unverified: true },
      "Southern Coffee",
      { name: "Tome from Away", unverified: true }
    ]
  },

  Orchel: {
    loved: [
      { name: "Blue-Rose Bouquet", unverified: true },
      { name: "Dual Fish Knives", unverified: true },
      { name: "Flower Painting", unverified: true },
      { name: "History of a Master", unverified: true },
      { name: "Pegasus Panorama", unverified: true },
      { name: "Poems of the Greats", unverified: true },
      "Portrait of Yu Phas",
      { name: "School Scandal", unverified: true },
      { name: "Shield Portrait", unverified: true }
    ],
    reallyLiked: [
      { name: "Crimson Bull Figure", unverified: true },
      "Garum",
      { name: "Herbal Recipe Guide", unverified: true },
      "Home-Recipe Book",
      { name: "Horse-Grooming Kit", unverified: true },
      { name: "Jade Panther Figure", unverified: true },
      { name: "Kitten Figurine", unverified: true },
      "Outdoor Cooking Set",
      "Saraminian Sweets",
      { name: "Strong Seasonings", unverified: true },
      { name: "Tales of Adventure", unverified: true },
      { name: "Tales of the Arena", unverified: true },
      { name: "The Knight’s Suitors", unverified: true },
      { name: "The Works of Dante", unverified: true },
      { name: "Trader’s Handbook", unverified: true },
      { name: "Village Recipes", unverified: true }
    ]
  },

  Diego: {
    loved: [
      { name: "Arrowhead Gem", unverified: true },
      { name: "Ceremonial Spear", unverified: true },
      "Decorative Arrows",
      { name: "History of a Master", unverified: true },
      { name: "Portrait of Yu Phas", unverified: true },
      { name: "Rugged Blade", unverified: true },
      { name: "Shield Portrait", unverified: true },
      { name: "Tales of Adventure", unverified: true }
    ],
    reallyLiked: [
      { name: "Bow Repair Kit", unverified: true },
      { name: "Candy Crystals", unverified: true },
      "Crimson Ghosh",
      "Eastern Board Game",
      { name: "Eastern Tea Leaves", unverified: true },
      { name: "Flower Painting", unverified: true },
      "Joint-Relief Gloves",
      "Protection Figurine",
      { name: "Sharp Dagger", unverified: true },
      { name: "Tome from Away", unverified: true },
      { name: "Training Pillar", unverified: true },
      { name: "Training Weights", unverified: true }
    ]
  },

  Ninae: {
    loved: [
      { name: "Poems of the Greats", unverified: true },
      { name: "Portrait of Yu Phas", unverified: true },
      { name: "Strategy Manuscript", unverified: true },
      "Tales of Adventure"
    ],
    reallyLiked: [
      { name: "Ahm Lu Cloth", unverified: true },
      "Arrowhead Gem",
      { name: "Crimson Ghosh", unverified: true },
      { name: "Eastern Black Silk", unverified: true },
      { name: "Eastern Tea Leaves", unverified: true },
      { name: "Flower Painting", unverified: true },
      { name: "Morfis Almanac", unverified: true },
      { name: "Tome from Away", unverified: true }
    ]
  },

  Seteth: {
    loved: [
      { name: "Morfis Almanac", unverified: true },
      "Poems of the Greats",
      { name: "Portrait of Yu Phas", unverified: true },
      "Strategy Manuscript",
      "Tales of Adventure"
    ],
    reallyLiked: [
      { name: "Ceremonial Spear", unverified: true },
      "Common Coffee",
      { name: "Crimson Ghosh", unverified: true },
      { name: "Eastern Black Silk", unverified: true },
      { name: "Eastern Tea Leaves", unverified: true },
      { name: "Everyday Scenes", unverified: true },
      "Flexible Fishing Rod",
      { name: "Flower Painting", unverified: true },
      { name: "Herbal Recipe Guide", unverified: true },
      { name: "Home-Recipe Book", unverified: true },
      { name: "Huge Fish Eyeball", unverified: true },
      "Orgus Coffee",
      { name: "Pastry Cookbook", unverified: true },
      { name: "School Scandal", unverified: true },
      "Select Coffee",
      "Sharp Fishhook",
      "Southern Coffee",
      { name: "Sturdy Rucksack", unverified: true },
      "Tales of the Arena",
      "The Works of Dante",
      { name: "Trader’s Handbook", unverified: true },
      { name: "Village Recipes", unverified: true }
    ]
  },

  Loretta: {
    loved: [
      { name: "Ceremonial Spear", unverified: true },
      { name: "Portrait of Yu Phas", unverified: true },
      { name: "Rugged Blade", unverified: true },
      { name: "Shield Portrait", unverified: true }
    ],
    reallyLiked: [
      "Arrowhead Gem",
      "Crimson Ghosh",
      { name: "Eastern Black Silk", unverified: true },
      { name: "Flower Painting", unverified: true },
      { name: "Ginji Cervi", unverified: true },
      { name: "Honey Milk", unverified: true },
      "Honey Pastries",
      { name: "Jamel Milk", unverified: true },
      { name: "Joint-Relief Gloves", unverified: true },
      { name: "Mellow Pastries", unverified: true },
      "Pastry Cookbook",
      { name: "Pure-White Cervi", unverified: true },
      "Saraminian Sweets",
      { name: "Simple Pastries", unverified: true },
      { name: "Training Pillar", unverified: true },
      { name: "Training Weights", unverified: true }
    ]
  },

  Anatolia: {
    loved: [
      "History of a Master",
      "Morfis Almanac",
      { name: "Rugged Blade", unverified: true },
      { name: "Strategy Manuscript", unverified: true },
      "Tales of Adventure"
    ],
    reallyLiked: [
      { name: "Ahm Lu Cloth", unverified: true },
      { name: "Arrowhead Gem", unverified: true },
      { name: "Bagua Divination Set", unverified: true },
      { name: "Candy Crystals", unverified: true },
      { name: "Ceremonial Spear", unverified: true },
      "Eastern Black Silk",
      "Eastern Tea Leaves",
      { name: "Flower Painting", unverified: true },
      "Magic-Trick Set",
      "Protection Figurine",
      "Tome from Away"
    ]
  },

  "Sha Lan": {
    loved: [
      "Special “Medicine”"
    ],
    reallyLiked: [
      "Alecto Garum",
      { name: "Arrowhead Gem", unverified: true },
      { name: "Ceremonial Spear", unverified: true },
      "Common Coffee",
      "Concentrated Garum",
      "Energizing Ghosh",
      { name: "Niiza Garum", unverified: true },
      { name: "Orgus Coffee", unverified: true },
      { name: "Outdoor Cooking Set", unverified: true },
      "Pastry Cookbook",
      "Select Coffee",
      "Smooth Garum",
      { name: "Southern Coffee", unverified: true },
      { name: "Sturdy Rucksack", unverified: true }
    ]
  },

  Nezha: {
    loved: [
      { name: "Arrowhead Gem", unverified: true },
      { name: "Ceremonial Spear", unverified: true },
      { name: "Decorative Arrows", unverified: true },
      { name: "Portrait of Yu Phas", unverified: true },
      { name: "Shield Portrait", unverified: true },
      { name: "Strategy Manuscript", unverified: true },
      { name: "Tales of Adventure", unverified: true }
    ],
    reallyLiked: [
      { name: "Eastern Tea Leaves", unverified: true },
      { name: "Flower Painting", unverified: true },
      { name: "Joint-Relief Gloves", unverified: true },
      "Pickled Bulbs",
      "Pickled Vegetables",
      "Potted Vegetables",
      { name: "Rare Southern Seeds", unverified: true },
      { name: "Sturdy Rucksack", unverified: true },
      "Training Bracelet",
      "Training Pillar",
      "Training Weights",
      { name: "Wing Fletching", unverified: true }
    ]
  },

  Dadao: {
    loved: [
      { name: "Poems of the Greats", unverified: true },
      { name: "Portrait of Yu Phas", unverified: true },
      { name: "Rugged Blade", unverified: true },
      { name: "Strategy Manuscript", unverified: true },
      "Tales of Adventure"
    ],
    reallyLiked: [
      { name: "Arrowhead Gem", unverified: true },
      { name: "Board-Game Tactics", unverified: true },
      { name: "Coffee Pastries", unverified: true },
      { name: "Crimson Ghosh", unverified: true },
      { name: "Eastern Black Silk", unverified: true },
      { name: "Flower Painting", unverified: true },
      { name: "Fragrant Pastries", unverified: true },
      { name: "Ginji Cervi", unverified: true },
      { name: "Honey Milk", unverified: true },
      { name: "Honey Pastries", unverified: true },
      { name: "Huge Fish Eyeball", unverified: true },
      "Jamel Milk",
      { name: "Mature Dried Cervi", unverified: true },
      { name: "Mellow Pastries", unverified: true },
      { name: "Pastry Cookbook", unverified: true },
      { name: "Potted Vegetables", unverified: true },
      "Saraminian Sweets",
      { name: "Simple Pastries", unverified: true },
      { name: "Strong Cervi", unverified: true },
      "Weak Cervi",
      { name: "Yarc Milk", unverified: true }
    ]
  },

  Halvin: {
    loved: [
      { name: "Blue-Rose Bouquet", unverified: true },
      { name: "Eastern Black Silk", unverified: true },
      { name: "Eastern Earrings", unverified: true },
      { name: "Flower Painting", unverified: true },
      { name: "Red Hair Clip", unverified: true }
    ],
    reallyLiked: [
      { name: "Crimson Ghosh", unverified: true },
      { name: "Eastern Tea Leaves", unverified: true },
      { name: "Exquisite Ring", unverified: true },
      "Garum",
      { name: "Gaudy Bangle", unverified: true },
      { name: "Ginji Cervi", unverified: true },
      "Honey Pastries",
      { name: "Jade Panther Figure", unverified: true },
      { name: "Magic-Trick Set", unverified: true },
      { name: "Mature Dried Cervi", unverified: true },
      { name: "Pack of Pastels", unverified: true },
      { name: "Pickled Bulbs", unverified: true },
      "Potted Vegetables",
      { name: "Pure-White Cervi", unverified: true },
      { name: "Simple Pastries", unverified: true },
      "Skin Balm",
      { name: "Strong Cervi", unverified: true },
      { name: "Village Recipes", unverified: true },
      { name: "Weak Cervi", unverified: true }
    ]
  },

  Nathan: {
    loved: [
      { name: "History of a Master", unverified: true }
    ],
    reallyLiked: [
      { name: "Secret Ghosh", unverified: true },
      { name: "Sharp Dagger", unverified: true },
      { name: "Sun Ghosh", unverified: true }
    ]
  },

  Creek: {
    loved: [
      { name: "History of a Master", unverified: true }
    ],
    reallyLiked: [
      { name: "Sharp Dagger", unverified: true },
      { name: "The Works of Dante", unverified: true }
    ]
  },

  Guzran: {
    loved: [
      { name: "Crimson Ghosh", unverified: true },
      { name: "Shield Portrait", unverified: true },
      { name: "Strategy Manuscript", unverified: true },
      "Tales of Adventure",
      "Volcano Ghosh"
    ],
    reallyLiked: [
      { name: "Aromatic Shosh", unverified: true },
      "Common Coffee",
      { name: "Eastern Tea Leaves", unverified: true },
      "Energizing Ghosh",
      { name: "Huge Fish Eyeball", unverified: true },
      "Jade Ghosh",
      { name: "Light Shosh", unverified: true },
      "Mature Ghosh",
      { name: "Mature Shosh", unverified: true },
      { name: "Morfis Almanac", unverified: true },
      "Orgus Coffee",
      "Rustic Ghosh",
      "Secret Ghosh",
      "Select Coffee",
      "Southern Coffee",
      "Southern Ghosh",
      { name: "Strong Seasonings", unverified: true },
      "Sun Ghosh",
      { name: "Wing Fletching", unverified: true },
      "Young Ghosh",
      { name: "Young Shosh", unverified: true }
    ]
  },

  Nydine: {
    loved: [
      { name: "Pegasus Panorama", unverified: true },
      { name: "Rugged Blade", unverified: true },
      "Strategy Manuscript",
      { name: "Tales of Adventure", unverified: true }
    ],
    reallyLiked: [
      { name: "Arrowhead Gem", unverified: true },
      { name: "Eastern Black Silk", unverified: true },
      { name: "Eastern Love Story", unverified: true },
      { name: "Eastern Tea Leaves", unverified: true },
      { name: "Horse-Grooming Kit", unverified: true },
      { name: "Joint-Relief Gloves", unverified: true },
      "Kitten Figurine",
      "Mane Ornament",
      { name: "Morfis Almanac", unverified: true },
      "Saraminian Sweets",
      "Sturdy Rucksack",
      { name: "Tome from Away", unverified: true },
      { name: "Training Bracelet", unverified: true },
      "Training Weights",
      { name: "Wing Fletching", unverified: true }
    ]
  },

  Io: {
    loved: [
      { name: "Ceremonial Spear", unverified: true },
      { name: "Pegasus Panorama", unverified: true },
      { name: "Portrait of Yu Phas", unverified: true },
      { name: "Shield Portrait", unverified: true }
    ],
    reallyLiked: [
      "Arrowhead Gem",
      { name: "Board-Game Tactics", unverified: true },
      { name: "Common Coffee", unverified: true },
      { name: "Crimson Ghosh", unverified: true },
      { name: "Flower Painting", unverified: true },
      { name: "Horse-Grooming Kit", unverified: true },
      { name: "Joint-Relief Gloves", unverified: true },
      "Kitten Figurine",
      { name: "Mane Ornament", unverified: true },
      { name: "Protection Figurine", unverified: true },
      { name: "Spirit Board Game", unverified: true },
      { name: "Sturdy Rucksack", unverified: true },
      { name: "Training Pillar", unverified: true },
      "Training Weights"
    ]
  },

  Catania: {
    loved: [
      { name: "Ahm Lu Cloth", unverified: true },
      { name: "Arrowhead Gem", unverified: true },
      { name: "Blue-Rose Bouquet", unverified: true },
      { name: "Decorative Arrows", unverified: true },
      "Eastern Black Silk",
      { name: "Eastern Earrings", unverified: true },
      { name: "Eastern Tea Leaves", unverified: true },
      { name: "Flower Painting", unverified: true },
      { name: "Pegasus Panorama", unverified: true },
      { name: "Portrait of Yu Phas", unverified: true },
      { name: "Red Hair Clip", unverified: true },
      "Tales of Adventure"
    ],
    reallyLiked: [
      { name: "Ceremonial Spear", unverified: true },
      "Coffee Pastries",
      "Common Coffee",
      "Crafting Knives",
      { name: "Crimson Bull Figure", unverified: true },
      { name: "Crimson Ghosh", unverified: true },
      "Dagda Beard Grass",
      { name: "Exquisite Ring", unverified: true },
      { name: "Gaudy Bangle", unverified: true },
      "Horse-Grooming Kit",
      { name: "Jade Panther Figure", unverified: true },
      "Kitten Figurine",
      { name: "Magic-Trick Set", unverified: true },
      { name: "Mane Ornament", unverified: true },
      "Orgus Coffee",
      "Pack of Pastels",
      "Select Coffee",
      { name: "Sharp Dagger", unverified: true },
      "Skin Balm",
      "Southern Coffee",
      { name: "Spirit Board Game", unverified: true }
    ]
  },

  Noctula: {
    loved: [
      { name: "Ceremonial Spear", unverified: true },
      { name: "History of a Master", unverified: true },
      { name: "Shield Portrait", unverified: true },
      "Tales of Adventure"
    ],
    reallyLiked: [
      { name: "Antique Medal", unverified: true },
      { name: "Arrowhead Gem", unverified: true },
      { name: "Crimson Ghosh", unverified: true },
      "Eastern Tea Leaves",
      { name: "Morfis Almanac", unverified: true },
      "Protection Figurine",
      { name: "Sharp Dagger", unverified: true },
      "Strategy Manuscript",
      { name: "Sturdy Rucksack", unverified: true },
      { name: "Tome from Away", unverified: true },
      "Training Bracelet",
      "Training Pillar",
      { name: "Training Weights", unverified: true },
      { name: "Wing Fletching", unverified: true }
    ]
  },

  "Yang Jie": {
    loved: [
      { name: "Eastern Tea Leaves", unverified: true },
      { name: "Poems of the Greats", unverified: true },
      { name: "Strategy Manuscript", unverified: true },
      { name: "Tales of Adventure", unverified: true }
    ],
    reallyLiked: [
      { name: "Aromatic Shosh", unverified: true },
      { name: "Coffee Pastries", unverified: true },
      { name: "Common Coffee", unverified: true },
      { name: "Crimson Ghosh", unverified: true },
      { name: "Energizing Ghosh", unverified: true },
      { name: "Flexible Fishing Rod", unverified: true },
      { name: "Herbal Recipe Guide", unverified: true },
      { name: "Home-Recipe Book", unverified: true },
      { name: "Huge Fish Eyeball", unverified: true },
      "Jade Ghosh",
      { name: "Kitten Figurine", unverified: true },
      { name: "Light Shosh", unverified: true },
      "Mature Ghosh",
      { name: "Mature Shosh", unverified: true },
      { name: "Orgus Coffee", unverified: true },
      { name: "Pastry Cookbook", unverified: true },
      "Rustic Ghosh",
      "Secret Ghosh",
      { name: "Select Coffee", unverified: true },
      { name: "Sharp Fishhook", unverified: true },
      { name: "Southern Coffee", unverified: true },
      "Southern Ghosh",
      "Sun Ghosh",
      { name: "The Works of Dante", unverified: true },
      { name: "Trader’s Handbook", unverified: true },
      { name: "Village Recipes", unverified: true },
      { name: "Volcano Ghosh", unverified: true },
      "Young Ghosh"
    ]
  },

  Nuzzuo: {
    loved: [
      "Arrowhead Gem",
      { name: "Ceremonial Spear", unverified: true },
      "Dual Fish Knives",
      { name: "Odd Vegetable Seeds", unverified: true },
      { name: "Pegasus Panorama", unverified: true },
      { name: "Rare Southern Seeds", unverified: true },
      { name: "Rugged Blade", unverified: true },
      { name: "Strategy Manuscript", unverified: true }
    ],
    reallyLiked: [
      { name: "Bow Repair Kit", unverified: true },
      { name: "Candy Crystals", unverified: true },
      { name: "Coffee Pastries", unverified: true },
      "Common Coffee",
      { name: "Crafting Knives", unverified: true },
      "Crimson Ghosh",
      { name: "Eastern Black Silk", unverified: true },
      { name: "Eastern Tea Leaves", unverified: true },
      { name: "Flower Painting", unverified: true },
      { name: "Herbal Recipe Guide", unverified: true },
      { name: "Joint-Relief Gloves", unverified: true },
      "Kitten Figurine",
      { name: "Niiza Garum", unverified: true },
      "Orgus Coffee",
      "Outdoor Cooking Set",
      "Pickled Vegetables",
      { name: "Potted Vegetables", unverified: true },
      "Protection Figurine",
      { name: "Rare Spices", unverified: true },
      "Select Coffee",
      { name: "Sharp Dagger", unverified: true },
      "Southern Coffee",
      { name: "Strong Seasonings", unverified: true },
      { name: "Sturdy Rucksack", unverified: true },
      { name: "Training Bracelet", unverified: true },
      { name: "Training Pillar", unverified: true },
      { name: "Training Weights", unverified: true }
    ]
  },

  Majide: {
    loved: [
      { name: "Arrowhead Gem", unverified: true }
    ],
    reallyLiked: [
      "Aromatic Shosh",
      "Crimson Ghosh",
      "Energizing Ghosh",
      "Jade Ghosh",
      { name: "Joint-Relief Gloves", unverified: true },
      { name: "Light Shosh", unverified: true },
      "Mature Ghosh",
      { name: "Mature Shosh", unverified: true },
      "Rustic Ghosh",
      "Secret Ghosh",
      "Southern Ghosh",
      "Sun Ghosh",
      { name: "Training Pillar", unverified: true },
      { name: "Training Weights", unverified: true },
      "Volcano Ghosh",
      "Young Ghosh",
      { name: "Young Shosh", unverified: true }
    ]
  },

  Sofia: {
    loved: [
      "Blue-Rose Bouquet",
      { name: "Candy Crystals", unverified: true },
      "Dual Fish Knives",
      { name: "Flower Painting", unverified: true },
      { name: "Odd Vegetable Seeds", unverified: true },
      { name: "Rare Southern Seeds", unverified: true },
      { name: "Tales of Adventure", unverified: true },
      "Volcano Ghosh"
    ],
    reallyLiked: [
      "Alecto Garum",
      { name: "Arrowhead Gem", unverified: true },
      "Common Coffee",
      "Concentrated Garum",
      "Crimson Ghosh",
      { name: "Eastern Tea Leaves", unverified: true },
      "Fragrant Pastries",
      "Garum",
      "Ginji Cervi",
      "Honey Milk",
      { name: "Honey Pastries", unverified: true },
      { name: "Jamel Milk", unverified: true },
      { name: "Kitten Figurine", unverified: true },
      { name: "Magic-Trick Set", unverified: true },
      "Mature Dried Cervi",
      "Meaty Delicacy",
      "Mellow Pastries",
      { name: "Niiza Garum", unverified: true },
      "Orgus Coffee",
      "Outdoor Cooking Set",
      { name: "Pack of Pastels", unverified: true },
      { name: "Pastry Cookbook", unverified: true },
      "Pickled Vegetables",
      { name: "Protection Figurine", unverified: true },
      "Pure-White Cervi",
      "Rare Spices",
      { name: "Saraminian Sweets", unverified: true },
      "Select Coffee",
      { name: "Sharp Fishhook", unverified: true },
      "Simple Pastries",
      "Southern Coffee",
      "Strong Cervi",
      "Weak Cervi",
      { name: "Yarc Milk", unverified: true }
    ]
  },

  Centurio: {
    loved: [
      { name: "Ceremonial Spear", unverified: true },
      { name: "Eastern Board Game", unverified: true },
      { name: "History of a Master", unverified: true },
      { name: "Pegasus Panorama", unverified: true },
      "Portrait of Yu Phas",
      { name: "Rancid Garum", unverified: true },
      { name: "School Scandal", unverified: true },
      { name: "Shield Portrait", unverified: true },
      { name: "Strategy Manuscript", unverified: true }
    ],
    reallyLiked: [
      { name: "Antique Medal", unverified: true },
      { name: "Board-Game Tactics", unverified: true },
      { name: "Spirit Board Game", unverified: true },
      { name: "Tales of the Arena", unverified: true },
      { name: "Trader’s Handbook", unverified: true },
      { name: "Training Pillar", unverified: true },
      { name: "Training Weights", unverified: true }
    ]
  },

  Aswan: {
    reallyLiked: [
      { name: "Full Sewing Kit", unverified: true },
      { name: "Pack of Pastels", unverified: true },
      { name: "The Works of Dante", unverified: true }
    ]
  },

  Tahonia: {
    loved: [
      { name: "History of a Master", unverified: true }
    ],
    reallyLiked: [
      { name: "Full Sewing Kit", unverified: true },
      { name: "The Works of Dante", unverified: true }
    ]
  },

  Alexandra: {
    loved: [
      { name: "Ahm Lu Cloth", unverified: true },
      { name: "Arrowhead Gem", unverified: true },
      { name: "Blue-Rose Bouquet", unverified: true },
      { name: "Ceremonial Spear", unverified: true },
      { name: "Decorative Arrows", unverified: true },
      { name: "Eastern Black Silk", unverified: true },
      { name: "Eastern Earrings", unverified: true },
      { name: "Flower Painting", unverified: true },
      { name: "Portrait of Yu Phas", unverified: true },
      { name: "Red Hair Clip", unverified: true },
      { name: "Shield Portrait", unverified: true },
      { name: "Strategy Manuscript", unverified: true },
      "Tales of Adventure"
    ],
    reallyLiked: [
      { name: "Alecto Garum", unverified: true },
      { name: "Concentrated Garum", unverified: true },
      { name: "Crimson Bull Figure", unverified: true },
      { name: "Crimson Ghosh", unverified: true },
      "Dagda Beard Grass",
      "Dual Fish Knives",
      { name: "Exquisite Ring", unverified: true },
      "Garum",
      { name: "Gaudy Bangle", unverified: true },
      "Herbal Recipe Guide",
      "Home-Recipe Book",
      "Horse-Grooming Kit",
      { name: "Jade Panther Figure", unverified: true },
      { name: "Joint-Relief Gloves", unverified: true },
      "Kitten Figurine",
      "Mane Ornament",
      "Niiza Garum",
      { name: "Outdoor Cooking Set", unverified: true },
      { name: "Pastry Cookbook", unverified: true },
      "Pegasus Panorama",
      { name: "Protection Figurine", unverified: true },
      { name: "Sharp Dagger", unverified: true },
      { name: "Skin Balm", unverified: true },
      { name: "Smooth Garum", unverified: true },
      "Strong Seasonings",
      "Sturdy Rucksack",
      { name: "Training Bracelet", unverified: true },
      { name: "Village Recipes", unverified: true },
      { name: "Wing Fletching", unverified: true }
    ]
  },

  Zarcone: {
    loved: [
      { name: "Eastern Tea Leaves", unverified: true }
    ],
    reallyLiked: [
      { name: "Eastern Earrings", unverified: true },
      { name: "Gaudy Bangle", unverified: true },
      { name: "Odd Vegetable Seeds", unverified: true },
      { name: "Pickled Bulbs", unverified: true },
      { name: "Pickled Vegetables", unverified: true },
      { name: "Potted Vegetables", unverified: true },
      { name: "Rare Southern Seeds", unverified: true },
      { name: "Strategy Manuscript", unverified: true },
      { name: "Tales of Adventure", unverified: true },
      { name: "Wing Fletching", unverified: true }
    ]
  },

  Jasmine: {
    loved: [
      { name: "Pegasus Panorama", unverified: true },
      { name: "Rugged Blade", unverified: true },
      { name: "Strategy Manuscript", unverified: true }
    ],
    reallyLiked: [
      "Arrowhead Gem",
      { name: "Coffee Pastries", unverified: true },
      { name: "Crimson Ghosh", unverified: true },
      { name: "Dual Fish Knives", unverified: true },
      { name: "Flower Painting", unverified: true },
      { name: "Fragrant Pastries", unverified: true },
      { name: "Ginji Cervi", unverified: true },
      { name: "Honey Milk", unverified: true },
      { name: "Honey Pastries", unverified: true },
      { name: "Imitation Medal", unverified: true },
      { name: "Jamel Milk", unverified: true },
      { name: "Joint-Relief Gloves", unverified: true },
      { name: "Kitten Figurine", unverified: true },
      { name: "Magic-Trick Set", unverified: true },
      { name: "Mature Dried Cervi", unverified: true },
      { name: "Mellow Pastries", unverified: true },
      { name: "Niiza Garum", unverified: true },
      { name: "Outdoor Cooking Set", unverified: true },
      { name: "Pack of Pastels", unverified: true },
      "Pastry Cookbook",
      "Protection Figurine",
      "Pure-White Cervi",
      "Rare Spices",
      "Saraminian Sweets",
      { name: "Simple Pastries", unverified: true },
      { name: "Strong Cervi", unverified: true },
      { name: "Sturdy Rucksack", unverified: true },
      { name: "Tome from Away", unverified: true },
      "Training Pillar",
      "Training Weights",
      { name: "Weak Cervi", unverified: true },
      { name: "Yarc Milk", unverified: true }
    ]
  },

  Inyoni: {
    loved: [
      { name: "Arrowhead Gem", unverified: true },
      { name: "Shield Portrait", unverified: true },
      "Strategy Manuscript",
      "Tales of Adventure"
    ],
    reallyLiked: [
      { name: "Bow Repair Kit", unverified: true },
      { name: "Crimson Ghosh", unverified: true },
      { name: "Eastern Black Silk", unverified: true },
      { name: "Eastern Board Game", unverified: true },
      "Eastern Tea Leaves",
      { name: "Flexible Fishing Rod", unverified: true },
      { name: "Huge Fish Eyeball", unverified: true },
      { name: "Joint-Relief Gloves", unverified: true },
      { name: "Protection Figurine", unverified: true },
      { name: "Sharp Fishhook", unverified: true },
      { name: "Sturdy Rucksack", unverified: true },
      { name: "Training Bracelet", unverified: true },
      { name: "Wing Fletching", unverified: true }
    ]
  },

  Kiroc: {
    loved: [
      { name: "Crimson Ghosh", unverified: true },
      { name: "Volcano Ghosh", unverified: true }
    ],
    reallyLiked: [
      { name: "Coffee Pastries", unverified: true },
      "Common Coffee",
      { name: "Flower Painting", unverified: true },
      { name: "Joint-Relief Gloves", unverified: true },
      { name: "Light Shosh", unverified: true },
      "Mature Ghosh",
      { name: "Mature Shosh", unverified: true },
      { name: "Orgus Coffee", unverified: true },
      { name: "Pack of Pastels", unverified: true },
      { name: "Red Hair Clip", unverified: true },
      { name: "Rustic Ghosh", unverified: true },
      "Select Coffee",
      { name: "Sharp Fishhook", unverified: true },
      "Southern Coffee",
      { name: "Training Pillar", unverified: true },
      { name: "Training Weights", unverified: true },
      { name: "Young Ghosh", unverified: true },
      { name: "Young Shosh", unverified: true }
    ]
  },

  Peppe: {
    loved: [
      { name: "Arrowhead Gem", unverified: true },
      { name: "Pegasus Panorama", unverified: true },
      { name: "Portrait of Yu Phas", unverified: true },
      { name: "Rancid Garum", unverified: true },
      { name: "Shield Portrait", unverified: true }
    ],
    reallyLiked: [
      { name: "Board-Game Tactics", unverified: true },
      "Coffee Pastries",
      "Common Coffee",
      "Crimson Ghosh",
      { name: "Herbal Recipe Guide", unverified: true },
      { name: "Joint-Relief Gloves", unverified: true },
      { name: "Kitten Figurine", unverified: true },
      { name: "Magic-Trick Set", unverified: true },
      { name: "Outdoor Cooking Set", unverified: true },
      { name: "Pack of Pastels", unverified: true },
      "Pastry Cookbook",
      { name: "Protection Figurine", unverified: true },
      "Select Coffee",
      { name: "Sharp Fishhook", unverified: true },
      { name: "Spirit Board Game", unverified: true },
      { name: "Sturdy Rucksack", unverified: true },
      { name: "The Works of Dante", unverified: true },
      { name: "Training Pillar", unverified: true },
      { name: "Training Weights", unverified: true }
    ]
  },

  Klapka: {
    reallyLiked: [
      { name: "Strategy Manuscript", unverified: true },
      { name: "Training Weights", unverified: true }
    ]
  },

  Benditz: {
    loved: [
      { name: "Arrowhead Gem", unverified: true },
      { name: "Blue-Rose Bouquet", unverified: true },
      { name: "Decorative Arrows", unverified: true },
      "Eastern Black Silk",
      { name: "Eastern Earrings", unverified: true },
      { name: "Eastern Tea Leaves", unverified: true },
      { name: "Portrait of Yu Phas", unverified: true },
      { name: "Rancid Garum", unverified: true },
      { name: "Red Hair Clip", unverified: true },
      { name: "Strategy Manuscript", unverified: true },
      { name: "Tales of Adventure", unverified: true }
    ],
    reallyLiked: [
      { name: "Ahm Lu Cloth", unverified: true },
      "Ceremonial Spear",
      "Coffee Pastries",
      { name: "Common Coffee", unverified: true },
      { name: "Crimson Ghosh", unverified: true },
      { name: "Eastern Love Story", unverified: true },
      { name: "Exquisite Ring", unverified: true },
      { name: "Flower Painting", unverified: true },
      { name: "Gaudy Bangle", unverified: true },
      { name: "Joint-Relief Gloves", unverified: true },
      { name: "Orgus Coffee", unverified: true },
      { name: "Select Coffee", unverified: true },
      { name: "Southern Coffee", unverified: true },
      { name: "Spirit Board Game", unverified: true },
      { name: "Wing Fletching", unverified: true }
    ]
  }
};

// Automatic joins only; most characters need to be recruited through their
// route-specific support, renown, and other requirements. Based on RPG Site's
// route-by-route recruitment guide: https://www.rpgsite.net/guide/21391-fire-emblem-fortunes-weave-recruitment-guide-all-characters-in-game-how-to-recruit-them
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
  const record = records[name] ?? {};
  const normalize = (gift: GiftRecordItem): GiftItem =>
    typeof gift === "string" ? { name: gift } : gift;
  return {
    name,
    loved: [...(record.loved ?? [])]
      .map(normalize)
      .sort((a, b) => a.name.localeCompare(b.name)),
    reallyLiked: [...(record.reallyLiked ?? [])]
      .map(normalize)
      .sort((a, b) => a.name.localeCompare(b.name)),
    automaticRecruitment: automaticRecruitment[name],
  };
});

export type GiftPreferenceCount = {
  name: string;
  lovedCount: number;
  reallyLikedCount: number;
  totalCount: number;
};

/** Rebuild item preference counts from the current character data. */
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
