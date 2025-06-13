-- Create clients table
CREATE TABLE IF NOT EXISTS audit_clients (
    id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    email text UNIQUE NOT NULL,
    phone_number text,
    name text,
    company_name text,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone DEFAULT now()
);

-- Create quiz_submissions table
CREATE TABLE IF NOT EXISTS audit_quiz_submissions (
    id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    client_id uuid NOT NULL REFERENCES audit_clients(id) ON DELETE CASCADE,
    process_name_input text NOT NULL,
    selected_process_type text,
    calculated_score integer NOT NULL,
    result_category text NOT NULL,
    submitted_at timestamp with time zone DEFAULT now(),
    ai_analysis_status text DEFAULT 'pending' CHECK (ai_analysis_status IN ('pending', 'processing', 'complete', 'failed')),
    ai_report_sent_at timestamp with time zone
);

-- Create quiz_answers table
CREATE TABLE IF NOT EXISTS audit_quiz_answers (
    id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    submission_id uuid NOT NULL REFERENCES audit_quiz_submissions(id) ON DELETE CASCADE,
    question_id text NOT NULL,
    answer_value text NOT NULL,
    answer_score integer,
    created_at timestamp with time zone DEFAULT now()
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_clients_email ON audit_clients(email);
CREATE INDEX IF NOT EXISTS idx_quiz_submissions_client_id ON audit_quiz_submissions(client_id);
CREATE INDEX IF NOT EXISTS idx_quiz_submissions_status ON audit_quiz_submissions(ai_analysis_status);
CREATE INDEX IF NOT EXISTS idx_quiz_answers_submission_id ON audit_quiz_answers(submission_id);
CREATE INDEX IF NOT EXISTS idx_quiz_answers_question_id ON audit_quiz_answers(question_id);

-- Create updated_at trigger for clients table
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_clients_updated_at 
    BEFORE UPDATE ON audit_clients 
    FOR EACH ROW 
    EXECUTE FUNCTION update_updated_at_column();

-- Enable Row Level Security
ALTER TABLE audit_clients ENABLE ROW LEVEL SECURITY;
ALTER TABLE audit_quiz_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE audit_quiz_answers ENABLE ROW LEVEL SECURITY;

-- Create RLS policies (allowing public access for the audit tool)
CREATE POLICY "Allow public insert on clients" ON audit_clients
    FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow public update on clients" ON audit_clients
    FOR UPDATE USING (true);

CREATE POLICY "Allow public insert on quiz_submissions" ON audit_quiz_submissions
    FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow public insert on quiz_answers" ON audit_quiz_answers
    FOR INSERT WITH CHECK (true);

-- Grant necessary permissions
GRANT USAGE ON SCHEMA public TO anon, authenticated;
GRANT ALL ON audit_clients TO anon, authenticated;
GRANT ALL ON audit_quiz_submissions TO anon, authenticated;
GRANT ALL ON audit_quiz_answers TO anon, authenticated;
GRANT USAGE, SELECT ON ALL SEQUENCES IN SCHEMA public TO anon, authenticated;
