<script setup lang="ts">
import { AsButton } from '@alvarosabu/ui'
import { highlightAll } from 'prismjs'

import { useSlots } from 'vue'

const slots = useSlots()

const { logMessage, logError } = useLogger()

async function copyToClipboard(text: string) {
  try {
    await navigator.clipboard.writeText(text as unknown as string)
    logMessage('Copied', { text })
  } catch (error) {
    logError('There was an error copying content to clipboard', error)
  }
}

onMounted(() => {
  highlightAll()
})
const root = () => {
  return h('pre', { class: 'important-my-16 not-prose important-py-8' }, [
    h('code', { class: 'not-prose' }, slots.default()),
    h(AsButton, {
      class: 'absolute top-1 right-1',
      size: 'sm',
      icon: 'copy',
      onClick: () => copyToClipboard(slots.default()[0].children as string),
    }),
  ])
}
</script>
<template>
  <root />
</template>
