import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173
  },
  resolve: {
    alias: {
      '@components': '/src/components',
      '@hooks': '/src/hooks',
      '@services': '/src/services',
      '@utils': '/src/utils',
      '@assets': '/src/assets',
      '@pages': '/src/pages'
    }
  }
});
