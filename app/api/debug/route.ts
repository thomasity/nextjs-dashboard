// app/api/public-env/route.ts
import { NextResponse } from "next/server";

// Ensure this is never statically cached at build time.
export const dynamic = "force-dynamic";
// Use Node runtime so process.env is available everywhere.
export const runtime = "nodejs";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const reveal = url.searchParams.get("reveal") === "1"; // add ?reveal=1 to show full values

  const entries = Object.entries(process.env)
    .filter(([k]) => k.startsWith("NEXT_PUBLIC_"));

  return NextResponse.json(
    { env: Object.fromEntries(entries), count: entries.length, reveal },
    { headers: { "Cache-Control": "no-store" } } // don’t CDN-cache this
  );
}
