<script setup lang="ts">
useHead({ title: 'Home - AS Portfolio' })

const { getStory } = useStories()

const story = await getStory('home')
</script>
<template>
  <StoryblokComponent v-if="story" :blok="story.content" />
</template>

<style lang="scss" scoped>
.page > div {
  overflow-y: scroll;
  height: 100vh;
  scroll-snap-type: y mandatory;
}
</style>
