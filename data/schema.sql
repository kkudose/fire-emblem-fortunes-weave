PRAGMA foreign_keys = ON;

CREATE TABLE characters (
  character_id INTEGER PRIMARY KEY,
  name TEXT NOT NULL UNIQUE
);

CREATE TABLE gifts (
  gift_id INTEGER PRIMARY KEY,
  name TEXT NOT NULL UNIQUE
);

CREATE TABLE data_sources (
  source_id INTEGER PRIMARY KEY,
  name TEXT NOT NULL UNIQUE,
  url TEXT,
  source_type TEXT NOT NULL,
  use_status TEXT NOT NULL CHECK (use_status IN ('eligible', 'historical', 'banned')),
  notes TEXT
);

CREATE TABLE source_tier_mappings (
  source_id INTEGER NOT NULL REFERENCES data_sources(source_id),
  source_tier_raw TEXT NOT NULL,
  normalized_tier TEXT NOT NULL,
  eligible_for_confidence INTEGER NOT NULL CHECK (eligible_for_confidence IN (0, 1)),
  notes TEXT,
  PRIMARY KEY (source_id, source_tier_raw)
);

CREATE TABLE source_reactions_raw (
  raw_reaction_id INTEGER PRIMARY KEY,
  source_id INTEGER NOT NULL REFERENCES data_sources(source_id),
  character_name_raw TEXT NOT NULL,
  gift_name_raw TEXT NOT NULL,
  source_tier_raw TEXT NOT NULL,
  source_status TEXT NOT NULL,
  source_score_raw TEXT,
  source_context TEXT NOT NULL DEFAULT '',
  source_row INTEGER
);

CREATE TABLE source_reactions (
  source_reaction_id INTEGER PRIMARY KEY,
  source_id INTEGER NOT NULL REFERENCES data_sources(source_id),
  character_id INTEGER NOT NULL REFERENCES characters(character_id),
  gift_id INTEGER NOT NULL REFERENCES gifts(gift_id),
  source_tier_raw TEXT NOT NULL,
  normalized_tier TEXT NOT NULL,
  source_status TEXT NOT NULL,
  source_context TEXT NOT NULL DEFAULT '',
  source_score_raw TEXT,
  eligible_for_confidence INTEGER NOT NULL CHECK (eligible_for_confidence IN (0, 1)),
  source_row INTEGER
);

CREATE TABLE manual_confirmations (
  confirmation_id INTEGER PRIMARY KEY,
  character_id INTEGER NOT NULL REFERENCES characters(character_id),
  gift_id INTEGER NOT NULL REFERENCES gifts(gift_id),
  source_id INTEGER NOT NULL REFERENCES data_sources(source_id),
  tier TEXT NOT NULL CHECK (tier IN ('Loved', 'Really Liked', 'Liked')),
  notes TEXT NOT NULL,
  UNIQUE (character_id, gift_id)
);

CREATE TABLE reactions (
  reaction_id INTEGER PRIMARY KEY,
  character_id INTEGER NOT NULL REFERENCES characters(character_id),
  gift_id INTEGER NOT NULL REFERENCES gifts(gift_id),
  tier TEXT NOT NULL CHECK (tier IN ('Loved', 'Really Liked', 'Liked', 'Neutral', 'Disliked')),
  verification_status TEXT NOT NULL CHECK (verification_status IN ('verified', 'unverified')),
  eligible_source_count INTEGER NOT NULL CHECK (eligible_source_count >= 0),
  eligible_sources TEXT NOT NULL,
  tier_conflict_normalized INTEGER NOT NULL CHECK (tier_conflict_normalized IN (0, 1)),
  direct_confirmation INTEGER NOT NULL CHECK (direct_confirmation IN (0, 1)),
  notes TEXT,
  UNIQUE (character_id, gift_id)
);

CREATE INDEX idx_source_reactions_character ON source_reactions(character_id);
CREATE INDEX idx_source_reactions_gift ON source_reactions(gift_id);
CREATE INDEX idx_source_reactions_source ON source_reactions(source_id);
CREATE INDEX idx_reactions_character ON reactions(character_id);
CREATE INDEX idx_reactions_gift ON reactions(gift_id);
