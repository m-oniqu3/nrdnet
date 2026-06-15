import { db } from "@/lib/db";
import { posts, profiles } from "@/lib/db/schema";
import { Post } from "@/types/post";
import { desc, eq } from "drizzle-orm";

type GetPostsProps = {
  page: number;
  limit: number;
};

export async function getPosts({
  page,
  limit,
}: GetPostsProps): Promise<Post[]> {
  const offset = (page - 1) * limit;

  const results = await db
    .select({
      id: posts.id,
      url: posts.url,
      domain: posts.og_domain,
      custom_title: posts.custom_title,
      image: posts.og_image,
      take: posts.take,
      tags: posts.tags,
      upvotes: posts.upvote_count,
      comments_count: posts.comment_count,
      created_at: posts.created_at,
      username: profiles.username,
      user_id: profiles.id,
    })
    .from(posts)
    .leftJoin(profiles, eq(posts.user_id, profiles.id))
    .orderBy(desc(posts.created_at))
    .limit(limit)
    .offset(offset);

  return results;
}
