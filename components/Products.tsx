import Image from 'next/image';
import { useTranslations } from 'next-intl';
import LayerIntro from './LayerIntro';
import QuoteLink from './QuoteLink';
import Reveal from './Reveal';
import { productImages } from './productImages';

type Item = { key: string; title: string; desc: string };
type FeaturedItem = { name: string; desc: string };

const cardClass =
  'group flex h-full flex-col overflow-hidden rounded-lg border border-line bg-gradient-to-b from-card-top to-card-bottom transition duration-200 hover:-translate-y-1 hover:border-gold/70';
const linkClass =
  'text-[12px] font-bold text-gold-light transition-colors hover:text-paper after:absolute after:inset-0 after:content-[""]';

export default function Products() {
  const t = useTranslations('products');
  const items = t.raw('items') as Item[];
  const featuredItems = t.raw('featured.items') as FeaturedItem[];

  return (
    <section id="products" className="bg-deep py-[72px] md:py-24">
      <div className="mx-auto w-[min(1260px,92%)]">
        <LayerIntro eyebrow={t('eyebrow')} title={t('title')} desc={t('desc')} />

        {/* Star products: kneeling + leveling, full-width banner above the grid */}
        <Reveal>
          <article className={`${cardClass} relative mb-[15px] border-gold/45 md:flex-row`}>
            <div className="relative h-[260px] shrink-0 md:h-auto md:min-h-[340px] md:w-[42%]">
              <Image
                src={productImages['kneeling-leveling']}
                alt=""
                fill
                sizes="(min-width: 768px) 42vw, 92vw"
                className="object-cover object-bottom"
              />
              <span className="absolute left-3 top-3 z-[1] inline-flex items-center gap-1 rounded bg-gold px-2 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-[#101419]">
                <span aria-hidden="true">★</span> {t('featuredBadge')}
              </span>
            </div>
            <div className="flex flex-1 flex-col p-6 md:p-8 lg:p-10">
              <h3 className="font-sora text-[clamp(22px,2.4vw,30px)] font-bold leading-[1.15]">{t('featured.title')}</h3>
              <p className="mt-3 max-w-[620px] text-[15px] leading-[1.6] text-muted">{t('featured.desc')}</p>
              <dl className="mt-6 grid gap-5 lg:grid-cols-2">
                {featuredItems.map((f) => (
                  <div key={f.name} className="border-l-2 border-gold pl-3">
                    <dt className="font-sora text-[15px] font-semibold">{f.name}</dt>
                    <dd className="mt-1 text-[13px] leading-[1.55] text-muted">{f.desc}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-6 text-[11px] uppercase tracking-[0.1em] text-muted">{t('featured.specs')}</p>
              <div className="mt-auto pt-5">
                <QuoteLink family="kneeling-leveling" className={linkClass}>
                  {t('cta')} <span aria-hidden="true">→</span>
                </QuoteLink>
              </div>
            </div>
          </article>
        </Reveal>

        <ul className="grid gap-[15px] sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <li key={item.key}>
              <Reveal delay={(i % 3) * 0.06} className="h-full">
                <article className={`${cardClass} relative`}>
                  <div className="relative h-[220px]">
                    <Image
                      src={productImages[item.key]}
                      alt=""
                      fill
                      sizes="(min-width: 1024px) 30vw, (min-width: 640px) 46vw, 92vw"
                      className="object-cover transition-transform duration-500 ease-out-expo group-hover:scale-[1.03]"
                    />
                    <span
                      className="absolute inset-0 bg-gradient-to-t from-[rgba(4,12,20,.48)] to-transparent"
                      aria-hidden="true"
                    />
                    <span className="absolute right-3 top-3 z-[1] rounded border border-white/20 bg-[rgba(4,12,20,.72)] px-[7px] py-[5px] text-[10px] tracking-[0.13em] text-gold-light">
                      {String(i + 2).padStart(2, '0')}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="font-sora text-[17px] font-bold leading-[1.2]">{item.title}</h3>
                    <p className="mt-2 text-[13px] leading-[1.58] text-muted">{item.desc}</p>
                    <div className="mt-auto pt-4">
                      <QuoteLink family={item.key} className={linkClass}>
                        {t('cta')} <span aria-hidden="true">→</span>
                      </QuoteLink>
                    </div>
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
