import { createClient } from "@supabase/supabase-js"

function getClient() {
  const url = process.env.SUPABASE_URL
  const key = process.env.SUPABASE_SERVICE_KEY

  if (!url || !key) {
    throw new Error("Missing Supabase environment variables. Check your .env.local file.")
  }

  return createClient(url, key)
}

export async function getCourses() {
  const client = getClient()
  const { data, error } = await client
    .from("courses")
    .select("*")
    .order("created_at", { ascending: true })

  if (error) throw new Error(error.message)
  return data
}
