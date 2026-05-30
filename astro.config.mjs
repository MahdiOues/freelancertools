import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';

export default defineConfig({
  site: 'https://megalancer.online',
  output: 'static',
  adapter: vercel(),
});
