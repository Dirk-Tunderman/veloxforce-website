-- Add website column to clients table for business analysis
ALTER TABLE audit_clients ADD COLUMN IF NOT EXISTS website text;

-- Add index for website lookup
CREATE INDEX IF NOT EXISTS idx_clients_website ON audit_clients(website);