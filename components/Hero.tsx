import Image from 'next/image';
import { useTranslations } from 'next-intl';
import CanadianFlag from './CanadianFlag';
import Eyebrow from './Eyebrow';
import Reveal from './Reveal';
import RilkeLogo from './RilkeLogo';
import { productImages } from './productImages';

const wallKeys = ['kneeling-leveling', 'compressors', 'dryers', 'drain-valves'];

export default function Hero() {
  const t = useTranslations('hero');
  const minis = t.raw('minis') as string[];

  return (
    <section
      className="relative overflow-hidden border-b border-line"
      style={{
        background:
          'radial-gradient(circle at 78% 22%, rgba(215,154,67,.14), transparent 25%), linear-gradient(180deg, #081624, #07131f 72%)'
      }}
    >
      <div className="relative z-[1] mx-auto grid w-[min(1260px,92%)] items-center gap-12 py-16 md:py-20 lg:min-h-[680px] lg:grid-cols-[1.05fr_0.95fr] lg:gap-[62px]">
        <div>
          <Reveal>
            <RilkeLogo className="mb-8 block h-auto w-[min(420px,80%)]" />
            <Eyebrow>{t('eyebrow')}</Eyebrow>
            <h1 className="mt-5 font-sora text-[clamp(42px,6vw,80px)] font-semibold leading-[0.98] tracking-[-0.045em]">
              {t('titleLine1')}
              <br />
              <span className="text-gold-light">{t('titleLine2')}</span>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-[600px] text-[17px] leading-[1.65] text-muted md:text-[19px]">{t('text')}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#products"
                className="inline-flex items-center justify-center gap-2 rounded bg-gold px-5 py-[14px] text-[13px] font-bold text-[#101419] transition-colors hover:bg-gold-light"
              >
                {t('cta1')} <span aria-hidden="true">→</span>
              </a>
              <a
                href="#rescue"
                className="inline-flex items-center justify-center rounded border border-line px-5 py-[14px] text-[13px] font-bold transition-colors hover:border-gold hover:text-gold-light"
              >
                {t('cta2')}
              </a>
            </div>
            <div className="mt-9 flex items-center gap-3 text-[12px] uppercase tracking-[0.08em] text-paper/85">
              <CanadianFlag className="shrink-0" />
              <span>{t('badge')}</span>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <ul className="grid grid-cols-2 gap-3 md:gap-[14px]" aria-label={t('wallLabel')}>
            {wallKeys.map((key, i) => (
              <li
                key={key}
                className="relative min-h-[150px] overflow-hidden rounded-lg border border-line md:min-h-[205px]"
              >
                <Image
                  src={productImages[key]}
                  alt=""
                  fill
                  priority={i < 2}
                  sizes="(min-width: 1024px) 300px, 46vw"
                  className={`object-cover ${key === 'kneeling-leveling' ? 'object-bottom' : 'object-center'}`}
                />
                <span
                  className="absolute inset-0 bg-gradient-to-t from-[rgba(4,12,20,.8)] via-[rgba(4,12,20,.1)] to-transparent"
                  aria-hidden="true"
                />
                <span className="absolute bottom-3 left-4 right-3 z-[1] text-[12px] font-semibold leading-snug md:text-[13px]">
                  {minis[i]}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
