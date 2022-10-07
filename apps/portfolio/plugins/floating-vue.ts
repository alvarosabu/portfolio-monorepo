import FloatingVue from 'floating-vue'
import 'floating-vue/dist/style.css'

export default defineNuxtPlugin(nuxtApp => {
  // Doing something with nuxtApp
  nuxtApp.vueApp.use(FloatingVue)
})
