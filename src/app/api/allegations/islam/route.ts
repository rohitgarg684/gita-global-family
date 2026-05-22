import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { COOKIE_NAME, verifySessionCookie } from "@/lib/allegations-auth";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

let cached: unknown | null = null;

async function loadEssay(): Promise<unknown> {
  if (cached) return cached;
  // server-content/ is included in the standalone output via
  // outputFileTracingIncludes in next.config.ts.
  const filePath = path.join(process.cwd(), "server-content", "islam-essay.json");
  const buf = await readFile(filePath, "utf8");
  cached = JSON.parse(buf);
  return cached;
}

export async function GET() {
  const store = await cookies();
  const raw = store.get(COOKIE_NAME)?.value;
  if (!verifySessionCookie(raw)) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }

  try {
    const data = await loadEssay();
    return NextResponse.json(
      { sections: data },
      {
        // Help browsers cache for the session, but no shared/CDN caching.
        headers: { "Cache-Control": "private, max-age=300" },
      }
    );
  } catch (err) {
    console.error("Failed to load islam-essay.json:", err);
    return NextResponse.json({ error: "server_error" }, { status: 500 });
  }
}
