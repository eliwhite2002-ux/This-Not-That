import Link from 'next/link';

const links = [
  { href: '/', label: 'Home' },
  { href: '/articles-podcast', label: 'Articles / Podcast' },
  { href: '/build-log', label: 'Build Log' },
  { href: '/about', label: 'About' },
  { href: '/subscribe', label: 'Subscribe' }
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-ink/80 backdrop-blur">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 md:px-8">
        <Link href="/" className="text-sm font-semibold tracking-[0.2em] text-gold">
          SYNTH COMPANIONS
        </Link>
        <div className="hidden gap-6 text-sm md:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="text-mist/80 transition hover:text-gold">
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
