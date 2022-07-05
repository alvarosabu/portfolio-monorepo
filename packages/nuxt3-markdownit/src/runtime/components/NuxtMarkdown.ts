import { defineComponent, h, onMounted, ref } from 'vue'
import { useMakdownIt } from '../composables/useMarkdownIt'

export default defineComponent({
  // type inference enabled
  props: {
    data: { type: String, default: '' },
  },
  setup(props) {
    const content = ref()

    const md = useMakdownIt()

    function renderMarkdown() {
      content.value = md.render(props.data)
    }

    onMounted(() => renderMarkdown())

    return () => h('div', { innerHTML: content.value })
  },
})
