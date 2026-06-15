import { getPosts } from "@/utils/api/posts/get-posts";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const page = Number(searchParams.get("page") ?? 1);
  const limit = Number(searchParams.get("limit") ?? 10);

  try {
    const data = await getPosts({ page, limit });
    return NextResponse.json(data);
  } catch {
    return NextResponse.json(
      { error: "failed to fetch posts" },
      { status: 500 },
    );
  }
}
