
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://keufrngaocclvdchploc.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtldWZybmdhb2NjbHZkY2hwbG9jIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODIxNjQyMjcsImV4cCI6MTk5Nzc0MDIyN30.IFDNNJJ6qLfdKgDyz7sU2t02yE6BeTOhuYTdFW5Sa_Q'

export const supabase = createClient(supabaseUrl, supabaseKey)