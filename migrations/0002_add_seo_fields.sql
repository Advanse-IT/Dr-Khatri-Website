-- Adds SEO and organisation fields to the blog module.
ALTER TABLE posts ADD COLUMN meta_title TEXT;
ALTER TABLE posts ADD COLUMN meta_description TEXT;
ALTER TABLE posts ADD COLUMN tags TEXT; -- JSON array, e.g. ["Heart Health","Prevention"]
