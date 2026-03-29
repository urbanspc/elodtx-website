"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { NAV_LINKS } from "@/lib/constants";

function ConnectionNodeIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="inline-block mr-2"
      aria-hidden="true"
    >
      {/* Left node */}
      <circle cx="4" cy="10" r="2.5" fill="#C9A84C" />
      {/* Right node */}
      <circle cx="16" cy="10" r="2.5" fill="#C9A84C" />
      {/* Connecting line */}
      <line x1="6.5" y1="10" x2="13.5" y2="10" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full backdrop-blur-md bg-dark-primary/80 border-b border-[rgba(201,168,76,0.1)]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left: Logo */}
          <Link href="/" className="flex items-center flex-shrink-0">
            <ConnectionNodeIcon />
            <span className="text-brand-gold font-bold text-xl tracking-tight">
              EloDtx
            </span>
          </Link>

          {/* Center: Nav links (desktop) */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative px-3 py-2 text-sm font-medium group"
                  aria-current={isActive ? "page" : undefined}
                >
                  <span
                    className={`transition-colors duration-200 ${
                      isActive
                        ? "text-brand-gold"
                        : "text-[rgba(255,255,255,0.7)] group-hover:text-white"
                    }`}
                  >
                    {link.label}
                  </span>
                  {/* Gold underline hover/active effect */}
                  <motion.span
                    className="absolute bottom-0 left-3 right-3 h-[1.5px] bg-brand-gold rounded-full"
                    initial={false}
                    animate={{ scaleX: isActive ? 1 : 0, opacity: isActive ? 1 : 0 }}
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                    style={{ originX: 0.5 }}
                  />
                  {/* Hover underline (non-active) */}
                  <span className="absolute bottom-0 left-3 right-3 h-[1.5px] bg-brand-gold rounded-full scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-60 transition-all duration-200 origin-center" />
                </Link>
              );
            })}
          </nav>

          {/* Right: CTA + mobile hamburger */}
          <div className="flex items-center gap-3">
            <Link
              href="/waitlist"
              className="hidden md:inline-flex items-center justify-center px-4 py-2 text-sm font-semibold rounded-md bg-brand-gold text-[#0D0D1A] hover:bg-[#D4B85C] transition-colors duration-200 flex-shrink-0"
            >
              Get Early Access
            </Link>

            {/* Hamburger (mobile) */}
            <button
              onClick={() => setMobileOpen((prev) => !prev)}
              className="md:hidden p-2 rounded-md text-[rgba(255,255,255,0.7)] hover:text-white hover:bg-[rgba(255,255,255,0.05)] transition-colors duration-200"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden overflow-hidden border-t border-[rgba(201,168,76,0.1)] bg-dark-primary/95 backdrop-blur-md"
          >
            <nav className="flex flex-col px-4 py-4 gap-1" aria-label="Mobile navigation">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`px-3 py-3 rounded-md text-sm font-medium transition-colors duration-150 ${
                      isActive
                        ? "text-brand-gold bg-[rgba(201,168,76,0.08)]"
                        : "text-[rgba(255,255,255,0.7)] hover:text-white hover:bg-[rgba(255,255,255,0.05)]"
                    }`}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <div className="pt-3 mt-1 border-t border-[rgba(201,168,76,0.1)]">
                <Link
                  href="/waitlist"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center w-full px-4 py-2.5 text-sm font-semibold rounded-md bg-brand-gold text-[#0D0D1A] hover:bg-[#D4B85C] transition-colors duration-200"
                >
                  Get Early Access
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
