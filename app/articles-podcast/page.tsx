const topics = [
  {
    title: 'Why Synth Companions Exists',
    summary: 'The first episode: the show’s owner-first lens and why this category needs better language.'
  },
  {
    title: 'From Sex Toy to Companion',
    summary: 'How AI, voice, memory, and physical presence shift the category beyond novelty.'
  },
  {
    title: 'Voice Changes Everything',
    summary: 'Why voice is one of the first features that can make a companion feel present.'
  },
  {
    title: 'What Doll Owners Actually Want From AI',
    summary: 'Owner signal: usefulness, trust, continuity, support, and features that survive real use.'
  },
  {
    title: 'Memory Is the Product',
    summary: 'Companion AI only becomes serious when it remembers enough to create continuity.'
  },
  {
    title: 'Why Manufacturer AI Feels Fake',
    summary: 'The gap between marketing claims, mouth movement, chatbot behavior, and emotional coherence.'
  },
  {
    title: 'The Owner-Built Companion Stack',
    summary: 'How owners combine bodies, apps, voice, memory tools, stands, storage, and workflows.'
  },
  {
    title: 'Maintenance Is Part of the Experience',
    summary: 'Cleaning, handling, storage, durability, and repair are not side issues. They define ownership.'
  },
  {
    title: 'Robotics Will Not Save a Bad Owner Experience',
    summary: 'Walking, arms, and full autonomy are less important than safety, usefulness, and at-home reliability.'
  },
  {
    title: 'The Future Is Not a Sexbot. It Is a System.',
    summary: 'The companion category will be built from connected layers, not one magic humanoid robot.'
  }
];

export default function ArticlesPodcastPage() {
  return (
    <section className="space-y-6">
      <div className="space-y-3">
        <p className="text-xs uppercase tracking-[0.3em] text-gold">Podcast</p>
        <h1 className="text-4xl font-semibold text-white">Upcoming episodes and publication notes</h1>
        <p className="max-w-3xl text-mist/80">
          Clear, owner-focused coverage of AI dolls, companion tech, product claims, and the practical realities that
          decide whether these systems actually work at home.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {topics.map((topic, idx) => (
          <article key={topic.title} className="section-shell space-y-3">
            <p className="text-sm uppercase tracking-[0.18em] text-gold">Planned Episode / Note {idx + 1}</p>
            <h2 className="text-xl font-medium text-white">{topic.title}</h2>
            <p className="text-sm text-mist/75">{topic.summary}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
