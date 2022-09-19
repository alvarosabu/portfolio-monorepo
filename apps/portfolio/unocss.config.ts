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
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
})
