import { defaultLocale } from '@/i18n';

// On Cloudflare Pages, public/_redirects answers "/" with a 302 first.
// This static page is the fallback (local preview, other hosts): a plain HTML redirect, no JS needed.
export default function RootPage() {
  const target = `/${defaultLocale}`;

  return (
    <html lang={defaultLocale}>
      <head>
        <meta httpEquiv="refresh" content={`0; url=${target}`} />
        <link rel="canonical" href={`https://rilkesystems.com${target}`} />
        <title>RILKE Fluid Systems</title>
      </head>
      <body style={{ background: '#07131f', color: '#f7f8fa', fontFamily: 'sans-serif' }}>
        <a href={target} style={{ color: '#efb35d' }}>
          RILKE Fluid Systems →
        </a>
      </body>
    </html>
  );
}
