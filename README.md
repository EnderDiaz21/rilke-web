# rilke-web — rilkesystems.com

RILKE Fluid Systems product site. RILKE is the product brand of Technoforme Inc.; the engineering site lives in the sibling folder `../technoforme-web`. The two are deployed independently.

Stack: Next.js 14 (App Router, static export) · next-intl (EN / FR / ES) · Tailwind CSS · framer-motion.

## Develop

```bash
npm install
npm run dev        # http://localhost:3000 → redirects to /en
npm run build      # static site in ./out
npm start          # preview ./out locally
```

## Deploy — Cloudflare Pages

| Setting | Value |
|---|---|
| Framework preset | None (or Next.js (Static HTML Export)) |
| Build command | `npm run build` |
| Build output directory | `out` |
| Environment variable | `NODE_VERSION` = `20` |

- `/` → `/en` is handled by `public/_redirects` (302). `app/page.tsx` is a meta-refresh fallback.
- There is no middleware or server code: everything is prerendered to `out/en.html`, `out/fr.html`, `out/es.html`.
- The RFQ form has no backend. It opens the visitor's mail app with a prefilled message to `sales@rilkesystems.com`.

## Where things live

| What | Where |
|---|---|
| All copy (per language) | `messages/en.json`, `fr.json`, `es.json` |
| Page section order | `app/[locale]/page.tsx` |
| Colors / fonts | `tailwind.config.ts`, `app/globals.css` |
| Product photos | `public/images/` (mapped by key in `components/productImages.ts`) |
| Original HTML draft | `design/rilke-draft.html` (reference only, not deployed) |

## Content rules

No client names, no part numbers, no pricing, no published specs until released. Always EN + FR + ES. RILKE is positioned as a manufacturer, never a distributor.
