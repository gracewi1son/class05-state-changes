import { fileURLToPath, URL } from 'node:url'
import path from 'node:path'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  server: {
    host: true,
    strictPort: true,
    cors: true,
    browser: false,
  },
  base: process.env.DEPLOY === "github" ? `/${process.env.RepositoryName || path.basename(fileURLToPath(new URL('.', import.meta.url)))}/` : './',
})
