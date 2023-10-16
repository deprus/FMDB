import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
  'https://xjmtizubxbmqcxdwakam.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhqbXRpenVieGJtcWN4ZHdha2FtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTcwNTE3MTUsImV4cCI6MjAxMjYyNzcxNX0.bogo1GS4zIDC6-AFy73daw4boaHqqi6HR3X7-jpnajw'
);
