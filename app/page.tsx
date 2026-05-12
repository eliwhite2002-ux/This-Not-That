import Link from 'next/link';
import { topics } from '@/lib/topics';

const features = [
  {
    title: 'Why Synth Companions Exists',
    summary: 'The owner-first starting point for the podcast and publication.',
    href: '/topics/owner-experience'
  },
  {
    title: 'What Doll Owners Actually Want From AI',
    summary: 'Voice, memory, presence, trust, and practical usefulness.',
    href: '/topics/owner-experience'
  },
  {
    title: 'Voice, Memory, and Presence',
    summary: 'Why companion AI changes when it feels present in the room.',
    href: '/topics/ai-tech'
  },
  {
    title: 'Product Claims vs. Owner Reality',
    summary: 'What companies market versus what owners actually experience.',
    href: '/topics/product-coverage'
  }
];

const audiences = ['Current owners', 'Curious buyers', 'AI companion users', 'Builders, vendors, and reviewers'];

export default function Home() {
  return (
    <>
      <section className="section-shell relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-grid-fade bg-[size:36px_36px] opacity-25" />
        <div className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr] lg:items-start">
          <div className="space-y-4">
            <p className="kicker">Podcast + Publication</p>
            <h1 className="hero-title max-w-4xl">
              AI dolls, companion tech, and the real owner experience.
            </h1>
            <p className="max-w-3xl text-base leading-relaxed text-mist/80 md:text-xl">
              Synth Companions follows the shift from AI chat and adult dolls into companion technology, with a focus
              on what actually matters once these products get home.
            </p>
            <p className="max-w-2xl text-sm leading-relaxed text-mist/60">
              First episode recorded. Publication notes, product coverage, buyer resources, and build log updates are in
              progress.
            </p>
            <div className="flex flex-wrap gap-3 pt-1">
              <Link href="/topics" className="rounded-full bg-gold px-5 py-2.5 text-sm font-medium text-ink hover:opacity-90 md:px-6 md:py-3 md:text-base">
                Browse topics
              </Link>
              <a
                href="https://substack.com/@synthcompanions"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/20 px-5 py-2.5 text-sm text-white hover:border-gold md:px-6 md:py-3 md:text-base"
              >
                Subscribe on Substack
              </a>
            </div>
          </div>
          <div className="section-shell border-gold/25 bg-gradient-to-b from-violet/50 to-charcoal/80 p-4 md:p-6">
            <p className="kicker">Explore</p>
            <div className="mt-3 grid gap-2 text-sm">
              {topics.slice(0, 4).map((topic) => (
                <Link
                  key={topic.slug}
                  href={`/topics/${topic.slug}`}
                  className="group rounded-xl border border-white/10 bg-ink/35 p-3 transition hover:border-gold/70"
                >
                  <span className="block text-base font-semibold text-white group-hover:text-gold">{topic.title}</span>
                  <span className="mt-1 block text-sm text-gold/80">{topic.label}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell space-y-3">
        <h2 className="section-title">Why This Exists</h2>
        <p className="text-sm leading-relaxed text-mist/80 md:text-base">
          Most coverage of this space gets stuck in fantasy, stigma, or robot demos. Synth Companions starts with the
          owner: what it is actually like to live with these products, what makes them useful, and what companies need
          to get right.
        </p>
        <p className="text-sm leading-relaxed text-mist/80 md:text-base">
          The body already exists. The AI is arriving. The missing layer is the real ownership experience.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="section-title">Who This Is For</h2>
        <div className="grid grid-cols-2 gap-2 md:grid-cols-4">
          {audiences.map((item) => (
            <article key={item} className="rounded-xl border border-white/10 bg-charcoal/60 p-3 md:p-4">
              <h3 className="text-sm font-medium text-white md:text-base">{item}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="section-title">Upcoming Episodes / Notes</h2>
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <Link key={feature.title} href={feature.href} className="editorial-card block space-y-2">
              <p className="text-base font-semibold leading-tight text-white md:text-lg">{feature.title}</p>
              <p className="text-sm leading-relaxed text-mist/70">{feature.summary}</p>
              <p className="pt-1 text-sm text-gold">Related section →</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="section-shell space-y-3">
        <h2 className="section-title">Build Log: Companion Dock</h2>
        <p className="text-sm leading-relaxed text-mist/80 md:text-base">
          A practical owner-side project exploring safer storage, easier posing, handling, photography support, and
          future charging or accessory integration for lifelike dolls and companion systems.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link href="/topics/build-log" className="compact-chip">
            Build Log Topic
          </Link>
          <Link href="/build-log" className="compact-chip">
            Project Notes
          </Link>
        </div>
      </section>

      <section className="section-shell space-y-3 text-center">
        <h2 className="section-title">Follow the category from the owner’s side.</h2>
        <p className="text-sm leading-relaxed text-mist/75 md:text-base">Podcast episodes, product notes, build logs, and practical coverage of where companion tech is going.</p>
        <a
          href="https://substack.com/@synthcompanions"
          target="_blank"
          rel="noreferrer"
          className="inline-block rounded-full bg-gold px-6 py-3 text-sm font-medium text-ink md:text-base"
        >
          Subscribe on Substack
        </a>
      </section>
    </>
  );
}
