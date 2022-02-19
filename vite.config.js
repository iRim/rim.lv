import path from 'path'
import {
  defineConfig
} from 'vite'
import vue from '@vitejs/plugin-vue'
import copy from 'rollup-plugin-copy'

const PATHS = {
  src: path.resolve(__dirname, './src'),
  output: path.resolve(__dirname, './public_html'),
  static: path.resolve(__dirname, './src/static'),
}

// https://vitejs.dev/config/
export default defineConfig({
  root: PATHS.static, // where is index.html

  server: {
    port: 80
  },

  resolve: {
    alias: {
      '@': PATHS.src
    },
  },

  plugins: [
    vue(),
    copy({
      targets: [{
        src: 'src/static/.htaccess',
        dest: 'public_html'
      }],
    })
  ],

  build: {
    emptyOutDir: true,
    outDir: PATHS.output,
  },

})