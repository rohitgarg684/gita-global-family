import { createHmac, timingSafeEqual, randomBytes } from "node:crypto";

/**
 * Stateless, server-side auth for the "Allegations Against Hinduism" section.
 *
 * Design:
 *   1. The user POSTs the passphrase to /api/allegations/login.
 *   2. We compare against ALLEGATIONS_PASSWORD via timingSafeEqual.
 *   3. On success we set an HttpOnly cookie containing a token of the form:
 *        `<expiry>.<hmac-sha256(expiry, SECRET)>`
 *   4. Subsequent requests to gated route handlers call requireAuth(req),
 *      which re-verifies the HMAC and the expiry.
 *
 * Nothing about the gated content is bundled to the client. The only way to
 * obtain a valid cookie is to authenticate against the server.
 */

const COOKIE_NAME = "allegations_session";
const SESSION_TTL_MS = 1000 * 60 * 60 * 24 * 30; // 30 days

function getPassword(): string {
  const pw = process.env.ALLEGATIONS_PASSWORD;
  if (!pw) {
    throw new Error(
      "ALLEGATIONS_PASSWORD env var is not set. Configure it in apphosting.yaml or .env.local."
    );
  }
  return pw;
}

function getSecret(): Buffer {
  const secret = process.env.ALLEGATIONS_SESSION_SECRET;
  if (!secret || secret.length < 32) {
    throw new Error(
      "ALLEGATIONS_SESSION_SECRET env var must be set and at least 32 characters long."
    );
  }
  return Buffer.from(secret, "utf8");
}

function sign(payload: string): string {
  return createHmac("sha256", getSecret()).update(payload).digest("hex");
}

function safeEq(a: string, b: string): boolean {
  const aBuf = Buffer.from(a, "utf8");
  const bBuf = Buffer.from(b, "utf8");
  if (aBuf.length !== bBuf.length) return false;
  return timingSafeEqual(aBuf, bBuf);
}

export function verifyPassword(submitted: string): boolean {
  if (typeof submitted !== "string") return false;
  return safeEq(submitted.trim().toLowerCase(), getPassword().trim().toLowerCase());
}

export interface IssuedToken {
  cookieName: string;
  value: string;
  maxAgeSeconds: number;
}

export function issueSessionToken(): IssuedToken {
  const expiry = Date.now() + SESSION_TTL_MS;
  // 16-byte nonce so even within the same millisecond two tokens differ.
  const nonce = randomBytes(8).toString("hex");
  const payload = `${expiry}.${nonce}`;
  const mac = sign(payload);
  return {
    cookieName: COOKIE_NAME,
    value: `${payload}.${mac}`,
    maxAgeSeconds: Math.floor(SESSION_TTL_MS / 1000),
  };
}

export function verifySessionCookie(rawCookie: string | undefined): boolean {
  if (!rawCookie) return false;
  const parts = rawCookie.split(".");
  if (parts.length !== 3) return false;
  const [expiryStr, nonce, mac] = parts;
  const payload = `${expiryStr}.${nonce}`;
  let expected: string;
  try {
    expected = sign(payload);
  } catch {
    return false;
  }
  if (!safeEq(mac, expected)) return false;
  const expiry = Number(expiryStr);
  if (!Number.isFinite(expiry) || Date.now() > expiry) return false;
  return true;
}

export function clearedCookie(): IssuedToken {
  return {
    cookieName: COOKIE_NAME,
    value: "",
    maxAgeSeconds: 0,
  };
}

export { COOKIE_NAME };
