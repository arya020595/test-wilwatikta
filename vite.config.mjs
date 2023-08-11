import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { svelte } from '@sveltejs/vite-plugin-svelte'
import path from 'path';

export default defineConfig({
  plugins: [
    react(),
    svelte({
      /* Svelte plugin options */
    }),
  ],
  rollupOptions: {
    input: {
      'react-app': path.resolve(__dirname, 'index.react.html'),
    }
  },
});