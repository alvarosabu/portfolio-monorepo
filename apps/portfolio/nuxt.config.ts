import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  ssr: false,
  runtimeConfig: {
    public: {
      apiURL: process.env.STORYBLOK_API_URL,
      apiToken: process.env.STORYBLOK_API_TOKEN,
      /*      youtubeKey: process.env.YOUTUBE_API_KEY, */
    },
  },
  components: {
    global: true,
    dirs: ['~/components'],
  },
  /*   autoImports: {
    dirs: ['@storyblok/vue'],
  }, */
  css: ['@alvarosabu/ui/dist/style.css'],
  buildModules: ['@unocss/nuxt'],
  unocss: {
    // presets
    uno: true, // enabled `@unocss/preset-uno`
    icons: true, // enabled `@unocss/preset-icons`
    attributify: true, // enabled `@unocss/preset-attributify`,
    shortcuts: [],
    rules: [],
  },
})
