import { defineNuxtConfig } from 'nuxt'
import SvgLoader from 'vite-svg-loader'
import head from './config/head'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  ssr: false,
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
  components: {
    global: true,
    dirs: [
      {
        path: '~/components',
        ignore: ['**/*.{spec,test,e2e}.{js,ts,jsx,tsx}'],
      },
    ],
  },
  /*   autoImports: {
    dirs: ['@storyblok/vue'],
  }, */
  css: ['@alvarosabu/ui/styles', 'lite-youtube-embed/src/lite-yt-embed.css'],
  buildModules: ['@unocss/nuxt'],
  vue: {
    compilerOptions: {
      isCustomElement: tag => ['lite-youtube'].includes(tag),
    },
  },
  unocss: {
    // presets
    uno: true, // enabled `@unocss/preset-uno`
    icons: true, // enabled `@unocss/preset-icons`
    attributify: true, // enabled `@unocss/preset-attributify`,
  },
  vite: {
    build: {
      rollupOptions: {
        external: ['vue', 'ufo', '@vueuse/core'],
        output: {
          globals: {
            vue: 'Vue',
            ufo: 'ufo',
            '@vueuse/core': 'VueUseCore',
          },
        },
      },
    },
    plugins: [SvgLoader()],
  },
})
