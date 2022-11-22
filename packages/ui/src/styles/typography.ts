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
      'font-size': '0.875rem',
      color: `${ASTheme?.colors?.primary[500]} !important`,
    },
    ':not(pre)>code': {
      background: '#e8e8e8 !important',
      padding: '0.25rem 0.5rem !important',
    },
    blockquote: {
      padding: '1rem',
    },
    'code::after': {
      content: 'none',
    },
    'code::before': {
      content: 'none',
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
