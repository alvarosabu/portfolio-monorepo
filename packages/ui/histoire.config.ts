// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference types="histoire" />

import { defineConfig } from 'histoire'
import { primary } from './src/styles/as-theme'
import 'uno.css'

// histoire.config.ts

export default defineConfig({
  theme: {
    title: '@alvarosabu/ui',
    logo: {
      light: '/light-banner.png',
      dark: '/dark-banner.png',
    },
    colors: {
      gray: {
        50: '#fafafa',
        100: '#f4f4f5',
        200: '#e4e4e7',
        300: '#d4d4d8',
        400: '#a1a1aa',
        500: '#71717a',
        600: '#52525b',
        700: '#3f3f46',
        750: '#323238',
        800: '#27272a',
        850: '#1f1f21',
        900: '#18181b',
        950: '#101012',
      },
      primary,
    },
  },
})
