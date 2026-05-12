export function BrandMark({ size = 38 }: { size?: number }) {
  return (
    <span
      className="inline-flex shrink-0 items-center justify-center rounded-full border border-gold bg-black shadow-glow"
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      <svg viewBox="0 0 120 120" className="h-[82%] w-[82%]" role="img">
        <circle cx="60" cy="60" r="54" fill="#0b0b0f" stroke="#f5a623" strokeWidth="4" />
        <path
          d="M84 28c-8-9-21-14-34-10-10 3-18 10-22 20h16c3-4 7-7 13-8 7-1 13 1 18 6l9-8Z"
          fill="#ffffff"
        />
        <path
          d="M30 41h42l-6 13H37c-5 0-8 3-8 7s3 7 8 7h23c13 0 22 8 22 20 0 4-1 7-3 10H63c3-2 5-5 5-9 0-5-4-8-10-8H35c-13 0-22-8-22-20s7-20 17-20Z"
          fill="#ffffff"
        />
        <path
          d="M83 92c8-9 11-22 7-34-3-9-9-17-17-21v16c3 3 5 7 5 12 1 7-1 13-6 18l11 9Z"
          fill="#ffffff"
        />
        <g fill="#f5a623">
          <rect x="82" y="52" width="5" height="16" rx="2.5" />
          <rect x="90" y="45" width="5" height="30" rx="2.5" />
          <rect x="98" y="38" width="5" height="44" rx="2.5" />
          <rect x="106" y="49" width="5" height="22" rx="2.5" />
          <circle cx="77" cy="60" r="3" />
          <circle cx="114" cy="60" r="3" />
        </g>
      </svg>
    </span>
  );
}

export function BrandLockup({ compact = false }: { compact?: boolean }) {
  return (
    <span className="inline-flex items-center gap-3">
      <BrandMark size={compact ? 34 : 42} />
      <span className="leading-tight">
        <span className="block text-sm font-semibold tracking-[0.16em] text-white md:text-base">Synth Companions</span>
        {!compact && <span className="block text-xs text-gold">Podcast + Publication</span>}
      </span>
    </span>
  );
}
