import { supabase } from "./client.js";

export const supabaseSignOut = async () => {
  return await supabase.auth.signOut();
};
