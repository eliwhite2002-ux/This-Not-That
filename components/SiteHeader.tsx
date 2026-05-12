'use client';

import Link from 'next/link';
import { useState } from 'react';
import { LogoLockup } from './LogoMark';

const links = [
  { href: '/', label: 'Home' },
  { href: '/topics', label: 'Topics' },
  { href: '/articles-podcast', label: 'Podcast' },
  { href: '/about', label: 'About' },
  { href: '/subscribe', label: 'Subscribe' }
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-ink/90 backdrop-blur">
      <nav className="mx-auto w-full max-w-6xl px-4 py-3 md:px-8 md:py-4">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="min-w-0 transition hover:opacity-90">
            <LogoLockup compact />
          </Link>
          <button
            className="rounded-full border border-white/20 px-4 py-2 text-sm text-mist md:hidden"
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
          <div className="mt-4 grid gap-1 rounded-xl border border-white/10 bg-charcoal/95 p-3 md:hidden">
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
