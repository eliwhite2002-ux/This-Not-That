import Link from 'next/link';

const features = [
  {
    title: 'Why Synth Companions Exists',
    summary: 'The starting point: why owner experience is the missing layer in AI dolls and companion tech.'
  },
  {
    title: 'What Doll Owners Actually Want From AI',
    summary: 'Voice, memory, presence, trust, and practical usefulness beyond demo-floor hype.'
  },
  {
    title: 'Voice, Memory, and Presence',
    summary: 'Why companionship changes when the AI stops feeling trapped inside a screen.'
  },
  {
    title: 'Product Claims vs. Owner Reality',
    summary: 'A practical look at what companies market, what owners experience, and where the gap appears.'
  },
  {
    title: 'The Problem With Gimmicks',
    summary: 'Moving eyes, mouth sync, apps, and robotics only matter when they improve real ownership.'
  },
  {
    title: 'The Future Is Owner Experience',
    summary: 'The body already exists. The AI is arriving. The missing layer is owner experience.'
  }
];

const audiences = ['Current owners', 'Curious buyers', 'AI companion users', 'Builders, vendors, and reviewers'];

export default function Home() {
  return (
    <>
      <section className="section-shell relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-grid-fade bg-[size:36px_36px] opacity-25" />
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.3em] text-gold">Podcast + Publication</p>
            <h1 className="max-w-4xl text-4xl font-semibold leading-tight text-white md:text-6xl">
              AI dolls, companion tech, and the real owner experience.
            </h1>
            <p className="max-w-3xl text-lg text-mist/85 md:text-xl">
              Synth Companions tracks the future of embodied companionship from the owner’s side of the market:
              voice, memory, physical realism, product claims, and what actually matters once the product gets home.
            </p>
            <p className="max-w-2xl text-sm text-mist/65">
              First episode recorded. Publication notes, product coverage, and build log updates are in progress.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/articles-podcast" className="rounded-full bg-gold px-6 py-3 font-medium text-ink hover:opacity-90">
                View planned episodes
              </Link>
              <a
                href="https://substack.com/@synthcompanions"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/20 px-6 py-3 text-white hover:border-gold"
              >
                Subscribe on Substack
              </a>
            </div>
          </div>
          <div className="section-shell border-gold/25 bg-gradient-to-b from-violet/50 to-charcoal/80">
            <p className="text-xs uppercase tracking-[0.24em] text-gold">Owner Experience Lens</p>
            <div className="mt-4 space-y-3 text-sm text-mist/85">
              <p>Presence: voice, memory, personality, and emotional continuity.</p>
              <p>Physical reality: handling, storage, cleaning, charging, and repair.</p>
              <p>Product claims: what vendors promise versus what owners experience.</p>
              <p>Trust: privacy, support, durability, and buyer confidence.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell space-y-4">
        <h2 className="text-2xl font-semibold text-white md:text-3xl">The Thesis</h2>
        <p className="text-mist/85">
          Most coverage of this space gets stuck in fantasy, stigma, or robot demos. Synth Companions starts with the
          owner: what it is actually like to live with these products, what makes them useful, and what companies need
          to get right.
        </p>
        <p className="text-mist/85">
          The body already exists. The AI is arriving. The missing layer is owner experience.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-white md:text-3xl">Who This Is For</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {audiences.map((item) => (
            <article key={item} className="section-shell">
              <h3 className="text-xl font-medium text-white">{item}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-white md:text-3xl">Upcoming Episodes / Notes</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <article key={feature.title} className="section-shell space-y-3">
              <p className="text-lg font-medium text-white">{feature.title}</p>
              <p className="text-sm text-mist/75">{feature.summary}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell space-y-4">
        <h2 className="text-2xl font-semibold text-white md:text-3xl">Build Log: Companion Dock</h2>
        <p className="text-mist/85">
          A practical owner-side project exploring safer storage, easier posing, handling, photography support, and
          future charging or accessory integration for lifelike dolls and companion systems.
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
        <h2 className="text-2xl font-semibold text-white md:text-3xl">Follow the category from the owner’s side.</h2>
        <p className="text-mist/80">Podcast episodes, product notes, build logs, and practical coverage of where companion tech is going.</p>
        <a
          href="https://substack.com/@synthcompanions"
          target="_blank"
          rel="noreferrer"
          className="inline-block rounded-full bg-gold px-6 py-3 font-medium text-ink"
        >
          Subscribe on Substack
        </a>
      </section>
    </>
  );
}
