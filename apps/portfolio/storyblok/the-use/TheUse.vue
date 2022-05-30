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
  <div container mx-auto prose dark:text-gray-50 mb-32 data-cy="uses">
    <h2 flex items-center data-cy="uses-title">
       {{ blok.title }}
      <span text-bg-md ml-4><AsIcon :name="blok.icon" /></span>
    </h2>
    <RichTextRenderer :document="blok.content" />
  </div>
</template>
