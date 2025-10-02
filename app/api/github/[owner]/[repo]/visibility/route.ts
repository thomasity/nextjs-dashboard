import { NextRequest, NextResponse } from "next/server";

const GITHUB_API = "https://api.github.com";
const API_VERSION = "2022-11-28";

function ghHeaders(auth = true) {
  const h: Record<string, string> = {
    Accept: "application/vnd.github+json",
    "User-Agent": "nextjs-visibility-route",
    "X-GitHub-Api-Version": API_VERSION,
  };
  if (auth && process.env.GITHUB_TOKEN) {
    h.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  }
  return h;
}

async function queryRepo(owner: string, repo: string, auth: boolean) {
  const url = `${GITHUB_API}/repos/${owner}/${repo}`;
  return fetch(url, {
    headers: ghHeaders(auth),
    next: { revalidate: 300 },
  });
}

export async function GET(
  _req: NextRequest,
  { params }: { params: { owner: string; repo: string } }
) {
  const { owner, repo } = await params;

  let res = await queryRepo(owner, repo, true);
  if (!res.ok) {
    const fallback = await queryRepo(owner, repo, false);
    if (fallback.ok) res = fallback;
  }

  if (res.ok) {
    const data = await res.json();
    const visible = (data.visibility as string) ?? (data.private ? "private" : "public");
    return NextResponse.json(
      {
        owner,
        repo,
        private: Boolean(data.private),
        visibility: visible,
        archived: Boolean(data.archived),
        disabled: Boolean(data.disabled),
        source: res.headers.get("x-ratelimit-resource")?.includes("graphql") ? "graphql" : "rest",
      },
      {
        status: 200,
        headers: { "Cache-Control": "s-maxage=300, stale-while-revalidate=86400" },
      }
    );
  }

  const status = res.status;
  const reason =
    status === 404
      ? "not_found_or_no_access"
      : status === 403
      ? "forbidden_or_rate_limited"
      : "unknown_error";

  return NextResponse.json(
    {
      owner,
      repo,
      private: null,
      visibility: "unknown",
      reason,
      status,
    },
    { status }
  );
}
