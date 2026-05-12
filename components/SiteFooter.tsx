import Link from 'next/link';
import { LogoLockup } from './LogoMark';

const socialLinks = [
  { href: 'https://substack.com/@synthcompanions', label: 'Substack' },
  { href: 'https://x.com/synthcompanions', label: 'X' },
  { href: 'https://www.instagram.com/synthcompanions/', label: 'Instagram' },
  { href: 'https://www.tiktok.com/@synthcompanions', label: 'TikTok' }
];

const siteLinks = [
  { href: '/topics', label: 'Topics' },
  { href: '/articles-podcast', label: 'Podcast' },
  { href: '/about', label: 'About' },
  { href: '/subscribe', label: 'Subscribe' },
  { href: '/disclosure', label: 'Disclosure' }
];

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 px-4 py-8 md:px-8 md:py-10">
      <div className="mx-auto grid w-full max-w-6xl gap-6 md:grid-cols-[1.2fr_0.8fr_1fr]">
        <div className="space-y-3">
          <Link href="/" className="inline-flex transition hover:opacity-90">
            <LogoLockup />
          </Link>
          <p className="max-w-xl text-sm leading-relaxed text-mist/65">
            A podcast and publication about companion tech and the real owner experience.
          </p>
          <p className="text-xs text-mist/45">© 2026 Synth Companions.</p>
        </div>
        <div className="space-y-3">
          <p className="kicker">Site</p>
          <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm md:grid-cols-1">
            {siteLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-mist/70 transition hover:text-gold">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="space-y-3">
          <p className="kicker">Follow</p>
          <div className="flex flex-wrap gap-2">
            {socialLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/10 px-3 py-1.5 text-sm text-mist/75 transition hover:border-gold hover:text-gold"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
