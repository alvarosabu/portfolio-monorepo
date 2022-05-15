import { App } from 'vue'
import 'uno.css'
import { ASTheme } from './styles/as-theme'

// normalize.css
import '@unocss/reset/tailwind.css'

const modules = import.meta.globEager(
  './components/**/!(*.spec|*.test|*.story).vue',
)
const components = Object.entries(modules)

export default {
  theme: ASTheme,
  install(app: App, options: any) {
    if (typeof options === 'undefined') {
      for (let [key, value] of components) {
        app.component(
          key.replace(/^.*[\\\/]/, '').replace('.vue', ''),
          value.default,
        )
      }
    } else {
      if (!(options instanceof Array)) {
        throw new TypeError('options must be an array')
      }
      for (let [key, value] of components) {
        const componentName = key.replace(/^.*[\\\/]/, '').replace('.vue', '')
        // register only components specified in the options
        if (options.includes(componentName)) {
          app.component(componentName, value.default)
        }
      }
    }
  },
}
