// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://tcofsjjakgxtgjjiyojm.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRjb2Zzampha2d4dGdqaml5b2ptIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzgzMTEzMjIsImV4cCI6MjA1Mzg4NzMyMn0.YrAlO--MpqdNQhYPMiyYtS6ttgz6oofDawp4EOBMn5o";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);