import { fileURLToPath, URL } from 'node:url'
import path from 'node:path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const ASSET_URL = process.env.ASSET_URL || ''
const PUBLIC_PATH = fileURLToPath(new URL('./public', import.meta.url))
const SRC_PATH = fileURLToPath(new URL('./src', import.meta.url))

export default defineConfig({
  root: path.join(SRC_PATH, 'static'),

  resolve: {
    alias: {
      '@': SRC_PATH,
      '@img': path.join(SRC_PATH, 'img'),
      '@public': PUBLIC_PATH,
    },
  },

  build: {
    outDir: PUBLIC_PATH,
    emptyOutDir: true,
    manifest: true,
    target: 'esnext',
  },

  plugins: [vue()],

  define: {
    __BUILD_DATE__: JSON.stringify(new Date().toUTCString()),
  },
})
