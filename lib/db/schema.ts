import {
  integer,
  pgSchema,
  pgTable,
  text,
  timestamp,
  uuid,
} from "drizzle-orm/pg-core";

// tell drizzle that auth is a schema that already exists in supabase
const authSchema = pgSchema("auth");

// reference the existing auth.users table
const authUsers = authSchema.table("users", {
  id: uuid("id").primaryKey(),
});

export const profiles = pgTable("profiles", {
  id: uuid("id")
    .primaryKey()
    .references(() => authUsers.id, { onDelete: "cascade" }),
  username: text("username").notNull().unique(),
  bio: text("bio"),
  avatar_url: text("avatar_url"),
  created_at: timestamp("created_at").defaultNow(),
});

export const posts = pgTable("posts", {
  id: uuid("id").defaultRandom().primaryKey(),
  user_id: uuid("user_id")
    .notNull()
    .references(() => profiles.id, { onDelete: "cascade" }),
  url: text("url").notNull(),
  og_title: text("og_title"),
  og_image: text("og_image"),
  og_domain: text("og_domain"),
  custom_title: text("custom_title"),
  take: text("take"),
  tags: text("tags").array().default([]),
  upvote_count: integer("upvote_count").default(0).notNull(),
  comment_count: integer("comment_count").default(0).notNull(),
  created_at: timestamp("created_at").defaultNow(),
});

export const upvotes = pgTable("upvotes", {
  id: uuid("id").defaultRandom().primaryKey(),
  post_id: uuid("post_id")
    .notNull()
    .references(() => posts.id, { onDelete: "cascade" }),
  user_id: uuid("user_id")
    .notNull()
    .references(() => profiles.id, { onDelete: "cascade" }),
  created_at: timestamp("created_at").defaultNow(),
});

export const comments = pgTable("comments", {
  id: uuid("id").defaultRandom().primaryKey(),
  post_id: uuid("post_id")
    .notNull()
    .references(() => posts.id, { onDelete: "cascade" }),
  user_id: uuid("user_id")
    .notNull()
    .references(() => profiles.id, { onDelete: "cascade" }),
  parent_comment_id: uuid("parent_comment_id"),
  body: text("body").notNull(),
  created_at: timestamp("created_at").defaultNow(),
});

export const follows = pgTable("follows", {
  id: uuid("id").defaultRandom().primaryKey(),
  follower_id: uuid("follower_id")
    .notNull()
    .references(() => profiles.id, { onDelete: "cascade" }),
  following_id: uuid("following_id")
    .notNull()
    .references(() => profiles.id, { onDelete: "cascade" }),
  created_at: timestamp("created_at").defaultNow(),
});
