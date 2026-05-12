export function BrandMark({ size = 38 }: { size?: number }) {
  return (
    <span
      className="inline-flex shrink-0 items-center justify-center rounded-full border border-gold bg-black shadow-glow"
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      <svg viewBox="0 0 120 120" className="h-full w-full" role="img">
        <circle cx="60" cy="60" r="56" fill="#050507" stroke="#f5a623" strokeWidth="3" />
        <path
          d="M85 28c-9-9-23-13-36-8-10 4-17 11-21 21h17c3-4 7-7 13-8 8-1 14 1 19 6l8-11Z"
          fill="#f7f7f7"
        />
        <path
          d="M31 41h42l-6 14H38c-5 0-8 3-8 7s3 7 8 7h22c14 0 23 8 23 20 0 4-1 8-3 11H63c3-2 5-5 5-9 0-5-4-8-10-8H35c-14 0-23-8-23-21 0-12 8-21 19-21Z"
          fill="#f7f7f7"
        />
        <path
          d="M84 92c8-9 11-22 7-34-3-9-9-17-18-21v16c3 3 5 7 5 12 1 7-1 13-6 18l12 9Z"
          fill="#f7f7f7"
        />
        <g fill="#f5a623">
          <rect x="81" y="53" width="5" height="14" rx="2.5" />
          <rect x="89" y="47" width="5" height="26" rx="2.5" />
          <rect x="97" y="39" width="5" height="42" rx="2.5" />
          <rect x="105" y="48" width="5" height="24" rx="2.5" />
          <circle cx="76" cy="60" r="3" />
          <circle cx="114" cy="60" r="3" />
        </g>
      </svg>
    </span>
  );
}

export function BrandLockup({ compact = false }: { compact?: boolean }) {
  return (
    <span className="inline-flex items-center gap-3">
      <BrandMark size={compact ? 32 : 42} />
      <span className="leading-tight">
        <span className="block text-sm font-semibold tracking-[0.1em] text-white md:text-base">Synth Companions</span>
        {!compact && <span className="block text-xs text-gold">Podcast + Publication</span>}
      </span>
    </span>
  );
}
