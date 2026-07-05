# PetPal Hub

Marketing website for the PetPal Chrome extension — built with Next.js 14 (App Router), TypeScript, Tailwind CSS, and Framer Motion. Exports as a fully static site, ready for Cloudflare Pages.

## Stack

- **Next.js 14** — static export (`output: "export"`), no server required
- **TypeScript** + **Tailwind CSS**
- **Framer Motion** for scroll reveals, hover states, and the hero's paw-orbit animation
- **next-themes** for light/dark mode
- **lucide-react** for icons
- Self-hosted fonts via `@fontsource` (Space Grotesk + Inter) — no external font requests, no Google Fonts dependency
- SEO: metadata, Open Graph, Twitter cards, JSON-LD structured data, `robots.txt`, `sitemap.xml`

## Project structure

```
petpalhub/
├── app/
│   ├── layout.tsx        # Root layout, fonts, SEO metadata, JSON-LD
│   ├── page.tsx          # Assembles all homepage sections
│   └── globals.css       # Tailwind layers, design tokens, paw-trail signature
├── components/           # One component per homepage section
├── lib/data.ts           # All copy/content: features, pricing, FAQ, testimonials
├── public/               # favicon, robots.txt, sitemap.xml, Cloudflare _headers
├── next.config.mjs       # output: "export" for static hosting
└── tailwind.config.ts    # Color palette, fonts, animations
```

All page copy lives in `lib/data.ts` — edit that file to change feature descriptions, pricing, FAQ, or testimonials without touching component code.

## Local development

Requires Node.js 18.17+ (Node 20 LTS recommended).

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

## Building for production

```bash
npm run build
```

This generates a fully static site in the `out/` folder — plain HTML/CSS/JS, no Node server needed at runtime.

## Deploying to GitHub

1. Create a new repository on GitHub (e.g. `petpalhub`), without a README/license (to avoid merge conflicts).
2. From this project folder:

```bash
git init
git add .
git commit -m "Initial commit: PetPal marketing site"
git branch -M main
git remote add origin https://github.com/<your-username>/petpalhub.git
git push -u origin main
```

## Deploying to Cloudflare Pages

### Option A — Connect the GitHub repo (recommended)

1. In the Cloudflare dashboard: **Workers & Pages → Create → Pages → Connect to Git**.
2. Select the `petpalhub` repository.
3. Build settings:
   - **Framework preset:** Next.js (Static HTML Export)
   - **Build command:** `npm run build`
   - **Build output directory:** `out`
   - **Node version:** set environment variable `NODE_VERSION` to `20`
4. Click **Save and Deploy**. Cloudflare will build and deploy automatically on every push to `main`.

### Option B — Direct upload via Wrangler CLI

```bash
npm install -g wrangler
npm run build
wrangler pages deploy out --project-name=petpalhub
```

### Custom domain

Once deployed, go to your Pages project → **Custom domains** → add your domain (e.g. `petpalhub.com`) and follow the DNS instructions (Cloudflare will auto-configure this if the domain's nameservers already point to Cloudflare).

> Note: the site's metadata currently uses `https://petpalhub.com` as the canonical URL (in `app/layout.tsx`). Update `siteUrl` there, plus `public/robots.txt` and `public/sitemap.xml`, if you use a different domain.

## Customizing

- **Colors / fonts / animation tokens:** `tailwind.config.ts`
- **Copy (features, pricing, FAQ, testimonials, stats):** `lib/data.ts`
- **Logo mark / favicon:** `public/favicon.svg`
- **Install CTA link:** update the `href="#download"` anchors once your Chrome Web Store listing is live — search for `href="#"` in `components/Download.tsx` and point the Chrome tile at your store URL.
- **Real product photography:** the merchandise and extension-showcase sections currently use placeholder blocks/illustrated mockups rather than stock photos, in keeping with a premium, non-generic look. Swap in real photos of pets/products by adding images to `public/` and using standard `<img>` tags (image optimization is disabled for static export, so any image format works as-is).

## Notes on the static export

Because this site uses `output: "export"`, there is no Next.js server, no API routes, and no image optimization at runtime — everything is pre-rendered HTML/CSS/JS. This is intentional: it deploys for free on Cloudflare Pages and loads fast with no cold starts. If you later need server features (auth, dynamic API routes, on-demand image optimization), remove `output: "export"` from `next.config.mjs` and deploy to Cloudflare Pages using the `@cloudflare/next-on-pages` adapter instead.
