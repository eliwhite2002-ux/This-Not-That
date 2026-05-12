export default function SubscribePage() {
  return (
    <section className="section-shell mx-auto max-w-3xl space-y-5 text-center">
      <p className="text-xs uppercase tracking-[0.3em] text-gold">Subscribe</p>
      <h1 className="text-4xl font-semibold text-white">Follow AI dolls and companion tech from the owner’s side.</h1>
      <p className="text-mist/85">
        Get podcast episodes, publication notes, product coverage, and build log updates as companion technology moves
        from novelty toward real at-home systems.
      </p>
      <a
        href="https://substack.com/@synthcompanions"
        target="_blank"
        rel="noreferrer"
        className="inline-block rounded-full bg-gold px-6 py-3 font-medium text-ink"
      >
        Subscribe on Substack
      </a>
      <p className="text-sm text-mist/60">
        Affiliate disclosure: Future links may include affiliate partnerships that help support independent coverage.
        Synth Companions is built around selective, owner-focused recommendations.
      </p>
    </section>
  );
}
