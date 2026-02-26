"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import type { NavItem } from "@/lib/home-content";

type StickyNavProps = {
  items: NavItem[];
  bookingUrl: string;
};

export function StickyNav({ items, bookingUrl }: StickyNavProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 14);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on Escape key or viewport resize
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setMenuOpen(false); };
    const onResize = () => setMenuOpen(false);
    document.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      document.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-200 ease-out ${
        scrolled
          ? "border-cyan-400/25 bg-[#0c1119]/78 backdrop-blur-xl"
          : "border-white/10 bg-[#0a0a0f]/72 backdrop-blur-sm"
      }`}
    >
      <div className="section-container flex h-16 items-center justify-between gap-3 sm:h-[4.5rem]">
        <Link href="/" className="focus-ring inline-flex min-h-11 items-center rounded-md pr-2">
          <Image
            src="/brand/datalynlabs-mark.png"
            alt="Datalynlabs logo"
            width={24}
            height={24}
            className="mr-2 h-5 w-5 drop-shadow-[0_0_12px_rgba(0,212,255,0.75)] sm:h-[22px] sm:w-[22px]"
            unoptimized
          />
          <span className="text-sm font-semibold tracking-[0.03em] text-white sm:text-base">Datalynlabs</span>
        </Link>

        {/* Desktop nav links */}
        <nav aria-label="Primary" className="hidden items-center gap-1 text-sm text-slate-300 md:flex">
          {items.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="focus-ring inline-flex min-h-11 items-center rounded-md px-3 transition-colors duration-200 ease-out hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {/* Desktop CTA — hidden on mobile (sticky bottom CTA + mobile menu cover this) */}
          <a
            href={bookingUrl}
            data-cta="nav-primary"
            aria-label="Book Strategy Call"
            className="primary-btn hidden px-4 md:inline-flex"
          >
            Book Strategy Call
          </a>

          {/* Mobile hamburger / close button */}
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            onClick={() => setMenuOpen((v) => !v)}
            className="focus-ring -mr-1 inline-flex h-11 w-11 items-center justify-center rounded-lg text-slate-300 transition-colors hover:text-white md:hidden"
          >
            {menuOpen ? (
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
                <path d="M4 4L16 16M16 4L4 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
                <rect x="2" y="4.5" width="16" height="1.75" rx="0.875" fill="currentColor" />
                <rect x="2" y="9.125" width="16" height="1.75" rx="0.875" fill="currentColor" />
                <rect x="2" y="13.75" width="16" height="1.75" rx="0.875" fill="currentColor" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile nav panel — slides down from nav bar */}
      <div
        id="mobile-nav"
        aria-hidden={!menuOpen}
        className={`absolute inset-x-0 top-full border-b border-white/10 bg-[#0a0a0f]/96 backdrop-blur-xl transition-all duration-200 ease-out md:hidden ${
          menuOpen
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-1 opacity-0"
        }`}
      >
        <nav aria-label="Mobile" className="section-container flex flex-col py-3">
          {items.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="inline-flex min-h-12 items-center border-b border-white/[0.07] text-base font-medium text-slate-300 transition-colors hover:text-white"
            >
              {item.label}
            </a>
          ))}
          <a
            href={bookingUrl}
            data-cta="mobile-nav-primary"
            aria-label="Book Strategy Call"
            onClick={() => setMenuOpen(false)}
            className="primary-btn mb-2 mt-4 w-full"
          >
            Book Strategy Call
          </a>
        </nav>
      </div>
    </header>
  );
}
