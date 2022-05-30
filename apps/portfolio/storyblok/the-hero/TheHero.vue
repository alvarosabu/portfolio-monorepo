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
  <div
    hero
    container
    py-32
    mx-auto
    w-full
    justify-between
    items-center
    prose
    class="flex flex-col md:flex-row dark:text-gray-50"
    :class="{ 'flex-col-reverse md:flex-row-reverse': blok.reverse }"
    data-cy="hero"
  >
    <div class="w-full md:w-1/3">
      <!-- <pre> {{ blok.slot }}</pre> -->
    </div>
    <div class="w-full md:w-2/3">
      <h1 class="headline-1 mb-8" data-cy="hero-title">{{ blok.title }}</h1>
      <RichTextRenderer :document="blok.content" />
    </div>
  </div>
</template>
