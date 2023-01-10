import SvgLoader from 'vite-svg-loader'
import head from './config/head'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      apiURL: process.env.STORYBLOK_API_URL,
      apiToken: process.env.STORYBLOK_API_TOKEN,
      youtubeKey: process.env.YOUTUBE_API_KEY,
      storyblokVersion: process.env.STORYBLOK_VERSION || 'published',
    },
  },
  app: {
    head,
  },
  css: ['@alvarosabu/ui/styles', 'lite-youtube-embed/src/lite-yt-embed.css', '/styles/forms.scss'],
  /*   modules: ['@alvarosabu/nuxt3-markdownit'], */
  build: {
    transpile: ['@marvr/storyblok-rich-text-vue-renderer'],
  },
  modules: [
    'nuxt-plausible',
    '@nuxt/image-edge',
    'nuxt-lazy-hydrate',
    '@nuxtjs/fontaine',
    '@nuxtjs/robots',
    '@unocss/nuxt',
    '@nuxtjs/critters',
    [
      '@storyblok/nuxt',
      {
        accessToken: process.env.STORYBLOK_API_TOKEN,
        /* useApiClient: true, */
      },
    ],
  ],
  vue: {
    compilerOptions: {
      isCustomElement: tag => ['lite-youtube'].includes(tag),
    },
  },
  vite: {
    plugins: [SvgLoader()],
  },
  image: {
    storyblok: {
      baseURL: 'https://a.storyblok.com',
    },
  },
})
