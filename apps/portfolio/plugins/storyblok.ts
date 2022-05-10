import { StoryblokVue, apiPlugin } from '@storyblok/vue'
import { plugin } from '@marvr/storyblok-rich-text-vue-renderer'

export default defineNuxtPlugin(nuxtApp => {
  const config = useRuntimeConfig().public

  nuxtApp.vueApp.use(StoryblokVue, {
    accessToken: config.apiToken,
    use: [apiPlugin],
  })

  nuxtApp.vueApp.use(plugin({}))
})
