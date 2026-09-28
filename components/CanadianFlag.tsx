export default function CanadianFlag({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 28 14"
      width="28"
      height="14"
      className={className}
      role="img"
      aria-label="Canada"
    >
      <rect width="28" height="14" fill="#D8112C" />
      <rect x="7" width="14" height="14" fill="#FFFFFF" />
      <svg x="8.4" y="2.6" width="11.2" height="8.8" viewBox="0 0 100 80">
        <path
          d="M50,6 L57,22 L74,14 L69,32 L88,33 L74,46 L80,62 L60,55 L57,72 L50,64 L43,72 L40,55 L20,62 L26,46 L12,33 L31,32 L26,14 L43,22 Z"
          fill="#D8112C"
        />
      </svg>
    </svg>
  );
}
