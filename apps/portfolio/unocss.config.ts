import AsUI from '@alvarosabu/ui/'
import {
  defineConfig,
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
    presetTypography(AsUI.unoconfig.typhography),
    presetWebFonts(AsUI.unoconfig.fonts),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
})
