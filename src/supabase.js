import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://vopojkeewzhwznidghxb.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZvcG9qa2Vld3pod3puaWRnaHhiIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzMxNjkxODUsImV4cCI6MTk4ODc0NTE4NX0.JHtud-1MVWEebPNlCm4Iq5UPhAtlQu-LHvFISh5hZHw";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
