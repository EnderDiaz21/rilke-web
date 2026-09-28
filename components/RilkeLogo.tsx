// RILKE wordmark from the approved draft (design/rilke-draft.html): white letters, gold "K" chevron.
export default function RilkeLogo({ className, tagline = true }: { className?: string; tagline?: boolean }) {
  return (
    <svg
      className={className}
      viewBox={tagline ? '0 0 460 150' : '0 0 460 126'}
      role="img"
      aria-label="RILKE Fluid Systems"
    >
      <g fill="none" stroke="#fff" strokeWidth="19" strokeLinecap="round" strokeLinejoin="round">
        <path d="M24 72V116M24 72Q24 43 50 43H77" />
        <path d="M115 45V116" />
        <circle cx="115" cy="17" r="7" fill="#fff" stroke="none" />
        <path d="M164 17V116" />
        <path d="M210 17V116" />
        <path d="M303 80H383Q411 80 411 55Q411 31 383 31H350Q320 31 320 63V96Q320 116 344 116H405" />
      </g>
      <circle cx="219" cy="80" r="8" fill="#fff" />
      <path d="M227 80L278 38M227 80L278 121" fill="none" stroke="#D79A43" strokeWidth="19" />
      {tagline && (
        <text
          x="25"
          y="146"
          fill="#fff"
          fontSize="17"
          letterSpacing="9"
          style={{ fontFamily: 'var(--font-sora), Arial, sans-serif' }}
        >
          FLUID SYSTEMS
        </text>
      )}
    </svg>
  );
}
