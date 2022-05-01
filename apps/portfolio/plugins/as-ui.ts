import AsUI from '@alvarosabu/ui/'

export default defineNuxtPlugin(nuxtApp => {
  // Doing something with nuxtApp
  nuxtApp.vueApp.use(AsUI)
  console.log('nuxtApp', nuxtApp)
})
