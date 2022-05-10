import { ASTheme } from '@alvarosabu/ui/unocss.config'
import { defineConfig, presetWebFonts } from 'unocss'

export default defineConfig({
  theme: ASTheme,
  presets: [
    presetWebFonts({
      provider: 'google', // default provider
      fonts: {
        // these will extend the default theme
        sans: ['Nunito', 'Nunito:400,700'],
        mono: ['Fira Code', 'Fira Mono:400,700'],
        display: ['Gilroy', 'Gilroy:400,700'],
      },
    }),
  ],
})
