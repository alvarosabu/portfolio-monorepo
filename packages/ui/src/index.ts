import { App } from 'vue'
import 'uno.css'

// normalize.css
import '@unocss/reset/tailwind.css'

import { ASWebFontsOptions } from './styles/fonts'
import { ASIconsOptions } from './styles/icons'
import { ASTheme } from './styles/as-theme'
import { ASRules } from './styles/rules'
import { ASShortcuts } from './styles/shortcuts'
import { ASTypographyOptions } from './styles/typography'
import './styles/base.css'

export interface AsUIPlugin {
  [key: string]: any
}

const modules = import.meta.glob('./components/**/!(*.spec|*.test|*.story).vue', {
  eager: true,
})
const components = Object.entries(modules)

export { default as AsIcon } from './components/as-icon/AsIcon.vue'
export { default as AsButton } from './components/as-button/AsButton.vue'
export { default as AsImg } from './components/as-img/AsImg.vue'
export { default as AsCodeBlock } from './components/as-codeblock/AsCodeBlock.vue'

const plugin: AsUIPlugin = {
  unoconfig: {
    theme: ASTheme,
    fonts: ASWebFontsOptions,
    icons: ASIconsOptions,
    shortcuts: ASShortcuts,
    typhography: ASTypographyOptions,
    rules: ASRules,
  },
  install(app: App, options: any) {
    for (const [key, value] of components) {
      const componentName = key.replace(/^.*[\\/]/, '').replace(/\.vue$/, '')

      if (typeof options === 'undefined') {
        app.component(componentName, (value as any).default)
      } else {
        if (!(options instanceof Array)) {
          throw new TypeError('options must be an array')
        }
        if (options.includes(componentName)) {
          app.component(componentName, (value as any).default)
        }
      }
    }
  },
}

export default plugin
