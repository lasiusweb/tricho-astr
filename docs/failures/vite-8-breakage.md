# Vite 8 upgrade breaks @tailwindcss/vite build

## Summary

Bumping `vite` to `^8` (Rolldown-based) breaks the build because
`@tailwindcss/vite` is incompatible with Vite 8. The site fails to build
and cannot deploy to Cloudflare Pages.

## Root Cause

Vite 8 switched to Rolldown, which `@tailwindcss/vite` (v4) does not yet
support. `npm install`/`npm update` can silently resolve vite to 8.x via
transitive or direct dependency bumps.

## Prevention

`vite` is pinned to `^7.3.6` in both `dependencies` and `overrides` in
`package.json`. The `overrides` block forces every resolution of `vite`
(including transitive) to the 7.x line, so a bump to v8 cannot be installed.

Do not remove the `overrides` block. Do not raise the vite range to `^8`
until `@tailwindcss/vite` officially supports Vite 8 (check release notes
first).

## Evidence

- `package.json` `dependencies.vite` and `dependencies.overrides.vite`
- `AGENTS.md` → "Cloudflare Pages deployment" note on the vite pin
