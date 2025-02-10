import { defineConfig } from 'astro/config';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  vite: {
    resolve: {
      alias: {
        '~': path.resolve(__dirname, './src'),
        // Map "auth:config" to the auth config file
        'auth:config': path.resolve(__dirname, './src/config/auth.config.ts'),
      },
    },
  },
});
