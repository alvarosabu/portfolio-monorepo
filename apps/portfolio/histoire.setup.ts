import 'uno.css'
import '@unocss/reset/tailwind.css'

import AsUI from '@alvarosabu/ui'

export function setupVue3({ app }) {
  app.use(AsUI)
}
