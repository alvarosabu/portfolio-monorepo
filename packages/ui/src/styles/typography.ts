import { TypographyOptions } from '@unocss/preset-typography'
import { ASTheme } from './as-theme'

const headlineStyles = {
  'font-family': 'Gilroy',
}
export const ASTypographyOptions: TypographyOptions = {
  cssExtend: {
    h1: headlineStyles,
    h2: headlineStyles,
    h3: headlineStyles,
    p: {
      'font-family': 'Nunito',
      'font-size': '1.125rem',
    },
    code: {
      'font-family': 'Fira Code',
    },
    a: {
      color: ASTheme?.colors?.secondary[500],
      'font-weight': 'bold',
      'text-decoration': 'none',
      transition: 'color 400ms ease-in-out',
    },
    'a:hover': {
      color: ASTheme?.colors?.secondary[600],
      transition: 'color 400ms ease-in-out',
    },
  },
}

export default ASTypographyOptions
