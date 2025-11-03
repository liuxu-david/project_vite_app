import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import pxtorem from 'postcss-pxtorem'

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  plugins: [vue()],
  css: {
    postcss:{
      plugins: [
        pxtorem({
          rootValue: 75,//根据设计稿进行配置，如果设计稿宽度为750则配置75
          propList: ['*'],
          unitPrecision: 5,
          minPixelValue: 2,
          exclude: /node_modules/i,
        }),
      ],
    }
  },
})
