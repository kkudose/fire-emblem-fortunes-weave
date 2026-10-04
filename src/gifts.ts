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

const names = `Eshmel|Cai|Dietrich|Theodora|Leda|Hong Hua|Troy|Tialla|Peter|Ultand|Fabio|Esmeralda|Mikaela|Bonaventure|Tobias|Lysander|Lilian|Buccar|Sirocco|Mu|Olympia|Bertrand|Gaitz|Dante|Goliath|Jester|Talimun|Ursula|Simon|Ludia|Fianna|Orchel|Diego|Ninae|Seteth|Loretta|Anatolia|Sha Lan|Nezha|Dadao|Halvin|Nathan|Creek|Guzran|Nydine|Io|Catania|Noctula|Yang Jie|Nuzzuo|Majide|Sofia|Centurio|Anna|Aswan|Tahonia|Alexandra|Zarcone|Jasmine|Inyoni|Kiroc|Peppe|Klapka|Sothis|Fortuna|Aurora|Mars|Kalla|Smyrnos|Credna|Jurah|Solel|Dagda|Balor|Yu Phas|Benditz|Maria|Raksha|The Lady of Lillies`.split('|');

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
// matrix. Absence from this file means unknown, not disliked. Broad category
// matches and family expansions are leads only; mark them unverified unless
// an exact reaction is confirmed. If a source establishes the top positive
// reaction but not whether it earns one or two arrows, place it in Really
// Liked; reserve Loved for evidence of the two-arrow reaction. Direct in-game
// confirmations supplied by the user are retained as verified records.
const records: Record<string, GiftRecord> = {
  "Benditz": {
    loved: ["Eastern Black Silk"],
    reallyLiked: [
      "Ahm Lu Cloth", "Ceremonial Spear", "Coffee Pastries", "Common Coffee",
      "Crimson Ghosh", "Exquisite Ring", "Flower Painting", "Joint-Relief Gloves",
      "Select Coffee", "Southern Coffee", "Spirit Board Game"
    ]
  },
  "Cai": {
    loved: ["Pegasus Panorama", "Portrait of Yu Phas", "Rancid Garum"],
    reallyLiked: ["Flower Painting"]
  },
  "Anatolia": {
    reallyLiked: [
      "Eastern Tea Leaves", "Magic-Trick Set", "Protection Figurine", "Flower Painting",
      "Eastern Black Silk", "Arrowhead Gem", "Tome from Away", "Bagua Divination Set",
      "Ceremonial Spear"
    ]
  },
  "Alexandra": {
    loved: ["Tales of Adventure"],
    reallyLiked: [
      "Garum",
      { name: "Concentrated Garum", unverified: true },
      "Niiza Garum", "Crimson Ghosh", "Outdoor Cooking Set",
      "Kitten Figurine", "Protection Figurine", "Crimson Bull Figure", "Jade Panther Figure",
      "Sharp Dagger", "Joint-Relief Gloves", "Skin Balm", "Exquisite Ring"
    ]
  },
  "Bonaventure": {
    reallyLiked: [
      "Alecto Garum", "Concentrated Garum", "Garum", "Smooth Garum", "Home-Recipe Book",
      "Herbal Recipe Guide", "Energizing Ghosh", "Magic-Trick Set", "Niiza Garum",
      "Rugged Blade", "Southern Ghosh", "Mature Ghosh", "Rustic Ghosh", "Young Ghosh",
      "Aromatic Shosh", "Light Shosh", "Mature Shosh", "Young Shosh",
      "Common Coffee", "Orgus Coffee", "Select Coffee", "Southern Coffee",
      "Protection Figurine", "Eastern Tea Leaves"
    ]
  },
  "Buccar": {
    reallyLiked: [
      "Flower Painting", "Energizing Ghosh", "Jade Ghosh",
      "Mature Ghosh", "Secret Ghosh", "Southern Ghosh", "Sun Ghosh",
      "Aromatic Shosh"
    ]
  },
  "Catania": {
    loved: ["Eastern Black Silk", "Tales of Adventure"],
    reallyLiked: [
      "Coffee Pastries", "Common Coffee", "Crimson Ghosh",
      "Exquisite Ring", "Mane Ornament",
      "Select Coffee", "Skin Balm", "Southern Coffee", "Spirit Board Game",
      "Ceremonial Spear", "Sharp Dagger", "Crafting Knives",
      "Crimson Bull Figure", "Jade Panther Figure"
    ]
  },
  "Centurio": {
    loved: ["Pegasus Panorama", "Portrait of Yu Phas", "Rancid Garum", "Shield Portrait"],
    reallyLiked: ["Small Teff", "Sharp Dagger"]
  },
  "Dadao": {
    reallyLiked: [
      "Weak Cervi", "Strong Cervi", "Ginji Cervi", "Pure-White Cervi",
      "Crimson Ghosh", "Arrowhead Gem", "Flower Painting",
      "Board-Game Tactics", "Eastern Black Silk"
    ]
  },
  "Dante": {
    reallyLiked: [
      "Coffee Pastries", "Common Coffee", "Select Coffee",
      "Southern Coffee", "Home-Recipe Book", "Herbal Recipe Guide",
      "Crimson Bull Figure", "Jade Panther Figure", "Crafting Knives", "Sharp Dagger",
      "Ceremonial Spear", "Eastern Black Silk"
    ]
  },
  "Diego": {
    reallyLiked: [
      "Flower Painting", "Candy Crystals", "Eastern Tea Leaves",
      "Bow Repair Kit", "Eastern Board Game", "Wing Fletching"
    ]
  },
  "Dietrich": {
    reallyLiked: [
      "Eastern Black Silk", "Flower Painting",
      "Fragrant Pastries", "Mellow Pastries",
      "Saraminian Sweets", "Simple Pastries"
    ]
  },
  "Theodora": {
    loved: ["Pegasus Panorama"],
    reallyLiked: ["Arrowhead Gem", "Eastern Tea Leaves", "Flower Painting", "Rugged Blade",
      "Portrait of Yu Phas", "Ceremonial Spear"]
  },
  "Esmeralda": {
    reallyLiked: [
      "Fragrant Pastries", "Coffee Pastries",
      "Saraminian Sweets", "Portrait of Yu Phas", "Red Hair Clip", "Blue-Rose Bouquet",
      "Exquisite Ring", "Ahm Lu Cloth", "Skin Balm", "Ceremonial Spear", "Tome from Away",
    ]
  },
  "Fabio": {
    reallyLiked: [
      "Morfis Almanac", "Crimson Ghosh", "Energizing Ghosh", "Volcano Ghosh",
      "Common Coffee", "Select Coffee", "Southern Coffee", "Orgus Coffee",
      "Rugged Blade", "Eastern Tea Leaves", "Tome from Away"
    ]
  },
  "Fianna": {
    loved: ["Arrowhead Gem", "Blue-Rose Bouquet", "Volcano Ghosh"],
    reallyLiked: [
      "Rare Spices", "Common Coffee", "Select Coffee", "Southern Coffee",
      "Orgus Coffee", "Tome from Away"
    ]
  },
  "Gaitz": {
    reallyLiked: [
      "Coffee Pastries", "Crimson Ghosh", "Common Coffee", "Select Coffee", "Southern Coffee",
      "Orgus Coffee", "Home-Recipe Book", "Herbal Recipe Guide", "Protection Figurine",
      "Sturdy Rucksack", "Mane Ornament", "Dagda Beard Grass", "Crimson Bull Figure",
      "Jade Panther Figure", "Horse-Grooming Kit", "The Works of Dante", "The Knight’s Suitors",
      "Thick Foreign Tome", "Crafting Knives", "Sharp Dagger", "Training Weights",
      "Training Pillar", "Joint-Relief Gloves", "Board-Game Tactics", "Spirit Board Game",
      "Arrowhead Gem", "Pack of Pastels"
    ]
  },
  "Goliath": {
    loved: ["Volcano Ghosh"],
    reallyLiked: [
      "Energizing Ghosh", "Mature Ghosh", "Mature Shosh", "Protection Figurine"
    ]
  },
  "Halvin": {
    reallyLiked: [
      "Weak Cervi", "Strong Cervi", "Ginji Cervi", "Pure-White Cervi", "Mature Dried Cervi",
      "Mellow Pastries", "Fragrant Pastries", "Honey Pastries", "Pack of Pastels", "Skin Balm"
    ]
  },
  "Inyoni": {
    reallyLiked: [
      "Crimson Ghosh", "Eastern Tea Leaves", "Protection Figurine", "Flexible Fishing Rod",
      "Bow Repair Kit", "Eastern Board Game", "Joint-Relief Gloves"
    ]
  },
  "Io": {
    loved: ["Ceremonial Spear", "Pegasus Panorama", "Portrait of Yu Phas", "Shield Portrait"],
    reallyLiked: ["Flower Painting"]
  },
  "Jasmine": {
    reallyLiked: [
      "Yarc Milk", "Honey Milk", "Weak Cervi", "Strong Cervi", "Ginji Cervi",
      "Mature Dried Cervi", "Simple Pastries", "Mellow Pastries", "Fragrant Pastries",
      "Coffee Pastries", "Saraminian Sweets", "Flower Painting", "Imitation Medal",
      "Tome from Away"
    ]
  },
  "Jester": {
    loved: ["Arrowhead Gem"],
    reallyLiked: [
      "Alecto Garum", "Concentrated Garum", "Garum", "Smooth Garum", "Niiza Garum",
      "Outdoor Cooking Set", "Strong Seasonings", "Home-Recipe Book", "Pastry Cookbook",
      "Rare Spices", "Herbal Recipe Guide", "Village Recipes"
    ]
  },
  "Lilian": {
    loved: ["Eastern Earrings", "Eastern Tea Leaves", "Poems of the Greats", "Strategy Manuscript"],
    reallyLiked: [
      { name: "Blue-Rose Bouquet", unverified: true }, { name: "Tales of Adventure", unverified: true }
    ]
  },
  "Leda": {
    reallyLiked: [
      "Energizing Ghosh", "Jade Ghosh"
    ]
  },
  "Lysander": {
    loved: ["Ceremonial Spear", "Flower Painting", "Pegasus Panorama", "Portrait of Yu Phas", "Shield Portrait"],
    reallyLiked: ["Sharp Dagger", "Training Weights"]
  },
  "Tobias": {
    reallyLiked: [
      { name: "Strategy Manuscript", unverified: true },
      { name: "Tales of Adventure", unverified: true },
      { name: "Volcano Ghosh", unverified: true },
      { name: "Aromatic Shosh", unverified: true }, { name: "Blue Shosh", unverified: true },
      { name: "Light Shosh", unverified: true }, { name: "Mature Shosh", unverified: true },
      { name: "Young Shosh", unverified: true }, { name: "Crimson Ghosh", unverified: true },
      { name: "Energizing Ghosh", unverified: true }, { name: "Jade Ghosh", unverified: true },
      { name: "Mature Ghosh", unverified: true }, { name: "Rustic Ghosh", unverified: true },
      { name: "Secret Ghosh", unverified: true }, { name: "Southern Ghosh", unverified: true },
      { name: "Sun Ghosh", unverified: true }, { name: "Young Ghosh", unverified: true }
    ]
  },
  "Ludia": {
    loved: ["Arrowhead Gem", "Eastern Black Silk", "Flower Painting", "History of a Master",
      "Pegasus Panorama", "Poems of the Greats", "Portrait of Yu Phas", "Shield Portrait", "Tales of Adventure",
      "Tome from Away"],
    reallyLiked: ["Ceremonial Spear", "Pack of Pastels",
      { name: "Everyday Scenes", unverified: true }, { name: "Herbal Recipe Guide", unverified: true },
      { name: "Home-Recipe Book", unverified: true }, { name: "Sturdy Rucksack", unverified: true },
      { name: "The Works of Dante", unverified: true }, { name: "Trader’s Handbook", unverified: true },
      { name: "Eastern Earrings", unverified: true }, { name: "Eastern Love Story", unverified: true },
      { name: "Eastern Tea Leaves", unverified: true }, { name: "Strategy Manuscript", unverified: true }]
  },
  "Majide": {
    reallyLiked: ["Energizing Ghosh", "Jade Ghosh", "Mature Ghosh", "Secret Ghosh", "Southern Ghosh", "Sun Ghosh",
      { name: "Aromatic Shosh", unverified: true }]
  },
  "Mikaela": {
    reallyLiked: [
      "Crimson Ghosh", "Energizing Ghosh", "Volcano Ghosh",
      "Common Coffee", "Select Coffee", "Southern Coffee", "Orgus Coffee", "Training Weights",
      "Training Pillar", "Arrowhead Gem", "Tome from Away", "Flower Painting"
    ]
  },
  "Mu": {
    reallyLiked: [
      "Weak Cervi", "Strong Cervi", "Ginji Cervi", "Mature Dried Cervi",
      "Saraminian Sweets", "Orgus Coffee", "Morfis Almanac"
    ]
  },
  "Nezha": {
    loved: ["Arrowhead Gem", "Ceremonial Spear", "Decorative Arrows", "Portrait of Yu Phas", "Shield Portrait"],
    reallyLiked: [
      { name: "Strategy Manuscript", unverified: true }, { name: "Tales of Adventure", unverified: true },
      "Flower Painting", "Joint-Relief Gloves", { name: "Training Pillar" },
      { name: "Eastern Tea Leaves", unverified: true }, { name: "Pickled Bulbs", unverified: true },
      { name: "Board-Game Tactics", unverified: true }, { name: "Ebony Game Board", unverified: true },
      { name: "Eastern Board Game", unverified: true }, "Pickled Vegetables",
      "Potted Vegetables", { name: "Rare Southern Seeds", unverified: true },
      "Training Weights"
    ]
  },
  "Nydine": {
    reallyLiked: [
      "Saraminian Sweets", "Arrowhead Gem", "Eastern Black Silk",
      "Joint-Relief Gloves", "Tome from Away", "Horse-Grooming Kit", "Mane Ornament"
    ]
  },
  "Ninae": {
    loved: ["Eastern Black Silk", "Portrait of Yu Phas", "Poems of the Greats", "Tales of Adventure"],
    reallyLiked: [
      "Flower Painting", "Ahm Lu Cloth", "Morfis Almanac", "Tome from Away",
      { name: "Blue-Rose Bouquet", unverified: true }, { name: "Strategy Manuscript", unverified: true }
    ]
  },
  "Noctula": {
    reallyLiked: [
      "Crimson Ghosh", "Eastern Tea Leaves", "Arrowhead Gem",
      "Morfis Almanac", "Training Weights", "Antique Medal", "Tome from Away", "Sharp Dagger"
    ]
  },
  "Nuzzuo": {
    reallyLiked: [
      "Small Teff", "Arrowhead Gem", "Dual Fish Knives", "Coffee Pastries", "Candy Crystals",
      { name: "Alecto Garum", unverified: true }, "Concentrated Garum", "Garum", "Smooth Garum",
      "Common Coffee", "Select Coffee", "Southern Coffee", "Orgus Coffee", "Potted Vegetables",
      "Strong Seasonings", "Rare Spices", "Herbal Recipe Guide", "Eastern Tea Leaves",
      "Bow Repair Kit", "Crafting Knives", "Sharp Dagger", "Flower Painting", "Eastern Black Silk"
    ]
  },
  "Olympia": {
    loved: ["Arrowhead Gem", "Flower Painting", "Pegasus Panorama", "Portrait of Yu Phas", "Red Hair Clip",
      "Shield Portrait", "Tales of Adventure"],
    reallyLiked: ["Orgus Coffee", { name: "Coffee Pastries", unverified: true },
      { name: "Common Coffee", unverified: true },
      { name: "Blue-Rose Bouquet", unverified: true }, { name: "Ebony Game Board", unverified: true },
      { name: "Eastern Board Game", unverified: true }, { name: "Spirit Board Game", unverified: true },
      { name: "Select Coffee", unverified: true }, { name: "Skin Balm", unverified: true },
      { name: "Southern Coffee", unverified: true }, { name: "Pack of Pastels", unverified: true },
      { name: "Eastern Earrings", unverified: true }, { name: "Eastern Tea Leaves", unverified: true }]
  },
  "Loretta": {
    reallyLiked: [
      "Flower Painting", "Saraminian Sweets",
      "Eastern Black Silk", { name: "Fragrant Pastries" },
      { name: "Candy Crystals", unverified: true }, { name: "Coffee Pastries", unverified: true },
      { name: "Honey Pastries", unverified: true },
      { name: "Jamel Milk", unverified: true },
      { name: "Pastry Cookbook", unverified: true },
      { name: "Simple Pastries", unverified: true }
    ]
  },
  "Sofia": {
    reallyLiked: [
      "Honey Milk", "Weak Cervi", "Strong Cervi", "Mature Dried Cervi",
      "Simple Pastries", "Mellow Pastries", "Fragrant Pastries", "Coffee Pastries",
      "Saraminian Sweets", "Alecto Garum", "Concentrated Garum", "Garum",
      "Common Coffee", "Select Coffee", "Southern Coffee", "Orgus Coffee",
      "Meaty Delicacy", "Eastern Tea Leaves"
    ]
  },
  "Talimun": {
    reallyLiked: [
      "Crimson Ghosh", "Energizing Ghosh", "Jade Ghosh", "Mature Ghosh", "Rustic Ghosh", "Secret Ghosh",
      "Southern Ghosh", "Sun Ghosh", "Young Ghosh"
    ]
  },
  "Guzran": {
    reallyLiked: ["Energizing Ghosh", "Mature Ghosh"]
  },
  "Orchel": {
    loved: ["Blue-Rose Bouquet", "Flower Painting", "Portrait of Yu Phas", "Shield Portrait"],
    reallyLiked: ["Outdoor Cooking Set", "Home-Recipe Book", "Saraminian Sweets"]
  },
  "Peppe": {
    loved: ["Pegasus Panorama", "Portrait of Yu Phas", "Rancid Garum", "Shield Portrait"],
    reallyLiked: [{ name: "Common Coffee", unverified: true },
      { name: "Orgus Coffee", unverified: true }, { name: "Protection Figurine", unverified: true },
      { name: "Select Coffee", unverified: true }, { name: "Southern Coffee", unverified: true }]
  },
  "Peter": {
    reallyLiked: [
      { name: "Arrowhead Gem", unverified: true },
      { name: "Strong Cervi" },
      { name: "Weak Cervi", unverified: true },
      { name: "Pure-White Cervi", unverified: true }, { name: "Yarc Milk", unverified: true }, "Jamel Milk"
    ]
  },
  "Bertrand": {
    reallyLiked: [{ name: "Eastern Love Story", unverified: true },
      { name: "Herbal Recipe Guide", unverified: true }, { name: "Home-Recipe Book", unverified: true },
      { name: "Poems of the Greats", unverified: true }, { name: "Strategy Manuscript", unverified: true },
      { name: "Tales of Adventure", unverified: true }, { name: "The Works of Dante", unverified: true },
      { name: "Trader’s Handbook", unverified: true }]
  },
  "Kiroc": {
    reallyLiked: [
      { name: "Arrowhead Gem", unverified: true },
      { name: "Crimson Ghosh", unverified: true },
      { name: "Volcano Ghosh", unverified: true },
      { name: "Blue-Rose Bouquet", unverified: true }, { name: "Eastern Black Silk", unverified: true },
      { name: "Eastern Earrings", unverified: true }, { name: "Exquisite Ring", unverified: true },
      { name: "Flower Painting", unverified: true }, { name: "Gaudy Bangle", unverified: true },
      "Light Shosh", "Mature Shosh", "Young Shosh",
      { name: "Pack of Pastels", unverified: true }, { name: "Red Hair Clip", unverified: true },
      { name: "Select Coffee", unverified: true }, { name: "Skin Balm", unverified: true }
    ]
  },
  "Seteth": {
    reallyLiked: [
      "Eastern Black Silk", "Ceremonial Spear", "Crimson Ghosh", "Orgus Coffee",
      "Flower Painting", "Sharp Fishhook"
    ]
  },
  "Simon": {
    loved: ["Portrait of Yu Phas", "Rancid Garum", "Shield Portrait"],
    reallyLiked: ["Flower Painting", "Arrowhead Gem", "Joint-Relief Gloves",
      { name: "Eastern Board Game", unverified: true }, "Pickled Bulbs",
      { name: "Outdoor Cooking Set", unverified: true }, { name: "Eastern Tea Leaves", unverified: true },
      "Pickled Vegetables"]
  },
  "Sha Lan": {
    loved: ["Portrait of Yu Phas", "Special “Medicine”"],
    reallyLiked: [{ name: "Ceremonial Spear", unverified: true }, { name: "Arrowhead Gem", unverified: true },
      { name: "Flexible Fishing Rod", unverified: true }, { name: "Sharp Fishhook", unverified: true }]
  },
  "Sirocco": {
    loved: ["Arrowhead Gem", "Crimson Ghosh", "Volcano Ghosh"],
    reallyLiked: [
      "Energizing Ghosh", "Young Ghosh", "Crimson Bull Figure",
      "Jade Panther Figure", "Gaudy Bangle", "Eastern Board Game"
    ]
  },
  "Tialla": {
    reallyLiked: [
      "Jamel Milk", "Weak Cervi", "Strong Cervi", "Ginji Cervi", "Pure-White Cervi",
      "Spirit Board Game", "Concentrated Garum", "Garum", "Niiza Garum",
      "Pickled Bulbs", "Potted Vegetables", "Outdoor Cooking Set", "Strong Seasonings",
      "Home-Recipe Book", "Herbal Recipe Guide", "Protection Figurine", "The Works of Dante",
      "Ceremonial Spear", "Skin Balm", "Eastern Black Silk", "Ahm Lu Cloth", "Arrowhead Gem",
      "Board-Game Tactics", "The Knight’s Suitors", "Thick Foreign Tome", "Trader’s Handbook", "Village Recipes"
    ]
  },
  "Ultand": {
    reallyLiked: [
      { name: "Alecto Garum", unverified: true }, "Concentrated Garum", "Garum", "Niiza Garum",
      "Strong Seasonings", "Home-Recipe Book", "Herbal Recipe Guide", "Village Recipes", "Dual Fish Knives",
      "Secret Ghosh", "Tome from Away", "Morfis Almanac", "Rugged Blade", "Ceremonial Spear",
      "Skin Balm", "Eastern Black Silk", "Ahm Lu Cloth", "Eastern Board Game", "Exquisite Ring",
      "Arrowhead Gem", "Flower Painting"
    ]
  },
  "Ursula": {
    reallyLiked: [
      "Coffee Pastries", "Common Coffee", "Select Coffee", "Southern Coffee", "Orgus Coffee",
      "Arrowhead Gem", "Eastern Black Silk", "Ahm Lu Cloth"
    ]
  },
  "Yang Jie": {
    reallyLiked: [
      "Crimson Ghosh", "Energizing Ghosh", "Jade Ghosh", "Mature Ghosh", "Rustic Ghosh", "Secret Ghosh",
      "Southern Ghosh", "Sun Ghosh", "Volcano Ghosh", "Young Ghosh",
      "Aromatic Shosh", "Light Shosh", "Mature Shosh",
      "Young Shosh"
    ]
  },
  "Zarcone": {
    reallyLiked: [{ name: "Eastern Tea Leaves", unverified: true }, "Pickled Vegetables", { name: "Odd Vegetable Seeds", unverified: true },
      { name: "Rare Southern Seeds", unverified: true }]
  }
};

