import { NextResponse } from "next/server";
import { clearedCookie } from "@/lib/allegations-auth";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST() {
  const cleared = clearedCookie();
  const res = NextResponse.json({ ok: true });
  res.cookies.set({
    name: cleared.cookieName,
    value: cleared.value,
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 0,
  });
  return res;
}
