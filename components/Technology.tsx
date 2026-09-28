import { useTranslations } from 'next-intl';
import LayerIntro from './LayerIntro';
import Reveal from './Reveal';

type Tile = { title: string; desc: string };

const icons = [
  // Laser-engraved ID — crosshair on a plate
  <path key="laser" d="M4 6h16v12H4zM12 3v6M12 15v6M9 12H3M21 12h-6" />,
  // QR traceability
  <path key="qr" d="M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h2v2h-2zM18 18h2v2h-2zM14 18h2M18 14h2" />,
  // Lot traceability — stacked layers
  <path key="lot" d="M12 3l9 5-9 5-9-5 9-5zM3 13l9 5 9-5M3 17.5l9 5 9-5" />,
  // Direct engineering support — wrench
  <path key="support" d="M14.7 6.3a4 4 0 00-5.2 5.2L3 18l3 3 6.5-6.5a4 4 0 005.2-5.2l-2.5 2.5-2.5-.5-.5-2.5 2.5-2.5z" />
];

export default function Technology() {
  const t = useTranslations('technology');
  const tiles = t.raw('tiles') as Tile[];

  return (
    <section id="technology" className="bg-deep py-[72px] md:py-24">
      <div className="mx-auto w-[min(1260px,92%)]">
        <LayerIntro eyebrow={t('eyebrow')} title={t('title')} desc={t('desc')} />

        <ul className="grid gap-[14px] sm:grid-cols-2 lg:grid-cols-4">
          {tiles.map((tile, i) => (
            <li key={tile.title}>
              <Reveal delay={i * 0.06} className="h-full">
                <article className="h-full border-t-2 border-gold bg-panel p-6 md:p-[25px]">
                  <span className="flex h-12 w-12 items-center justify-center rounded-[10px] bg-gold-dim text-gold-light">
                    <svg
                      viewBox="0 0 24 24"
                      width="22"
                      height="22"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      {icons[i]}
                    </svg>
                  </span>
                  <h3 className="mt-5 font-sora text-[17px] font-bold leading-[1.25]">{tile.title}</h3>
                  <p className="mt-2 text-[13px] leading-[1.55] text-muted">{tile.desc}</p>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
