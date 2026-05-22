import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { COOKIE_NAME, verifySessionCookie } from "@/lib/allegations-auth";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  const store = await cookies();
  const raw = store.get(COOKIE_NAME)?.value;
  const ok = verifySessionCookie(raw);
  return NextResponse.json({ authenticated: ok });
}
