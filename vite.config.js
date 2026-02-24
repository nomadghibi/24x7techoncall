import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { visualizer } from 'rollup-plugin-visualizer'
import viteCompression from 'vite-plugin-compression'

const isAnalyze = globalThis.process?.env?.ANALYZE === 'true'

export default defineConfig({
  plugins: [
    react(),
    viteCompression({
      algorithm: 'brotliCompress',
      threshold: 10240,
    }),
    isAnalyze &&
      visualizer({
        filename: './dist/bundle-analysis.html',
        open: false,
      }),
  ].filter(Boolean),
  build: {
    modulePreload: false,
    chunkSizeWarningLimit: 500,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes('node_modules')) return

          if (
            id.includes('/node_modules/react/') ||
            id.includes('/node_modules/react-dom/') ||
            id.includes('/node_modules/react-router')
          ) {
            return 'vendor-react'
          }
          if (id.includes('/node_modules/slick-carousel/') || id.includes('/node_modules/react-slick/')) {
            return 'vendor-slick'
          }
          if (id.includes('/node_modules/@fortawesome/')) {
            return 'vendor-fa'
          }
          if (id.includes('/node_modules/react-icons/')) {
            return 'vendor-react-icons'
          }
          if (id.includes('/node_modules/@mui/') || id.includes('/node_modules/@emotion/')) {
            return 'vendor-mui'
          }
          if (id.includes('/node_modules/@paypal/') || id.includes('/node_modules/@react-google-maps/')) {
            return 'vendor-integrations'
          }
          return
        },
      },
    },
  },
  esbuild: {
    drop: ['console', 'debugger'],
  },
})
