import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://example.github.io/site-ops-blog',
  base: '/site-ops-blog',
  trailingSlash: 'always',
  output: 'static',
});
