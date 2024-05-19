import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://qbfnhjsqlrmylckhwtzj.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFiZm5oanNxbHJteWxja2h3dHpqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTYxMTI2OTgsImV4cCI6MjAzMTY4ODY5OH0.6y5MPm6dV2y-7Hl_3vDNuOqnWi0fZEMY0OACekIZA4A';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);