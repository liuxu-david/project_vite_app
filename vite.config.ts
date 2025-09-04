import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import pxtorem from 'postcss-pxtorem'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  css: {
    postcss:{
      plugins: [
        pxtorem({
          rootValue: 75,
          propList: ['*'],
          unitPrecision: 5,
          minPixelValue: 2,
          exclude: /node_modules/i,
        }),
      ],
    }
  },
})
