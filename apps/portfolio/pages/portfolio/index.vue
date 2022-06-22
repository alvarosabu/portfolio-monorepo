<script setup lang="ts">
useHead({ title: 'Portfolio - AS Portfolio' })

const { getStory } = useStories()

const story = await getStory('portfolio')

const { fetchProjects, featuredProject, projectList, projects } = usePortfolio()

await fetchProjects()
</script>
<template>
  <main role="main" pt-12 container mx-auto w-full>
    <header prose dark:prose-invert text-primary-500 dark:text-gray-100 important-container>
      <h1 important="mt-12 mb-36">{{ story.content.title }}</h1>

      <FeaturedHero
        v-if="story.content"
        :title="`${story.content.featured_title} ⭐️`"
        :subtitle="featuredProject.content.title"
        :description="featuredProject.content.excerpt"
        :media="featuredProject.content.media"
      />
    </header>
  </main>
</template>
