/// <reference types="vitest" />
import { defineConfig } from 'vite'
import { resolve } from 'pathe'
import banner from 'vite-plugin-banner'
import dts from 'vite-plugin-dts'
import { bold, bgLightGreen } from 'kolorist'

import pkg from './package.json'

// eslint-disable-next-line no-console
console.log(`${bold(bgLightGreen(' AS - Utils 🔧 '))} v${pkg.version}`)

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
    dts({
      insertTypesEntry: true,
    }),
    banner({
      content: `/**\n * name: ${pkg.name}\n * version: v${
        pkg.version
      }\n * (c) ${new Date().getFullYear()}\n * description: ${pkg.description}\n * author: ${pkg.author}\n */`,
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'AsUtils',
      fileName: 'as-utils',
    },
  },
})
