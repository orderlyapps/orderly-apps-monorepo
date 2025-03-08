import { supabase } from "./client.js";

export async function supabaseSignIn() {
  return await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: import.meta.env.VITE_AUTH_REDIRECT,
    },
  });
}
