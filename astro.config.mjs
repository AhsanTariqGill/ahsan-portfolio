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
  vite: {
    // A leading dot allows the domain and all of its subdomains, so a new
    // ngrok tunnel hostname keeps working after a restart. Dev/preview only;
    // these hosts are never used by the static build.
    server: {
      allowedHosts: ['.ngrok-free.dev', '.ngrok.app', '.ngrok.io'],
    },
    preview: {
      allowedHosts: ['.ngrok-free.dev', '.ngrok.app', '.ngrok.io'],
    },
  },
});
