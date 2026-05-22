/**
 * Server-side configuration for the password-gated "Allegations Against
 * Hinduism" section.
 *
 * IMPORTANT: This file is imported ONLY from server route handlers under
 *   src/app/api/allegations/*
 * and from src/lib/allegations-auth.ts (also server-only).
 *
 * It must never be imported from a Client Component (`"use client"`), or
 * Next.js will bundle these constants into the browser JavaScript and the
 * password will leak.
 *
 * It lives outside `src/` and uses the `import "server-only";` directive so
 * the bundler will hard-fail any attempt to import it from client code.
 */
import "server-only";

export const allegationsConfig = {
  /**
   * The shared passphrase users must enter to unlock the section.
   * Comparison is case-insensitive and whitespace is trimmed.
   */
  password: "save-hinduism",

  /**
   * HMAC secret used to sign the session cookie. Must be at least 32 chars.
   * Rotate this value to invalidate every issued session.
   *
   * Generate a fresh value with:
   *   python3 -c "import secrets; print(secrets.token_urlsafe(48))"
   */
  sessionSecret:
    "DK8wnv_h9aF6n4cN-mP2sQ3xR7tY1eU0jZ5oI8aB6vL4kM3pH7wQ2dF9gX5yE1bR",

  /**
   * Session lifetime in milliseconds. Defaults to 30 days.
   */
  sessionTtlMs: 1000 * 60 * 60 * 24 * 30,
} as const;
