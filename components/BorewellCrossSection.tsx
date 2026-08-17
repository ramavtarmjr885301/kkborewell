export default function BorewellCrossSection() {
  return (
    <svg
      viewBox="0 0 420 560"
      className="w-full h-auto max-w-md mx-auto"
      role="img"
      aria-label="Cross section diagram of a borewell showing soil layers, the drilled shaft, water table, and submersible pump"
    >
      <defs>
        <clipPath id="groundClip">
          <rect x="0" y="70" width="420" height="490" rx="10" />
        </clipPath>
        <linearGradient id="waterGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#4aa9b5" />
          <stop offset="100%" stopColor="#0b3d42" />
        </linearGradient>
      </defs>

      {/* sky */}
      <rect x="0" y="0" width="420" height="70" fill="var(--color-paper-50)" />

      {/* ground surface line */}
      <rect x="0" y="60" width="420" height="14" fill="#8a6a4f" />

      <g clipPath="url(#groundClip)">
        {/* soil strata bands */}
        <rect x="0" y="74" width="420" height="90" fill="#c9b48f" />
        <rect x="0" y="164" width="420" height="90" fill="#b79a72" />
        <rect x="0" y="254" width="420" height="100" fill="#9c8362" />
        <rect x="0" y="354" width="420" height="100" fill="var(--color-aqua-200)" />
        <rect x="0" y="454" width="420" height="106" fill="var(--color-aqua-400)" />

        {/* pebble texture dots */}
        {Array.from({ length: 40 }).map((_, i) => {
          const x = (i * 53) % 420;
          const y = 90 + ((i * 37) % 440);
          const r = 1.5 + (i % 3);
          return (
            <circle
              key={i}
              cx={x}
              cy={y}
              r={r}
              fill="#00000014"
            />
          );
        })}

        {/* borehole shaft */}
        <rect x="196" y="74" width="28" height="486" fill="var(--color-paper-50)" stroke="var(--color-ink-900)" strokeWidth="2" />
        {/* casing pipe */}
        <rect x="200" y="74" width="20" height="486" fill="#e7e1d3" stroke="var(--color-well-800)" strokeWidth="1.5" />

        {/* water inside pipe below water table */}
        <rect x="200" y="360" width="20" height="200" fill="url(#waterGrad)" className="animate-water" />

        {/* submersible pump body near bottom */}
        <rect x="192" y="500" width="36" height="46" rx="4" fill="var(--color-rust-500)" stroke="var(--color-ink-900)" strokeWidth="1.5" />
        <rect x="200" y="546" width="20" height="10" fill="var(--color-ink-900)" />
      </g>

      {/* water table dashed line + label */}
      <line x1="20" y1="356" x2="400" y2="356" stroke="var(--color-well-800)" strokeWidth="2" strokeDasharray="6 6" />
      <text x="24" y="345" fontSize="14" fontFamily="var(--font-mono)" fill="var(--color-well-800)">
        WATER TABLE
      </text>

      {/* depth marker */}
      <text x="24" y="530" fontSize="13" fontFamily="var(--font-mono)" fill="var(--color-ink-900)" opacity="0.7">
        PUMP DEPTH
      </text>

      {/* outer frame */}
      <rect x="0" y="60" width="420" height="490" rx="10" fill="none" stroke="var(--color-line)" strokeWidth="1.5" />
    </svg>
  );
}
