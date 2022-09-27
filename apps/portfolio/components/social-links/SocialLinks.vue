<script lang="ts" setup>
import { PropType } from 'vue'

export interface StoryLink {
  id: string
  url: string
  linktype: string
  fieldtype: string
  cached_url: string
}

export interface SocialLink {
  icon: string
  url: StoryLink
}

const props = defineProps({
  size: {
    type: String,
    default: 'xl',
  },
  items: {
    type: Array as PropType<SocialLink[]>,
    default: () => [],
  },
})

const getClasses = computed(() => {
  return {
    'social-link w-full justify-between flex': true,
    [`text-${props.size}`]: true,
  }
})
</script>
<template>
  <ul :class="getClasses" data-cy="social-links" class="not-prose">
    <li v-for="item in items" :key="item.icon">
      <a
        :href="item.url.url"
        inline-flex
        justify-center
        w-9
        class="text-primary-400 dark:text-gray-50 text-bg-md hover:text-bg-sm not-prose"
        target="_blank"
        :title="item.icon"
      >
        <AsIcon :name="item.icon" size="48px" />
      </a>
    </li>
  </ul>
</template>
