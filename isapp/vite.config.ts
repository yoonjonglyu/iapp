import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { VitePWA } from 'vite-plugin-pwa';

// https://vite.dev/config/
export default defineConfig({
  base: '/iapp/',
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        id: 'iApp',
        scope: '/iapp/',
        name: 'ISAapps',
        short_name: 'Iapp',
        start_url: '/iapp/',
        display: 'standalone',
        background_color: '#ffffff',
        description: 'A ISA apps.',
        icons: [
          {
            src: 'favicon.ico',
            sizes: '64x64 32x32 24x24 16x16',
            type: 'image/x-icon',
          },
          { src: 'pwa-192x192.png', type: 'image/png', sizes: '192x192' },
          { src: 'pwa-512x512.png', type: 'image/png', sizes: '512x512' },
        ],
      },
    }),
  ],
});
