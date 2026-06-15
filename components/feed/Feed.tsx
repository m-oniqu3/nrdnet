"use client";

import EmptyFeed from "@/components/feed/EmptyFeed";
import FeedFilterBar from "@/components/feed/FeedFilterBar";
import InfiniteScroll from "@/components/InfiniteScroll";
import PostCard from "@/components/posts/PostCard";
import { Post } from "@/types/post";
import useSWRInfinite from "swr/infinite";

const LIMIT = 10;

const fetcher = (url: string) => fetch(url).then((res) => res.json());

// SWR calls this to get the key for each page
// returns null to stop fetching when a page comes back empty
function getKey(pageIndex: number, previousPageData: Post[]) {
  if (previousPageData && previousPageData.length === 0) return null;
  return `/api/posts?page=${pageIndex + 1}&limit=${LIMIT}`;
}

function Feed() {
  const { data, isLoading, isValidating, size, setSize } = useSWRInfinite<
    Post[]
  >(getKey, fetcher);

  // flatten pages into one array
  const allPosts: Post[] = data ? data.flat() : [];

  // last page came back with fewer items than limit — no more data
  const isEmpty = data?.[0]?.length === 0;
  const isReachingEnd =
    isEmpty || (data && data[data.length - 1]?.length < LIMIT);

  function fetchMoreData() {
    if (!isReachingEnd) setSize(size + 1);
  }

  if (isLoading) {
    return (
      <div className="font-mono text-xs text-ink-muted p-4">loading...</div>
    );
  }

  if (isEmpty) {
    return <EmptyFeed />;
  }

  // todo might need the user ID as props
  return (
    <div>
      <FeedFilterBar />
      <InfiniteScroll
        isLoadingIntialData={isLoading}
        isLoadingMoreData={isValidating}
        fetchMoreData={fetchMoreData}
      >
        <div className="flex flex-col gap-3">
          {allPosts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
          {isReachingEnd && !isLoading && (
            <p className="text-center text-xs text-ink-muted font-mono py-6">
              {"you've reached the end of the internet"}
            </p>
          )}
        </div>
      </InfiniteScroll>
    </div>
  );
}

export default Feed;
