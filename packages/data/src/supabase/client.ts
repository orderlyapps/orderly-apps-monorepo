/// <reference types="vite/client" />
import { createClient } from "@supabase/supabase-js";
import { Database } from "./supabase-types.js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
console.log("🚀 ~ supabaseUrl:", supabaseUrl)

const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey);
