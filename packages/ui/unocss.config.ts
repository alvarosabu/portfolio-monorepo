import { imgAspectRatiosSafelist } from './src/components/as-img/const'
import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'
import { ASTheme } from './src/styles/as-theme'

import { btnShortcuts, btnSafelist } from './src/components/as-button/const'
import { iconSafelist } from './src/components/as-icon/const'

export default defineConfig({
  theme: ASTheme,
  shortcuts: [...btnShortcuts],
  safelist: [...btnSafelist, ...iconSafelist, ...imgAspectRatiosSafelist],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      warn: true,
      extraProperties: {
        display: 'inline-block',
        'vertical-align': 'middle',
        // ...
      },
    }),
    presetTypography(),
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
