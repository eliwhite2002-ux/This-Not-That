import Link from 'next/link';
import { BrandLockup } from './BrandMark';

const socialLinks = [
  { href: 'https://substack.com/@synthcompanions', label: 'Substack', short: 'S' },
  { href: 'https://x.com/synthcompanions', label: 'X', short: '𝕏' },
  { href: 'https://www.instagram.com/synthcompanions/', label: 'Instagram', short: 'IG' },
  { href: 'https://www.tiktok.com/@synthcompanions', label: 'TikTok', short: 'TT' }
];

const siteLinks = [
  { href: '/topics', label: 'Topics' },
  { href: '/articles-podcast', label: 'Podcast' },
  { href: '/build-log', label: 'Build Log' },
  { href: '/about', label: 'About' },
  { href: '/subscribe', label: 'Subscribe' },
  { href: '/disclosure', label: 'Disclosure' }
];

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 px-4 py-10 md:px-8">
      <div className="mx-auto grid w-full max-w-6xl gap-8 md:grid-cols-[1.3fr_0.7fr_0.9fr]">
        <div className="space-y-4">
          <Link href="/" className="inline-flex transition hover:opacity-90">
            <BrandLockup />
          </Link>
          <p className="max-w-xl text-sm text-mist/70">
            A podcast and publication about AI dolls, companion tech, and the real owner experience.
          </p>
          <p className="text-xs text-mist/45">© 2026 Synth Companions.</p>
        </div>
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.22em] text-gold">Site</p>
          <div className="grid gap-2 text-sm">
            {siteLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-mist/70 transition hover:text-gold">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.22em] text-gold">Follow</p>
          <div className="flex flex-wrap gap-2">
            {socialLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-2 text-sm text-mist/75 transition hover:border-gold hover:text-gold"
                aria-label={link.label}
              >
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-gold/15 text-xs font-semibold text-gold">
                  {link.short}
                </span>
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
