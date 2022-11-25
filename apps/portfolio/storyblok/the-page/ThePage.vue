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
    <template v-for="(inblok, index) in blok.body">
      <TheLazy v-if="index > 1" :key="inblok._uid">
        <StoryblokComponent :blok="inblok" />
      </TheLazy>
      <StoryblokComponent v-else :key="inblok._uid + 1" :blok="inblok" />
    </template>
  </div>
</template>
