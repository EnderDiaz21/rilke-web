import { useTranslations } from 'next-intl';
import LayerIntro from './LayerIntro';
import Reveal from './Reveal';

type Item = { title: string; desc: string };

export default function Engineering() {
  const t = useTranslations('engineering');
  const items = t.raw('items') as Item[];

  return (
    <section id="engineering" className="bg-deep py-[72px] md:py-24">
      <div className="mx-auto w-[min(1260px,92%)]">
        <LayerIntro eyebrow={t('eyebrow')} title={t('title')} desc={t('desc')} />

        <ol className="grid gap-[18px] md:grid-cols-3">
          {items.map((item, i) => (
            <li key={item.title}>
              <Reveal delay={i * 0.08} className="h-full">
                <article className="h-full border border-line bg-white/[0.025] p-7 transition-colors hover:border-gold/50 md:min-h-[240px] md:p-[30px]">
                  <span className="text-[11px] tracking-[0.15em] text-gold-light">{String(i + 1).padStart(2, '0')}</span>
                  <h3 className="mt-8 font-sora text-[22px] font-bold leading-[1.2]">{item.title}</h3>
                  <p className="mt-3 text-[14px] leading-[1.62] text-muted">{item.desc}</p>
                </article>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
