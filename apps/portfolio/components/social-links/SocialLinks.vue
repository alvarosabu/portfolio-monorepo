<script lang="ts" setup>
import { PropType } from 'vue'
import { SocialLink } from './consts'

const props = defineProps({
  size: {
    type: String,
    default: '3xl',
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
  <ul :class="getClasses">
    <li v-for="item in items" :key="item.icon">
      <a
        :href="item.url.url"
        inline-flex
        justify-center
        w-9
        class="text-primary-400 dark:text-gray-50 text-bg-md hover:text-bg-sm"
        target="_blank"
        :title="item.icon"
      >
        <AsIcon :name="item.icon" size="36px" />
      </a>
    </li>
  </ul>
</template>
