import { resolve } from 'node:path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        single: resolve(__dirname, 'single.html'), // Example of a file in a subdirectory
      },
    },
  },
});