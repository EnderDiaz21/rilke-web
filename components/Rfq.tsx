'use client';

import { useEffect, useRef, useState } from 'react';
import { useTranslations } from 'next-intl';
import Eyebrow from './Eyebrow';
import { FAMILY_EVENT } from './productImages';

type Item = { key: string; title: string };

const fieldClass =
  'w-full rounded border border-field bg-night px-[15px] py-[14px] text-[15px] text-paper outline-none transition-colors placeholder:text-muted/60 focus:border-gold';
const labelClass = 'text-[11px] font-bold uppercase tracking-[0.11em] text-[#9eabb7]';

// Static site (Cloudflare Pages): no backend, so the form composes an email in the visitor's mail app.
export default function Rfq() {
  const t = useTranslations('rfq');
  const tp = useTranslations('products');
  const formRef = useRef<HTMLFormElement>(null);
  const [family, setFamily] = useState('kneeling-leveling');
  const [status, setStatus] = useState('');

  const families: Item[] = [
    { key: 'kneeling-leveling', title: tp('featured.title') },
    ...(tp.raw('items') as Item[]),
    { key: 'custom', title: t('customFamily') }
  ];

  useEffect(() => {
    const onSelect = (e: Event) => setFamily((e as CustomEvent<string>).detail);
    window.addEventListener(FAMILY_EVENT, onSelect);
    return () => window.removeEventListener(FAMILY_EVENT, onSelect);
  }, []);

  function inquiryText() {
    const f = new FormData(formRef.current!);
    const familyTitle = families.find((x) => x.key === f.get('family'))?.title ?? '';
    return [
      t('inquiryTitle'),
      '',
      `${t('name')}: ${f.get('name') || ''}`,
      `${t('company')}: ${f.get('company') || ''}`,
      `${t('emailLabel')}: ${f.get('email') || ''}`,
      `${t('family')}: ${familyTitle}`,
      `${t('part')}: ${f.get('part') || ''}`,
      '',
      `${t('message')}:`,
      String(f.get('message') || '')
    ].join('\n');
  }

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = formRef.current!;
    if (!form.reportValidity()) return;
    const f = new FormData(form);
    const familyTitle = families.find((x) => x.key === f.get('family'))?.title;
    const subject = `${t('subject')} — ${f.get('part') || familyTitle || 'RFQ'}`;
    setStatus(t('statusOpening'));
    window.location.href = `mailto:${t('email')}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(inquiryText())}`;
  }

  async function onCopy() {
    try {
      await navigator.clipboard.writeText(inquiryText());
      setStatus(t('statusCopied'));
    } catch {
      setStatus(t('statusCopyFailed'));
    }
  }

  return (
    <section id="rfq" className="border-t border-line py-[72px] md:py-24">
      <div className="mx-auto grid w-[min(1260px,92%)] gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-[78px]">
        <div>
          <Eyebrow>{t('eyebrow')}</Eyebrow>
          <h2 className="mt-3 font-sora text-[clamp(32px,4.2vw,54px)] font-bold leading-[1.04] tracking-tightest">
            {t('title')}
          </h2>
          <p className="mt-5 max-w-[570px] text-[17px] leading-[1.7] text-muted md:text-[18px]">{t('lede')}</p>
          <address className="mt-8 grid gap-1.5 border-l-2 border-gold p-5 not-italic text-muted">
            <strong className="text-paper">{t('contactName')}</strong>
            <a href={`mailto:${t('email')}`} className="text-gold-light hover:text-paper">
              {t('email')}
            </a>
            <span>{t('location')}</span>
          </address>
          <p className="mt-5 text-[13px] leading-[1.6] text-muted">{t('confidential')}</p>
        </div>

        <form
          ref={formRef}
          onSubmit={onSubmit}
          className="grid gap-4 rounded-lg border border-line bg-card-bottom p-6 sm:grid-cols-2 md:p-8"
        >
          <div className="grid gap-2">
            <label htmlFor="rfq-name" className={labelClass}>{t('name')}</label>
            <input id="rfq-name" name="name" required autoComplete="name" className={fieldClass} />
          </div>
          <div className="grid gap-2">
            <label htmlFor="rfq-company" className={labelClass}>{t('company')}</label>
            <input id="rfq-company" name="company" autoComplete="organization" className={fieldClass} />
          </div>
          <div className="grid gap-2">
            <label htmlFor="rfq-email" className={labelClass}>{t('emailLabel')}</label>
            <input id="rfq-email" name="email" type="email" required autoComplete="email" className={fieldClass} />
          </div>
          <div className="grid gap-2">
            <label htmlFor="rfq-family" className={labelClass}>{t('family')}</label>
            <select
              id="rfq-family"
              name="family"
              value={family}
              onChange={(e) => setFamily(e.target.value)}
              className={fieldClass}
            >
              {families.map((f) => (
                <option key={f.key} value={f.key}>
                  {f.title}
                </option>
              ))}
            </select>
          </div>
          <div className="grid gap-2 sm:col-span-2">
            <label htmlFor="rfq-part" className={labelClass}>{t('part')}</label>
            <input id="rfq-part" name="part" placeholder={t('partPlaceholder')} className={fieldClass} />
          </div>
          <div className="grid gap-2 sm:col-span-2">
            <label htmlFor="rfq-message" className={labelClass}>{t('message')}</label>
            <textarea
              id="rfq-message"
              name="message"
              required
              placeholder={t('messagePlaceholder')}
              className={`${fieldClass} min-h-[130px] resize-y`}
            />
          </div>
          <div className="mt-1 flex flex-wrap gap-3 sm:col-span-2">
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded bg-gold px-5 py-[14px] text-[13px] font-bold text-[#101419] transition-colors hover:bg-gold-light"
            >
              {t('submit')} <span aria-hidden="true">→</span>
            </button>
            <button
              type="button"
              onClick={onCopy}
              className="inline-flex items-center justify-center rounded border border-line px-5 py-[14px] text-[13px] font-bold transition-colors hover:border-gold hover:text-gold-light"
            >
              {t('copy')}
            </button>
          </div>
          <p className="min-h-[18px] text-[12px] text-gold-light sm:col-span-2" aria-live="polite">
            {status}
          </p>
        </form>
      </div>
    </section>
  );
}
