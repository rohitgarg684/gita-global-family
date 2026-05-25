import { NextRequest, NextResponse } from "next/server";
import { adminDb, adminAuth } from "@/lib/firebase-admin";

const ALLOWED_EMAILS = [
  "rohitgarg684@gmail.com",
  "brahmbodhi@gmail.com",
];

export async function GET(req: NextRequest) {
  const authHeader = req.headers.get("authorization");
  if (!authHeader?.startsWith("Bearer ")) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const idToken = authHeader.slice(7);

  try {
    const decoded = await adminAuth.verifyIdToken(idToken);
    if (!ALLOWED_EMAILS.includes(decoded.email ?? "")) {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }
  } catch {
    return NextResponse.json({ error: "Invalid token" }, { status: 401 });
  }

  try {
    const snapshot = await adminDb.collection("admin_directories").get();
    const sheets = snapshot.docs.map((doc) => doc.data());
    return NextResponse.json({ sheets });
  } catch (e) {
    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 },
    );
  }
}
