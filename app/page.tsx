import Link from 'next/link';

const features = [
  'Why Synth Companions Exists',
  'From Sex Toy to Companion',
  'Voice Changes Everything',
  'What Doll Owners Actually Want From AI',
  'Memory Is the Product',
  'The Problem With Manufacturer Gimmicks'
];

export default function Home() {
  return (
    <>
      <section className="section-shell relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-grid-fade bg-[size:36px_36px] opacity-25" />
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div className="space-y-6">
          <p className="text-xs uppercase tracking-[0.3em] text-gold">Field Journal + Podcast</p>
          <h1 className="max-w-4xl text-4xl font-semibold leading-tight text-white md:text-6xl">
            The field journal for embodied companion technology.
          </h1>
          <p className="max-w-3xl text-lg text-mist/85 md:text-xl">
            Adult dolls, AI chat, voice, memory, robotics, owner-built systems, and the strange road from novelty to
            presence.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/articles-podcast" className="rounded-full bg-gold px-6 py-3 font-medium text-ink hover:opacity-90">
              Read the first issue
            </Link>
            <Link href="/subscribe" className="rounded-full border border-white/20 px-6 py-3 text-white hover:border-gold">
              Subscribe
            </Link>
          </div>
          </div>
          <div className="section-shell border-gold/25 bg-gradient-to-b from-violet/50 to-charcoal/80">
            <p className="text-xs uppercase tracking-[0.24em] text-gold">Companion Stack Radar</p>
            <div className="mt-4 space-y-3 text-sm text-mist/85">
              <p>Voice layer: low-latency, identity-stable output.</p>
              <p>Memory layer: recall + narrative continuity.</p>
              <p>Presence layer: routines, physicality, placement.</p>
              <p>Hardware layer: doll body, handling, storage, docking.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell space-y-4">
        <h2 className="text-2xl font-semibold text-white md:text-3xl">The Thesis</h2>
        <p className="text-mist/85">
          Most people treat adult dolls, AI girlfriends, robotics, and sextech as separate categories. Owners do not.
          They experience a stack: body, voice, memory, movement, maintenance, storage, photography, and daily
          interaction.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-white md:text-3xl">Who This Is For</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {['Owners', 'Curious buyers', 'Hobbyist builders', 'Companies watching the category'].map((item) => (
            <article key={item} className="section-shell">
              <h3 className="text-xl font-medium text-white">{item}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-white md:text-3xl">Featured Articles / Episodes</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {features.map((title) => (
            <article key={title} className="section-shell">
              <p className="text-lg font-medium text-white">{title}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell space-y-4">
        <h2 className="text-2xl font-semibold text-white md:text-3xl">Build Log: Companion Dock</h2>
        <p className="text-mist/85">
          A practical stand, storage, posing, and future charging base for lifelike dolls and companion systems.
        </p>
        <ul className="grid list-disc gap-2 pl-6 text-mist/85 md:grid-cols-2">
          <li>Safer storage</li>
          <li>Easier posing</li>
          <li>Photography support</li>
          <li>M16 quick-connect concept</li>
          <li>Future accessory/charging integration</li>
        </ul>
      </section>

      <section className="section-shell space-y-4 text-center">
        <h2 className="text-2xl font-semibold text-white md:text-3xl">Follow the field notes before the category gets sanitized.</h2>
        <p className="text-mist/80">Substack embed/link placeholder</p>
        <Link href="/subscribe" className="inline-block rounded-full bg-gold px-6 py-3 font-medium text-ink">
          Subscribe
        </Link>
      </section>
    </>
  );
}
