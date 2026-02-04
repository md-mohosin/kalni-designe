import { resolve } from 'node:path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        single: resolve(__dirname, 'productDetails.html'),
        shopping: resolve(__dirname, 'shoppingCart.html'),
        billing: resolve(__dirname, 'billingDetails.html'),
        blogs: resolve(__dirname, 'blogs.html'),
        blogDetails: resolve(__dirname, 'blogDetails.html'),
      },
    },
  },
});