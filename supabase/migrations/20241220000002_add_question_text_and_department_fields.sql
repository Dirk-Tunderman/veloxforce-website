-- Add question_text field to quiz_answers table to store full question text
ALTER TABLE quiz_answers ADD COLUMN IF NOT EXISTS question_text text;

-- Add department_route field to quiz_submissions table for service quiz routing
ALTER TABLE quiz_submissions ADD COLUMN IF NOT EXISTS department_route text;

-- Create index for better performance on question_text searches
CREATE INDEX IF NOT EXISTS idx_quiz_answers_question_text ON quiz_answers(question_text);

-- Create index for department_route filtering
CREATE INDEX IF NOT EXISTS idx_quiz_submissions_department_route ON quiz_submissions(department_route);

-- Update table names to match API expectations (add audit_ prefix)
-- Note: This handles the naming discrepancy between migration and API code

-- Rename tables if they don't have audit_ prefix
DO $$
BEGIN
    -- Check if audit_clients exists, if not rename clients
    IF NOT EXISTS (SELECT 1 FROM information_schema.tables WHERE table_name = 'audit_clients') THEN
        IF EXISTS (SELECT 1 FROM information_schema.tables WHERE table_name = 'clients') THEN
            ALTER TABLE clients RENAME TO audit_clients;
        END IF;
    END IF;
    
    -- Check if audit_quiz_submissions exists, if not rename quiz_submissions
    IF NOT EXISTS (SELECT 1 FROM information_schema.tables WHERE table_name = 'audit_quiz_submissions') THEN
        IF EXISTS (SELECT 1 FROM information_schema.tables WHERE table_name = 'quiz_submissions') THEN
            ALTER TABLE quiz_submissions RENAME TO audit_quiz_submissions;
        END IF;
    END IF;
    
    -- Check if audit_quiz_answers exists, if not rename quiz_answers
    IF NOT EXISTS (SELECT 1 FROM information_schema.tables WHERE table_name = 'audit_quiz_answers') THEN
        IF EXISTS (SELECT 1 FROM information_schema.tables WHERE table_name = 'quiz_answers') THEN
            ALTER TABLE quiz_answers RENAME TO audit_quiz_answers;
        END IF;
    END IF;
END $$;

-- Add the new fields to the correctly named tables
ALTER TABLE audit_quiz_answers ADD COLUMN IF NOT EXISTS question_text text;
ALTER TABLE audit_quiz_submissions ADD COLUMN IF NOT EXISTS department_route text;

-- Add missing website column to audit_clients table
ALTER TABLE audit_clients ADD COLUMN IF NOT EXISTS website text;

-- Recreate indexes with correct table names
CREATE INDEX IF NOT EXISTS idx_audit_quiz_answers_question_text ON audit_quiz_answers(question_text);
CREATE INDEX IF NOT EXISTS idx_audit_quiz_submissions_department_route ON audit_quiz_submissions(department_route);

-- Update RLS policies for renamed tables
DROP POLICY IF EXISTS "Allow public insert on clients" ON clients;
DROP POLICY IF EXISTS "Allow public update on clients" ON clients;
DROP POLICY IF EXISTS "Allow public insert on quiz_submissions" ON quiz_submissions;
DROP POLICY IF EXISTS "Allow public insert on quiz_answers" ON quiz_answers;

-- Create RLS policies for audit tables
CREATE POLICY "Allow public insert on audit_clients" ON audit_clients
    FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow public update on audit_clients" ON audit_clients
    FOR UPDATE USING (true);

CREATE POLICY "Allow public insert on audit_quiz_submissions" ON audit_quiz_submissions
    FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow public insert on audit_quiz_answers" ON audit_quiz_answers
    FOR INSERT WITH CHECK (true);

-- Grant permissions for audit tables
GRANT ALL ON audit_clients TO anon, authenticated;
GRANT ALL ON audit_quiz_submissions TO anon, authenticated;
GRANT ALL ON audit_quiz_answers TO anon, authenticated;