/*
  # Create Terms and Conditions Table

  1. New Tables
    - `terms_and_conditions`
      - `id` (uuid, primary key)
      - `title` (text, name of the document)
      - `file_path` (text, path to PDF in storage)
      - `uploaded_at` (timestamp)
      - `updated_at` (timestamp)
  2. Security
    - Enable RLS on `terms_and_conditions` table
    - Add policy to allow public read access (documents are public)
    - Add policy to allow uploads via admin function
*/

CREATE TABLE IF NOT EXISTS terms_and_conditions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  file_path text NOT NULL,
  uploaded_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE terms_and_conditions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view terms and conditions"
  ON terms_and_conditions
  FOR SELECT
  USING (true);
