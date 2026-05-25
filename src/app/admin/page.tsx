"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import {
  LogIn,
  LogOut,
  Search,
  Shield,
  BookOpen,
  Users,
  Building2,
  ChevronDown,
  ExternalLink,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import directoryData from "@/data/admin-directories.json";

type DirectoryData = Record<
  string,
  Record<string, { headers: string[]; records: Record<string, string>[]; count: number }>
>;

const data = directoryData as DirectoryData;

const DIRECTORY_META: Record<string, { label: string; icon: typeof Users; color: string }> = {
  akharas: { label: "Akhara Directory", icon: Shield, color: "text-maroon" },
  saints: { label: "Influential Saints", icon: Users, color: "text-saffron" },
  institutions: { label: "Religious Institutions", icon: Building2, color: "text-sage" },
};

function DirectoryTable({
  headers,
  records,
  search,
}: {
  headers: string[];
  records: Record<string, string>[];
  search: string;
}) {
  const filtered = useMemo(() => {
    if (!search.trim()) return records;
    const q = search.toLowerCase();
    return records.filter((r) =>
      Object.values(r).some((v) => v?.toLowerCase().includes(q)),
    );
  }, [records, search]);

  const displayHeaders = headers.filter(
    (h) => !h.startsWith("col_") && h !== "Source URL(s)" && h !== "Source URLs",
  );

  if (filtered.length === 0) {
    return (
      <p className="text-center py-8 text-text-muted">
        No records match your search.
      </p>
    );
  }

  return (
    <div className="overflow-x-auto rounded-xl border border-cream-dark/40">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-cream">
            {displayHeaders.map((h) => (
              <th
                key={h}
                className="px-3 py-3 text-left font-semibold text-dark-brown text-xs uppercase tracking-wider whitespace-nowrap border-b border-cream-dark/30"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {filtered.map((record, i) => (
            <tr
              key={i}
              className="border-b border-cream-dark/20 hover:bg-cream/50 transition-colors"
            >
              {displayHeaders.map((h) => {
                const val = record[h] || "";
                const isUrl = val.startsWith("http");
                const isEmail = val.includes("@") && !val.includes(" ");
                const isPhone = /^\+?\d[\d\s\-/;]+$/.test(val.trim());

                return (
                  <td
                    key={h}
                    className="px-3 py-2.5 text-text-secondary max-w-[280px] align-top"
                  >
                    {isUrl ? (
                      <a
                        href={val.split(";")[0].trim()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-saffron hover:underline inline-flex items-center gap-1"
                      >
                        <ExternalLink className="w-3 h-3 shrink-0" />
                        <span className="truncate max-w-[200px]">
                          {val.replace(/https?:\/\//, "").split("/")[0]}
                        </span>
                      </a>
                    ) : isEmail ? (
                      <a
                        href={`mailto:${val}`}
                        className="text-saffron hover:underline inline-flex items-center gap-1"
                      >
                        <Mail className="w-3 h-3 shrink-0" />
                        <span className="truncate max-w-[200px]">{val}</span>
                      </a>
                    ) : isPhone ? (
                      <span className="inline-flex items-center gap-1 text-text-secondary">
                        <Phone className="w-3 h-3 shrink-0 text-text-muted" />
                        {val}
                      </span>
                    ) : (
                      <span className="line-clamp-3">{val}</span>
                    )}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function AdminPage() {
  const { data: session, status } = useSession();
  const [activeDir, setActiveDir] = useState<string>("akharas");
  const [activeSheet, setActiveSheet] = useState<string>("");
  const [search, setSearch] = useState("");

  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-cream">
        <div className="text-center">
          <div className="w-8 h-8 border-4 border-saffron/30 border-t-saffron rounded-full animate-spin mx-auto" />
          <p className="mt-4 text-text-muted text-sm">Loading...</p>
        </div>
      </div>
    );
  }

  if (!session) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-cream">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl border border-cream-dark/40 shadow-lg p-8 md:p-12 max-w-md w-full mx-4 text-center"
        >
          <div className="w-16 h-16 rounded-2xl bg-saffron/10 flex items-center justify-center mx-auto mb-6">
            <Shield className="w-8 h-8 text-saffron" />
          </div>
          <h1 className="text-2xl font-bold text-dark-brown">Admin Access</h1>
          <p className="mt-3 text-text-secondary text-sm leading-relaxed">
            This section is restricted to authorized personnel only. Please sign
            in with your authorized Google account to continue.
          </p>
          <button
            onClick={() => signIn("google")}
            className="mt-8 w-full inline-flex items-center justify-center gap-3 px-6 py-3.5 bg-white border-2 border-cream-dark/50 rounded-xl text-dark-brown font-semibold hover:border-saffron/40 hover:shadow-md transition-all"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
                fill="#4285F4"
              />
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
              />
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                fill="#FBBC05"
              />
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="#EA4335"
              />
            </svg>
            Sign in with Google
          </button>
          <p className="mt-4 text-xs text-text-muted">
            Only authorized accounts can access this page.
          </p>
        </motion.div>
      </div>
    );
  }

  const currentDir = data[activeDir];
  const sheets = currentDir ? Object.keys(currentDir) : [];
  const currentSheet = activeSheet && currentDir?.[activeSheet] ? activeSheet : sheets[0] || "";
  const sheetData = currentDir?.[currentSheet];

  const totalRecords = Object.values(data).reduce(
    (sum, dir) =>
      sum + Object.values(dir).reduce((s, sheet) => s + sheet.count, 0),
    0,
  );

  return (
    <div className="min-h-screen bg-warm-gray">
      <header className="bg-white border-b border-cream-dark/40">
        <div className="section-padding py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-saffron/10 flex items-center justify-center">
                <Shield className="w-5 h-5 text-saffron" />
              </div>
              <div>
                <h1 className="text-lg font-bold text-dark-brown">
                  Admin Portal
                </h1>
                <p className="text-xs text-text-muted">
                  {session.user?.email} · {totalRecords} records
                </p>
              </div>
            </div>
            <button
              onClick={() => signOut()}
              className="inline-flex items-center gap-2 px-4 py-2 text-sm text-text-secondary hover:text-dark-brown border border-cream-dark/40 rounded-lg hover:bg-cream transition-colors"
            >
              <LogOut className="w-4 h-4" />
              Sign out
            </button>
          </div>
        </div>
      </header>

      <div className="section-padding py-6">
        <div className="flex flex-wrap gap-3 mb-6">
          {Object.entries(DIRECTORY_META).map(([key, meta]) => {
            const Icon = meta.icon;
            const dirSheets = data[key];
            const count = dirSheets
              ? Object.values(dirSheets).reduce((s, sh) => s + sh.count, 0)
              : 0;

            return (
              <button
                key={key}
                onClick={() => {
                  setActiveDir(key);
                  setActiveSheet("");
                  setSearch("");
                }}
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  activeDir === key
                    ? "bg-saffron text-white shadow-sm"
                    : "bg-white text-text-secondary border border-cream-dark/40 hover:border-saffron/30"
                }`}
              >
                <Icon className="w-4 h-4" />
                {meta.label}
                <span
                  className={`text-xs px-1.5 py-0.5 rounded-full ${
                    activeDir === key
                      ? "bg-white/20"
                      : "bg-cream text-text-muted"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {sheets.length > 1 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {sheets.map((sheet) => (
              <button
                key={sheet}
                onClick={() => {
                  setActiveSheet(sheet);
                  setSearch("");
                }}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                  currentSheet === sheet
                    ? "bg-maroon/10 text-maroon border border-maroon/20"
                    : "bg-white text-text-muted border border-cream-dark/30 hover:text-dark-brown"
                }`}
              >
                {sheet}
                <span className="ml-1 opacity-60">
                  ({currentDir?.[sheet]?.count || 0})
                </span>
              </button>
            ))}
          </div>
        )}

        <div className="relative mb-4">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search records..."
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-cream-dark/40 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-saffron/30 focus:border-saffron/40"
          />
        </div>

        {sheetData && (
          <DirectoryTable
            headers={sheetData.headers}
            records={sheetData.records}
            search={search}
          />
        )}
      </div>
    </div>
  );
}
