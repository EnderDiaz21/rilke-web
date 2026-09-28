import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export for Cloudflare Pages: `next build` writes the site to ./out
  output: 'export',
  images: {
    unoptimized: true
  }
};

export default withNextIntl(nextConfig);
