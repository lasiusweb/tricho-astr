# Copilot instructions for tricho-astr

Purpose: quick repo guide for Copilot sessions — build commands, high-level architecture, and repo-specific conventions.

---

## Build, test, and lint commands
- Install deps: `npm install`
- Run dev server: `npm run dev` (localhost:4321)
- Build production: `npm run build` (outputs `dist/`)
- Preview production build: `npm run preview`
- Astro CLI passthrough: `npm run astro -- <args>`
- Node engine: `node >= 22.12.0` (see package.json `engines`)

Tests & linting
- No test runner or linter configured in this repo. There is no `npm test` script; do not invent one.
- Single-test guidance: there are no unit tests; add a test runner (Vitest/Jest) and then document how to run a single test (e.g., `npm run test -- -t "My test name"`). Record the exact command here when added.
- CI: `.github/workflows/ci.yml` runs `npm run build` on PRs/pushes. Accessibility CI (`.github/workflows/a11y.yml`) runs Lighthouse/axe/pa11y on PRs. Deployment handled by `deploy.yml` to Cloudflare Pages.

---

## High-level architecture (what matters to Copilot)
- Framework: Astro v6 — file-based routing under `src/pages/` (products, blog, legal, etc.).
- Layouts & composition: `src/layouts/Layout.astro` wraps pages and composes `Navigation`, `Footer`, `FloatingCTA`, and `WhatsAppBubble` components.
- Product data: canonical product content is the single source of truth: `src/data/products.json` (Content Collection) + `src/data/products.ts` accessor which maps collection entries to `{ ...data, slug: id }` and pins display order. Update product metadata here to change product pages.
- Pages: a single dynamic `src/pages/products/[slug].astro` renders product detail for the 4 products.
- Components & UI: `src/components/` contains small reusable pieces (Navigation, Footer, B2BToggle, BrochureButton, FloatingCTA). Prefer editing components rather than duplicating markup across pages.
- Styles: Tailwind v4 with a custom theme in `src/styles/global.css` (custom colors, `xs` breakpoint at 480px, utilities like `x-cloak`, `line-clamp-2`).
- Content Layer: Content is authored under `src/content/` (blog posts) and validated by Zod schema in `src/content.config.ts`.
- Forms: Contact form posts to Web3Forms API (`src/pages/contact.astro`). Keep `access_key` out of source control — set via environment/secret when needed.
- Assets: static assets in `public/` — product images in `public/images/products/`, brochure at `public/brochures/vandhara-catalog.pdf` (keep path or update BrochureButton when replacing file).
- Deployment: Cloudflare Pages via `npx wrangler pages deploy`; required secrets: `CLOUDFLARE_API_TOKEN`, `CLOUDFLARE_ACCOUNT_ID`.

---

## Key conventions (repo-specific patterns)
- Single source product model: Always edit `src/data/products.json` (Content layer) and let `src/data/products.ts` / `[slug].astro` handle mapping and ordering.
- B2B/B2C UI toggle: Uses Alpine.js (`x-data`, `x-show`, `x-cloak`) for farmer/dealer toggles in product pages and contact form. Modify Alpine state/markup in components rather than adding a parallel JS framework.
- Images & media: Add product images to `public/images/products/` and add `youtubeUrl` to a product entry to enable video embeds on product pages.
- Brochure file: Keep `public/brochures/vandhara-catalog.pdf` filename unless BrochureButton is updated.
- Accessibility checks: a11y pipeline runs on PRs — prefer semantic HTML and aria attributes already present in contact and nav components.
- No global state: Pages rely on component-scoped Alpine state and Content Layer data. Avoid adding global browser-side state unless necessary.
- Vite compatibility: `vite` is pinned to `^7.3.6` in `package.json`/overrides to avoid Vite 8 incompatibility with `@tailwindcss/vite`.

---

## Files & docs to consult (do not duplicate)
- `AGENTS.md` — canonical agent context and page list.
- `README.md` — Astro starter notes and quick commands.
- `src/data/products.*` and `src/pages/products/[slug].astro` — product model and renderer (single source of truth).
- `src/pages/contact.astro` — contact form implementation and Web3Forms usage.

---

## AI assistant config checks
- Existing Copilot instructions found (this file) and `AGENTS.md` present.
- No CLAUDE.md, .cursorrules, CONVENTIONS.md, AIDER_CONVENTIONS.md, .windsurfrules, or .clinerules were detected.
- `.opencode/` exists with project notes; consult if agent-specific policies are added there.

---

## When editing
- Update product metadata in the Content Layer (`src/data/products.json`) and confirm order in `src/data/products.ts`.
- For UI changes, edit the specific component under `src/components/` and validate with `npm run dev`.
- For the contact form, rotate or inject `access_key` via environment/CI secrets; never commit real API keys.
- If adding tests or linters, add scripts to `package.json` and record the single-test invocation here.

---

If this file should be tuned (common PR tasks, examples of small edits, or quick grep patterns Copilot should run before editing), say what to add and the file will be updated.

---

## MCP servers (Playwright & Lighthouse)
- Recommended: configure a Playwright MCP server for end-to-end browser testing and a Lighthouse/LHCI server for local a11y/perf checks (CI already runs site-level a11y on PRs).
- Minimal local setup steps to add (examples to commit when approved):
  - npm scripts:
    - "test:e2e": "playwright test"
    - "a11y:lhci": "lhci autorun"
  - Example Playwright config (playwright.config.ts) pointing baseURL to http://localhost:4321 and a simple test in tests/playwright/home.spec.ts that opens `/` and checks title.
- After adding files, run `npm install -D @playwright/test @lhci/cli` and validate with `npm run dev` + `npm run test:e2e`.

Ask to add the Playwright/LHCI config files and a starter E2E test to the repo (yes/no).
