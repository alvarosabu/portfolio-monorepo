<script setup lang="ts">
useHead({ title: 'Portfolio - AS Portfolio' })

const { getStory } = useStories()

const story = await getStory('portfolio')
</script>
<template>
  <main role="main" class="pt-12">
    <h2>Single Project</h2>
    <StoryblokComponent v-if="story" :blok="story.content" />
  </main>
</template>
