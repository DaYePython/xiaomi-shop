import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import {resolve} from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/style/tools/_sassMagic.scss";'
      }
    }
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      'comp': resolve(__dirname, 'src', 'components'),
      'style': resolve(__dirname, 'src', 'style')

    }
  },
  optimizeDeps: {
    include: [
      'vue',
      'vuex',
      'vue-router',
      'axios'
    ],
  }
})
