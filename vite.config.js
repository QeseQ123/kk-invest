import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  root: '',        // katalog z index.html
  plugins: [react()],
  build: {
    outDir: '../dist' // folder wyjściowy na poziomie głównym
  },
});
