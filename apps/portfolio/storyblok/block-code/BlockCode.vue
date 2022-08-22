<script setup lang="ts">
import { AsButton } from '@alvarosabu/ui'
import { highlightAll } from 'prismjs'

import { useSlots } from 'vue'

const slots = useSlots()

const { logMessage, logError } = useLogger()

const copySuccesfully = ref(false)

async function copyToClipboard(text: string) {
  try {
    await navigator.clipboard.writeText(text as unknown as string)
    logMessage('Copied', { text })
    copySuccesfully.value = true

    setTimeout(() => {
      copySuccesfully.value = false
    }, 2000)
  } catch (error) {
    logError('There was an error copying content to clipboard', error)
  }
}

onMounted(() => {
  highlightAll()
})
const root = () => {
  return h('pre', { class: 'important-my-16 not-prose important-py-8 important-relative' }, [
    h(AsButton, {
      class: `absolute top-1 right-1 ${copySuccesfully.value ? 'text-green-500' : ''}`,
      size: 'sm',
      icon: copySuccesfully.value ? 'check' : 'copy',
      onClick: () => copyToClipboard(slots.default()[0].children as string),
    }),
    h('code', { class: 'not-prose' }, slots.default()),
  ])
}
</script>
<template>
  <root />
</template>
