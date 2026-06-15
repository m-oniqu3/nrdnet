export type Post = {
  id: string;
  url: string;
  domain: string | null;
  custom_title: string | null;
  image: string | null;
  take: string | null;
  tags: string[] | null;
  upvotes: number;
  comments_count: number;
  created_at: Date | null;
  username: string | null;
  user_id: string | null;
};
