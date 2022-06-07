<script setup lang="ts">
defineProps({
  blok: {
    type: Object,
    required: true,
  },
})
</script>
<template>
  <div v-editable="blok" data-test="page">
    <StoryblokComponent v-for="inblok in blok.body" :key="inblok._uid" :blok="inblok" />
  </div>
</template>
