"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { img } from "@/lib/image-url";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/gita-publications", label: "Publications" },
  { href: "/events", label: "Events" },
  { href: "/blog", label: "Blogs" },
  { href: "/join-us", label: "Join the Family" },
  {
    label: "More",
    children: [
      { href: "/about", label: "About" },
      { href: "/brahmabodhi", label: "BrahmBodhi" },
      { href: "/gita-gurukul", label: "Gita Gurukul" },
      { href: "/bhagavad-gita", label: "Bhagavad Gita" },
      { href: "/sanatan-seva-nidhi", label: "Sanatan Seva Nidhi" },
      { href: "/networking", label: "Network" },
      { href: "/gallery", label: "Gallery" },
    ],
  },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-cream-dark/50">
      <div className="section-padding">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src={img("logo-icon.png")}
              alt="Gita Global Family"
              width={56}
              height={56}
              className="w-11 h-11 md:w-14 md:h-14 rounded-lg"
            />
            <span className="font-semibold text-lg md:text-xl text-dark-brown hidden sm:block">
              Gita Global Family
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.children ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-text-secondary hover:text-saffron transition-colors rounded-lg hover:bg-cream/50">
                    {link.label}
                    <ChevronDown className="w-3.5 h-3.5" />
                  </button>
                  <AnimatePresence>
                    {dropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-0 mt-1 w-48 bg-white rounded-xl shadow-lg border border-cream-dark/30 py-2 overflow-hidden"
                      >
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-4 py-2.5 text-sm text-text-secondary hover:bg-cream hover:text-saffron transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href!}
                  className="px-3 py-2 text-sm font-medium text-text-secondary hover:text-saffron transition-colors rounded-lg hover:bg-cream/50"
                >
                  {link.label}
                </Link>
              )
            )}
            <Link
              href="/join-us#donations"
              className="ml-2 px-5 py-2.5 bg-saffron text-white text-sm font-semibold rounded-full hover:bg-saffron-dark transition-colors shadow-sm"
            >
              Support Us
            </Link>
          </nav>

          <button
            className="lg:hidden p-2 text-text-secondary hover:text-saffron transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden overflow-hidden bg-white border-t border-cream-dark/30"
          >
            <nav className="section-padding py-4 space-y-1">
              {navLinks.map((link) =>
                link.children ? (
                  <div key={link.label}>
                    <p className="px-3 py-2 text-xs font-semibold text-text-muted uppercase tracking-wider">
                      {link.label}
                    </p>
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setMobileOpen(false)}
                        className="block px-6 py-2.5 text-sm text-text-secondary hover:text-saffron hover:bg-cream/50 rounded-lg transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href!}
                    onClick={() => setMobileOpen(false)}
                    className="block px-3 py-2.5 text-sm font-medium text-text-secondary hover:text-saffron hover:bg-cream/50 rounded-lg transition-colors"
                  >
                    {link.label}
                  </Link>
                )
              )}
              <div className="pt-3 px-3">
                <Link
                  href="/join-us#donations"
                  onClick={() => setMobileOpen(false)}
                  className="block w-full text-center px-5 py-3 bg-saffron text-white text-sm font-semibold rounded-full hover:bg-saffron-dark transition-colors"
                >
                  Support Us
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
