import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: '127.0.0.1',
    port: 5373,
    strictPort: true,
    origin: 'http://127.0.0.1:5173',
    hmr: {
      protocol: 'ws',
      host: '127.0.0.1',
      port: 5373,
      clientPort: 5373,
      path: '/__vite_ws',
      timeout: 120000,
    },
  },
  preview: {
    host: '127.0.0.1',
    port: 4173,
    strictPort: true,
  },
});
