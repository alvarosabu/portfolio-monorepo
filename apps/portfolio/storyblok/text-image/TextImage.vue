<script setup lang="ts">
import { RichTextRenderer } from '@marvr/storyblok-rich-text-vue-renderer'

const props = defineProps({
  blok: {
    type: Object,
    required: true,
  },
})

const media = computed(() => ({ ...props.blok.media, src: props.blok.media.filename }))
</script>
<template>
  <div class="break-out-prose">
    <AsTextImage :media="media" :direction="blok.direction">
      <RichTextRenderer v-if="blok" :document="blok.content" />
    </AsTextImage>
  </div>
</template>
