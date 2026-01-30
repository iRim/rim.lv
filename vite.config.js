import { fileURLToPath, URL } from 'node:url'
import path from 'node:path'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import { viteStaticCopy } from 'vite-plugin-static-copy'

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
  },

  plugins: [
    viteStaticCopy({
      targets: [
        {
          src: '.htaccess',
          dest: '',
        },
      ],
    }),

    vue(),
    vueDevTools(),
  ],
})
