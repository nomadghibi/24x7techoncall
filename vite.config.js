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

          if (id.includes('/node_modules/react/') || id.includes('/node_modules/react-dom/')) {
            return 'vendor-react'
          }
          if (id.includes('/node_modules/react-router/') || id.includes('/node_modules/react-router-dom/')) {
            return 'vendor-router'
          }
          if (id.includes('/node_modules/@mui/') || id.includes('/node_modules/@emotion/')) {
            return 'vendor-mui'
          }
          if (id.includes('/node_modules/react-icons/')) {
            return 'vendor-icons'
          }
          if (id.includes('/node_modules/framer-motion/')) {
            return 'vendor-motion'
          }
          if (id.includes('/node_modules/slick-carousel/') || id.includes('/node_modules/react-slick/')) {
            return 'vendor-slick'
          }
          if (
            id.includes('/node_modules/@fortawesome/') ||
            id.includes('/node_modules/@paypal/') ||
            id.includes('/node_modules/emailjs-com/')
          ) {
            return 'vendor-integrations'
          }
          if (id.includes('/node_modules/workbox-')) {
            return 'vendor-workbox'
          }
          if (id.includes('/node_modules/lodash/')) {
            return 'vendor-lodash'
          }
          if (id.includes('/node_modules/axios/')) {
            return 'vendor-axios'
          }
          return 'vendor-misc'
        },
      },
    },
  },
  esbuild: {
    drop: ['console', 'debugger'],
  },
})
