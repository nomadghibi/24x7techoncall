

// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import { visualizer } from 'rollup-plugin-visualizer'

// export default defineConfig({
//   plugins: [
//     react(),
//     visualizer({
//       filename: './dist/bundle-analysis.html', // Output file
//       open: true, // Automatically opens the file after build
//     }),
//   ],
// })


// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import { visualizer } from 'rollup-plugin-visualizer'
// import viteCompression from 'vite-plugin-compression'

// export default defineConfig({
//   plugins: [
//     react(),
//     visualizer({
//       filename: './dist/bundle-analysis.html',
//       open: true,
//     }),
//     viteCompression({
//       algorithm: 'brotliCompress', // or 'gzip' if preferred
//       threshold: 10240, // Compress files larger than 10KB
//     }),
//   ],
// })

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { visualizer } from 'rollup-plugin-visualizer'
import viteCompression from 'vite-plugin-compression'
import { createHtmlPlugin } from 'vite-plugin-html'

export default defineConfig({
  plugins: [
    react(),
    visualizer({
      filename: './dist/bundle-analysis.html',
      open: true,
    }),
    viteCompression({
      algorithm: 'brotliCompress', // or 'gzip'
      threshold: 10240, // Compress files larger than 10KB
    }),
    createHtmlPlugin({
      inject: {
        injectData: {
          preload: [
            '/src/main.js', // Add your critical entry points
          ],
        },
      },
    }),
  ],
  build: {
    chunkSizeWarningLimit: 500, // Optional: Increase chunk size warning
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor';
          }
          if (id.includes('components')) {
            return 'components';
          }
        },
      },
    },
  },
  esbuild: {
    drop: ['console', 'debugger'], // Removes unnecessary logs from production
  },
})
