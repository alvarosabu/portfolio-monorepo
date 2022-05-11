import { ASTheme } from '@alvarosabu/ui/unocss.config'
import {
  defineConfig,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  theme: ASTheme,
  rules: [
    [
      'text-bg-md',
      {
        'background-image':
          'linear-gradient(to top, #99ffd580 54%, transparent 54%, transparent 100%)',
        width: 'fit-content',
        transition: 'all 400ms ease-in-out',
      },
    ],
    [
      'text-bg-sm',
      {
        'background-image':
          'linear-gradient(to top, #99ffd580 30%, transparent 30%, transparent 100%)',
        width: 'fit-content',
        transition: 'all 400ms ease-in-out',
      },
    ],
  ],
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
  transformers: [transformerDirectives(), transformerVariantGroup()],
})
