import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { VitePWA } from 'vite-plugin-pwa';

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        id: 'iApp',
        scope: '/',
        name: 'IsApp',
        short_name: 'IsApp',
        start_url: '/',
        display: 'standalone',
        background_color: '#07090e',
        theme_color: '#07090e',
        description: 'IsApp - Super Launcher & Web OS',
        icons: [
          {
            src: '/favicon.ico',
            sizes: '64x64 32x32 24x24 16x16',
            type: 'image/x-icon',
          },
          { src: '/pwa-192x192.png', type: 'image/png', sizes: '192x192' },
          { src: '/pwa-512x512.png', type: 'image/png', sizes: '512x512' },
        ],
      },
    }),
  ],
});
