import AsUI from '@alvarosabu/ui/'
import {
  defineConfig,
  presetUno,
  presetAttributify,
  presetIcons,
  presetWebFonts,
  presetTypography,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  theme: AsUI.unoconfig.theme,
  shortcuts: AsUI.unoconfig.shortcuts,
  rules: AsUI.unoconfig.rules,
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons(),
    presetWebFonts(AsUI.unoconfig.fonts),
    presetTypography(AsUI.unoconfig.typography),
    /*  presetTypography({
      cssExtend: {
        p: {
          'font-family': 'Nunito',
          'font-size': '1.125rem',
        },
        code: {
          'font-family': 'Fira Code',
          'font-size': '0.875rem',
          color: 'var(--color-primary-500) !important',
        },
      },
    }), */
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
})
