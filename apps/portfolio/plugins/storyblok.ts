import { plugin, defaultResolvers } from '@marvr/storyblok-rich-text-vue-renderer'
import { NodeTypes } from '@marvr/storyblok-rich-text-types'
import { AsCodeBlock } from '@alvarosabu/ui'
import TextImage from '@/storyblok/text-image/TextImage.vue'
import TheImage from '@/storyblok/the-image/TheImage.vue'

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
        },
      },
    }),
  )
})
