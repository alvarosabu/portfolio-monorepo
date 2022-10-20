import { plugin, defaultConfig } from '@formkit/vue'

export default defineNuxtPlugin(nuxtApp => {
  // Doing something with nuxtApp
  nuxtApp.vueApp.use(plugin, defaultConfig)
})
