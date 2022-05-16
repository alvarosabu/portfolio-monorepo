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
        text-bg
        w-9
        target="_blank"
        :title="item.icon"
      >
        <AsIcon :name="item.icon" size="36px" />
      </a>
    </li>
  </ul>
</template>
