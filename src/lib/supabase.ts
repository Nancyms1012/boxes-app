import { createClient, SupabaseClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://ijqalxopeqyqfzwpfmfj.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlqcWFseG9wZXF5cWZ3cGZtZmZqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTE4OTMyOTksImV4cCI6MTk5NzQ2OTI5OX0.ey3pc3Mi0Iz0XdBhYmFzZS1sIn1zI2I6ImIqcWFse69';

// Cliente para usar desde el navegador (evita error 1016 en Cloudflare Workers)
export const supabase: SupabaseClient = createClient(supabaseUrl, supabaseAnonKey);
