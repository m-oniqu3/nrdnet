// app/api/scrape/route.ts
import { NextRequest, NextResponse } from "next/server";
import ogs from "open-graph-scraper";

export async function GET(request: NextRequest) {
  const url = request.nextUrl.searchParams.get("url");

  if (!url) {
    return NextResponse.json({ error: "no url provided" }, { status: 400 });
  }

  try {
    const { result } = await ogs({ url });

    return NextResponse.json({
      title: result.ogTitle ?? result.twitterTitle ?? null,
      image: result.ogImage?.[0]?.url ?? null,
      domain: new URL(url).hostname.replace("www.", ""),
    });
  } catch {
    return NextResponse.json({
      title: null,
      image: null,
      domain: null,
    });
  }
}
