<script setup lang="ts">
useHead({ title: 'Portfolio - AS Portfolio' })

const { getStory } = useStories()

const story = await getStory('portfolio')

const { fetchProjects, projects } = usePortfolio()

await fetchProjects()
</script>
<template>
  <main role="main" pt-12 container mx-auto w-full>
    <div prose dark:prose-invert text-primary-500 dark:text-gray-100>
      <h1 my-12>{{ story.content.title }}</h1>
      <pre>{{ projects }}</pre>
    </div>
  </main>
</template>
