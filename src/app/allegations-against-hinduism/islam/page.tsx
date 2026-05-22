"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { AlertTriangle, RefreshCw } from "lucide-react";
import {
  getEssayMetadata,
  type EssaySection,
} from "@/lib/islam-essay";
import EssayClient from "./EssayClient";

interface FetchState {
  status: "loading" | "ready" | "unauthorized" | "error";
  sections: EssaySection[];
  message?: string;
}

export default function IslamEssayPage() {
  const [state, setState] = useState<FetchState>({
    status: "loading",
    sections: [],
  });

  useEffect(() => {
    const ctrl = new AbortController();
    (async () => {
      try {
        const res = await fetch("/api/allegations/islam/", {
          signal: ctrl.signal,
          credentials: "same-origin",
        });
        if (res.status === 401) {
          setState({
            status: "unauthorized",
            sections: [],
            message: "Your session expired. Please reload and re-enter the passphrase.",
          });
          return;
        }
        if (!res.ok) {
          setState({
            status: "error",
            sections: [],
            message: `Failed to load (HTTP ${res.status})`,
          });
          return;
        }
        const json = (await res.json()) as { sections: EssaySection[] };
        setState({ status: "ready", sections: json.sections });
      } catch (err) {
        if ((err as Error).name === "AbortError") return;
        setState({
          status: "error",
          sections: [],
          message: (err as Error).message,
        });
      }
    })();
    return () => ctrl.abort();
  }, []);

  if (state.status === "loading") {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center gap-3 bg-cream/30">
        <div className="w-10 h-10 border-2 border-saffron border-t-transparent rounded-full animate-spin" />
        <p className="text-sm text-text-secondary">Loading essay…</p>
      </div>
    );
  }

  if (state.status === "unauthorized" || state.status === "error") {
    return (
      <div className="min-h-[70vh] flex items-center justify-center px-6 py-16 bg-cream/30">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-md w-full bg-white rounded-2xl border border-cream-dark/40 shadow-sm p-8 text-center"
        >
          <div className="flex items-center justify-center w-12 h-12 mx-auto rounded-full bg-saffron/10 text-saffron mb-4">
            <AlertTriangle className="w-6 h-6" />
          </div>
          <h2 className="text-xl font-bold text-dark-brown">
            {state.status === "unauthorized" ? "Session ended" : "Could not load essay"}
          </h2>
          <p className="mt-3 text-text-secondary text-sm leading-relaxed">
            {state.message ?? "Please try again."}
          </p>
          <button
            onClick={() => window.location.reload()}
            className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 bg-saffron text-white text-sm font-semibold rounded-full hover:bg-saffron-dark transition-colors shadow-sm"
          >
            <RefreshCw className="w-4 h-4" />
            Reload
          </button>
        </motion.div>
      </div>
    );
  }

  return <EssayClient sections={state.sections} meta={getEssayMetadata()} />;
}
