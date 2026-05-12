import Link from 'next/link';
import { topics } from '@/lib/topics';

export default function TopicsPage() {
  return (
    <section className="space-y-6">
      <div className="space-y-3">
        <p className="text-xs uppercase tracking-[0.3em] text-gold">Topics</p>
        <h1 className="text-4xl font-semibold text-white">Browse by what owners actually care about</h1>
        <p className="max-w-3xl text-mist/80">
          These sections will collect articles, podcast notes, buyer guides, product coverage, and practical owner
          resources as Synth Companions grows.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {topics.map((topic) => (
          <Link key={topic.slug} href={`/topics/${topic.slug}`} className="section-shell block space-y-3 transition hover:border-gold/60">
            <p className="text-xl font-medium text-white">{topic.title}</p>
            <p className="text-sm text-mist/75">{topic.description}</p>
            <p className="text-sm text-gold">View section →</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
