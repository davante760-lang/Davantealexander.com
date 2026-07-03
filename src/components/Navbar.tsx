"use client";

import { useState } from "react";
import Link from "next/link";

const links = [
  { href: "#listings", label: "Listings" },
  { href: "#buyers-sellers", label: "Buyers & Sellers" },
  { href: "#about", label: "About" },
  { href: "#testimonials", label: "Reviews" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/95 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="#"
          className="font-serif text-xl font-semibold tracking-tight text-white"
          onClick={() => setOpen(false)}
        >
          Davante Alexander
          <span className="ml-2 hidden text-xs font-sans font-medium uppercase tracking-[0.2em] text-gold sm:inline">
            DFW Real Estate
          </span>
        </Link>

        <ul className="hidden items-center gap-8 font-display text-[15px] font-medium uppercase tracking-[0.34em] text-white/80 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="transition-colors hover:text-white">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden rounded-full bg-gold px-5 py-2.5 font-display text-xs font-semibold uppercase tracking-[0.2em] text-ink transition-colors hover:bg-gold-light sm:inline-block"
          >
            Get In Touch
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white md:hidden"
          >
            <span className="sr-only">Menu</span>
            {open ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 6h18M3 12h18M3 18h18" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-ink md:hidden">
          <ul className="mx-auto flex max-w-6xl flex-col gap-1 px-6 py-4 font-display text-sm font-medium uppercase tracking-[0.25em] text-white/80">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-2 py-3 transition-colors hover:bg-white/5 hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-2 block rounded-full bg-gold px-4 py-2.5 text-center font-semibold text-ink"
              >
                Get In Touch
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
