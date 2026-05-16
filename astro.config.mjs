import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';

export default defineConfig({
  site: 'https://freelancertools.io',
  output: 'static',
  adapter: vercel(),
});
