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

// Research uses eligible exact-pair evidence from Game8, Yuphas Temple,
// Raider King, and Redfreshet. Banned sources and category-only recommendations are excluded.
// Require two independent eligible sources for public-source verification;
// direct in-game confirmations are authoritative. A Loved/Really Liked-only
// conflict is recorded as Really Liked without an unverified flag. Check for
// translation or tier-label mapping issues when mismatches appear systematic.
// Source omissions mean unknown, not disliked. See GIFT_DATA_RESEARCH.md.
const records: Record<string, GiftRecord> = {
  Cai: {
    loved: [
      { name: "Ceremonial Spear", unverified: true },
      { name: "Dagda Beard Grass", unverified: true },
      { name: "Horse-Grooming Kit", unverified: true },
      { name: "Mane Ornament", unverified: true },
      "Pegasus Panorama",
      "Portrait of Yu Phas",
      "Rancid Garum",
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
      "Ebony Game Board",
      { name: "Fragrant Pastries", unverified: true },
      { name: "Mellow Pastries", unverified: true },
      { name: "Portrait of Yu Phas", unverified: true },
      "Rugged Blade",
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
      "Ginji Cervi",
      "Honey Milk",
      { name: "Honey Pastries", unverified: true },
      { name: "Huge Fish Eyeball", unverified: true },
      { name: "Joint-Relief Gloves", unverified: true },
      { name: "Kitten Figurine", unverified: true },
      "Pastry Cookbook",
      "Pegasus Panorama",
      { name: "Protection Figurine", unverified: true },
      { name: "Pure-White Cervi", unverified: true },
      "Saraminian Sweets",
      "Simple Pastries",
      { name: "Spirit Board Game", unverified: true },
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
      { name: "Dagda Beard Grass", unverified: true },
      { name: "Decorative Arrows", unverified: true },
      { name: "Decorative Bow", unverified: true },
      { name: "Dual Fish Knives", unverified: true },
      "Eastern Black Silk",
      { name: "Eastern Earrings", unverified: true },
      "Eastern Tea Leaves",
      { name: "Exquisite Ring", unverified: true },
      { name: "Flower Painting", unverified: true },
      { name: "Gaudy Bangle", unverified: true },
      { name: "Horse-Grooming Kit", unverified: true },
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
      "Arrowhead Gem",
      { name: "Exquisite Ring", unverified: true },
      "Flower Painting",
      { name: "Full Sewing Kit", unverified: true },
      { name: "History of a Master", unverified: true },
      "Portrait of Yu Phas",
      { name: "Skin Balm", unverified: true },
      "Tales of Adventure"
    ],
    reallyLiked: [
      { name: "Aromatic Shosh", unverified: true },
      { name: "Blue Shosh", unverified: true },
      { name: "Brined Fish Guts", unverified: true },
      "Crimson Ghosh",
      { name: "Dagda Beard Grass", unverified: true },
      "Eastern Black Silk",
      "Eastern Earrings",
      { name: "Eastern Tea Leaves", unverified: true },
      "Energizing Ghosh",
      { name: "Gaudy Bangle", unverified: true },
      { name: "Horse-Grooming Kit", unverified: true },
      { name: "Huge Fish Eyeball", unverified: true },
      "Jade Ghosh",
      { name: "Kitten Figurine", unverified: true },
      { name: "Light Shosh", unverified: true },
      { name: "Magic-Trick Set", unverified: true },
      "Mature Ghosh",
      { name: "Mature Shosh", unverified: true },
      { name: "Meaty Delicacy", unverified: true },
      { name: "Pack of Pastels", unverified: true },
      { name: "Pegasus Panorama", unverified: true },
      "Rustic Ghosh",
      "Secret Ghosh",
      { name: "Shield Portrait", unverified: true },
      "Southern Ghosh",
      "Sun Ghosh",
      { name: "Training Bracelet", unverified: true },
      "Volcano Ghosh",
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
      { name: "Coffee Pastries", unverified: true },
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
      "Dual Fish Knives",
      "Eastern Board Game",
      "Ebony Game Board",
      "Flower Painting",
      { name: "History of a Master", unverified: true },
      "Morfis Almanac",
      "Morfis Tea",
      "Portrait of Yu Phas",
      { name: "School Scandal", unverified: true },
      "Tome from Away"
    ],
    reallyLiked: [
      "Ahm Lu Cloth",
      { name: "Alecto Garum", unverified: true },
      "Arrowhead Gem",
      "Blue-Rose Bouquet",
      "Board-Game Tactics",
      { name: "Ceremonial Spear", unverified: true },
      "Concentrated Garum",
      "Eastern Black Silk",
      { name: "Eastern Love Story", unverified: true },
      { name: "Eastern Tea Leaves", unverified: true },
      { name: "Everyday Scenes", unverified: true },
      "Garum",
      { name: "Ginji Cervi", unverified: true },
      "Herbal Recipe Guide",
      "Home-Recipe Book",
      "Jamel Milk",
      "Mature Dried Cervi",
      "Niiza Garum",
      "Outdoor Cooking Set",
      { name: "Pastry Cookbook", unverified: true },
      "Pickled Bulbs",
      "Potted Vegetables",
      "Protection Figurine",
      "Skin Balm",
      { name: "Smooth Garum", unverified: true },
      { name: "Solomon Coffee", unverified: true },
      "Spirit Board Game",
      { name: "Strategy Manuscript", unverified: true },
      { name: "Strong Cervi", unverified: true },
      "Strong Seasonings",
      "Tales of Adventure",
      { name: "Tales of the Arena", unverified: true },
      "The Knight’s Suitors",
      "The Works of Dante",
      "Thick Foreign Tome",
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
      { name: "History of a Master", unverified: true },
      { name: "Legendary Garum", unverified: true },
      "Portrait of Yu Phas",
      "Rancid Garum",
      "Tales of Adventure"
    ],
    reallyLiked: [
      { name: "Ahm Lu Cloth", unverified: true },
      { name: "Arrowhead Gem", unverified: true },
      "Blue-Rose Bouquet",
      { name: "Candy Crystals", unverified: true },
      { name: "Ceremonial Spear", unverified: true },
      "Concentrated Garum",
      "Crimson Ghosh",
      "Dual Fish Knives",
      { name: "Eastern Black Silk", unverified: true },
      { name: "Eastern Board Game", unverified: true },
      { name: "Eastern Love Story", unverified: true },
      { name: "Exquisite Ring", unverified: true },
      { name: "Flower Painting", unverified: true },
      { name: "Full Sewing Kit", unverified: true },
      "Garum",
      "Herbal Recipe Guide",
      "Home-Recipe Book",
      { name: "Morfis Almanac", unverified: true },
      "Niiza Garum",
      "Outdoor Cooking Set",
      { name: "Pastry Cookbook", unverified: true },
      { name: "Rugged Blade", unverified: true },
      "Skin Balm",
      "Strong Seasonings",
      "The Knight’s Suitors",
      { name: "Tome from Away", unverified: true }
    ]
  },

  Fabio: {
    loved: [
      "Flower Painting",
      "Pegasus Panorama",
      "Rare Southern Seeds",
      { name: "Tales of Adventure", unverified: true }
    ],
    reallyLiked: [
      { name: "Aromatic Shosh", unverified: true },
      { name: "Brined Fish Guts", unverified: true },
      { name: "Coffee Pastries", unverified: true },
      "Common Coffee",
      "Crimson Ghosh",
      { name: "Dagda Beard Grass", unverified: true },
      "Eastern Black Silk",
      "Eastern Tea Leaves",
      "Energizing Ghosh",
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
      "Volcano Ghosh",
      "Young Ghosh"
    ]
  },

  Esmeralda: {
    loved: [
      "Tales of Adventure"
    ],
    reallyLiked: [
      "Ahm Lu Cloth",
      { name: "Alecto Garum", unverified: true },
      "Arrowhead Gem",
      "Blue-Rose Bouquet",
      "Bow Repair Kit",
      { name: "Ceremonial Spear", unverified: true },
      { name: "Coffee Pastries", unverified: true },
      { name: "Dagda Beard Grass", unverified: true },
      "Dual Fish Knives",
      "Eastern Black Silk",
      "Eastern Earrings",
      { name: "Eastern Tea Leaves", unverified: true },
      "Exquisite Ring",
      "Flexible Fishing Rod",
      "Flower Painting",
      { name: "Fragrant Pastries", unverified: true },
      "Garum",
      "Gaudy Bangle",
      { name: "Herbal Recipe Guide", unverified: true },
      { name: "Home-Recipe Book", unverified: true },
      { name: "Horse-Grooming Kit", unverified: true },
      { name: "Huge Fish Eyeball", unverified: true },
      { name: "Kitten Figurine", unverified: true },
      { name: "Mellow Pastries", unverified: true },
      { name: "Pastry Cookbook", unverified: true },
      "Portrait of Yu Phas",
      "Red Hair Clip",
      "Saraminian Sweets",
      "Sharp Fishhook",
      { name: "Simple Pastries", unverified: true },
      "Skin Balm",
      { name: "Smooth Garum", unverified: true },
      { name: "Strong Seasonings", unverified: true },
      { name: "Tome from Away", unverified: true },
      { name: "Training Bracelet", unverified: true },
      { name: "Village Recipes", unverified: true }
    ]
  },

  Mikaela: {
    loved: [
      "Rugged Blade",
      { name: "Tales of Adventure", unverified: true }
    ],
    reallyLiked: [
      { name: "Alecto Garum", unverified: true },
      { name: "Aromatic Shosh", unverified: true },
      { name: "Arrowhead Gem", unverified: true },
      { name: "Coffee Pastries", unverified: true },
      "Common Coffee",
      "Crimson Ghosh",
      { name: "Eastern Tea Leaves", unverified: true },
      "Energizing Ghosh",
      { name: "Flower Painting", unverified: true },
      "Garum",
      { name: "Herbal Recipe Guide", unverified: true },
      "Home-Recipe Book",
      { name: "Huge Fish Eyeball", unverified: true },
      "Jade Ghosh",
      { name: "Light Shosh", unverified: true },
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
      "Strategy Manuscript",
      { name: "Strong Seasonings", unverified: true },
      "Sun Ghosh",
      { name: "Tome from Away", unverified: true },
      "Training Pillar",
      "Training Weights",
      { name: "Village Recipes", unverified: true },
      "Volcano Ghosh",
      { name: "Wing Fletching", unverified: true },
      "Young Ghosh"
    ]
  },

  Bonaventure: {
    loved: [

    ],
    reallyLiked: [
      "Aromatic Shosh",
      "Blue Shosh",
      { name: "Ceremonial Spear", unverified: true },
      "Common Coffee",
      "Crimson Ghosh",
      "Dual Fish Knives",
      { name: "Eastern Black Silk", unverified: true },
      { name: "Eastern Tea Leaves", unverified: true },
      "Energizing Ghosh",
      "Garum",
      "Herbal Recipe Guide",
      "Home-Recipe Book",
      "Jade Ghosh",
      "Light Shosh",
      "Magic-Trick Set",
      "Mature Ghosh",
      "Mature Shosh",
      "Morfis Almanac",
      "Orgus Coffee",
      "Pastry Cookbook",
      "Poems of the Greats",
      "Protection Figurine",
      "Rare Spices",
      { name: "Rugged Blade", unverified: true },
      "Rustic Ghosh",
      "School Scandal",
      "Secret Ghosh",
      "Select Coffee",
      "Southern Coffee",
      "Southern Ghosh",
      "Strategy Manuscript",
      { name: "Strong Seasonings", unverified: true },
      "Sun Ghosh",
      "Tales of the Arena",
      { name: "The Works of Dante", unverified: true },
      { name: "Thick Foreign Tome", unverified: true },
      "Tome from Away",
      { name: "Village Recipes", unverified: true },
      "Volcano Ghosh",
      "Young Ghosh",
      "Young Shosh"
    ]
  },

  Tobias: {
    loved: [
      { name: "Tales of Adventure", unverified: true }
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
      "Strategy Manuscript",
      { name: "Strong Seasonings", unverified: true },
      { name: "Sturdy Rucksack", unverified: true },
      "Sun Ghosh",
      { name: "Training Bracelet", unverified: true },
      { name: "Village Recipes", unverified: true },
      "Volcano Ghosh",
      { name: "Wing Fletching", unverified: true },
      { name: "Young Ghosh", unverified: true }
    ]
  },

  Lysander: {
    loved: [
      "Ceremonial Spear",
      "Flower Painting",
      "Pegasus Panorama",
      "Portrait of Yu Phas",
      "Shield Portrait"
    ],
    reallyLiked: [
      { name: "Dagda Beard Grass", unverified: true },
      { name: "Eastern Tea Leaves", unverified: true },
      { name: "Horse-Grooming Kit", unverified: true },
      { name: "Mane Ornament", unverified: true },
      { name: "Sharp Dagger", unverified: true },
      { name: "Training Weights", unverified: true },
      { name: "Wing Fletching", unverified: true }
    ]
  },

  Lilian: {
    loved: [
      "Eastern Tea Leaves",
      { name: "Tales of Adventure", unverified: true }
    ],
    reallyLiked: [
      { name: "Decorative Arrows", unverified: true },
      "Eastern Earrings",
      { name: "Gaudy Bangle", unverified: true },
      { name: "Herbal Recipe Guide", unverified: true },
      { name: "Home-Recipe Book", unverified: true },
      { name: "Morfis Almanac", unverified: true },
      { name: "Pastry Cookbook", unverified: true },
      "Poems of the Greats",
      { name: "Rare Spices", unverified: true },
      "Strategy Manuscript",
      { name: "Strong Seasonings", unverified: true },
      "Trader’s Handbook",
      { name: "Training Bracelet", unverified: true },
      { name: "Village Recipes", unverified: true },
      { name: "Wing Fletching", unverified: true }
    ]
  },

  Buccar: {
    loved: [
      { name: "Legendary Garum", unverified: true },
      "Pegasus Panorama",
      "Portrait of Yu Phas",
      "Rancid Garum",
      "Shield Portrait",
      "Special “Medicine”"
    ],
    reallyLiked: [
      "Aromatic Shosh",
      "Arrowhead Gem",
      "Blue Shosh",
      { name: "Ceremonial Spear", unverified: true },
      "Crimson Ghosh",
      "Dual Fish Knives",
      { name: "Eastern Tea Leaves", unverified: true },
      "Energizing Ghosh",
      { name: "Flower Painting", unverified: true },
      "Garum",
      { name: "Home-Recipe Book", unverified: true },
      "Jade Ghosh",
      "Light Shosh",
      "Mature Ghosh",
      "Mature Shosh",
      "Niiza Garum",
      { name: "Outdoor Cooking Set", unverified: true },
      { name: "Rare Spices", unverified: true },
      "Rustic Ghosh",
      "Secret Ghosh",
      "Southern Ghosh",
      "Sun Ghosh",
      { name: "Village Recipes", unverified: true },
      "Volcano Ghosh",
      "Young Ghosh",
      "Young Shosh"
    ]
  },

  Sirocco: {
    loved: [
      "Eastern Earrings",
      "Flower Painting",
      "History of a Master",
      { name: "Poems of the Greats", unverified: true },
      "Portrait of Yu Phas",
      "Shield Portrait",
      "Tales of Adventure"
    ],
    reallyLiked: [
      "Arrowhead Gem",
      "Crimson Bull Figure",
      "Crimson Ghosh",
      { name: "Eastern Board Game", unverified: true },
      { name: "Eastern Love Story", unverified: true },
      "Energizing Ghosh",
      "Gaudy Bangle",
      "Jade Ghosh",
      "Jade Panther Figure",
      { name: "Joint-Relief Gloves", unverified: true },
      { name: "Light Shosh", unverified: true },
      "Mature Ghosh",
      { name: "Mature Shosh", unverified: true },
      "Pack of Pastels",
      "Rustic Ghosh",
      "Secret Ghosh",
      { name: "Skin Balm", unverified: true },
      "Southern Ghosh",
      "Sun Ghosh",
      { name: "Tome from Away", unverified: true },
      "Volcano Ghosh",
      "Young Ghosh",
      { name: "Young Shosh", unverified: true }
    ]
  },

  Mu: {
    loved: [
      "Candy Crystals",
      { name: "History of a Master", unverified: true },
      "Tales of Adventure"
    ],
    reallyLiked: [
      "Arrowhead Gem",
      "Ginji Cervi",
      { name: "Honey Pastries", unverified: true },
      "Jamel Milk",
      "Mature Dried Cervi",
      "Morfis Almanac",
      "Morfis Tea",
      "Orgus Coffee",
      { name: "Outdoor Cooking Set", unverified: true },
      { name: "Pickled Vegetables", unverified: true },
      "Portrait of Yu Phas",
      "Pure-White Cervi",
      "Saraminian Sweets",
      "Strong Cervi",
      { name: "Tome from Away", unverified: true },
      "Weak Cervi",
      { name: "Yarc Milk", unverified: true }
    ]
  },

  Olympia: {
    loved: [
      "Arrowhead Gem",
      { name: "Blue-Rose Bouquet", unverified: true },
      { name: "Eastern Tea Leaves", unverified: true },
      "Flower Painting",
      { name: "History of a Master", unverified: true },
      "Pegasus Panorama",
      "Portrait of Yu Phas",
      "Red Hair Clip",
      "Shield Portrait",
      "Tales of Adventure"
    ],
    reallyLiked: [
      { name: "Coffee Pastries", unverified: true },
      "Common Coffee",
      "Eastern Earrings",
      "Exquisite Ring",
      { name: "Gaudy Bangle", unverified: true },
      { name: "Morfis Almanac", unverified: true },
      "Orgus Coffee",
      { name: "Pack of Pastels", unverified: true },
      { name: "Select Coffee", unverified: true },
      { name: "Skin Balm", unverified: true },
      { name: "Southern Coffee", unverified: true }
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
      "Garum",
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
      { name: "Training Bracelet", unverified: true }
    ]
  },

  Gaitz: {
    loved: [
      "Ahm Lu Cloth",
      "Ceremonial Spear",
      "Decorative Arrows",
      "Eastern Black Silk",
      "Eastern Board Game",
      "Ebony Game Board",
      "Flower Painting",
      { name: "History of a Master", unverified: true },
      "Morfis Almanac",
      "Pegasus Panorama",
      "Portrait of Yu Phas",
      "Rancid Garum",
      "Rugged Blade",
      "School Scandal",
      "Shield Portrait",
      "Tales of Adventure",
      "Tome from Away"
    ],
    reallyLiked: [
      "Arrowhead Gem",
      "Board-Game Tactics",
      "Coffee Pastries",
      "Common Coffee",
      "Crafting Knives",
      "Crimson Bull Figure",
      "Crimson Ghosh",
      "Dagda Beard Grass",
      "Herbal Recipe Guide",
      "Home-Recipe Book",
      "Horse-Grooming Kit",
      "Jade Panther Figure",
      "Joint-Relief Gloves",
      "Mane Ornament",
      { name: "Orgus Coffee", unverified: true },
      "Pack of Pastels",
      "Protection Figurine",
      "Sharp Dagger",
      "Spirit Board Game",
      "Sturdy Rucksack",
      "The Knight’s Suitors",
      "The Works of Dante",
      "Thick Foreign Tome",
      "Training Pillar",
      "Training Weights"
    ]
  },

  Dante: {
    loved: [
      "Ahm Lu Cloth",
      "Decorative Arrows",
      "Flower Painting",
      { name: "History of a Master", unverified: true },
      { name: "Morfis Almanac", unverified: true },
      "Poems of the Greats",
      "Portrait of Yu Phas",
      "Rancid Garum",
      "School Scandal",
      "Tales of Adventure",
      { name: "Tome from Away", unverified: true }
    ],
    reallyLiked: [
      "Arrowhead Gem",
      { name: "Ceremonial Spear", unverified: true },
      "Coffee Pastries",
      "Common Coffee",
      "Crafting Knives",
      "Crimson Bull Figure",
      "Crimson Ghosh",
      { name: "Eastern Black Silk", unverified: true },
      { name: "Everyday Scenes", unverified: true },
      "Herbal Recipe Guide",
      "Home-Recipe Book",
      "Jade Panther Figure",
      { name: "Magic-Trick Set", unverified: true },
      "Pack of Pastels",
      { name: "Select Coffee", unverified: true },
      "Sharp Dagger",
      { name: "Tales of the Arena", unverified: true },
      "The Works of Dante"
    ]
  },

  Goliath: {
    loved: [
      "Rancid Garum",
      "Special “Medicine”"
    ],
    reallyLiked: [
      "Aromatic Shosh",
      "Blue Shosh",
      "Crimson Ghosh",
      { name: "Eastern Board Game", unverified: true },
      { name: "Eastern Tea Leaves", unverified: true },
      "Energizing Ghosh",
      "Jade Ghosh",
      { name: "Kitten Figurine", unverified: true },
      "Light Shosh",
      "Mature Ghosh",
      "Mature Shosh",
      "Protection Figurine",
      "Rustic Ghosh",
      "Secret Ghosh",
      "Southern Ghosh",
      { name: "Spirit Board Game", unverified: true },
      "Strategy Manuscript",
      { name: "Sturdy Rucksack", unverified: true },
      "Sun Ghosh",
      { name: "Training Bracelet", unverified: true },
      "Volcano Ghosh",
      { name: "Wing Fletching", unverified: true },
      "Young Ghosh",
      "Young Shosh"
    ]
  },

  Jester: {
    loved: [
      "Legendary Garum",
      "Portrait of Yu Phas"
    ],
    reallyLiked: [
      "Arrowhead Gem",
      { name: "Board-Game Tactics", unverified: true },
      "Ceremonial Spear",
      "Common Coffee",
      "Crimson Ghosh",
      "Dual Fish Knives",
      "Herbal Recipe Guide",
      "Home-Recipe Book",
      { name: "Joint-Relief Gloves", unverified: true },
      { name: "Orgus Coffee", unverified: true },
      "Outdoor Cooking Set",
      "Pastry Cookbook",
      "Rare Spices",
      { name: "Select Coffee", unverified: true },
      { name: "Southern Coffee", unverified: true },
      { name: "Spirit Board Game", unverified: true },
      "Strong Seasonings",
      "Village Recipes"
    ]
  },

  Talimun: {
    loved: [
      { name: "Blue-Rose Bouquet", unverified: true },
      { name: "Flower Painting", unverified: true },
      { name: "History of a Master", unverified: true },
      { name: "Portrait of Yu Phas", unverified: true }
    ],
    reallyLiked: [
      { name: "Arrowhead Gem", unverified: true },
      "Ceremonial Spear",
      { name: "Coffee Pastries", unverified: true },
      { name: "Crimson Bull Figure", unverified: true },
      "Crimson Ghosh",
      "Energizing Ghosh",
      "Jade Ghosh",
      { name: "Jade Panther Figure", unverified: true },
      "Mature Ghosh",
      "Rustic Ghosh",
      "Secret Ghosh",
      "Southern Ghosh",
      "Sun Ghosh",
      "Volcano Ghosh",
      "Young Ghosh"
    ]
  },

  Ursula: {
    loved: [
      "Flower Painting",
      { name: "History of a Master", unverified: true },
      "Pegasus Panorama",
      "Portrait of Yu Phas",
      "Shield Portrait"
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
      "Shield Portrait"
    ],
    reallyLiked: [
      "Arrowhead Gem",
      "Crimson Ghosh",
      { name: "Dual Fish Knives", unverified: true },
      { name: "Eastern Board Game", unverified: true },
      { name: "Eastern Tea Leaves", unverified: true },
      { name: "Flower Painting", unverified: true },
      "Joint-Relief Gloves",
      "Pickled Vegetables",
      { name: "Protection Figurine", unverified: true },
      { name: "Solomon Coffee", unverified: true }
    ]
  },

  Ludia: {
    loved: [
      { name: "Arrowhead Gem", unverified: true },
      { name: "Eastern Love Story", unverified: true },
      { name: "Eastern Tea Leaves", unverified: true },
      "Flower Painting",
      "Pegasus Panorama",
      "Portrait of Yu Phas",
      "Red Hair Clip",
      "Tales of Adventure"
    ],
    reallyLiked: [
      { name: "Ceremonial Spear", unverified: true },
      { name: "Coffee Pastries", unverified: true },
      "Common Coffee",
      "Eastern Black Silk",
      "Eastern Earrings",
      { name: "Everyday Scenes", unverified: true },
      { name: "Gaudy Bangle", unverified: true },
      { name: "Herbal Recipe Guide", unverified: true },
      { name: "Home-Recipe Book", unverified: true },
      { name: "Magic-Trick Set", unverified: true },
      { name: "Orgus Coffee", unverified: true },
      { name: "Pack of Pastels", unverified: true },
      { name: "Pastry Cookbook", unverified: true },
      { name: "Select Coffee", unverified: true },
      { name: "Sharp Fishhook", unverified: true },
      { name: "Skin Balm", unverified: true },
      { name: "Southern Coffee", unverified: true },
      "Strategy Manuscript",
      "Sturdy Rucksack",
      "Trader’s Handbook",
      { name: "Training Bracelet", unverified: true },
      { name: "Village Recipes", unverified: true }
    ]
  },

  Fianna: {
    loved: [
      "Eastern Black Silk",
      "Eastern Earrings",
      "Flower Painting",
      "Portrait of Yu Phas",
      "Rare Southern Seeds"
    ],
    reallyLiked: [
      "Arrowhead Gem",
      "Blue-Rose Bouquet",
      "Common Coffee",
      "Crimson Ghosh",
      "Eastern Tea Leaves",
      { name: "Joint-Relief Gloves", unverified: true },
      "Morfis Almanac",
      "Orgus Coffee",
      "Rare Spices",
      "Select Coffee",
      { name: "Skin Balm", unverified: true },
      "Southern Coffee",
      { name: "Tome from Away", unverified: true },
      "Volcano Ghosh"
    ]
  },

  Orchel: {
    loved: [
      { name: "Dual Fish Knives", unverified: true },
      "Flower Painting",
      { name: "History of a Master", unverified: true },
      { name: "Pegasus Panorama", unverified: true },
      { name: "Poems of the Greats", unverified: true },
      "Portrait of Yu Phas",
      { name: "School Scandal", unverified: true },
      "Shield Portrait"
    ],
    reallyLiked: [
      "Blue-Rose Bouquet",
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
      "Ceremonial Spear",
      "Decorative Arrows",
      "History of a Master",
      "Portrait of Yu Phas",
      "Rugged Blade",
      "Shield Portrait",
      "Tales of Adventure"
    ],
    reallyLiked: [
      "Arrowhead Gem",
      "Bow Repair Kit",
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
      "Portrait of Yu Phas",
      "Strategy Manuscript",
      "Tales of Adventure"
    ],
    reallyLiked: [
      { name: "Ahm Lu Cloth", unverified: true },
      "Arrowhead Gem",
      { name: "Crimson Ghosh", unverified: true },
      "Eastern Black Silk",
      { name: "Eastern Tea Leaves", unverified: true },
      { name: "Flower Painting", unverified: true },
      { name: "Morfis Almanac", unverified: true },
      "Poems of the Greats",
      { name: "Tome from Away", unverified: true }
    ]
  },

  Seteth: {
    loved: [
      "Morfis Almanac",
      "Portrait of Yu Phas",
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
      "Poems of the Greats",
      "School Scandal",
      { name: "Select Coffee", unverified: true },
      "Sharp Fishhook",
      { name: "Southern Coffee", unverified: true },
      "Strategy Manuscript",
      { name: "Sturdy Rucksack", unverified: true },
      "Tales of the Arena",
      "The Works of Dante",
      "Trader’s Handbook",
      { name: "Village Recipes", unverified: true }
    ]
  },

  Loretta: {
    loved: [
      "Ceremonial Spear",
      "Portrait of Yu Phas",
      "Rugged Blade",
      "Shield Portrait"
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
      "Rugged Blade",
      "Strategy Manuscript",
      "Tales of Adventure"
    ],
    reallyLiked: [
      { name: "Ahm Lu Cloth", unverified: true },
      { name: "Arrowhead Gem", unverified: true },
      { name: "Bagua Divination Set", unverified: true },
      { name: "Candy Crystals", unverified: true },
      "Ceremonial Spear",
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
      { name: "Select Coffee", unverified: true },
      "Smooth Garum",
      { name: "Southern Coffee", unverified: true },
      { name: "Sturdy Rucksack", unverified: true }
    ]
  },

  Nezha: {
    loved: [
      "Arrowhead Gem",
      "Ceremonial Spear",
      "Decorative Arrows",
      "Portrait of Yu Phas",
      "Shield Portrait",
      { name: "Tales of Adventure", unverified: true }
    ],
    reallyLiked: [
      { name: "Eastern Tea Leaves", unverified: true },
      { name: "Flower Painting", unverified: true },
      "Joint-Relief Gloves",
      "Pickled Bulbs",
      "Pickled Vegetables",
      "Potted Vegetables",
      { name: "Rare Southern Seeds", unverified: true },
      "Strategy Manuscript",
      { name: "Sturdy Rucksack", unverified: true },
      "Training Bracelet",
      "Training Pillar",
      "Training Weights",
      { name: "Wing Fletching", unverified: true }
    ]
  },

  Dadao: {
    loved: [
      "Portrait of Yu Phas",
      "Rugged Blade",
      "Tales of Adventure"
    ],
    reallyLiked: [
      { name: "Arrowhead Gem", unverified: true },
      "Board-Game Tactics",
      { name: "Coffee Pastries", unverified: true },
      "Crimson Ghosh",
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
      "Poems of the Greats",
      { name: "Potted Vegetables", unverified: true },
      "Saraminian Sweets",
      { name: "Simple Pastries", unverified: true },
      "Strategy Manuscript",
      { name: "Strong Cervi", unverified: true },
      "Weak Cervi",
      { name: "Yarc Milk", unverified: true }
    ]
  },

  Halvin: {
    loved: [
      "Blue-Rose Bouquet",
      "Flower Painting",
      "Red Hair Clip"
    ],
    reallyLiked: [
      { name: "Crimson Ghosh", unverified: true },
      "Eastern Black Silk",
      "Eastern Earrings",
      { name: "Eastern Tea Leaves", unverified: true },
      { name: "Exquisite Ring", unverified: true },
      "Garum",
      { name: "Gaudy Bangle", unverified: true },
      "Ginji Cervi",
      "Honey Pastries",
      { name: "Jade Panther Figure", unverified: true },
      { name: "Magic-Trick Set", unverified: true },
      "Mature Dried Cervi",
      "Pack of Pastels",
      { name: "Pickled Bulbs", unverified: true },
      "Potted Vegetables",
      "Pure-White Cervi",
      { name: "Simple Pastries", unverified: true },
      "Skin Balm",
      "Strong Cervi",
      { name: "Village Recipes", unverified: true },
      "Weak Cervi"
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
      "Shield Portrait",
      "Tales of Adventure"
    ],
    reallyLiked: [
      { name: "Aromatic Shosh", unverified: true },
      "Common Coffee",
      "Crimson Ghosh",
      { name: "Eastern Tea Leaves", unverified: true },
      "Energizing Ghosh",
      { name: "Huge Fish Eyeball", unverified: true },
      "Jade Ghosh",
      { name: "Light Shosh", unverified: true },
      "Mature Ghosh",
      { name: "Mature Shosh", unverified: true },
      { name: "Morfis Almanac", unverified: true },
      { name: "Orgus Coffee", unverified: true },
      "Rustic Ghosh",
      "Secret Ghosh",
      { name: "Select Coffee", unverified: true },
      { name: "Southern Coffee", unverified: true },
      "Southern Ghosh",
      "Strategy Manuscript",
      { name: "Strong Seasonings", unverified: true },
      "Sun Ghosh",
      "Volcano Ghosh",
      { name: "Wing Fletching", unverified: true },
      "Young Ghosh",
      { name: "Young Shosh", unverified: true }
    ]
  },

  Nydine: {
    loved: [
      "Pegasus Panorama",
      "Rugged Blade",
      { name: "Tales of Adventure", unverified: true }
    ],
    reallyLiked: [
      { name: "Arrowhead Gem", unverified: true },
      { name: "Eastern Black Silk", unverified: true },
      { name: "Eastern Love Story", unverified: true },
      { name: "Eastern Tea Leaves", unverified: true },
      "Horse-Grooming Kit",
      "Joint-Relief Gloves",
      "Kitten Figurine",
      "Mane Ornament",
      { name: "Morfis Almanac", unverified: true },
      "Saraminian Sweets",
      "Strategy Manuscript",
      "Sturdy Rucksack",
      { name: "Tome from Away", unverified: true },
      { name: "Training Bracelet", unverified: true },
      "Training Weights",
      { name: "Wing Fletching", unverified: true }
    ]
  },

  Io: {
    loved: [
      "Ceremonial Spear",
      "Pegasus Panorama",
      "Portrait of Yu Phas",
      "Shield Portrait"
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
      "Arrowhead Gem",
      "Blue-Rose Bouquet",
      "Decorative Arrows",
      { name: "Eastern Tea Leaves", unverified: true },
      "Flower Painting",
      "Pegasus Panorama",
      "Portrait of Yu Phas",
      "Red Hair Clip",
      "Tales of Adventure"
    ],
    reallyLiked: [
      "Ahm Lu Cloth",
      { name: "Ceremonial Spear", unverified: true },
      "Coffee Pastries",
      "Common Coffee",
      "Crafting Knives",
      "Crimson Bull Figure",
      { name: "Crimson Ghosh", unverified: true },
      "Dagda Beard Grass",
      "Eastern Black Silk",
      "Eastern Earrings",
      "Exquisite Ring",
      { name: "Gaudy Bangle", unverified: true },
      "Horse-Grooming Kit",
      "Jade Panther Figure",
      "Kitten Figurine",
      { name: "Magic-Trick Set", unverified: true },
      "Mane Ornament",
      { name: "Orgus Coffee", unverified: true },
      "Pack of Pastels",
      { name: "Select Coffee", unverified: true },
      "Sharp Dagger",
      "Skin Balm",
      { name: "Southern Coffee", unverified: true },
      "Spirit Board Game"
    ]
  },

  Noctula: {
    loved: [
      "Ceremonial Spear",
      "History of a Master",
      "Shield Portrait",
      "Tales of Adventure"
    ],
    reallyLiked: [
      "Antique Medal",
      { name: "Arrowhead Gem", unverified: true },
      { name: "Crimson Ghosh", unverified: true },
      "Eastern Tea Leaves",
      { name: "Morfis Almanac", unverified: true },
      "Protection Figurine",
      "Sharp Dagger",
      "Strategy Manuscript",
      { name: "Sturdy Rucksack", unverified: true },
      { name: "Tome from Away", unverified: true },
      "Training Bracelet",
      "Training Pillar",
      "Training Weights",
      { name: "Wing Fletching", unverified: true }
    ]
  },

  "Yang Jie": {
    loved: [
      { name: "Eastern Tea Leaves", unverified: true },
      { name: "Tales of Adventure", unverified: true }
    ],
    reallyLiked: [
      { name: "Aromatic Shosh", unverified: true },
      { name: "Coffee Pastries", unverified: true },
      "Common Coffee",
      "Crimson Ghosh",
      "Energizing Ghosh",
      { name: "Flexible Fishing Rod", unverified: true },
      { name: "Herbal Recipe Guide", unverified: true },
      { name: "Home-Recipe Book", unverified: true },
      { name: "Huge Fish Eyeball", unverified: true },
      "Jade Ghosh",
      "Kitten Figurine",
      { name: "Light Shosh", unverified: true },
      "Mature Ghosh",
      { name: "Mature Shosh", unverified: true },
      { name: "Orgus Coffee", unverified: true },
      { name: "Pastry Cookbook", unverified: true },
      "Poems of the Greats",
      "Rustic Ghosh",
      "Secret Ghosh",
      { name: "Select Coffee", unverified: true },
      { name: "Sharp Fishhook", unverified: true },
      { name: "Southern Coffee", unverified: true },
      "Southern Ghosh",
      "Strategy Manuscript",
      "Sun Ghosh",
      { name: "The Works of Dante", unverified: true },
      "Trader’s Handbook",
      { name: "Village Recipes", unverified: true },
      "Volcano Ghosh",
      "Young Ghosh"
    ]
  },

  Nuzzuo: {
    loved: [
      "Ceremonial Spear",
      "Odd Vegetable Seeds",
      "Pegasus Panorama",
      "Rare Southern Seeds",
      "Rugged Blade",
      "Strategy Manuscript"
    ],
    reallyLiked: [
      "Arrowhead Gem",
      "Bow Repair Kit",
      { name: "Candy Crystals", unverified: true },
      "Coffee Pastries",
      "Common Coffee",
      "Crafting Knives",
      "Crimson Ghosh",
      "Dual Fish Knives",
      { name: "Eastern Black Silk", unverified: true },
      { name: "Eastern Tea Leaves", unverified: true },
      { name: "Flower Painting", unverified: true },
      "Herbal Recipe Guide",
      { name: "Joint-Relief Gloves", unverified: true },
      "Kitten Figurine",
      { name: "Niiza Garum", unverified: true },
      "Orgus Coffee",
      "Outdoor Cooking Set",
      "Pickled Vegetables",
      "Potted Vegetables",
      "Protection Figurine",
      "Rare Spices",
      "Select Coffee",
      "Sharp Dagger",
      "Southern Coffee",
      "Strong Seasonings",
      { name: "Sturdy Rucksack", unverified: true },
      { name: "Training Bracelet", unverified: true },
      { name: "Training Pillar", unverified: true },
      { name: "Training Weights", unverified: true }
    ]
  },

  Majide: {
    loved: [

    ],
    reallyLiked: [
      "Aromatic Shosh",
      "Arrowhead Gem",
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
      "Flower Painting",
      "Odd Vegetable Seeds",
      "Rare Southern Seeds",
      "Tales of Adventure"
    ],
    reallyLiked: [
      { name: "Alecto Garum", unverified: true },
      { name: "Arrowhead Gem", unverified: true },
      "Blue-Rose Bouquet",
      "Candy Crystals",
      "Common Coffee",
      { name: "Concentrated Garum", unverified: true },
      "Crimson Ghosh",
      "Dual Fish Knives",
      { name: "Eastern Tea Leaves", unverified: true },
      { name: "Fragrant Pastries", unverified: true },
      "Garum",
      "Ginji Cervi",
      "Honey Milk",
      { name: "Honey Pastries", unverified: true },
      { name: "Jamel Milk", unverified: true },
      { name: "Kitten Figurine", unverified: true },
      { name: "Magic-Trick Set", unverified: true },
      "Mature Dried Cervi",
      "Meaty Delicacy",
      { name: "Mellow Pastries", unverified: true },
      { name: "Niiza Garum", unverified: true },
      "Orgus Coffee",
      "Outdoor Cooking Set",
      { name: "Pack of Pastels", unverified: true },
      { name: "Pastry Cookbook", unverified: true },
      "Pickled Vegetables",
      { name: "Protection Figurine", unverified: true },
      "Pure-White Cervi",
      { name: "Rare Spices", unverified: true },
      "Saraminian Sweets",
      "Select Coffee",
      { name: "Sharp Fishhook", unverified: true },
      { name: "Simple Pastries", unverified: true },
      "Southern Coffee",
      "Strong Cervi",
      "Volcano Ghosh",
      "Weak Cervi",
      { name: "Yarc Milk", unverified: true }
    ]
  },

  Centurio: {
    loved: [
      { name: "Ceremonial Spear", unverified: true },
      { name: "Eastern Board Game", unverified: true },
      { name: "History of a Master", unverified: true },
      "Pegasus Panorama",
      "Portrait of Yu Phas",
      "Rancid Garum",
      { name: "School Scandal", unverified: true },
      "Shield Portrait",
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
    loved: [

    ],
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
      "Ahm Lu Cloth",
      "Arrowhead Gem",
      "Blue-Rose Bouquet",
      "Ceremonial Spear",
      "Decorative Arrows",
      "Eastern Black Silk",
      "Flower Painting",
      "Portrait of Yu Phas",
      "Red Hair Clip",
      "Shield Portrait",
      "Tales of Adventure"
    ],
    reallyLiked: [
      { name: "Alecto Garum", unverified: true },
      { name: "Concentrated Garum", unverified: true },
      "Crimson Bull Figure",
      { name: "Crimson Ghosh", unverified: true },
      "Dagda Beard Grass",
      "Dual Fish Knives",
      "Eastern Earrings",
      "Exquisite Ring",
      "Garum",
      { name: "Gaudy Bangle", unverified: true },
      "Herbal Recipe Guide",
      "Home-Recipe Book",
      "Horse-Grooming Kit",
      "Jade Panther Figure",
      "Joint-Relief Gloves",
      "Kitten Figurine",
      "Mane Ornament",
      "Niiza Garum",
      "Outdoor Cooking Set",
      { name: "Pastry Cookbook", unverified: true },
      "Pegasus Panorama",
      "Protection Figurine",
      "Sharp Dagger",
      "Skin Balm",
      { name: "Smooth Garum", unverified: true },
      "Strategy Manuscript",
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
      "Pickled Vegetables",
      { name: "Potted Vegetables", unverified: true },
      { name: "Rare Southern Seeds", unverified: true },
      { name: "Strategy Manuscript", unverified: true },
      { name: "Tales of Adventure", unverified: true },
      { name: "Wing Fletching", unverified: true }
    ]
  },

  Jasmine: {
    loved: [
      "Pegasus Panorama",
      "Rugged Blade",
      "Strategy Manuscript"
    ],
    reallyLiked: [
      "Arrowhead Gem",
      { name: "Coffee Pastries", unverified: true },
      { name: "Crimson Ghosh", unverified: true },
      { name: "Dual Fish Knives", unverified: true },
      { name: "Flower Painting", unverified: true },
      { name: "Fragrant Pastries", unverified: true },
      "Ginji Cervi",
      { name: "Honey Milk", unverified: true },
      { name: "Honey Pastries", unverified: true },
      "Imitation Medal",
      { name: "Jamel Milk", unverified: true },
      { name: "Joint-Relief Gloves", unverified: true },
      { name: "Kitten Figurine", unverified: true },
      { name: "Magic-Trick Set", unverified: true },
      "Mature Dried Cervi",
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
      "Strong Cervi",
      { name: "Sturdy Rucksack", unverified: true },
      { name: "Tome from Away", unverified: true },
      "Training Pillar",
      "Training Weights",
      "Weak Cervi",
      { name: "Yarc Milk", unverified: true }
    ]
  },

  Inyoni: {
    loved: [
      "Arrowhead Gem",
      "Shield Portrait",
      "Tales of Adventure"
    ],
    reallyLiked: [
      "Bow Repair Kit",
      { name: "Crimson Ghosh", unverified: true },
      { name: "Eastern Black Silk", unverified: true },
      { name: "Eastern Board Game", unverified: true },
      "Eastern Tea Leaves",
      "Flexible Fishing Rod",
      { name: "Huge Fish Eyeball", unverified: true },
      "Joint-Relief Gloves",
      "Protection Figurine",
      { name: "Sharp Fishhook", unverified: true },
      "Strategy Manuscript",
      { name: "Sturdy Rucksack", unverified: true },
      { name: "Training Bracelet", unverified: true },
      { name: "Wing Fletching", unverified: true }
    ]
  },

  Kiroc: {
    loved: [

    ],
    reallyLiked: [
      { name: "Coffee Pastries", unverified: true },
      "Common Coffee",
      "Crimson Ghosh",
      { name: "Flower Painting", unverified: true },
      { name: "Joint-Relief Gloves", unverified: true },
      { name: "Light Shosh", unverified: true },
      "Mature Ghosh",
      { name: "Mature Shosh", unverified: true },
      { name: "Orgus Coffee", unverified: true },
      { name: "Pack of Pastels", unverified: true },
      { name: "Red Hair Clip", unverified: true },
      { name: "Rustic Ghosh", unverified: true },
      { name: "Select Coffee", unverified: true },
      { name: "Sharp Fishhook", unverified: true },
      { name: "Southern Coffee", unverified: true },
      { name: "Training Pillar", unverified: true },
      { name: "Training Weights", unverified: true },
      "Volcano Ghosh",
      { name: "Young Ghosh", unverified: true },
      { name: "Young Shosh", unverified: true }
    ]
  },

  Peppe: {
    loved: [
      "Pegasus Panorama",
      "Portrait of Yu Phas",
      "Rancid Garum",
      "Shield Portrait"
    ],
    reallyLiked: [
      "Arrowhead Gem",
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
      { name: "Pastry Cookbook", unverified: true },
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
    loved: [

    ],
    reallyLiked: [
      { name: "Strategy Manuscript", unverified: true },
      { name: "Training Weights", unverified: true }
    ]
  },

  Benditz: {
    loved: [
      "Arrowhead Gem",
      "Blue-Rose Bouquet",
      "Decorative Arrows",
      { name: "Eastern Tea Leaves", unverified: true },
      "Portrait of Yu Phas",
      "Rancid Garum",
      "Red Hair Clip",
      { name: "Tales of Adventure", unverified: true }
    ],
    reallyLiked: [
      { name: "Ahm Lu Cloth", unverified: true },
      "Ceremonial Spear",
      "Coffee Pastries",
      { name: "Common Coffee", unverified: true },
      { name: "Crimson Ghosh", unverified: true },
      "Eastern Black Silk",
      "Eastern Earrings",
      { name: "Eastern Love Story", unverified: true },
      "Exquisite Ring",
      { name: "Flower Painting", unverified: true },
      { name: "Gaudy Bangle", unverified: true },
      "Joint-Relief Gloves",
      { name: "Orgus Coffee", unverified: true },
      { name: "Select Coffee", unverified: true },
      { name: "Southern Coffee", unverified: true },
      "Spirit Board Game",
      "Strategy Manuscript",
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
