import { resolve } from 'node:path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        single: resolve(__dirname, 'productDetails.html'), // Example of a file in a subdirectory
      },
    },
  },
});