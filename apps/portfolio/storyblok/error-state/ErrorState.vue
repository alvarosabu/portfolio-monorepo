<script setup lang="ts">
import { RichTextRenderer } from '@marvr/storyblok-rich-text-vue-renderer'

defineProps({
  blok: {
    type: Object,
    required: true,
  },
})
</script>
<template>
  <div bg-gray-100 p-4 rounded>
    <div prose mx-auto pb-16>
      <h2 mb-8>{{ blok.title }} 🐛</h2>
      <RichTextRenderer :document="blok.message.content" />
    </div>
  </div>
</template>
