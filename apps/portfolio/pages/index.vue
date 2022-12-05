<script setup lang="ts">
useHead({ title: 'Home - AS Portfolio' })

const { getStory } = useStories()

const story = await getStory('home')
</script>
<template>
  <pre>{{ data }}</pre>
  <main role="main">
    <StoryblokComponent v-if="story" :blok="story.content" />
  </main>
</template>

<style lang="scss" scoped>
.page > main {
  overflow-y: scroll;
  height: 100vh;
  scroll-snap-type: y mandatory;
}
</style>
