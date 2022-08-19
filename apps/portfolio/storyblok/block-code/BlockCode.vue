<script setup lang="ts">
import { highlightAll } from 'prismjs'

import { useSlots } from 'vue'

const slots = useSlots()

onMounted(() => {
  highlightAll()
})

const root = () => {
  return h(
    'pre',
    { class: 'important-my-16 not-prose important-py-8' },
    h('code', { class: 'not-prose' }, slots.default()),
  )
}
</script>
<template>
  <root />
</template>
