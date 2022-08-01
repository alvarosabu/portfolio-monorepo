import { plugin, defaultResolvers } from '@marvr/storyblok-rich-text-vue-renderer'
import { NodeTypes } from '@marvr/storyblok-rich-text-types'
import BlockCode from '@/storyblok/block-code/BlockCode.vue'
import TextImage from '@/storyblok/text-image/TextImage.vue'
export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.use(
    plugin({
      resolvers: {
        ...defaultResolvers,
        [NodeTypes.CODE_BLOCK]: BlockCode,

        /* ({ children, attrs }) =>
          h('pre', { ...attrs, class: `${attrs.class} no-prose` }, h('code', children)),
        components: {}, */
        components: {
          'text-image': ({ fields }) => h(TextImage, { blok: { ...fields } }),
        },
      },
    }),
  )
})
