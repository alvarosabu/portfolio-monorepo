import { WebFontsOptions } from '@unocss/preset-web-fonts'

export const ASWebFontsOptions: WebFontsOptions = {
  provider: 'google', // default provider
  fonts: {
    // these will extend the default theme
    sans: ['Nunito', 'Nunito:400,700'],
    mono: ['Fira Code', 'Fira Mono:400,700'],
    display: ['Gilroy'],
  },
}

export default ASWebFontsOptions
