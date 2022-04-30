import { btnShortcuts, btnSafelist } from '/@/components/as-button/const'
import {
  presetAttributify,
  presetUno,
  presetIcons,
  presetWebFonts,
} from 'unocss'

export type UnoConfig = {
  presets?: Array<any>
  rules?: Array<any>
  shortcuts?: Array<any>
}

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
}

export const ASThemeRules = [
  [
    /^text-(.*)$/,
    ([, c], { theme }) => {
      if (theme.colors[c]) return { color: theme.colors[c] }
    },
  ],
]

export const ASUnoConfig = {
  theme: ASTheme,
  shortcuts: [...btnShortcuts],
  safelist: [...btnSafelist],
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
  ],
}

export default ASUnoConfig
