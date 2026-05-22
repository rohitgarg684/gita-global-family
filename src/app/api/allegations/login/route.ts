import { NextResponse } from "next/server";
import { verifyPassword, issueSessionToken } from "@/lib/allegations-auth";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

interface LoginBody {
  password?: unknown;
}

export async function POST(req: Request) {
  let body: LoginBody;
  try {
    body = (await req.json()) as LoginBody;
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_body" }, { status: 400 });
  }

  if (typeof body.password !== "string" || body.password.length === 0) {
    return NextResponse.json(
      { ok: false, error: "password_required" },
      { status: 400 }
    );
  }

  if (!verifyPassword(body.password)) {
    // Constant-ish latency: small artificial delay to discourage brute force.
    await new Promise((r) => setTimeout(r, 250));
    return NextResponse.json(
      { ok: false, error: "invalid_password" },
      { status: 401 }
    );
  }

  const token = issueSessionToken();
  const res = NextResponse.json({ ok: true });
  res.cookies.set({
    name: token.cookieName,
    value: token.value,
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: token.maxAgeSeconds,
  });
  return res;
}
