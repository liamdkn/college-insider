-- Provenance (optional but handy)
CREATE TABLE IF NOT EXISTS data_source (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  source_type TEXT CHECK (source_type IN ('Scrape','Manual','ThirdParty')) NOT NULL DEFAULT 'Scrape',
  url TEXT,
  collected_at TIMESTAMPTZ DEFAULT NOW()
);

-- Institution (HEI)
CREATE TABLE IF NOT EXISTS institution (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT UNIQUE NOT NULL,
  aka TEXT,
  website TEXT,
  country_code CHAR(2) DEFAULT 'IE',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Programme (Course)
CREATE TABLE IF NOT EXISTS programme (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  institution_id UUID NOT NULL REFERENCES institution(id) ON DELETE CASCADE,
  cao_code TEXT,
  title TEXT NOT NULL,
  nfq_level INT,
  award TEXT,
  duration_years NUMERIC(3,1),
  delivery_mode TEXT CHECK (delivery_mode IN ('Full-time','Part-time','Blended','Online')),
  restricted BOOLEAN DEFAULT FALSE,
  description TEXT,
  last_verified_at TIMESTAMPTZ,
  UNIQUE (institution_id, cao_code)
);

-- Streams/options under one CAO code
CREATE TABLE IF NOT EXISTS programme_option (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  programme_id UUID NOT NULL REFERENCES programme(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  notes TEXT
);

-- Entry requirements (simple text for now)
CREATE TABLE IF NOT EXISTS admission_requirement (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  programme_id UUID NOT NULL REFERENCES programme(id) ON DELETE CASCADE,
  route TEXT DEFAULT 'LC',
  text_summary TEXT
);

-- Helpful search indexes
CREATE EXTENSION IF NOT EXISTS pg_trgm;
CREATE INDEX IF NOT EXISTS idx_programme_title_trgm ON programme USING GIN (title gin_trgm_ops);
CREATE INDEX IF NOT EXISTS idx_programme_cao_trgm   ON programme USING GIN (cao_code gin_trgm_ops);