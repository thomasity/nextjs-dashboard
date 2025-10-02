import { NextRequest, NextResponse } from "next/server";

const GITHUB_API = "https://api.github.com";
const API_VERSION = "2022-11-28";

function buildHeaders(format: string) {
  // raw: Markdown text, html: GitHub-rendered HTML, json: API JSON (base64)
  const accept =
    format === "html"
      ? "application/vnd.github.html"
      : format === "json"
      ? "application/vnd.github+json"
      : "application/vnd.github.raw";
  const h: Record<string, string> = {
    Accept: accept,
    "User-Agent": "nextjs-readme-route",
    "X-GitHub-Api-Version": API_VERSION,
  };
  if (process.env.GITHUB_TOKEN) h.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  return h;
}

async function fetchGithubReadme(owner: string, repo: string, ref?: string, format = "raw") {
  const url = new URL(`${GITHUB_API}/repos/${owner}/${repo}/readme`);
  if (ref) url.searchParams.set("ref", ref);
  const res = await fetch(url, {
    headers: buildHeaders(format),
    // cache README for 5 minutes
    next: { revalidate: 300 },
  });
  return res;
}

async function fallbackRaw(owner: string, repo: string, ref?: string) {
  // Try raw.githubusercontent.com as a fallback (raw markdown)
  const branches = ref ? [ref] : ["main", "master"];
  for (const b of branches) {
    const url = `https://raw.githubusercontent.com/${owner}/${repo}/${b}/README.md`;
    const res = await fetch(url, { next: { revalidate: 300 } });
    if (res.ok) return res;
  }
  return null;
}

export async function GET(
  req: NextRequest,
  { params }: { params: { owner: string; repo: string } }
) {
  const { owner, repo } = await params;
  const { searchParams } = new URL(req.url);
  const ref = searchParams.get("ref") ?? undefined;
  const format = (searchParams.get("format") ?? "raw").toLowerCase(); // raw | html | json

  // 1) Try GitHub API
  let res = await fetchGithubReadme(owner, repo, ref, format);
  if (res.ok) {
    const body = await res.arrayBuffer();

    // Content-Type by format
    const contentType =
      format === "html"
        ? "text/html; charset=utf-8"
        : format === "json"
        ? "application/json; charset=utf-8"
        : "text/markdown; charset=utf-8";

    return new NextResponse(body, {
      status: 200,
      headers: {
        "Content-Type": contentType,
        "Cache-Control": "s-maxage=300, stale-while-revalidate=86400",
      },
    });
  }

  // 2) Fallback to raw.githubusercontent.com for raw markdown
  if (format === "raw") {
    const raw = await fallbackRaw(owner, repo, ref);
    if (raw?.ok) {
      const md = await raw.text();
      return new NextResponse(md, {
        status: 200,
        headers: {
          "Content-Type": "text/markdown; charset=utf-8",
          "Cache-Control": "s-maxage=300, stale-while-revalidate=86400",
        },
      });
    }
  }

  // 3) Error bubble-up
  const status = res.status || 500;
  const msg = await safeText(res);
  return NextResponse.json(
    {
      error: "Unable to retrieve README",
      status,
      detail: msg || "Check owner/repo, branch, or visibility.",
    },
    { status }
  );
}

async function safeText(res: Response) {
  try {
    const t = await res.text();
    return t.slice(0, 2000);
  } catch {
    return "";
  }
}
