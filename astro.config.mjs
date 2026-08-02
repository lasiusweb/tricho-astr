// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://vandharaagrotech.com',
  output: 'static',
  // Leave Vite plugins minimal — using Tailwind via CSS build pipeline avoids Vite rollup input issues
  vite: {},

  integrations: [sitemap()]
});