import { useTranslations } from 'next-intl';
import CanadianFlag from './CanadianFlag';
import RilkeLogo from './RilkeLogo';

const headingClass = 'mb-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-paper';
const linkClass = 'block py-1 text-[13px] leading-[1.45] transition-colors hover:text-gold-light';

export default function Footer() {
  const t = useTranslations('footer');
  const tr = useTranslations('rfq');
  const familyLinks = t.raw('familyLinks') as string[];

  return (
    <footer className="border-t border-line bg-[#050e16] pb-10 pt-12 text-muted">
      <div className="mx-auto w-[min(1260px,92%)]">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr] md:gap-16">
          <div>
            <RilkeLogo className="mb-5 block h-auto w-[170px]" />
            <p className="max-w-[420px] text-[13px] leading-[1.65]">{t('tagline')}</p>
            <div className="mt-5 flex items-center gap-3 text-[12px]">
              <CanadianFlag className="shrink-0" />
              <span>{t('place')}</span>
              <span className="text-line" aria-hidden="true">|</span>
              <span>{t('certs')}</span>
            </div>
          </div>

          <div>
            <h2 className={headingClass}>{t('families')}</h2>
            {familyLinks.map((label) => (
              <a key={label} href="#products" className={linkClass}>
                {label}
              </a>
            ))}
          </div>

          <div>
            <h2 className={headingClass}>{t('contact')}</h2>
            <a href="#rescue" className={linkClass}>
              {t('sourcing')}
            </a>
            <a href={`mailto:${tr('email')}`} className={linkClass}>
              {tr('email')}
            </a>
            <a href="https://technoforme.com" className={linkClass}>
              {t('engineeredBy')} <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap justify-between gap-4 border-t border-line pt-5 text-[11px]">
          <span>{t('legal')}</span>
          <span>rilkesystems.com</span>
        </div>
      </div>
    </footer>
  );
}
