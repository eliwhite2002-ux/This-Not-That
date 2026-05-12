const sections = [
  {
    title: 'Companion AI setup',
    summary: 'Voice, memory, personality, and the software layer that makes the companion feel coherent.'
  },
  {
    title: 'Voice and memory systems',
    summary: 'Tracking the features that create presence and continuity instead of one-off chatbot novelty.'
  },
  {
    title: 'Doll storage and handling',
    summary: 'The practical owner workflow: moving, standing, storing, protecting material, and avoiding damage.'
  },
  {
    title: 'Companion Dock',
    summary: 'A stand, posing, storage, and future charging concept designed around real at-home ownership.'
  },
  {
    title: 'Photography workflows',
    summary: 'Owner-friendly setup ideas for posing, lighting, green-screen work, and more believable images.'
  },
  {
    title: 'Future robotics integration',
    summary: 'Watching robotics through the owner-value lens: safety, usefulness, reliability, and repairability first.'
  }
];

export default function BuildLogPage() {
  return (
    <section className="space-y-6">
      <div className="space-y-3">
        <p className="text-xs uppercase tracking-[0.3em] text-gold">Build Log</p>
        <h1 className="text-4xl font-semibold text-white">Owner-side experiments and product concepts</h1>
        <p className="max-w-3xl text-mist/85">
          Synth Companions is not only commentary. The build log tracks practical experiments, workflow problems, and
          product concepts that could make ownership easier, safer, and more emotionally coherent.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {sections.map((section) => (
          <article key={section.title} className="section-shell space-y-3">
            <h2 className="text-xl font-medium text-white">{section.title}</h2>
            <p className="text-sm text-mist/75">{section.summary}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
