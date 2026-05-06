const sections = [
  'Companion AI setup',
  'Voice and memory systems',
  'Doll storage and handling',
  'Companion Dock',
  'Photography / green-screen workflows',
  'Future robotics integration'
];

export default function BuildLogPage() {
  return (
    <section className="space-y-6">
      <h1 className="text-4xl font-semibold text-white">Build Log</h1>
      <p className="max-w-3xl text-mist/85">
        Synth Companions is not only commentary. It tracks practical experiments and product concepts as the category
        forms.
      </p>
      <div className="grid gap-4 md:grid-cols-2">
        {sections.map((section) => (
          <article key={section} className="section-shell">
            <h2 className="text-xl font-medium text-white">{section}</h2>
          </article>
        ))}
      </div>
    </section>
  );
}
