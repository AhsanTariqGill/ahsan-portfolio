import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Change `site` to your real domain before deploying — canonical URLs,
// Open Graph URLs and the sitemap are all generated from it.
export default defineConfig({
  site: 'https://ahsantariq.dev',
  trailingSlash: 'never',
  build: {
    inlineStylesheets: 'auto',
  },
  integrations: [sitemap()],
});
