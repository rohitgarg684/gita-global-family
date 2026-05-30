/**
 * Centralized allow-list of email addresses authorized to access
 * gated areas of the site: the leadership presentation
 * (/sewa-nidhi-presentation) and the directories / mailing-list /
 * "excel sheets" admin view (/mailing-list).
 *
 * This module is the SINGLE SOURCE OF TRUTH for the TypeScript code.
 *
 * IMPORTANT: `firestore.rules` is written in the Firestore Rules
 * language and CANNOT import this file. If you add or remove an
 * address here, you MUST also update the matching list inside
 * `firestore.rules` (the `directories/*` document rule). Keep the
 * two lists in lock-step.
 */

export const AUTHORIZED_EMAILS: readonly string[] = [
  "rohitgarg684@gmail.com",
  "brahmbodhi@gmail.com",
  "vishnumill235@gmail.com",
  "kkrishnamurti09@gmail.com",
  "priyadarshi10@gmail.com",
] as const;

/**
 * Case-insensitive membership check. Returns false for null/undefined
 * so callers can pass `user.email ?? ""` or similar directly.
 */
export function isAuthorizedEmail(email: string | null | undefined): boolean {
  if (!email) return false;
  const normalized = email.trim().toLowerCase();
  return AUTHORIZED_EMAILS.some((e) => e.toLowerCase() === normalized);
}
