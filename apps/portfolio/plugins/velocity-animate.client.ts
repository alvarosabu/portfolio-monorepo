import Velocity from 'velocity-animate'

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.provide('velocity', Velocity)
})
