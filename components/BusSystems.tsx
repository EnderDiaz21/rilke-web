import Image from 'next/image';
import { useTranslations } from 'next-intl';
import Eyebrow from './Eyebrow';
import LayerIntro from './LayerIntro';
import Reveal from './Reveal';

type Panel = { eyebrow: string; title: string; desc: string };

const panelImages = ['/images/kneeling-leveling.jpg', '/images/manifolds.jpg'];

export default function BusSystems() {
  const t = useTranslations('bus');
  const panels = t.raw('panels') as Panel[];

  return (
    <section id="bus" className="py-[72px] md:py-24">
      <div className="mx-auto w-[min(1260px,92%)]">
        <LayerIntro eyebrow={t('eyebrow')} title={t('title')} desc={t('desc')} />

        <div className="grid gap-[18px] lg:grid-cols-2">
          {panels.map((panel, i) => (
            <Reveal key={panel.title} delay={i * 0.1}>
              <article className="relative flex min-h-[320px] flex-col justify-end overflow-hidden rounded-lg border border-line p-7 md:min-h-[360px] md:p-8">
                <Image
                  src={panelImages[i]}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 50vw, 92vw"
                  className={`object-cover ${i === 0 ? 'object-bottom' : 'object-center'}`}
                />
                <span
                  className="absolute inset-0 bg-gradient-to-t from-[rgba(5,15,24,.94)] via-[rgba(5,15,24,.6)] to-[rgba(5,15,24,.2)]"
                  aria-hidden="true"
                />
                <div className="relative z-[1]">
                  <Eyebrow>{panel.eyebrow}</Eyebrow>
                  <h3 className="mt-3 font-sora text-[clamp(24px,2.6vw,30px)] font-bold leading-[1.15]">
                    {panel.title}
                  </h3>
                  <p className="mt-3 max-w-[560px] text-[15px] leading-[1.65] text-[#c4ced6]">{panel.desc}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
