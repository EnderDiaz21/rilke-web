import Image from 'next/image';
import { useTranslations } from 'next-intl';
import Eyebrow from './Eyebrow';
import QuoteLink from './QuoteLink';
import Reveal from './Reveal';

type Step = { title: string; desc: string };

export default function Rescue() {
  const t = useTranslations('rescue');
  const steps = t.raw('steps') as Step[];

  return (
    <section id="rescue" className="relative overflow-hidden border-y border-gold/45 bg-night">
      <Image
        src="/images/rescue-bg.jpg"
        alt=""
        fill
        sizes="100vw"
        className="object-cover object-[70%_center] md:object-right"
      />
      {/* Solid on the copy side, fading to reveal the part on the right */}
      <span
        className="absolute inset-0 bg-[rgba(5,14,23,.9)] md:bg-transparent md:bg-[linear-gradient(90deg,#07131f_0%,#07131f_44%,rgba(7,19,31,.68)_62%,rgba(7,19,31,.2)_100%)]"
        aria-hidden="true"
      />
      <div className="relative z-[1] mx-auto flex w-[min(1260px,92%)] items-center md:min-h-[610px]">
        <Reveal className="max-w-[670px] py-[70px] md:py-[84px]">
          <Eyebrow>{t('eyebrow')}</Eyebrow>
          <h2 className="mt-3 font-sora text-[clamp(38px,5.4vw,70px)] font-bold leading-[1.02] tracking-tightest">
            {t('title')}
          </h2>
          <p className="mt-5 max-w-[590px] text-[17px] leading-[1.7] text-[#c6d0d8] md:text-[18px]">{t('text')}</p>
          <ol className="my-8 grid max-w-[720px] gap-[18px] sm:grid-cols-3">
            {steps.map((step) => (
              <li key={step.title} className="border-l-2 border-gold pl-4">
                <strong className="block text-[12px] uppercase tracking-[0.06em]">{step.title}</strong>
                <span className="mt-1.5 block text-[13px] leading-[1.5] text-muted">{step.desc}</span>
              </li>
            ))}
          </ol>
          <QuoteLink
            family="custom"
            className="inline-flex items-center justify-center gap-2 rounded bg-gold px-5 py-[14px] text-[13px] font-bold text-[#101419] transition-colors hover:bg-gold-light"
          >
            {t('cta')} <span aria-hidden="true">→</span>
          </QuoteLink>
        </Reveal>
      </div>
    </section>
  );
}
