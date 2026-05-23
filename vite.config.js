import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    // Target modern browsers for smaller, faster bundles
    target: 'es2020',
    // Minify for production
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    // Chunk splitting for better caching
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
        },
        // Consistent hashed filenames for long-term caching
        assetFileNames: 'assets/[name]-[hash][extname]',
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
      },
    },
    // Generate source maps for debugging (disable for production if preferred)
    sourcemap: false,
    // Warn on large chunks
    chunkSizeWarningLimit: 600,
    // Asset inlining threshold (inline small assets)
    assetsInlineLimit: 4096,
  },
  // Optimise deps for faster dev startup
  optimizeDeps: {
    include: ['react', 'react-dom'],
  },
});