// Automatic joins only; most characters need to be recruited through their
// route-specific support, renown, and other requirements. Based on RPG Site's
// route-by-route recruitment guide: https://www.rpgsite.net/guide/21391-fire-emblem-fortunes-weave-recruitment-guide-all-characters-in-game-how-to-recruit-them
const automaticRecruitment: Record<string, string> = {
  Cai: "Automatically joins on Cai's Path.",
  Tialla: "Automatically joins on Cai's Path.",
  Peter: "Automatically joins on Cai's Path.",
  Ultand: "Automatically joins on Cai's Path (Chapter 6).",
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
  "Yang Jie": "Automatically joins on Dietrich's Path during the recruitment tutorial.",
  Sofia: "Automatically joins on Theodora's Path during the recruitment tutorial.",
  Catania: "Automatically joins on Leda's Path during the recruitment tutorial.",
  Orchel: "Automatically joins on all Paths in Part III: Salvation, First Section. Complete her Part I Paralogue to ensure she joins.",
  Talimun: "Automatically joins on all Paths in Part III: Salvation, First Section. Complete his Part I Paralogue to ensure he joins.",
  Anatolia: "Automatically joins on all Paths in Part III: Salvation, First Section. Complete her Part I Paralogue to ensure she joins.",
  Bertrand: "Automatically joins on all Paths as a guest in Part II: War and as a full unit in Part III: Salvation. Complete his Part I Paralogue to ensure he joins.",
  "Hong Hua": "Automatically joins on all Paths in the Prologue and Part III: Salvation.",
  Troy: "Automatically joins on all Paths in the Prologue and Part III: Salvation.",
  Aswan: "Automatically joins on all Paths in Part III: Salvation, Fifth Section, if he survives as a guest unit in Part II, Chapter 3.",
  Tahonia: "Automatically joins on all Paths in Part III: Salvation, Fifth Section, if she survives as a guest unit in Part II, Chapter 3.",
  Klapka: "Automatically joins on all Paths in Part III: Salvation, Sixth Section, if he survives as a guest unit in the Fifth Section."
};

export const characters: CharacterGifts[] = names.map((name) => {
  const record = records[name] ?? {};
  const normalize = (gift: GiftRecordItem): GiftItem => typeof gift === "string" ? { name: gift } : gift;
  return {
    name,
    loved: [...(record.loved ?? [])].map(normalize).sort((a, b) => a.name.localeCompare(b.name)),
    reallyLiked: [...(record.reallyLiked ?? [])].map(normalize).sort((a, b) => a.name.localeCompare(b.name)),
    automaticRecruitment: automaticRecruitment[name]
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
      ['lovedCount', character.loved],
      ['reallyLikedCount', character.reallyLiked]
    ] as const) {
      for (const gift of gifts) {
        const count = counts.get(gift.name) ?? {
          name: gift.name,
          lovedCount: 0,
          reallyLikedCount: 0,
          totalCount: 0
        };
        count[tier] += 1;
        count.totalCount += 1;
        counts.set(gift.name, count);
      }
    }
  }

  return [...counts.values()].sort((a, b) => a.name.localeCompare(b.name));
};
