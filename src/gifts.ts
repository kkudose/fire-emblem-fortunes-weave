export type CharacterGifts = {
  name: string;
  loved: string[];
  preferred: string[];
};

// Character and gift names supplied for the lookup. Characters without a named
// item in the sourced preference list remain present with empty gift arrays.
const names = `Eshmel|Cai|Dietrich|Theodora|Leda|Hong Hua|Troy|Tialla|Peter|Ultand|Fabio|Esmeralda|Mikaela|Bonaventure|Tobias|Lysander|Lilian|Buccar|Sirocco|Mu|Olympia|Bertrand|Gaitz|Dante|Goliath|Jester|Talimun|Ursula|Simon|Ludia|Fianna|Orchel|Diego|Ninae|Seteth|Loretta|Anatolia|Sha Lan|Nezha|Dadao|Halvin|Nathan|Creek|Guzran|Nydine|Io|Catania|Noctula|Yang Jie|Nuzzuo|Majide|Sofia|Centurio|Anna|Aswan|Tahonia|Alexandra|Zarcone|Jasmine|Inyoni|Kiroc|Peppe|Klapka|Sothis|Fortuna|Aurora|Mars|Kalla|Smyrnos|Credna|Jurah|Solel|Dagda|Balor|Yu Phas`.split('|');

