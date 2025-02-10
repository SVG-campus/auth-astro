import { defineConfig } from 'astro/config';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  vite: {
    resolve: {
      alias: {
        '~': path.resolve(__dirname, './src'),
        // Alias "tailwindcss/nesting" to our empty stub file
        'tailwindcss/nesting': path.resolve(__dirname, 'src/empty.js'),
      },
    },
  },
});
