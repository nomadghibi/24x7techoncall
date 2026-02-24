import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { visualizer } from 'rollup-plugin-visualizer'
import viteCompression from 'vite-plugin-compression'

const isAnalyze = globalThis.process?.env?.ANALYZE === 'true'

const asyncStylesHtmlPlugin = {
  name: 'async-styles-html',
  generateBundle(_options, bundle) {
    for (const chunk of Object.values(bundle)) {
      if (chunk.type !== 'asset') continue
      if (!chunk.fileName.endsWith('.html')) continue
      if (typeof chunk.source !== 'string') continue

      chunk.source = chunk.source.replace(
        /<link rel="stylesheet"([^>]*href="\/assets\/[^"]+\.css"[^>]*)>/g,
        (_match, attrs) =>
          `<link rel="preload" as="style"${attrs} onload="this.onload=null;this.rel='stylesheet'">` +
          `<noscript><link rel="stylesheet"${attrs}></noscript>`,
      )
    }
  },
}

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
      plugins: [asyncStylesHtmlPlugin],
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
