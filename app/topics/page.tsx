import Link from 'next/link';
import { topics } from '@/lib/topics';

export default function TopicsPage() {
  return (
    <section className="space-y-5">
      <div className="section-shell space-y-3">
        <p className="kicker">Topics</p>
        <h1 className="page-title">Explore by topic</h1>
        <p className="max-w-3xl text-base leading-relaxed text-mist/75 md:text-lg">
          Start here when you want coverage by problem: ownership, AI features, buyer decisions, product claims, and
          build notes.
        </p>
      </div>
      <div className="grid gap-3 md:grid-cols-2">
        {topics.map((topic) => (
          <Link key={topic.slug} href={`/topics/${topic.slug}`} className="editorial-card block space-y-2">
            <p className="card-title">{topic.title}</p>
            <p className="text-sm font-medium text-gold/85">{topic.label}</p>
            <p className="text-sm leading-relaxed text-mist/70 md:text-base">{topic.description}</p>
            <p className="pt-1 text-sm text-gold">View section →</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
