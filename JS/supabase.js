import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

const SUPABASE_URL = 'https://ugejvxqczjpvhgwomlfx.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVnZWp2eHFjempwdmhnd29tbGZ4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQwMjY5MDAsImV4cCI6MjA2OTYwMjkwMH0.T3y3FfqBdKGKKzinye-MCe1DcYcLnUiRxiLFIBcxeVk';

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);