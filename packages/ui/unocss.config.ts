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

import { btnShortcuts, btnSafelist } from './src/components/as-button/const'
import { iconSafelist } from './src/components/as-icon/const'

const primary = {
  // oxford
  DEFAULT: '#3E5166',
  50: '#B7C4D3',
  100: '#A7B7C9',
  200: '#879DB6',
  300: '#6784A3',
  400: '#516A86',
  500: '#3E5166',
  600: '#2B3846',
  700: '#171F27',
  800: '#040507',
  900: '#000000',
}

const secondary = {
  // caribbean-green
  DEFAULT: '#34D399',
  50: '#F1FCF8',
  100: '#DCF7ED',
  200: '#B2EED8',
  300: '#88E5C3',
  400: '#5EDCAE',
  500: '#34D399',
  600: '#26AE7C',
  700: '#1D845F',
  800: '#145A41',
  900: '#0B3023',
}

export const ASTheme = {
  colors: {
    primary,
    secondary,
  },
  breakpoints: {
    xs: '320px',
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },
  boxShadow: {
    active: 'inset 4px 4px 2px 0 rgba(0, 0, 0, 0.08)',
  },
}

export default defineConfig({
  theme: ASTheme,
  shortcuts: [...btnShortcuts],
  safelist: [...btnSafelist, ...iconSafelist],
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
        sans: 'Nunito',
        mono: ['Fira Code', 'Fira Mono:400,700'],
        display: ['Gilroy', 'Gilroy:400,700'],
      },
    }),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
})
