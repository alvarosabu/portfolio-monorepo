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
  <div grid grid-cols-1 md:grid-cols-2 w-full gap-16 data-cy="featured-hero">
    <AsImg important-my-0 rounded-lg :src="media.filename" :alt="media.alt" />
    <div flex flex-col justify-between>
      <slot>
        <div mb-8 sm:mb-16>
          <h2 important-mt-0 data-cy="featured-hero-title">{{ title }}</h2>
          <h3 uppercase important-text="primary-300 dark:secondary-400" data-cy="featured-hero-subtitle">
            {{ subtitle }}
          </h3>
          <p>{{ description }}</p>
        </div>
      </slot>
      <slot name="footer"></slot>
    </div>
  </div>
</template>
