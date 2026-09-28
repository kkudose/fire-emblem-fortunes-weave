export type CharacterGifts = {
  name: string;
  loved: string[];
  reallyLiked: string[];
  automaticRecruitment?: string;
  unverified?: boolean;
};

const names = `Eshmel|Cai|Dietrich|Theodora|Leda|Hong Hua|Troy|Tialla|Peter|Ultand|Fabio|Esmeralda|Mikaela|Bonaventure|Tobias|Lysander|Lilian|Buccar|Sirocco|Mu|Olympia|Bertrand|Gaitz|Dante|Goliath|Jester|Talimun|Ursula|Simon|Ludia|Fianna|Orchel|Diego|Ninae|Seteth|Loretta|Anatolia|Sha Lan|Nezha|Dadao|Halvin|Nathan|Creek|Guzran|Nydine|Io|Catania|Noctula|Yang Jie|Nuzzuo|Majide|Sofia|Centurio|Anna|Aswan|Tahonia|Alexandra|Zarcone|Jasmine|Inyoni|Kiroc|Peppe|Klapka|Sothis|Fortuna|Aurora|Mars|Kalla|Smyrnos|Credna|Jurah|Solel|Dagda|Balor|Yu Phas|Benditz|Maria|Raksha|The Lady of Lillies`.split('|');

