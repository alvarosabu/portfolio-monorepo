<script setup lang="ts">
defineProps({
  tags: {
    type: Array,
    default: () => [],
  },
})
</script>
<template>
  <ul class="flex-wrap not-prose flex">
    <li
      v-for="tag in tags"
      :key="(tag as string)"
      class="font-bold text-primary-400 dark:text-gray-50 text-bg-md hover:text-bg-sm mr-4 mb-4"
    >
      #{{ tag }}
    </li>
  </ul>
</template>
