<script setup lang="ts">
const state = reactive({
  tags: ['vuejs', 'nuxtjs', 'threejs'],
})
</script>
<template>
  <Story title="components/TagList" :icon="'ph-tag-simple-bold'">
    <TagList :tags="state.tags" />
  </Story>
</template>
