import { NextRequest, NextResponse } from "next/server";

/**
 * IndexNow Ping Endpoint — POST /api/indexnow
 *
 * Notifies Bing (and other IndexNow participants) about new/updated pages.
 * Call this from your CI/CD pipeline after deploying content changes.
 *
 * Setup:
 *   1. Set INDEXNOW_KEY in your .env.local (and Vercel env vars)
 *   2. The public key file is served from /public/<INDEXNOW_KEY>.txt
 *
 * Usage:
 *   POST /api/indexnow
 *   Body: { "urls": ["https://gridiantechnologies.com/", "https://gridiantechnologies.com/#services"] }
 *
 * Ref: https://www.indexnow.org/documentation
 */

const SITE_HOST = "gridiantechnologies.com";
const INDEXNOW_API = "https://api.indexnow.org/indexnow";

export async function POST(req: NextRequest) {
  const apiKey = process.env.INDEXNOW_KEY;

  if (!apiKey) {
    return NextResponse.json(
      { error: "INDEXNOW_KEY environment variable is not set." },
      { status: 500 }
    );
  }

  let urls: string[] = [];

  try {
    const body = await req.json();
    urls = body.urls;
    if (!Array.isArray(urls) || urls.length === 0) {
      throw new Error("urls must be a non-empty array");
    }
  } catch {
    return NextResponse.json(
      { error: 'Body must be JSON with a "urls" array.' },
      { status: 400 }
    );
  }

  try {
    const response = await fetch(INDEXNOW_API, {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify({
        host: SITE_HOST,
        key: apiKey,
        keyLocation: `https://${SITE_HOST}/${apiKey}.txt`,
        urlList: urls,
      }),
    });

    if (!response.ok) {
      const text = await response.text();
      return NextResponse.json(
        { error: `IndexNow API responded with ${response.status}`, detail: text },
        { status: 502 }
      );
    }

    return NextResponse.json({
      success: true,
      pinged: urls.length,
      message: `${urls.length} URL(s) submitted to IndexNow.`,
    });
  } catch (err) {
    return NextResponse.json(
      { error: "Failed to reach IndexNow API.", detail: String(err) },
      { status: 503 }
    );
  }
}

// Quick GET health-check
export async function GET() {
  const hasKey = !!process.env.INDEXNOW_KEY;
  return NextResponse.json({
    ready: hasKey,
    message: hasKey
      ? "IndexNow is configured. POST with { urls: [...] } to ping."
      : "Set the INDEXNOW_KEY environment variable to activate IndexNow.",
  });
}
