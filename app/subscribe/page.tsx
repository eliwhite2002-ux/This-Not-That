import Link from 'next/link';

export default function SubscribePage() {
  return (
    <section className="section-shell mx-auto max-w-3xl space-y-5 text-center">
      <p className="text-xs uppercase tracking-[0.3em] text-gold">Subscribe</p>
      <h1 className="text-4xl font-semibold text-white">Follow the field notes before the category gets sanitized.</h1>
      <p className="text-mist/85">
        Get issue drops, podcast episodes, and build log updates as companion technology shifts from novelty to daily
        systems.
      </p>
      <Link href="#" className="inline-block rounded-full bg-gold px-6 py-3 font-medium text-ink">
        Substack Placeholder
      </Link>
      <p className="text-sm text-mist/60">
        Affiliate disclosure: Future links may include affiliate partnerships that help support independent coverage.
      </p>
    </section>
  );
}
