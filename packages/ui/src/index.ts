import { App } from 'vue'
import 'uno.css'
import './styles/base.css'

// normalize.css
import '@unocss/reset/tailwind.css'
import { ASWebFontsOptions } from './styles/fonts'
import { ASIconsOptions } from './styles/icons'
import { ASTheme } from './styles/as-theme'
import { ASRules } from './styles/rules'
import { ASShortcuts } from './styles/shortcuts'
import { ASTypographyOptions } from './styles/typography'

const modules = import.meta.glob('./components/**/!(*.spec|*.test|*.story).vue', {
  eager: true,
})
const components = Object.entries(modules)

export * as AsImg from './components/as-img/AsImg.vue'

export default {
  unoconfig: {
    theme: ASTheme,
    fonts: ASWebFontsOptions,
    icons: ASIconsOptions,
    shortcuts: ASShortcuts,
    typhography: ASTypographyOptions,
    rules: ASRules,
  },
  install(app: App, options: any) {
    if (typeof options === 'undefined') {
      for (const [key, value] of components) {
        app.component(key.replace(/^.*[\\/]/, '').replace('.vue', ''), (value as any).default)
      }
    } else {
      if (!(options instanceof Array)) {
        throw new TypeError('options must be an array')
      }
      for (const [key, value] of components) {
        const componentName = key.replace(/^.*[\\/]/, '').replace('.vue', '')
        // register only components specified in the options
        if (options.includes(componentName)) {
          app.component(componentName, (value as any).default)
        }
      }
    }
  },
}
