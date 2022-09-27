/// <reference types="vitest" />
import { defineConfig } from 'vite'
import Unocss from 'unocss/vite'
import SvgLoader from 'vite-svg-loader'
import banner from 'vite-plugin-banner'

import dts from 'vite-plugin-dts'
import { visualizer } from 'rollup-plugin-visualizer'
import analyze from 'rollup-plugin-analyzer'

import vue from '@vitejs/plugin-vue'

import { resolve } from 'pathe'

import pkg from './package.json'

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
  plugins: [
    vue(),
    dts({
      insertTypesEntry: true,
    }),
    Unocss(),
    SvgLoader(),
    banner({
      content: `/**\n * name: ${pkg.name}\n * version: v${
        pkg.version
      }\n * (c) ${new Date().getFullYear()}\n * description: ${pkg.description}\n * author: ${pkg.author}\n */`,
    }),
  ],
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
      plugins: [
        analyze(),
        visualizer({
          gzipSize: true,
          brotliSize: true,
          open: true,
        }),
      ],
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['vue', '@vueuse/shared', '@vueuse/core'],
      output: {
        exports: 'named',
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: 'Vue',
          '@vueuse/shared': 'VueUseShared',
          '@vueuse/core': 'VueUseCore',
        },
      },
    },
  },
})
