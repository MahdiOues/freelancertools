import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';

export default defineConfig({
  site: 'https://www.megalancer.online',
  output: 'static',
  adapter: vercel(),
});
