export const primary = {
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

export const secondary = {
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
    button: '4px 4px 1px 0px var(--un-shadow-color)',
  },
}
