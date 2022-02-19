import path from 'path'
import {
  defineConfig
} from 'vite'
import vue from '@vitejs/plugin-vue'
import copy from 'rollup-plugin-copy'

const PATH_INTERNAL = {
    src: 'src',
    output: 'public_html',
    static: 'src/static',
  },
  PATH = {
    src: path.resolve(__dirname, PATH_INTERNAL.src),
    output: path.resolve(__dirname, PATH_INTERNAL.output),
    static: path.resolve(__dirname, PATH_INTERNAL.static),
  }

// https://vitejs.dev/config/
export default defineConfig({
  root: PATH.static, // where is index.html

  server: {
    port: 80
  },

  resolve: {
    alias: {
      '@': PATH.src
    },
  },

  plugins: [
    vue(),
    copy({
      targets: [{
        src: [
          // `${PATH_INTERNAL.static}/index.html`,
          `${PATH_INTERNAL.static}/.htaccess`,
          // `${PATH_INTERNAL.static}/favicon.ico`,
          // `${PATH_INTERNAL.static}/logo.png`
        ],
        dest: PATH_INTERNAL.output
      }],
    })
  ],

  build: {
    emptyOutDir: true,
    outDir: PATH.output,
  },

})