'use client';

import Link from 'next/link';
import { useState } from 'react';

const links = [
  { href: '/', label: 'Home' },
  { href: '/articles-podcast', label: 'Articles / Podcast' },
  { href: '/build-log', label: 'Build Log' },
  { href: '/about', label: 'About' },
  { href: '/subscribe', label: 'Subscribe' }
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-ink/85 backdrop-blur">
      <nav className="mx-auto w-full max-w-6xl px-4 py-4 md:px-8">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="text-xs font-semibold tracking-[0.2em] text-gold md:text-sm">
            SYNTH COMPANIONS
          </Link>
          <button
            className="rounded-full border border-white/20 px-3 py-1 text-xs text-mist md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label="Toggle navigation"
          >
            Menu
          </button>
          <div className="hidden gap-6 text-sm md:flex">
            {links.map((link) => (
              <Link key={link.href} href={link.href} className="text-mist/80 transition hover:text-gold">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        {open && (
          <div className="mt-4 grid gap-2 rounded-xl border border-white/10 bg-charcoal/90 p-3 md:hidden">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-2 text-sm text-mist/90 hover:bg-white/5"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
