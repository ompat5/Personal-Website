// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Canonical origin — required for sitemap, canonical tags, and absolute OG URLs.
  site: 'https://omrpatel.ca',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
