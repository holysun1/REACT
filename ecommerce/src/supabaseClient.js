// src/supabaseClient.js
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// 🔥 ADICIONE ESTA LINHA PARA TESTAR:
console.log("Testando chaves:", { supabaseUrl, supabaseAnonKey });

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
