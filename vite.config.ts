import { defineConfig } from 'vite';
import { nitro } from 'nitro/vite';
import { solidStart } from '@solidjs/start/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    solidStart(),
    tailwindcss(),
    nitro({
      // Vercel serves the prerendered files as plain static assets,
      // so no serverless function runs for a visitor.
      preset: 'static',
      prerender: {
        routes: ['/', '/404'],
        crawlLinks: true,
      },
      hooks: {
        // Nitro drops every route that doesn't answer 200. Vercel needs the
        // not-found page as /404.html, so keep that one response.
        'prerender:generate'(route) {
          if (route.route === '/404' && route.error?.status === 404) {
            route.error = undefined;
            route.fileName = '/404.html';
          }
        },
      },
    }),
  ],
});
