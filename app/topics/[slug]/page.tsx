import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getTopic, topics } from '@/lib/topics';

export function generateStaticParams() {
  return topics.map((topic) => ({ slug: topic.slug }));
}

export default function TopicPage({ params }: { params: { slug: string } }) {
  const topic = getTopic(params.slug);

  if (!topic) {
    notFound();
  }

  return (
    <section className="space-y-5">
      <div className="section-shell space-y-4">
        <Link href="/topics" className="text-sm text-gold hover:text-white">
          ← Topics
        </Link>
        <p className="kicker">{topic.label}</p>
        <h1 className="page-title">{topic.title}</h1>
        <p className="max-w-3xl text-base leading-relaxed text-mist/75 md:text-lg">{topic.description}</p>
      </div>

      <section className="grid gap-3 md:grid-cols-2">
        <div className="editorial-card space-y-4">
          <h2 className="text-2xl font-semibold text-white">Coverage</h2>
          <ul className="grid gap-2 text-sm leading-relaxed text-mist/75 md:text-base">
            {topic.focus.map((item) => (
              <li key={item} className="rounded-xl border border-white/10 bg-ink/35 px-4 py-3">
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="editorial-card space-y-4">
          <h2 className="text-2xl font-semibold text-white">In the pipeline</h2>
          <ul className="grid gap-2 text-sm leading-relaxed text-mist/75 md:text-base">
            {topic.planned.map((item) => (
              <li key={item} className="rounded-xl border border-white/10 bg-ink/35 px-4 py-3">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="editorial-card space-y-4">
        <h2 className="text-2xl font-semibold text-white">Guides and resources</h2>
        <p className="max-w-3xl text-sm leading-relaxed text-mist/70 md:text-base">
          Finished articles, podcast notes, buyer guides, and useful resources for this topic will collect here as they
          publish.
        </p>
        <div className="grid gap-2 md:grid-cols-3">
          {topic.future.map((item) => (
            <div key={item} className="rounded-xl border border-white/10 bg-ink/35 px-4 py-3 text-sm text-mist/80">
              {item}
            </div>
          ))}
        </div>
      </section>
    </section>
  );
}
