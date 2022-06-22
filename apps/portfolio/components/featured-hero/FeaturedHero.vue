<script setup lang="ts">
import { PropType } from 'vue'
import { StoryAsset } from 'composables/useStories'

defineProps({
  title: String,
  subtitle: String,
  description: String,
  media: {
    type: Object as PropType<StoryAsset>,
  },
})
</script>
<template>
  <div grid grid-cols-1 md:grid-cols-2 w-full gap-16>
    <AsImg important-my-0 :src="media.filename" />
    <div>
      <h2 important-mt-0>{{ title }}</h2>
      <h3 uppercase important-text-primary-300>{{ subtitle }}</h3>
      <p>{{ description }}</p>
    </div>
  </div>
</template>
