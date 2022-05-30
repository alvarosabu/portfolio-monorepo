import {
  presetUno,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
  UserConfig,
} from 'unocss'

import { imgAspectRatiosSafelist } from '../components/as-img/const'
import { btnSafelist } from '../components/as-button/const'
import { iconSafelist } from '../components/as-icon/const'
import { ASShortcuts } from './shortcuts'
import { ASWebFontsOptions } from './fonts'
import { ASTheme } from './as-theme'
import { ASIconsOptions } from './icons'
import { ASRules } from './rules'
import { ASTypographyOptions } from './typography'

export const ASUnoConfig: UserConfig = {
  theme: ASTheme,
  shortcuts: ASShortcuts,
  rules: ASRules,
  safelist: [...btnSafelist, ...iconSafelist, ...imgAspectRatiosSafelist],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons(ASIconsOptions),
    presetTypography(ASTypographyOptions),
    presetWebFonts(ASWebFontsOptions),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
}

export default ASUnoConfig
