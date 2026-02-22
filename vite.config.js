import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { visualizer } from "rollup-plugin-visualizer" // 1. Added this import

export default defineConfig({
  plugins: [
    tailwindcss(),
    visualizer({               // 2. Moved inside the plugins array
      open: true, 
      filename: "bundle-analysis.html",
      gzipSize: true,
    }),
  ],
  test: { 
    environment: "jsdom",
    globals: true,
    setupFiles: "./src/tests/Setup.js",
  },
})