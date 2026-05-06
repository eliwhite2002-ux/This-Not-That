const topics = [
  'Why Synth Companions Exists',
  'From Sex Toy to Companion',
  'Voice Changes Everything',
  'What Doll Owners Actually Want From AI',
  'Memory Is the Product',
  'Why Manufacturer AI Feels Fake',
  'The Owner-Built Companion Stack',
  'Maintenance Is Part of the Experience',
  'Robotics Will Change the Category',
  'The Future Is Not a Sexbot. It Is a System.'
];

export default function ArticlesPodcastPage() {
  return (
    <section className="space-y-6">
      <h1 className="text-4xl font-semibold text-white">Articles / Podcast</h1>
      <p className="max-w-3xl text-mist/80">A rolling editorial and audio index of the early companion technology stack.</p>
      <div className="grid gap-4 md:grid-cols-2">
        {topics.map((topic, idx) => (
          <article key={topic} className="section-shell">
            <p className="text-sm uppercase tracking-[0.18em] text-gold">Issue {idx + 1}</p>
            <h2 className="mt-2 text-xl font-medium text-white">{topic}</h2>
          </article>
        ))}
      </div>
    </section>
  );
}
