const logoSrc = 'data:image/webp;base64,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';

export function BrandMark({ size = 38 }: { size?: number }) {
  return (
    <span
      className="inline-flex shrink-0 items-center justify-center overflow-hidden rounded-full border border-gold bg-black shadow-glow"
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      <img src={logoSrc} alt="" className="h-full w-full object-cover" />
    </span>
  );
}

export function BrandLockup({ compact = false }: { compact?: boolean }) {
  return (
    <span className="inline-flex items-center gap-3">
      <BrandMark size={compact ? 34 : 46} />
      <span className="leading-tight">
        <span className="block text-sm font-semibold tracking-[0.16em] text-white md:text-base">Synth Companions</span>
        {!compact && <span className="block text-xs text-gold">Podcast + Publication</span>}
      </span>
    </span>
  );
}
