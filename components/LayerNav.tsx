import { useTranslations } from 'next-intl';

const sections = ['products', 'bus', 'engineering', 'rescue', 'technology', 'rfq'] as const;

export default function LayerNav() {
  const t = useTranslations('nav');

  return (
    <nav
      aria-label={t('sections')}
      className="sticky top-[var(--header-h)] z-30 border-b border-line bg-strip/95 backdrop-blur-md"
    >
      <div className="no-scrollbar mx-auto flex w-[min(1260px,92%)] gap-2 overflow-x-auto py-3">
        {sections.map((id, i) => (
          <a
            key={id}
            href={`#${id}`}
            className="flex shrink-0 items-center gap-2 whitespace-nowrap rounded-full border border-line px-3 py-2 text-[12px] text-paper/85 transition-colors hover:border-gold hover:text-gold-light"
          >
            <span className="text-[10px] tracking-[0.1em] text-gold-light" aria-hidden="true">
              0{i + 1}
            </span>
            {t(id)}
          </a>
        ))}
      </div>
    </nav>
  );
}
