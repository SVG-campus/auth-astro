import { defineConfig } from 'astro/config';
import path from 'path';

export default defineConfig({
  vite: {
    resolve: {
      alias: {
        '~': path.resolve('./src'),
        'astrowind:config': path.resolve('./src/config/astrowind.config.js'),
        'auth:config': path.resolve('./src/config/auth.config.ts'),
      },
    },
  },
});
