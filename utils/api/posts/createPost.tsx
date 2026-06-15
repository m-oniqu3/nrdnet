"use server";

import { db } from "@/lib/db";
import { posts } from "@/lib/db/schema";
import { createClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";

type CreatePostInput = {
  url: string;
  custom_title: string;
  take: string;
  tags: string[];
  og_title: string | null;
  og_image: string | null;
  og_domain: string | null;
};

export async function createPost(input: CreatePostInput) {
  const supabase = await createClient();
  const { data } = await supabase.auth.getClaims();
  const user = data?.claims;

  if (!user) {
    return { error: "not authenticated" };
  }

  if (!input.url) {
    return { error: "url is required" };
  }

  try {
    await db.insert(posts).values({
      url: input.url,
      custom_title: input.custom_title || null,
      take: input.take || null,
      tags: input.tags,
      og_title: input.og_title,
      og_image: input.og_image,
      og_domain: input.og_domain,
      user_id: user.sub,
    });

    revalidatePath("/");

    return { success: true };
  } catch (error) {
    console.error(error);

    return {
      error: "failed to create post",
    };
  }
}

export default createPost;
