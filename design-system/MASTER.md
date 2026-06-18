# Vandhara Agrotech — Design System (MASTER)

Version: 1.0.0
Generated: 2026-06-18
Scope: Global design tokens, patterns and implementation notes for the Vandhara Agrotech website (B2B/B2C agriculture / fertilizer brand). Place page-specific overrides in design-system/pages/*.md.

---

## Core Principles
- Brand: Earthy, trustworthy, product-first. Prioritize clarity for farmers/dealers and procurement teams.
- Accessibility-first: WCAG AA baseline (4.5:1 contrast for body text), keyboard and screen-reader friendly.
- Performance-minded: Lazy-load media, use WebP/AVIF, reserve image dimensions to avoid CLS.
- Mobile-first responsive design with clear B2B/B2C states.

## Color Palette (tokens)
- Primary: brand-green: #166534
- Primary-Accent: brand-green-light: #22C55E
- Accent / CTA: brand-gold: #D97706
- Neutral warm background: neutral-warm: #FAFAF5
- Surface / Card: surface: #FFFFFF
- Muted text: text-muted: #6B7280 (use only where contrast still meets guidelines)
- Error: error: #DC2626
- Success: success: #059669

Implementation: Map to Tailwind tokens in src/styles/global.css as semantic tokens (--color-primary, --color-cta, --color-bg, etc.). Provide dark-mode variants.

## Typography
- Headings: Poppins (or system alternative) — weights: 600/700 for H1–H3
- Body: Inter (or system sans) — regular 400, line-height 1.5
- Scales: 32 / 24 / 20 / 18 / 16 / 14 for H1 → body → captions
- Base: 16px on mobile, responsive upscaling on larger screens
- Implementation: preload critical font variants only; use font-display: swap

## Spacing & Layout
- Spacing scale: 4 / 8 / 12 / 16 / 24 / 32 / 40 / 64 (use multiples of 4 for rhythm)
- Container widths: mobile full-width, tablet max-w-3xl, desktop max-w-6xl
- Breakpoints (mobile-first): xs:480, sm:640, md:768, lg:1024, xl:1280

## Components & Patterns
- Navigation: Accessible header with clear product entry, mega menu for Products (desktop) and accordion on mobile. Always include search + contact CTA.
- Primary CTA: Filled button using brand-green (#166534). Secondary CTA: outline or brand-gold accent.
- B2B/B2C Toggle: Visible segmented control (Alpine-managed in current codebase). Persist selection across product pages and contact form. Provide explicit labels and aria-pressed states.
- Product Gallery: Lazy-loaded responsive images, lightbox with keyboard navigation, YouTube embed responsive (use max-width container and aspect-ratio). Place images in public/images/products/ and set youtubeUrl in src/data/products.ts to enable embed.
- Brochure Button: Link to public/brochures/vandhara-catalog.pdf; ensure download attribute and visible file size hint.
- Forms: Visible labels, inline validation on blur, aria-live for error summary, farmer/dealer variants with appropriate fields.
- Floating CTA & WhatsApp Bubble: Keep outside main flow but reachable; ensure they do not obscure actionable content; provide dismiss option.

## Accessibility Requirements
- Contrast: 4.5:1 for normal text; 3:1 for large text. Verify all color pairs.
- Alt text: All meaningful images must provide alt text in product data.
- Focus states: Visible focus ring (2–4px) for interactive elements.
- Touch targets: Minimum 44×44px hit area; use hitSlop for small icons.
- Reduced motion: Respect prefers-reduced-motion; provide non-animated fallback for critical flows.
- Keyboard: Full keyboard nav for menus, galleries, and modals. Focus trap in modals.

## Performance & Media
- Images: Serve WebP/AVIF with fallback; include width/height or aspect-ratio to prevent CLS.
- Video: YouTube embeds should be lazy-loaded; use static poster images for initial load.
- Fonts: Preload only critical fonts; use font-display: swap.
- Scripts: Defer non-critical third-party scripts; audit for unnecessary additions.

## Motion & Interaction
- Micro-interactions: 150–250ms with ease-out for entry and ease-in for exit.
- Press feedback: Subtle scale (0.98) + opacity change on press for buttons.
- Avoid animating layout properties (width/height) — use transform + opacity only.

## Tokens & Tailwind mapping (suggested)
- --color-primary: #166534
- --color-primary-100: #ECFDF3 (light tint)
- --color-cta: #D97706
- --spacing-1: 4px
- --spacing-2: 8px

Map these in src/styles/global.css and use Tailwind custom properties for consistency.

## Page-Specific Notes
- Products pages read from src/data/products.ts — update data there to change product copy, images, or youtubeUrl.
- Contact form posts to Web3Forms; keep access_key secret and out of the repository.
- Footer social links are placeholders (#) — replace before launch.

## Anti-patterns to avoid
- Relying on color alone to convey status (e.g., dealer vs farmer)
- Using emoji as icons or mixing multiple icon families
- Hardcoding hex colors in component markup instead of using tokens
- Loading full-size images without lazy-loading or responsive srcset

## Implementation checklist (pre-deploy)
- [ ] Add Tailwind tokens and CSS custom properties in src/styles/global.css
- [ ] Ensure src/data/products.ts contains alt text for each product image
- [ ] Add dark-mode token mappings and verify contrast in both themes
- [ ] Verify contact form access_key is configured outside source control
- [ ] Test on small phone (375px), large phone, and tablet in landscape
- [ ] Run accessibility checks for keyboard nav, focus order, and aria labels

---

Notes: This MASTER file is the global source of truth. For page-specific deviations, create files under design-system/pages/, e.g., design-system/pages/products.md. For implementation details, reference the repo’s AGENTS.md and src/layouts/Layout.astro.
