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
    <StoryblokComponent
      v-for="blok in blok.body"
      :key="blok._uid"
      :blok="blok"
    />
  </div>
</template>
