"use client";

import { useEffect, useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Lock, KeyRound, ShieldCheck, AlertCircle, Loader2 } from "lucide-react";

// Endpoints should be the raw API paths (no trailing slash). Next's
// trailingSlash=true config only affects pages, not /api routes, but App
// Hosting tooling has historically been finicky — we normalize either way.
interface Props {
  statusEndpoint: string;
  loginEndpoint: string;
  title?: string;
  description?: string;
  children: React.ReactNode;
}

type State = "checking" | "locked" | "unlocked";

export default function PasswordGate({
  statusEndpoint,
  loginEndpoint,
  title = "Restricted Reading",
  description = "This section contains a frank examination of sensitive material. Please enter the access passphrase to continue.",
  children,
}: Props) {
  const [state, setState] = useState<State>("checking");
  const [value, setValue] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const ctrl = new AbortController();
    (async () => {
      try {
        const res = await fetch(statusEndpoint, {
          signal: ctrl.signal,
          credentials: "same-origin",
          cache: "no-store",
        });
        const json = (await res.json()) as { authenticated?: boolean };
        setState(json.authenticated ? "unlocked" : "locked");
      } catch {
        setState("locked");
      }
    })();
    return () => ctrl.abort();
  }, [statusEndpoint]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (submitting || !value.trim()) return;
    setSubmitting(true);
    setError(null);
    try {
      const res = await fetch(loginEndpoint, {
        method: "POST",
        credentials: "same-origin",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password: value }),
      });
      if (res.ok) {
        setState("unlocked");
        setValue("");
        return;
      }
      if (res.status === 401) {
        setError("Incorrect passphrase. Please try again.");
      } else {
        setError(`Could not verify (HTTP ${res.status}). Try again.`);
      }
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  if (state === "checking") {
    return (
      <div className="min-h-[70vh] flex items-center justify-center bg-cream/30">
        <div className="w-8 h-8 border-2 border-saffron border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (state === "unlocked") return <>{children}</>;

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-cream via-white to-cream-dark/40 px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-md bg-white rounded-2xl shadow-xl border border-cream-dark/40 p-8 md:p-10"
      >
        <div className="flex items-center justify-center w-14 h-14 mx-auto rounded-2xl bg-saffron/10 text-saffron mb-5">
          <Lock className="w-7 h-7" />
        </div>
        <h1 className="text-2xl md:text-3xl font-bold text-dark-brown text-center">
          {title}
        </h1>
        <p className="mt-3 text-text-secondary text-center leading-relaxed text-sm md:text-base">
          {description}
        </p>

        <form onSubmit={handleSubmit} className="mt-7 space-y-4">
          <label className="block">
            <span className="text-xs font-semibold uppercase tracking-wider text-text-muted flex items-center gap-1.5 mb-2">
              <KeyRound className="w-3.5 h-3.5" />
              Passphrase
            </span>
            <input
              type="password"
              autoFocus
              autoComplete="off"
              value={value}
              onChange={(e) => {
                setValue(e.target.value);
                if (error) setError(null);
              }}
              disabled={submitting}
              className={`w-full px-4 py-3 rounded-xl border bg-cream/40 text-dark-brown placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-saffron/40 transition-colors ${
                error
                  ? "border-red-400 focus:border-red-500"
                  : "border-cream-dark/60 focus:border-saffron"
              } disabled:opacity-60`}
              placeholder="Enter the passphrase"
            />
          </label>

          {error && (
            <motion.p
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-sm text-red-600 flex items-center gap-1.5"
            >
              <AlertCircle className="w-4 h-4" />
              {error}
            </motion.p>
          )}

          <button
            type="submit"
            disabled={submitting || !value.trim()}
            className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-saffron text-white font-semibold rounded-full hover:bg-saffron-dark transition-colors shadow-sm disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {submitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Verifying…
              </>
            ) : (
              <>
                <ShieldCheck className="w-4 h-4" />
                Unlock
              </>
            )}
          </button>
        </form>

        <p className="mt-6 text-xs text-text-muted text-center leading-relaxed">
          Your session is stored as an HttpOnly cookie and lasts 30 days. If
          you do not have the passphrase, please contact the Gita Global
          Family team.
        </p>
      </motion.div>
    </div>
  );
}
