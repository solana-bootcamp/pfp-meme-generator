import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.REACT_APP_SPB_URL
const supabaseAnonKey = process.env.REACT_APP_SPB_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey);