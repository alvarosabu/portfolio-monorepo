import SvgLoader from 'vite-svg-loader'
import head from './config/head'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      apiURL: process.env.STORYBLOK_API_URL,
      apiToken: process.env.STORYBLOK_API_TOKEN,
      youtubeKey: process.env.YOUTUBE_API_KEY,
    },
  },
  app: {
    head,
  },
  css: ['@alvarosabu/ui/styles', 'lite-youtube-embed/src/lite-yt-embed.css'],
  /*   modules: ['@alvarosabu/nuxt3-markdownit'], */
  build: {
    transpile: ['@marvr/storyblok-rich-text-vue-renderer'],
  },
  modules: [
    '@unocss/nuxt',
    [
      '@storyblok/nuxt',
      {
        accessToken: process.env.STORYBLOK_API_TOKEN,
        /*        useApiClient: true, */
      },
    ],
  ],
  vue: {
    compilerOptions: {
      isCustomElement: tag => ['lite-youtube'].includes(tag),
    },
  },
  /*   unocss: {
    // presets
    uno: true, // enabled `@unocss/preset-uno`
    icons: true, // enabled `@unocss/preset-icons`
    attributify: true, // enabled `@unocss/preset-attributify`,
  }, */
  vite: {
    plugins: [SvgLoader()],
  },
})
