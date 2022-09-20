import { plugin, defaultResolvers } from '@marvr/storyblok-rich-text-vue-renderer'
import { NodeTypes } from '@marvr/storyblok-rich-text-types'
import { AsCodeBlock } from '@alvarosabu/ui'
import TextImage from '@/storyblok/text-image/TextImage.vue'
import TheImage from '@/storyblok/the-image/TheImage.vue'
import StackBlitzEmbed from '@/storyblok/stack-blitz-embed/StackBlitzEmbed.vue'
import CodepenEmbed from '@/storyblok/codepen-embed/CodepenEmbed.vue'

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.use(
    plugin({
      resolvers: {
        ...defaultResolvers,
        [NodeTypes.CODE_BLOCK]: ({ children, attrs }) =>
          h(AsCodeBlock, { code: children[0].children, language: attrs?.class?.split('-').pop() || '' }, children),
        [NodeTypes.IMAGE]: TheImage,
        components: {
          'text-image': ({ fields }) => h(TextImage, { blok: { ...fields } }),
          'stackblitz-embed': ({ fields }) => h(StackBlitzEmbed, { blok: { ...fields } }),
          'codepen-embed': ({ fields }) => h(CodepenEmbed, { blok: { ...fields } }),
        },
      },
    }),
  )
})
