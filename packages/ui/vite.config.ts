import { defineConfig } from 'vite'
import Unocss from 'unocss/vite'

import vue from '@vitejs/plugin-vue'

import { resolve } from 'pathe'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '/@': resolve(__dirname, './src'),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
  },
  plugins: [vue(), Unocss()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'AsUI',
      fileName: 'as-ui',
    },
    watch: {
      include: [resolve(__dirname, 'src')],
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['vue', 'focus-trap'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: 'Vue',
          'focus-trap': 'focusTrap',
        },
      },
    },
  },
})