// Exact named entries from Game8's "Preferred Gift" list. Independent guides
// support the character interests and gift categories, but do not establish an
// item-by-item reaction tier, so these are not labeled "Really liked."
const records: Record<string, Partial<CharacterGifts>> = {
  "Cai": {
    "loved": [],
    "preferred": [
      "Arrowhead Gem",
      "Crimson Ghosh",
      "Sharp Fishhook"
    ]
  },
  "Dietrich": {
    "loved": [],
    "preferred": [
      "Arrowhead Gem",
      "Crimson Ghosh",
      "Ginji Cervi",
      "Honey Milk",
      "Honey Pastries",
      "Joint-Relief Gloves",
      "Kitten Figurine",
      "Pastry Cookbook",
      "Protection Figurine",
      "Pure-White Cervi",
      "Spirit Board Game",
      "Training Pillar",
      "Training Weights"
    ]
  },
  "Theodora": {
    "loved": [],
    "preferred": [
      "Dagda Beard Grass",
      "Eastern Black Silk",
      "Eastern Tea Leaves",
      "Horse-Grooming Kit"
    ]
  },
  "Leda": {
    "loved": [],
    "preferred": [
      "Aromatic Shosh",
      "Brined Fish Guts",
      "Dagda Beard Grass",
      "Eastern Tea Leaves",
      "Gaudy Bangle",
      "Horse-Grooming Kit",
      "Huge Fish Eyeball",
      "Jade Ghosh",
      "Kitten Figurine",
      "Light Shosh",
      "Magic-Trick Set",
      "Mature Ghosh",
      "Mature Shosh",
      "Pack of Pastels",
      "Rustic Ghosh",
      "Secret Ghosh",
      "Southern Ghosh",
      "Sun Ghosh",
      "Training Bracelet",
      "Young Ghosh"
    ]
  },
  "Tialla": {
    "loved": [],
    "preferred": [
      "Alecto Garum",
      "Eastern Love Story",
      "Eastern Tea Leaves",
      "Garum",
      "Ginji Cervi",
      "Herbal Recipe Guide",
      "Home-Recipe Book",
      "Jamel Milk",
      "Mature Dried Cervi",
      "Pastry Cookbook",
      "Pickled Bulbs",
      "Smooth Garum",
      "Strategy Manuscript",
      "Strong Cervi",
      "Strong Seasonings",
      "Tales of Adventure",
      "Village Recipes",
      "Weak Cervi",
      "Yarc Milk"
    ]
  },
  "Peter": {
    "loved": [],
    "preferred": [
      "Coffee Pastries",
      "Dagda Beard Grass",
      "Eastern Tea Leaves",
      "Fragrant Pastries",
      "Ginji Cervi",
      "Jamel Milk",
      "Kitten Figurine",
      "Mature Dried Cervi",
      "Mellow Pastries",
      "Pastry Cookbook",
      "Saraminian Sweets",
      "Simple Pastries",
      "Strong Cervi",
      "Weak Cervi",
      "Wing Fletching",
      "Yarc Milk"
    ]
  },
  "Ultand": {
    "loved": [],
    "preferred": [
      "Blue-Rose Bouquet",
      "Crimson Ghosh",
      "Eastern Love Story",
      "Garum",
      "Outdoor Cooking Set",
      "Pastry Cookbook"
    ]
  },
  "Fabio": {
    "loved": [],
    "preferred": [
      "Aromatic Shosh",
      "Brined Fish Guts",
      "Coffee Pastries",
      "Common Coffee",
      "Dagda Beard Grass",
      "Eastern Black Silk",
      "Eastern Tea Leaves",
      "Huge Fish Eyeball",
      "Jade Ghosh",
      "Light Shosh",
      "Mature Ghosh",
      "Mature Shosh",
      "Orgus Coffee",
      "Pack of Pastels",
      "Potted Vegetables",
      "Rustic Ghosh",
      "Secret Ghosh",
      "Select Coffee",
      "Southern Coffee",
      "Southern Ghosh",
      "Sun Ghosh",
      "Young Ghosh"
    ]
  },
  "Esmeralda": {
    "loved": [],
    "preferred": [
      "Alecto Garum",
      "Coffee Pastries",
      "Dagda Beard Grass",
      "Eastern Tea Leaves",
      "Flexible Fishing Rod",
      "Fragrant Pastries",
      "Garum",
      "Gaudy Bangle",
      "Herbal Recipe Guide",
      "Home-Recipe Book",
      "Horse-Grooming Kit",
      "Huge Fish Eyeball",
      "Kitten Figurine",
      "Mellow Pastries",
      "Pastry Cookbook",
      "Saraminian Sweets",
      "Sharp Fishhook",
      "Simple Pastries",
      "Smooth Garum",
      "Strong Seasonings",
      "Training Bracelet",
      "Village Recipes"
    ]
  },
  "Mikaela": {
    "loved": [],
    "preferred": [
      "Alecto Garum",
      "Aromatic Shosh",
      "Common Coffee",
      "Eastern Tea Leaves",
      "Garum",
      "Herbal Recipe Guide",
      "Home-Recipe Book",
      "Huge Fish Eyeball",
      "Jade Ghosh",
      "Light Shosh",
      "Mature Ghosh",
      "Mature Shosh",
      "Orgus Coffee",
      "Pastry Cookbook",
      "Rare Spices",
      "Rustic Ghosh",
      "Secret Ghosh",
      "Select Coffee",
      "Southern Coffee",
      "Southern Ghosh",
      "Strong Seasonings",
      "Sun Ghosh",
      "Village Recipes",
      "Wing Fletching",
      "Young Ghosh"
    ]
  },
  "Bonaventure": {
    "loved": [],
    "preferred": [
      "Ceremonial Spear",
      "Eastern Black Silk",
      "Jade Ghosh",
      "Pastry Cookbook",
      "Rare Spices",
      "Secret Ghosh",
      "Strong Seasonings",
      "Sun Ghosh",
      "Tales of the Arena",
      "The Works of Dante",
      "Thick Foreign Tome",
      "Village Recipes"
    ]
  },
  "Tobias": {
    "loved": [],
    "preferred": [
      "Alecto Garum",
      "Dagda Beard Grass",
      "Eastern Black Silk",
      "Eastern Tea Leaves",
      "Garum",
      "Herbal Recipe Guide",
      "Home-Recipe Book",
      "Horse-Grooming Kit",
      "Huge Fish Eyeball",
      "Jade Ghosh",
      "Kitten Figurine",
      "Mature Ghosh",
      "Mature Shosh",
      "Pastry Cookbook",
      "Rustic Ghosh",
      "Secret Ghosh",
      "Sharp Fishhook",
      "Smooth Garum",
      "Southern Ghosh",
      "Strong Seasonings",
      "Sturdy Rucksack",
      "Sun Ghosh",
      "Training Bracelet",
      "Village Recipes",
      "Wing Fletching",
      "Young Ghosh"
    ]
  },
  "Lysander": {
    "loved": [],
    "preferred": [
      "Dagda Beard Grass",
      "Eastern Tea Leaves",
      "Horse-Grooming Kit",
      "Mane Ornament",
      "Wing Fletching"
    ]
  },
  "Lilian": {
    "loved": [],
    "preferred": [
      "Gaudy Bangle",
      "Herbal Recipe Guide",
      "Home-Recipe Book",
      "Pastry Cookbook",
      "Strong Seasonings",
      "Training Bracelet",
      "Village Recipes",
      "Wing Fletching"
    ]
  },
  "Buccar": {
    "loved": [],
    "preferred": [
      "Arrowhead Gem",
      "Light Shosh",
      "Mature Ghosh",
      "Mature Shosh",
      "Niiza Garum",
      "Outdoor Cooking Set",
      "Rare Spices",
      "Rustic Ghosh",
      "Village Recipes",
      "Volcano Ghosh",
      "Young Ghosh",
      "Young Shosh"
    ]
  },
  "Sirocco": {
    "loved": [],
    "preferred": [
      "Eastern Love Story",
      "Joint-Relief Gloves",
      "Light Shosh",
      "Mature Ghosh",
      "Mature Shosh",
      "Pack of Pastels",
      "Rustic Ghosh",
      "Skin Balm",
      "Young Ghosh",
      "Young Shosh"
    ]
  },
  "Mu": {
    "loved": [],
    "preferred": [
      "Arrowhead Gem",
      "Candy Crystals",
      "Honey Pastries",
      "Jamel Milk",
      "Outdoor Cooking Set",
      "Pickled Vegetables",
      "Pure-White Cervi",
      "Weak Cervi",
      "Yarc Milk"
    ]
  },
  "Olympia": {
    "loved": [],
    "preferred": [
      "Coffee Pastries",
      "Common Coffee",
      "Gaudy Bangle",
      "Select Coffee",
      "Skin Balm",
      "Southern Coffee"
    ]
  },
  "Gaitz": {
    "loved": [],
    "preferred": [
      "Arrowhead Gem",
      "Common Coffee",
      "Crimson Ghosh",
      "Horse-Grooming Kit",
      "Joint-Relief Gloves",
      "Orgus Coffee",
      "Training Pillar",
      "Training Weights"
    ]
  },
  "Dante": {
    "loved": [],
    "preferred": [
      "Arrowhead Gem",
      "Common Coffee",
      "Crimson Ghosh",
      "Magic-Trick Set",
      "Pack of Pastels",
      "Select Coffee",
      "The Works of Dante"
    ]
  },
  "Goliath": {
    "loved": [],
    "preferred": [
      "Aromatic Shosh",
      "Eastern Tea Leaves",
      "Jade Ghosh",
      "Light Shosh",
      "Mature Ghosh",
      "Mature Shosh",
      "Rustic Ghosh",
      "Secret Ghosh",
      "Southern Ghosh",
      "Sturdy Rucksack",
      "Sun Ghosh",
      "Training Bracelet",
      "Wing Fletching",
      "Young Ghosh"
    ]
  },
  "Jester": {
    "loved": [],
    "preferred": [
      "Crimson Ghosh",
      "Dual Fish Knives",
      "Joint-Relief Gloves",
      "Spirit Board Game"
    ]
  },
  "Ursula": {
    "loved": [],
    "preferred": [
      "Arrowhead Gem",
      "Common Coffee",
      "Crimson Ghosh",
      "Eastern Love Story",
      "Kitten Figurine",
      "Mane Ornament",
      "Pack of Pastels"
    ]
  },
  "Simon": {
    "loved": [],
    "preferred": [
      "Crimson Ghosh",
      "Dual Fish Knives",
      "Protection Figurine"
    ]
  },
  "Ludia": {
    "loved": [],
    "preferred": [
      "Coffee Pastries",
      "Common Coffee",
      "Everyday Scenes",
      "Gaudy Bangle",
      "Herbal Recipe Guide",
      "Home-Recipe Book",
      "Magic-Trick Set",
      "Orgus Coffee",
      "Pastry Cookbook",
      "Select Coffee",
      "Sharp Fishhook",
      "Skin Balm",
      "Southern Coffee",
      "Sturdy Rucksack",
      "Training Bracelet",
      "Village Recipes"
    ]
  },
  "Fianna": {
    "loved": [],
    "preferred": [
      "Common Coffee",
      "Crimson Ghosh",
      "Joint-Relief Gloves",
      "Rare Spices",
      "Select Coffee",
      "Skin Balm",
      "Southern Coffee"
    ]
  },
  "Diego": {
    "loved": [],
    "preferred": [
      "Crimson Ghosh",
      "Joint-Relief Gloves",
      "Protection Figurine",
      "Training Pillar",
      "Training Weights"
    ]
  },
  "Ninae": {
    "loved": [],
    "preferred": [
      "Arrowhead Gem",
      "Crimson Ghosh",
      "Eastern Black Silk",
      "Eastern Tea Leaves"
    ]
  },
  "Seteth": {
    "loved": [],
    "preferred": [
      "Common Coffee",
      "Eastern Tea Leaves",
      "Flexible Fishing Rod",
      "Herbal Recipe Guide",
      "Home-Recipe Book",
      "Huge Fish Eyeball",
      "Orgus Coffee",
      "Pastry Cookbook",
      "Select Coffee",
      "Sharp Fishhook",
      "Southern Coffee",
      "Sturdy Rucksack",
      "Village Recipes"
    ]
  },
  "Loretta": {
    "loved": [],
    "preferred": [
      "Arrowhead Gem",
      "Crimson Ghosh",
      "Honey Milk",
      "Honey Pastries",
      "Joint-Relief Gloves",
      "Mellow Pastries",
      "Pastry Cookbook",
      "Pure-White Cervi",
      "Training Pillar",
      "Training Weights"
    ]
  },
  "Sha Lan": {
    "loved": [],
    "preferred": [
      "Common Coffee",
      "Energizing Ghosh",
      "Niiza Garum",
      "Outdoor Cooking Set",
      "Pastry Cookbook",
      "Select Coffee"
    ]
  },
  "Nezha": {
    "loved": [],
    "preferred": [
      "Eastern Tea Leaves",
      "Pickled Bulbs",
      "Sturdy Rucksack",
      "Training Bracelet",
      "Wing Fletching"
    ]
  },
  "Dadao": {
    "loved": [],
    "preferred": [
      "Coffee Pastries",
      "Fragrant Pastries",
      "Ginji Cervi",
      "Honey Milk",
      "Honey Pastries",
      "Huge Fish Eyeball",
      "Jamel Milk",
      "Mature Dried Cervi",
      "Mellow Pastries",
      "Pastry Cookbook",
      "Potted Vegetables",
      "Saraminian Sweets",
      "Simple Pastries",
      "Strong Cervi",
      "Weak Cervi",
      "Yarc Milk"
    ]
  },
  "Halvin": {
    "loved": [],
    "preferred": [
      "Crimson Ghosh",
      "Eastern Tea Leaves",
      "Exquisite Ring",
      "Garum",
      "Gaudy Bangle",
      "Jade Panther Figure",
      "Magic-Trick Set",
      "Potted Vegetables",
      "Simple Pastries",
      "Skin Balm",
      "Village Recipes"
    ]
  },
  "Guzran": {
    "loved": [],
    "preferred": [
      "Aromatic Shosh",
      "Common Coffee",
      "Eastern Tea Leaves",
      "Huge Fish Eyeball",
      "Jade Ghosh",
      "Light Shosh",
      "Mature Ghosh",
      "Mature Shosh",
      "Orgus Coffee",
      "Rustic Ghosh",
      "Secret Ghosh",
      "Select Coffee",
      "Southern Coffee",
      "Southern Ghosh",
      "Strong Seasonings",
      "Sun Ghosh",
      "Wing Fletching",
      "Young Ghosh",
      "Young Shosh"
    ]
  },
  "Nydine": {
    "loved": [],
    "preferred": [
      "Eastern Love Story",
      "Eastern Tea Leaves",
      "Kitten Figurine",
      "Sturdy Rucksack",
      "Training Bracelet",
      "Training Weights",
      "Wing Fletching"
    ]
  },
  "Io": {
    "loved": [],
    "preferred": [
      "Arrowhead Gem",
      "Common Coffee",
      "Crimson Ghosh",
      "Horse-Grooming Kit",
      "Joint-Relief Gloves",
      "Kitten Figurine",
      "Mane Ornament",
      "Protection Figurine",
      "Spirit Board Game",
      "Sturdy Rucksack",
      "Training Pillar",
      "Training Weights"
    ]
  },
  "Catania": {
    "loved": [],
    "preferred": [
      "Coffee Pastries",
      "Common Coffee",
      "Dagda Beard Grass",
      "Gaudy Bangle",
      "Horse-Grooming Kit",
      "Kitten Figurine",
      "Magic-Trick Set",
      "Orgus Coffee",
      "Pack of Pastels",
      "Select Coffee",
      "Southern Coffee"
    ]
  },
  "Noctula": {
    "loved": [],
    "preferred": [
      "Eastern Tea Leaves",
      "Protection Figurine",
      "Sturdy Rucksack",
      "Training Bracelet",
      "Wing Fletching"
    ]
  },
  "Yang Jie": {
    "loved": [],
    "preferred": [
      "Aromatic Shosh",
      "Coffee Pastries",
      "Common Coffee",
      "Flexible Fishing Rod",
      "Herbal Recipe Guide",
      "Home-Recipe Book",
      "Huge Fish Eyeball",
      "Jade Ghosh",
      "Kitten Figurine",
      "Light Shosh",
      "Mature Ghosh",
      "Mature Shosh",
      "Orgus Coffee",
      "Pastry Cookbook",
      "Rustic Ghosh",
      "Secret Ghosh",
      "Select Coffee",
      "Sharp Fishhook",
      "Southern Coffee",
      "Southern Ghosh",
      "Sun Ghosh",
      "The Works of Dante",
      "Village Recipes",
      "Young Ghosh"
    ]
  },
  "Nuzzuo": {
    "loved": [],
    "preferred": [
      "Common Coffee",
      "Crimson Ghosh",
      "Joint-Relief Gloves",
      "Kitten Figurine",
      "Niiza Garum",
      "Outdoor Cooking Set",
      "Pickled Vegetables",
      "Protection Figurine",
      "Select Coffee",
      "Sturdy Rucksack",
      "Training Bracelet",
      "Training Pillar",
      "Training Weights"
    ]
  },
  "Majide": {
    "loved": [],
    "preferred": [
      "Crimson Ghosh",
      "Dual Fish Knives",
      "Joint-Relief Gloves",
      "Light Shosh",
      "Mature Ghosh",
      "Mature Shosh",
      "Rustic Ghosh",
      "Training Pillar",
      "Training Weights",
      "Volcano Ghosh",
      "Young Ghosh",
      "Young Shosh"
    ]
  },
  "Sofia": {
    "loved": [],
    "preferred": [
      "Arrowhead Gem",
      "Common Coffee",
      "Crimson Ghosh",
      "Ginji Cervi",
      "Honey Milk",
      "Honey Pastries",
      "Jamel Milk",
      "Kitten Figurine",
      "Magic-Trick Set",
      "Niiza Garum",
      "Outdoor Cooking Set",
      "Pack of Pastels",
      "Pastry Cookbook",
      "Pickled Vegetables",
      "Protection Figurine",
      "Pure-White Cervi",
      "Sharp Fishhook",
      "Yarc Milk"
    ]
  },
  "Alexandra": {
    "loved": [],
    "preferred": [
      "Alecto Garum",
      "Dagda Beard Grass",
      "Garum",
      "Gaudy Bangle",
      "Herbal Recipe Guide",
      "Home-Recipe Book",
      "Horse-Grooming Kit",
      "Kitten Figurine",
      "Mane Ornament",
      "Pastry Cookbook",
      "Smooth Garum",
      "Strong Seasonings",
      "Sturdy Rucksack",
      "Training Bracelet",
      "Village Recipes",
      "Wing Fletching"
    ]
  },
  "Zarcone": {
    "loved": [],
    "preferred": [
      "Eastern Earrings",
      "Gaudy Bangle",
      "Pickled Bulbs",
      "Potted Vegetables",
      "Strategy Manuscript",
      "Tales of Adventure",
      "Wing Fletching"
    ]
  },
  "Jasmine": {
    "loved": [],
    "preferred": [
      "Arrowhead Gem",
      "Crimson Ghosh",
      "Dual Fish Knives",
      "Honey Pastries",
      "Jamel Milk",
      "Joint-Relief Gloves",
      "Kitten Figurine",
      "Magic-Trick Set",
      "Niiza Garum",
      "Outdoor Cooking Set",
      "Pack of Pastels",
      "Pastry Cookbook",
      "Protection Figurine",
      "Pure-White Cervi",
      "Rare Spices",
      "Sturdy Rucksack",
      "Training Pillar",
      "Training Weights"
    ]
  },
  "Inyoni": {
    "loved": [],
    "preferred": [
      "Eastern Black Silk",
      "Eastern Tea Leaves",
      "Huge Fish Eyeball",
      "Sharp Fishhook",
      "Sturdy Rucksack",
      "Training Bracelet",
      "Wing Fletching"
    ]
  },
  "Kiroc": {
    "loved": [],
    "preferred": [
      "Arrowhead Gem",
      "Common Coffee",
      "Joint-Relief Gloves",
      "Light Shosh",
      "Mature Ghosh",
      "Mature Shosh",
      "Rustic Ghosh",
      "Select Coffee",
      "Sharp Fishhook",
      "Southern Coffee",
      "Training Pillar",
      "Training Weights",
      "Young Ghosh",
      "Young Shosh"
    ]
  },
  "Peppe": {
    "loved": [],
    "preferred": [
      "Common Coffee",
      "Crimson Ghosh",
      "Joint-Relief Gloves",
      "Kitten Figurine",
      "Magic-Trick Set",
      "Outdoor Cooking Set",
      "Pack of Pastels",
      "Pastry Cookbook",
      "Protection Figurine",
      "Sharp Fishhook",
      "Spirit Board Game",
      "Sturdy Rucksack",
      "The Works of Dante",
      "Training Pillar",
      "Training Weights"
    ]
  }
};

export const characters: CharacterGifts[] = names.map((name) => {
  const record = records[name] ?? {};
  return {
    name,
    loved: [...(record.loved ?? [])].sort((a, b) => a.localeCompare(b)),
    preferred: [...(record.preferred ?? [])].sort((a, b) => a.localeCompare(b))
  };
});
