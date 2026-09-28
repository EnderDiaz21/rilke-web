export default function Eyebrow({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={`flex items-center gap-3 text-[11px] font-semibold uppercase leading-snug tracking-[0.16em] text-gold-light ${className}`}
    >
      <span className="h-px w-5 shrink-0 bg-gold" aria-hidden="true" />
      {children}
    </div>
  );
}
