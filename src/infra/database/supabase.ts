import { createClient } from "@supabase/supabase-js";

const URL = process.env.VITE_SUPABASE_URL;
const ANON = process.env.VITE_SUPABASE_ANON;

export const supabase = createClient(URL ?? "", ANON ?? "", {
  auth: { autoRefreshToken: true, persistSession: true },
});
