import { defineConfig } from 'vite'
import Unocss from 'unocss/vite'
import vue from '@vitejs/plugin-vue'
import {
  presetAttributify,
  presetUno,
  presetIcons,
  presetWebFonts,
} from 'unocss'
import { resolve } from 'pathe'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Unocss({
      /* options */
      presets: [
        presetUno(),
        presetIcons({
          /* options */
        }),
        presetAttributify({
          /* options */
        }),
        presetWebFonts({
          provider: 'google', // default provider
          fonts: {
            // these will extend the default theme
            sans: 'Nunito',
            mono: ['Fira Code', 'Fira Mono:400,700'],
            display: ['Gilroy', 'Gilroy:400,700'],
          },
        }),
        // ...other presets
      ],
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
