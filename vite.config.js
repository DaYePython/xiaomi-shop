import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import { viteMockServe } from 'vite-plugin-mock'

import { resolve } from 'path'

// todo * proMock * should be configured in .env
let prodMock = true

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // viteMockServe({
    //   mockPath: 'mock',
    //   localEnabled: command === 'serve',
    //   prodEnabled: command !== 'serve' && prodMock,
    //   injectCode: `
    //     import { setupProdMockServer } from './mockProdServer';
    //     setupProdMockServer();
    //   `,
    // }),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "@style/tools/_sassMagic.scss";
          @import "@style/settings/var.scss";
        `,
      },
    },
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '@views': resolve(__dirname, './src/views'),
      '@style': resolve(__dirname, './src/style'),
      '@comp': resolve(__dirname, './src/components'),
      '@utils': resolve(__dirname, './src/utils'),
    },
  },
  optimizeDeps: {
    include: ['vue', 'vuex', 'vue-router', 'axios'],
  },
})