// Sources: https://raiderking.com/fire-emblem-fortunes-weave-all-loved-gifts-guide/
// and https://fortunesweave.co.uk/wiki/gifts.
// Category entries are expanded to named gifts; no category labels are stored.
// Question-mark reactions are included only for characters without any other
// documented gift reactions; their results are flagged for the UI.
const records: Record<string, Partial<CharacterGifts>> = {
  "Benditz": {
    loved: ["Eastern Black Silk"],
    reallyLiked: [
      "Ahm Lu Cloth", "Ceremonial Spear", "Coffee Pastries", "Common Coffee",
      "Crimson Ghosh", "Exquisite Ring", "Flower Painting", "Joint-Relief Gloves",
      "Select Coffee", "Southern Coffee", "Spirit Board Game"
    ]
  },
  "Cai": {
    reallyLiked: ["Arrowhead Gem", "Crimson Ghosh", "Flower Painting", "Sharp Fishhook"]
  },
  "Anatolia": {
    reallyLiked: [
      "Eastern Tea Leaves", "Magic-Trick Set", "Protection Figurine", "Flower Painting",
      "Eastern Black Silk", "Arrowhead Gem", "Tome from Away", "Bagua Divination Set"
    ]
  },
  "Alexandra": {
    loved: ["Tales of Adventure"],
    reallyLiked: [
      "Garum", "Niiza Garum", "Crimson Ghosh", "Outdoor Cooking Set", "Strong Seasonings",
      "Home-Recipe Book", "Herbal Recipe Guide", "Kitten Figurine", "Protection Figurine",
      "Sturdy Rucksack", "Mane Ornament", "Dagda Beard Grass", "Crimson Bull Figure",
      "Jade Panther Figure", "Horse-Grooming Kit", "Sharp Dagger", "Joint-Relief Gloves",
      "Skin Balm", "Exquisite Ring"
    ]
  },
  "Bonaventure": {
    reallyLiked: [
      "Alecto Garum", "Concentrated Garum", "Garum", "Smooth Garum", "Home-Recipe Book",
      "Herbal Recipe Guide", "Energizing Ghosh", "Jade Ghosh", "Magic-Trick Set", "Niiza Garum",
      "Pastry Cookbook", "Rare Spices", "Rugged Blade", "Secret Ghosh",
      "Southern Ghosh", "Strong Seasonings", "Sun Ghosh", "Tales of the Arena",
      "Thick Foreign Tome", "Village Recipes", "Mature Ghosh", "Rustic Ghosh", "Young Ghosh",
      "Aromatic Shosh", "Light Shosh", "Mature Shosh", "Young Shosh",
      "Common Coffee", "Orgus Coffee", "Select Coffee", "Southern Coffee",
      "Protection Figurine", "Eastern Tea Leaves"
    ]
  },
  "Buccar": {
    reallyLiked: [
      "Arrowhead Gem", "Flower Painting", "Energizing Ghosh", "Jade Ghosh",
      "Mature Ghosh", "Rustic Ghosh", "Secret Ghosh", "Southern Ghosh",
      "Sun Ghosh", "Young Ghosh",
      "Aromatic Shosh", "Light Shosh", "Mature Shosh", "Young Shosh"
    ]
  },
  "Catania": {
    loved: ["Eastern Black Silk", "Tales of Adventure"],
    reallyLiked: [
      "Coffee Pastries", "Common Coffee", "Crimson Ghosh", "Dagda Beard Grass",
      "Exquisite Ring", "Horse-Grooming Kit", "Mane Ornament", "Pack of Pastels",
      "Select Coffee", "Skin Balm", "Southern Coffee", "Spirit Board Game",
      "Ceremonial Spear", "Sharp Dagger", "Crafting Knives",
      "Crimson Bull Figure", "Jade Panther Figure"
    ]
  },
  "Centurio": {
    loved: ["Rancid Garum"],
    reallyLiked: ["Pegasus Panorama", "Portrait of Yu Phas", "Shield Portrait"]
  },
  "Dadao": {
    reallyLiked: [
      "Weak Cervi", "Strong Cervi", "Ginji Cervi", "Pure-White Cervi",
      "Saraminian Sweets", "Crimson Ghosh", "Arrowhead Gem", "Flower Painting",
      "Board-Game Tactics", "Eastern Black Silk"
    ]
  },
  "Dante": {
    reallyLiked: [
      "Coffee Pastries", "Crimson Ghosh", "Common Coffee", "Select Coffee",
      "Southern Coffee", "Home-Recipe Book", "Herbal Recipe Guide",
      "Crimson Bull Figure", "Jade Panther Figure", "Crafting Knives", "Sharp Dagger",
      "Ceremonial Spear", "The Works of Dante", "Eastern Black Silk", "Arrowhead Gem",
      "Pack of Pastels"
    ]
  },
  "Diego": {
    reallyLiked: [
      "Flower Painting", "Candy Crystals", "Crimson Ghosh", "Eastern Tea Leaves",
      "Protection Figurine", "Bow Repair Kit", "Eastern Board Game"
    ]
  },
  "Dietrich": {
    reallyLiked: [
      "Arrowhead Gem", "Board-Game Tactics", "Eastern Black Silk", "Flower Painting",
      "Fragrant Pastries", "Ginji Cervi", "Honey Milk", "Mellow Pastries", "Pastry Cookbook",
      "Saraminian Sweets", "Simple Pastries", "Training Pillar", "Training Weights"
    ]
  },
  "Theodora": {
    reallyLiked: ["Arrowhead Gem", "Eastern Black Silk", "Eastern Tea Leaves", "Flower Painting", "Rugged Blade"]
  },
  "Esmeralda": {
    reallyLiked: [
      "Simple Pastries", "Mellow Pastries", "Fragrant Pastries", "Coffee Pastries",
      "Saraminian Sweets", "Portrait of Yu Phas", "Red Hair Clip", "Blue-Rose Bouquet",
      "Exquisite Ring", "Ahm Lu Cloth", "Skin Balm", "Ceremonial Spear", "Tome from Away"
    ]
  },
  "Fabio": {
    reallyLiked: [
      "Morfis Almanac", "Crimson Ghosh", "Energizing Ghosh", "Jade Ghosh", "Mature Ghosh", "Rustic Ghosh",
      "Secret Ghosh", "Southern Ghosh", "Sun Ghosh", "Volcano Ghosh", "Young Ghosh",
      "Common Coffee", "Select Coffee", "Southern Coffee", "Orgus Coffee",
      "Eastern Black Silk", "Rugged Blade", "Eastern Tea Leaves", "Tome from Away"
    ]
  },
  "Fianna": {
    loved: ["Arrowhead Gem", "Blue-Rose Bouquet", "Volcano Ghosh"],
    reallyLiked: [
      "Crimson Ghosh", "Rare Spices", "Common Coffee", "Select Coffee", "Southern Coffee",
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
      "Energizing Ghosh", "Jade Ghosh", "Mature Ghosh", "Rustic Ghosh", "Secret Ghosh",
      "Southern Ghosh", "Sun Ghosh", "Young Ghosh",
      "Aromatic Shosh", "Light Shosh", "Mature Shosh", "Young Shosh",
      "Protection Figurine"
    ]
  },
  "Halvin": {
    reallyLiked: [
      "Weak Cervi", "Strong Cervi", "Ginji Cervi", "Pure-White Cervi", "Mature Dried Cervi",
      "Simple Pastries", "Mellow Pastries", "Fragrant Pastries", "Pack of Pastels", "Skin Balm"
    ]
  },
  "Inyoni": {
    reallyLiked: [
      "Crimson Ghosh", "Eastern Tea Leaves", "Protection Figurine", "Flexible Fishing Rod",
      "Bow Repair Kit", "Eastern Board Game", "Joint-Relief Gloves"
    ]
  },
  "Io": {
    reallyLiked: ["Flower Painting", "Arrowhead Gem", "Training Weights"]
  },
  "Jasmine": {
    reallyLiked: [
      "Jamel Milk", "Yarc Milk", "Honey Milk", "Weak Cervi", "Strong Cervi", "Ginji Cervi",
      "Pure-White Cervi", "Mature Dried Cervi", "Simple Pastries", "Mellow Pastries",
      "Fragrant Pastries", "Coffee Pastries", "Honey Pastries", "Saraminian Sweets", "Training Weights",
      "Training Pillar", "Flower Painting", "Arrowhead Gem", "Imitation Medal",
      "Tome from Away", "Pastry Cookbook", "Protection Figurine"
    ]
  },
  "Jester": {
    loved: ["Arrowhead Gem"],
    reallyLiked: [
      "Alecto Garum", "Concentrated Garum", "Garum", "Smooth Garum", "Niiza Garum", "Crimson Ghosh",
      "Outdoor Cooking Set", "Strong Seasonings", "Home-Recipe Book", "Pastry Cookbook",
      "Rare Spices", "Herbal Recipe Guide"
    ]
  },
  "Lilian": {
    loved: ["Eastern Earrings", "Eastern Tea Leaves", "Poems of the Greats", "Strategy Manuscript"]
  },
  "Leda": {
    reallyLiked: [
      "Energizing Ghosh", "Jade Ghosh", "Mature Ghosh", "Rustic Ghosh", "Secret Ghosh",
      "Southern Ghosh", "Sun Ghosh", "Young Ghosh"
    ]
  },
  "Lysander": {
    loved: ["Ceremonial Spear", "Flower Painting", "Pegasus Panorama", "Portrait of Yu Phas", "Shield Portrait"]
  },
  "Tobias": {
    loved: ["Strategy Manuscript", "Tales of Adventure", "Volcano Ghosh"],
    unverified: true
  },
  "Ludia": { loved: ["Eastern Black Silk", "Tales of Adventure"] },
  "Majide": {
    reallyLiked: ["Energizing Ghosh", "Jade Ghosh", "Mature Ghosh", "Rustic Ghosh", "Secret Ghosh", "Southern Ghosh", "Sun Ghosh", "Volcano Ghosh", "Young Ghosh"]
  },
  "Mikaela": {
    reallyLiked: [
      "Crimson Ghosh", "Energizing Ghosh", "Jade Ghosh", "Mature Ghosh", "Rustic Ghosh", "Secret Ghosh",
      "Southern Ghosh", "Sun Ghosh", "Volcano Ghosh", "Young Ghosh",
      "Common Coffee", "Select Coffee", "Southern Coffee", "Orgus Coffee", "Training Weights",
      "Training Pillar", "Arrowhead Gem", "Tome from Away", "Home-Recipe Book", "Flower Painting"
    ]
  },
  "Mu": {
    reallyLiked: [
      "Weak Cervi", "Strong Cervi", "Ginji Cervi", "Pure-White Cervi", "Mature Dried Cervi",
      "Saraminian Sweets", "Arrowhead Gem", "Orgus Coffee", "Morfis Almanac"
    ]
  },
  "Nezha": {
    reallyLiked: ["Flower Painting", "Joint-Relief Gloves"]
  },
  "Nydine": {
    reallyLiked: [
      "Saraminian Sweets", "Arrowhead Gem", "Eastern Black Silk", "Training Weights",
      "Joint-Relief Gloves", "Tome from Away", "Horse-Grooming Kit", "Kitten Figurine"
    ]
  },
  "Ninae": {
    reallyLiked: [
      "Flower Painting", "Arrowhead Gem", "Ahm Lu Cloth", "Morfis Almanac", "Tome from Away"
    ]
  },
  "Noctula": {
    reallyLiked: [
      "Crimson Ghosh", "Eastern Tea Leaves", "Protection Figurine", "Arrowhead Gem",
      "Morfis Almanac", "Training Weights", "Antique Medal", "Tome from Away", "Sharp Dagger"
    ]
  },
  "Nuzzuo": {
    reallyLiked: [
      "Coffee Pastries", "Candy Crystals", "Alecto Garum", "Concentrated Garum", "Garum", "Smooth Garum",
      "Niiza Garum", "Crimson Ghosh", "Common Coffee", "Select Coffee", "Southern Coffee",
      "Orgus Coffee", "Pickled Vegetables", "Potted Vegetables", "Outdoor Cooking Set",
      "Strong Seasonings", "Rare Spices", "Herbal Recipe Guide", "Eastern Tea Leaves",
      "Kitten Figurine", "Protection Figurine", "Bow Repair Kit", "Crafting Knives", "Sharp Dagger",
      "Flower Painting", "Eastern Black Silk", "Home-Recipe Book", "Village Recipes", "Morfis Tea"
    ]
  },
  "Olympia": {
    reallyLiked: ["Orgus Coffee", "Exquisite Ring"]
  },
  "Loretta": {
    reallyLiked: [
      "Flower Painting", "Arrowhead Gem", "Saraminian Sweets", "Eastern Black Silk", "Crimson Ghosh"
    ]
  },
  "Sofia": {
    reallyLiked: [
      "Jamel Milk", "Yarc Milk", "Honey Milk", "Weak Cervi", "Strong Cervi", "Ginji Cervi",
      "Pure-White Cervi", "Mature Dried Cervi", "Simple Pastries", "Mellow Pastries",
      "Fragrant Pastries", "Coffee Pastries", "Honey Pastries", "Saraminian Sweets", "Alecto Garum",
      "Concentrated Garum", "Garum", "Niiza Garum", "Crimson Ghosh", "Common Coffee",
      "Select Coffee", "Southern Coffee", "Orgus Coffee", "Pickled Vegetables", "Meaty Delicacy",
      "Outdoor Cooking Set", "Eastern Tea Leaves"
    ]
  },
  "Talimun": {
    reallyLiked: [
      "Crimson Ghosh", "Energizing Ghosh", "Jade Ghosh", "Mature Ghosh", "Rustic Ghosh", "Secret Ghosh",
      "Southern Ghosh", "Sun Ghosh", "Young Ghosh", "Ceremonial Spear"
    ]
  },
  "Guzran": {
    reallyLiked: ["Energizing Ghosh", "Jade Ghosh", "Mature Ghosh", "Rustic Ghosh", "Secret Ghosh", "Southern Ghosh", "Sun Ghosh", "Young Ghosh"]
  },
  "Orchel": {
    reallyLiked: ["Outdoor Cooking Set", "Home-Recipe Book", "Saraminian Sweets"]
  },
  "Peppe": {
    reallyLiked: ["Crimson Ghosh"]
  },
  "Peter": {
    loved: ["Arrowhead Gem"],
    unverified: true
  },
  "Bertrand": {
    reallyLiked: ["Garum"]
  },
  "Kiroc": {
    loved: ["Arrowhead Gem", "Crimson Ghosh", "Volcano Ghosh"],
    unverified: true
  },
  "Seteth": {
    reallyLiked: [
      "Eastern Black Silk", "Ceremonial Spear", "Crimson Ghosh", "Orgus Coffee",
      "Flower Painting", "Flexible Fishing Rod", "Sharp Fishhook"
    ]
  },
  "Simon": {
    reallyLiked: ["Flower Painting", "Arrowhead Gem", "Crimson Ghosh", "Joint-Relief Gloves"]
  },
  "Sha Lan": { loved: ["Special “Medicine”"] },
  "Sirocco": {
    loved: ["Arrowhead Gem", "Crimson Ghosh", "Volcano Ghosh"],
    reallyLiked: [
      "Energizing Ghosh", "Jade Ghosh", "Mature Ghosh", "Rustic Ghosh", "Secret Ghosh",
      "Southern Ghosh", "Sun Ghosh", "Young Ghosh", "Crimson Bull Figure",
      "Jade Panther Figure", "Pack of Pastels", "Gaudy Bangle", "Eastern Board Game"
    ]
  },
  "Tialla": {
    reallyLiked: [
      "Jamel Milk", "Weak Cervi", "Strong Cervi", "Ginji Cervi", "Pure-White Cervi",
      "Spirit Board Game", "Concentrated Garum", "Garum", "Niiza Garum",
      "Pickled Bulbs", "Potted Vegetables", "Outdoor Cooking Set", "Strong Seasonings",
      "Home-Recipe Book", "Herbal Recipe Guide", "Protection Figurine", "The Works of Dante",
      "Ceremonial Spear", "Skin Balm", "Eastern Black Silk", "Ahm Lu Cloth", "Arrowhead Gem",
      "Board-Game Tactics", "The Knight’s Suitors", "Thick Foreign Tome"
    ]
  },
  "Ultand": {
    reallyLiked: [
      "Concentrated Garum", "Garum", "Niiza Garum", "Crimson Ghosh",
      "Outdoor Cooking Set", "Strong Seasonings", "Home-Recipe Book", "Herbal Recipe Guide",
      "The Knight’s Suitors", "Tome from Away", "Morfis Almanac", "Rugged Blade", "Ceremonial Spear",
      "Skin Balm", "Eastern Black Silk", "Ahm Lu Cloth", "Eastern Board Game", "Exquisite Ring",
      "Arrowhead Gem", "Flower Painting",
      "Aromatic Shosh", "Special “Medicine”", "Orgus Coffee", "Rare Southern Seeds", "Morfis Tea",
      "Fodlan Tea", "Sharp Fishhook", "Sturdy Rucksack", "Divination Bagua", "Horse-Grooming Kit",
      "The Works of Dante", "Thick Foreign Tome", "School Scandal", "Crafting Knives", "Sharp Dagger",
      "Training Pillar", "Imitation Medal", "Joint-Relief Gloves", "Decorative Arrows", "Spirit Board Game",
      "Ebony Game Board", "Red Hair Clip", "Pack of Pastels", "Pegasus Panorama", "Shield Portrait"
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
      "Southern Ghosh", "Sun Ghosh", "Volcano Ghosh", "Young Ghosh"
    ]
  },
  "Zarcone": {
    reallyLiked: ["Pickled Vegetables"]
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
  return {
    name,
    loved: [...(record.loved ?? [])].sort((a, b) => a.localeCompare(b)),
    reallyLiked: [...(record.reallyLiked ?? [])].sort((a, b) => a.localeCompare(b)),
    automaticRecruitment: automaticRecruitment[name],
    unverified: record.unverified ?? false
  };
});
