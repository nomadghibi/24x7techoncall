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
    chunkSizeWarningLimit: 500,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes('node_modules')) {
            if (id.includes('components')) return 'components'
            return
          }

          if (id.includes('/node_modules/slick-carousel/') || id.includes('/node_modules/react-slick/')) {
            return 'vendor-slick'
          }
          return 'vendor'
        },
      },
    },
  },
  esbuild: {
    drop: ['console', 'debugger'],
  },
})
