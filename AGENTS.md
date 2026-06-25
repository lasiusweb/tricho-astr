# tricho-astr — Vandhara Agrotech

Astro 6.3.6 + Tailwind CSS v4 — Vandhara Agrotech website (organic fertilizer brand).

## Commands

| `npm run dev` | Dev server at `localhost:4321` |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Preview production build locally |
| `npm run astro` | Pass-through to Astro CLI |

## Pages (16 total, file-based routing)

| Route | Page |
|---|---|
| `/` | Home (hero, products, sustainability stats, CTA) |
| `/products` | Product overview + comparison table |
| `/products/soil-recharge` | Soil Recharge detail (B2B/B2C toggle) |
| `/products/root-guard` | Root Guard detail (B2B/B2C toggle) |
| `/products/agni` | Agni detail (B2B/B2C toggle) |
| `/products/vaayu` | Vaayu detail (B2B/B2C toggle) |
| `/about` | About Us + manufacturing process timeline |
| `/sustainability` | Sustainability pillars + circular economy |
| `/contact` | Contact form w/ Farmer/Dealer toggle (Web3Forms) |
| `/partner` | Partner/Dealer opportunities |
| `/blog` | Learning Center (blog listing) |
| `/blog/[...slug]` | Dynamic blog posts (2 placeholder articles) |
| `/testimonials` | Placeholder farmer testimonials |
| `/legal/privacy` | Privacy Policy |
| `/legal/terms` | Terms & Conditions |
| `/legal/refund` | Shipping & Refund Policy |

## Key components

- `Navigation.astro` — responsive nav with mobile hamburger (Alpine.js), "Products" mega menu on desktop, accordion on mobile
- `Footer.astro` — 4-column footer with social icons (WhatsApp/YouTube/Facebook/Instagram/LinkedIn), legal links
- `FloatingCTA.astro` — sticky "Get a Quote" button (bottom-right)
- `WhatsAppBubble.astro` — floating WhatsApp chat button (bottom-left), links to `wa.me/916359299124`
- `B2BToggle.astro` — Farmer/Dealer tab switcher (Alpine.js)
- `BrochureButton.astro` — download link for `public/brochures/vandhara-catalog.pdf`
- `ProductVariantGallery.astro` — Alpine.js pack size selector (5L/20L/50L) with placeholder images
- `YouTubeEmbed.astro` — responsive YouTube embed (placeholders until URLs provided)
- `Layout.astro` — shared head, nav, footer, floating CTA, WhatsApp bubble

## Product data

Product content (variants, images, YouTube URLs) centralized in `src/data/products.ts`. Set `youtubeUrl` and place images in `public/images/products/` to activate gallery and video sections. Product pages read from this data file.

## Tailwind v4 theme (`global.css`)

`@theme` custom colors: `brand-green` (#166534), `brand-green-light` (#22C55E), `brand-gold` (#92400e), `brand-gold-light` (#FDE68A), `neutral-warm` (#FAFAF5). Custom `xs` breakpoint at 480px. `x-cloak` and `line-clamp-2` utilities defined globally.

## Content & contact form

- B2B/B2C content toggle on every product page (Alpine.js `x-data`)
- "Get a Quote" form posts to **Web3Forms** API — set `access_key` in `src/pages/contact.astro`
- Form emails sent to `vandharaagrotech@gmail.com`
- Farmer fields: name, phone, email, product, crop, land area, current fertilizer
- Dealer fields: name, phone, email, product, shop name, GST, village, mandal, district, state, pincode

## Notable details

- **Node >=22.12.0** required.
- **`dist/`** (build output) and **`.astro/`** (generated types) are gitignored.
- `.astro/types.d.ts` auto-generated — re-run `astro build` / `astro dev` if type errors appear.
- `less`, `sass`, `stylus`, `lightningcss` in deps but not configured.
- `swup`, `@astrojs/partytown`, `accessible-astro-components` in deps but not wired up.
- **CI**: `.github/workflows/ci.yml` runs build on PRs and pushes to master. `.github/workflows/a11y.yml` runs accessibility checks (Lighthouse, axe, pa11y) on PRs (on `fix/a11y-color-tokens` branch, merge to master when ready).
- **No tests, linting, or formatting tooling** set up.
- **Brochure PDF**: `public/brochures/vandhara-catalog.pdf` — manually download from Google Drive (`README.md` in that folder has the link).
- **Social links**: placeholder `#` in Footer.astro — replace with real URLs before launch.
- **SEO**: JSON-LD structured data on product + about + partner pages. `@astrojs/sitemap` generates `sitemap-index.xml`.
- **GEO targets**: South Indian states (Karnataka, Tamil Nadu, Andhra, Telangana, Kerala) mentioned in contact sidebar and partner page.
- VS Code debugging: "Development server" launch config runs `./node_modules/.bin/astro dev`.
