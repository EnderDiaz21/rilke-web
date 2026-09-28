import { useTranslations } from 'next-intl';

type Item = { title: string; sub: string };

const icons = [
  // ISO 9001 — certified badge
  <path key="iso" d="M12 3l2.4 1.8 3-.2.9 2.9 2.5 1.7-1 2.8 1 2.8-2.5 1.7-.9 2.9-3-.2L12 21l-2.4-1.8-3 .2-.9-2.9-2.5-1.7 1-2.8-1-2.8 2.5-1.7.9-2.9 3 .2L12 3zm-3 9l2 2 4-4" />,
  // FMVSS — shield
  <path key="fmvss" d="M12 3l7 3v5c0 4.5-3 8.2-7 10-4-1.8-7-5.5-7-10V6l7-3zm-3 9l2 2 4-4" />,
  // Made in Canada — maple leaf outline
  <path key="ca" d="M12 3l1.6 3.4 2.9-1-1 3.6 3.3 1.6-2.4 2 .7 3.2-3.3-.7L12 21l-1.8-5.9-3.3.7.7-3.2-2.4-2L8.5 9 7.5 5.4l2.9 1L12 3z" />,
  // Full cycle — loop arrows
  <path key="cycle" d="M20 12a8 8 0 01-14 5.3M4 12a8 8 0 0114-5.3M18 3v4h-4M6 21v-4h4" />
];

export default function Credentials() {
  const t = useTranslations('credentials');
  const items = t.raw('items') as Item[];

  return (
    <div className="border-b border-line bg-strip">
      <ul
        className="mx-auto grid w-[min(1260px,92%)] grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
        aria-label={t('label')}
      >
        {items.map((item, i) => (
          <li
            key={item.title}
            className="flex items-center gap-4 border-b border-line py-5 last:border-b-0 sm:px-5 sm:[&:nth-child(odd)]:border-r lg:border-b-0 lg:border-r lg:px-6 lg:py-7 lg:first:pl-0 lg:last:border-r-0"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-gold-dim text-gold-light">
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
            <span>
              <b className="block font-sora text-[13px] font-semibold uppercase tracking-[0.06em]">{item.title}</b>
              <small className="mt-0.5 block text-[12px] leading-[1.45] text-muted">{item.sub}</small>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
