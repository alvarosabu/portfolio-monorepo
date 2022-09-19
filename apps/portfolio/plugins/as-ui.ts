import AsUI from '@alvarosabu/ui'

export default defineNuxtPlugin(nuxtApp => {
  // Doing something with nuxtApp
  console.log('AsUI', AsUI)
  nuxtApp.vueApp.use(AsUI)
})
