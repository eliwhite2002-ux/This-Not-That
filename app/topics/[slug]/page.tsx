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
    <section className="space-y-6">
      <div className="section-shell space-y-5">
        <Link href="/topics" className="text-sm text-gold hover:text-white">
          ← Topics
        </Link>
        <p className="text-xs uppercase tracking-[0.3em] text-gold">Topic</p>
        <h1 className="text-4xl font-semibold text-white">{topic.title}</h1>
        <p className="max-w-3xl text-lg text-mist/80">{topic.description}</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <section className="section-shell space-y-4">
          <h2 className="text-2xl font-semibold text-white">What belongs here</h2>
          <ul className="grid list-disc gap-2 pl-5 text-mist/80">
            {topic.focus.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="section-shell space-y-4">
          <h2 className="text-2xl font-semibold text-white">Planned coverage</h2>
          <ul className="grid gap-3 text-mist/80">
            {topic.planned.map((item) => (
              <li key={item} className="rounded-xl border border-white/10 bg-ink/40 p-3">
                {item}
              </li>
            ))}
          </ul>
        </section>
      </div>

      <section className="section-shell space-y-4">
        <h2 className="text-2xl font-semibold text-white">Future resources</h2>
        <p className="max-w-3xl text-mist/75">
          As the publication grows, this section will collect finished articles, podcast notes, buyer guides, and useful
          resources for this topic.
        </p>
        <div className="grid gap-3 md:grid-cols-3">
          {topic.future.map((item) => (
            <div key={item} className="rounded-xl border border-white/10 bg-ink/40 p-4 text-sm text-mist/80">
              {item}
            </div>
          ))}
        </div>
      </section>
    </section>
  );
}
