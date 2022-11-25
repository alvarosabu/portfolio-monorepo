import { plugin, defaultResolvers } from '@marvr/storyblok-rich-text-vue-renderer'
import { NodeTypes } from '@marvr/storyblok-rich-text-types'
import { AsCodeBlock } from '@alvarosabu/ui'
import TheLazy from '@/components/the-lazy/TheLazy.vue'

const LazyTextImage = defineAsyncComponent(() => import('@/storyblok/text-image/TextImage.vue'))
const LazyTheImage = defineAsyncComponent(() => import('@/storyblok/the-image/TheImage.vue'))
const LazyStackBlitzEmbed = defineAsyncComponent(() => import('@/storyblok/stack-blitz-embed/StackBlitzEmbed.vue'))
const LazyCodepenEmbed = defineAsyncComponent(() => import('@/storyblok/codepen-embed/CodepenEmbed.vue'))
const LazySketchfabEmbed = defineAsyncComponent(() => import('@/storyblok/sketchfab-embed/SketchfabEmbed.vue'))
const LazyGithubEmbed = defineAsyncComponent(() => import('@/storyblok/github-embed/GithubEmbed.vue'))
const LazyTwitterEmbed = defineAsyncComponent(() => import('@/storyblok/twitter-embed/TwitterEmbed.vue'))

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.use(
    plugin({
      resolvers: {
        ...defaultResolvers,
        [NodeTypes.CODE_BLOCK]: ({ children, attrs }) =>
          h(
            AsCodeBlock,
            { code: children[0].children, language: attrs?.class?.split('-').pop() || '' },
            () => children,
          ),
        [NodeTypes.IMAGE]: LazyTheImage,
        components: {
          'text-image': ({ fields }) => h(TheLazy, {}, h(LazyTextImage, { blok: { ...fields } })),
          'stackblitz-embed': ({ fields }) => h(TheLazy, {}, h(LazyStackBlitzEmbed, { blok: { ...fields } })),
          'codepen-embed': ({ fields }) => h(TheLazy, {}, h(LazyCodepenEmbed, { blok: { ...fields } })),
          'sketchfab-embed': ({ fields }) => h(TheLazy, {}, h(LazySketchfabEmbed, { blok: { ...fields } })),
          'github-embed': ({ fields }) => h(TheLazy, {}, () => h(LazyGithubEmbed, { blok: { ...fields } })),
          'twitter-embed': ({ fields }) => h(TheLazy, {}, h(LazyTwitterEmbed, { blok: { ...fields } })),
        },
      },
    }),
  )
})
