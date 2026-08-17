"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { business } from "@/lib/business";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Lock background scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-(--color-line) bg-(--color-paper-50)/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 md:px-8">
        <Link href="/" className="flex items-center gap-2.5">
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-(--color-well-800) font-display text-sm font-bold text-white">
            KK
          </span>
          <span className="font-display text-[15px] font-semibold leading-tight text-(--color-well-900) sm:text-base">
            {business.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`font-body text-[15px] transition-colors hover:text-(--color-rust-600) ${pathname === l.href
                ? "font-semibold text-(--color-rust-600)"
                : "text-(--color-ink-900)/75"
                }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={`tel:+91${business.phone}`}
            className="hidden shrink-0 items-center gap-2 rounded-full bg-(--color-rust-500) px-4 py-2 font-body text-sm font-medium text-white transition-colors hover:bg-(--color-rust-600) sm:flex"
          >
            <span className="font-mono">{business.phone}</span>
          </a>

          {/* Hamburger — mobile & tablet only */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid h-10 w-10 place-items-center rounded-lg border border-(--color-line) text-(--color-well-900) md:hidden"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      <div
        id="mobile-menu"
        className={`overflow-hidden border-t border-(--color-line) bg-(--color-paper-50) transition-[max-height] duration-300 ease-in-out md:hidden ${open ? "max-h-96" : "max-h-0 border-t-0"
          }`}
      >
        <nav className="flex flex-col px-5 py-3">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={`border-b border-(--color-line)/70 py-3 font-body text-base last:border-b-0 ${pathname === l.href
                ? "font-semibold text-(--color-rust-600)"
                : "text-(--color-ink-900)/80"
                }`}
            >
              {l.label}
            </Link>
          ))}

          <a
            href={`tel:+91${business.phone}`}
            className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-(--color-rust-500) px-4 py-3 font-body text-sm font-semibold text-white"
          >
            Call {business.phone}
          </a>
        </nav>
      </div>
    </header>
  );
}