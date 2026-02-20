"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import type { NavItem } from "@/lib/home-content";

type StickyNavProps = {
  items: NavItem[];
  bookingUrl: string;
};

export function StickyNav({ items, bookingUrl }: StickyNavProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 14);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
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
          <span aria-hidden className="mr-2 h-2.5 w-2.5 rounded-full bg-cyan-400 shadow-[0_0_14px_rgba(0,212,255,0.85)]" />
          <span className="text-sm font-semibold tracking-[0.03em] text-white sm:text-base">Datalylabs</span>
        </Link>

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

        <a
          href={bookingUrl}
          data-cta="nav-primary"
          aria-label="Book Strategy Call"
          className="primary-btn px-4"
        >
          Book Strategy Call
        </a>
      </div>
    </header>
  );
}
