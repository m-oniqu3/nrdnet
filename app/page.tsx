import Feed from "@/components/feed/Feed";
import Landing from "@/components/Landing";
import { createClient } from "@/lib/supabase/server";

export default async function Home() {
  const supabase = await createClient();
  const { data } = await supabase.auth.getClaims();
  const user = data?.claims;

  if (!user) return <Landing />;
  return <Feed />;
}
