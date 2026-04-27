"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { NAV, SITE } from "@/lib/site";
import { Logo } from "./Logo";

export function Header() {
  const [open, setOpen] = useState(false);
  const primary = NAV.filter((n) => ["/how-it-works", "/areas-we-serve", "/reviews", "/faq"].includes(n.href));

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-ink/90 backdrop-blur supports-[backdrop-filter]:bg-ink/70">
      <div className="container-x flex h-16 items-center justify-between gap-4">
        <Logo />

        <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
          {primary.map((n) => (
            <Link key={n.href} href={n.href} className="text-sm font-medium text-white/80 transition hover:text-white">
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <Link href="/contact" className="btn-gold text-sm">Get My Free Consultation</Link>
          <a href={SITE.phoneHref} className="flex items-center gap-2 text-white">
            <span className="grid h-9 w-9 place-items-center rounded-full border border-gold/40 text-gold">
              <Phone className="h-4 w-4" />
            </span>
            <span className="leading-tight">
              <span className="block text-sm font-bold">{SITE.phone}</span>
              <span className="block text-[10px] uppercase tracking-wider text-white/60">Call or Text Anytime</span>
            </span>
          </a>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((s) => !s)}
          className="grid h-10 w-10 place-items-center rounded-md text-white lg:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-ink lg:hidden">
          <div className="container-x flex flex-col gap-1 py-4">
            {NAV.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-base font-medium text-white/80 hover:bg-white/5 hover:text-white"
              >
                {n.label}
              </Link>
            ))}
            <div className="mt-3 flex flex-col gap-2">
              <Link href="/contact" className="btn-gold w-full" onClick={() => setOpen(false)}>Get My Free Consultation</Link>
              <a href={SITE.phoneHref} className="btn-outline-gold w-full">
                <Phone className="h-4 w-4" /> {SITE.phone}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
