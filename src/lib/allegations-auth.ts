import "server-only";
import { createHmac, timingSafeEqual, randomBytes } from "node:crypto";
import { allegationsConfig } from "@server/allegations-config";

/**
 * Stateless, server-side auth for the "Allegations Against Hinduism" section.
 *
 * Design:
 *   1. The user POSTs the passphrase to /api/allegations/login.
 *   2. We compare against allegationsConfig.password via timingSafeEqual.
 *   3. On success we set an HttpOnly cookie containing a token of the form:
 *        `<expiry>.<nonce>.<hmac-sha256(payload, SECRET)>`
 *   4. Subsequent requests to gated route handlers call verifySessionCookie,
 *      which re-verifies the HMAC and the expiry.
 *
 * Nothing about the gated content (or the password / secret) is bundled to
 * the client: this file is marked `server-only` and the config it imports is
 * also `server-only`. A client import of either will fail the build.
 */

const COOKIE_NAME = "allegations_session";

function getSecret(): Buffer {
  const s = allegationsConfig.sessionSecret;
  if (!s || s.length < 32) {
    throw new Error(
      "allegationsConfig.sessionSecret must be at least 32 characters long."
    );
  }
  return Buffer.from(s, "utf8");
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
  return safeEq(
    submitted.trim().toLowerCase(),
    allegationsConfig.password.trim().toLowerCase()
  );
}

export interface IssuedToken {
  cookieName: string;
  value: string;
  maxAgeSeconds: number;
}

export function issueSessionToken(): IssuedToken {
  const ttl = allegationsConfig.sessionTtlMs;
  const expiry = Date.now() + ttl;
  const nonce = randomBytes(8).toString("hex");
  const payload = `${expiry}.${nonce}`;
  const mac = sign(payload);
  return {
    cookieName: COOKIE_NAME,
    value: `${payload}.${mac}`,
    maxAgeSeconds: Math.floor(ttl / 1000),
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
