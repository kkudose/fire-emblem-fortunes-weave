PRAGMA foreign_keys = ON;

CREATE TABLE IF NOT EXISTS characters (
  character_id INTEGER PRIMARY KEY,
  name TEXT NOT NULL UNIQUE,
  automatic_recruitment TEXT
);

CREATE TABLE IF NOT EXISTS gifts (
  gift_id INTEGER PRIMARY KEY,
  name TEXT NOT NULL UNIQUE,
  menu_position INTEGER UNIQUE
);

CREATE TABLE IF NOT EXISTS data_sources (
  source_id INTEGER PRIMARY KEY,
  name TEXT NOT NULL UNIQUE,
  url TEXT,
  source_type TEXT NOT NULL,
  use_status TEXT NOT NULL CHECK (use_status IN ('eligible', 'banned', 'historical')),
  notes TEXT
);

CREATE TABLE IF NOT EXISTS reactions (
  reaction_id INTEGER PRIMARY KEY,
  character_id INTEGER NOT NULL REFERENCES characters(character_id),
  gift_id INTEGER NOT NULL REFERENCES gifts(gift_id),
  source_id INTEGER REFERENCES data_sources(source_id),
  tier TEXT NOT NULL CHECK (tier IN ('Loved', 'Really Liked')),
  verification_status TEXT NOT NULL CHECK (verification_status IN ('verified', 'unverified', 'source_record')),
  evidence_type TEXT NOT NULL CHECK (evidence_type IN ('current_guide', 'direct_in_game', 'published_source')),
  notes TEXT,
  UNIQUE (character_id, gift_id, source_id, evidence_type)
);

CREATE TABLE IF NOT EXISTS source_reactions_raw (
  raw_reaction_id INTEGER PRIMARY KEY,
  source_id INTEGER NOT NULL REFERENCES data_sources(source_id),
  character_name_raw TEXT NOT NULL,
  gift_name_raw TEXT NOT NULL,
  source_tier_raw TEXT NOT NULL,
  source_page_line INTEGER
);

CREATE TABLE IF NOT EXISTS source_reactions (
  source_reaction_id INTEGER PRIMARY KEY,
  source_id INTEGER NOT NULL REFERENCES data_sources(source_id),
  character_id INTEGER NOT NULL REFERENCES characters(character_id),
  gift_id INTEGER NOT NULL REFERENCES gifts(gift_id),
  source_tier_raw TEXT NOT NULL,
  source_reaction_class TEXT,
  source_page_line INTEGER,
  source_score INTEGER
);

CREATE INDEX IF NOT EXISTS idx_reactions_character ON reactions(character_id);
CREATE INDEX IF NOT EXISTS idx_reactions_gift ON reactions(gift_id);
CREATE INDEX IF NOT EXISTS idx_reactions_source ON reactions(source_id);
CREATE INDEX IF NOT EXISTS idx_raw_reactions_source ON source_reactions_raw(source_id);
CREATE INDEX IF NOT EXISTS idx_source_reactions_source ON source_reactions(source_id);
