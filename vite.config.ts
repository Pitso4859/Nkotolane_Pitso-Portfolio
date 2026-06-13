// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    minify: 'terser',
    sourcemap: false,
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        // Provide a function to satisfy Rollup's ManualChunksFunction type
        manualChunks(id) {
          if (!id) return null;
          if (id.includes('/node_modules/react') || id.includes('/node_modules/react-dom')) {
            return 'vendor-react';
          }
          if (id.includes('/node_modules/framer-motion')) {
            return 'vendor-motion';
          }
          if (id.includes('/node_modules/react-icons')) {
            return 'vendor-icons';
          }
          return null;
        },
      },
    },
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'framer-motion', 'react-icons'],
  },
});
