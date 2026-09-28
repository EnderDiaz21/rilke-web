'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { useLocale, useTranslations } from 'next-intl';
import { locales } from '@/i18n';
import RilkeLogo from './RilkeLogo';

export default function Nav() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const pathWithoutLocale = pathname.replace(`/${locale}`, '') || '/';

  const links = [
    { href: '#products', label: t('products') },
    { href: '#bus', label: t('bus') },
    { href: '#engineering', label: t('engineering') },
    { href: '#rescue', label: t('rescue') },
    { href: '#technology', label: t('technology') },
    { href: '#rfq', label: t('rfq') }
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-night/[0.93] backdrop-blur-md">
      <nav className="mx-auto flex h-[var(--header-h)] w-[min(1260px,92%)] items-center gap-6 xl:gap-8">
        <a href="#top" aria-label={t('home')} className="w-[150px] shrink-0 sm:w-[190px]">
          <RilkeLogo className="block h-auto w-full" />
        </a>

        <ul className="ml-auto hidden list-none items-center gap-6 lg:flex xl:gap-7">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-[13px] font-medium tracking-[0.02em] text-paper/90 transition-colors hover:text-gold-light"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div
          className="ml-auto flex overflow-hidden rounded-[5px] border border-line lg:ml-0"
          role="group"
          aria-label={t('language')}
        >
          {locales.map((l) => (
            <Link
              key={l}
              href={`/${l}${pathWithoutLocale}`}
              hrefLang={l}
              aria-current={l === locale ? 'true' : undefined}
              className={`flex min-h-[36px] min-w-[38px] items-center justify-center px-2.5 text-[11px] font-bold uppercase tracking-[0.06em] transition-colors ${
                l === locale ? 'bg-gold text-[#101419]' : 'text-muted hover:text-gold-light'
              }`}
            >
              {l}
            </Link>
          ))}
        </div>

        <a
          href="#rfq"
          className="hidden whitespace-nowrap rounded border border-gold px-4 py-[11px] text-[11px] font-bold uppercase tracking-[0.06em] transition-colors hover:bg-gold hover:text-[#101419] sm:inline-block"
        >
          {t('quote')}
        </a>

        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? t('menuClose') : t('menuOpen')}
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded border border-line lg:hidden"
        >
          <span className="relative block h-3 w-4">
            <span
              className={`absolute left-0 top-0 h-px w-4 bg-paper transition-transform ${open ? 'translate-y-[6px] rotate-45' : ''}`}
            />
            <span className={`absolute left-0 top-[6px] h-px w-4 bg-paper transition-opacity ${open ? 'opacity-0' : ''}`} />
            <span
              className={`absolute left-0 top-3 h-px w-4 bg-paper transition-transform ${open ? '-translate-y-[6px] -rotate-45' : ''}`}
            />
          </span>
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-line bg-night lg:hidden"
          >
            <ul className="mx-auto flex w-[92%] flex-col py-3">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block py-3 text-[14px] font-medium text-paper/90 hover:text-gold-light"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li className="sm:hidden">
                <a
                  href="#rfq"
                  onClick={() => setOpen(false)}
                  className="mt-2 block rounded border border-gold px-4 py-3 text-center text-[12px] font-bold uppercase tracking-[0.06em]"
                >
                  {t('quote')}
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
