<script setup lang="ts">
useHead({ title: 'Portfolio - AS Portfolio' })

const { getStory } = useStories()

const story = await getStory('portfolio')

const { fetchProjects, featuredProject, projectList } = usePortfolio()

await fetchProjects()
</script>
<template>
  <main role="main" pt-12 container mx-auto w-full>
    <header prose dark:prose-invert text-primary-500 dark:text-gray-100 important-container>
      <h1 important="mt-12 mb-12 md:mb-36">{{ story.content.title }}</h1>

      <FeaturedHero
        v-if="story.content"
        :title="`${story.content.featured_title} ⭐️`"
        :subtitle="featuredProject.content.title"
        :description="featuredProject.content.excerpt"
        :media="featuredProject.content.media"
      >
        <template #footer>
          <footer flex justify-end>
            <NuxtLink :to="`/${featuredProject.full_slug}`">
              <AsButton variant="secondary">
                {{ story.content.read_more_cta_label }}
              </AsButton>
            </NuxtLink>
          </footer>
        </template>
      </FeaturedHero>
    </header>
    <div grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full gap-24 py-32>
      <AsCard
        v-for="project of projectList"
        :key="project.content.title"
        :title="project.content.title"
        :media="project.content.media.filename"
      >
        <template #content>
          <p p-4 text-sm line-clamp-4 text-ellipsis max-h-96px mb-8>{{ project.content.excerpt }}</p>
          <footer px-4 py-2 flex justify-end>
            <AsButton variant="secondary" size="md">
              {{ story.content.read_more_cta_label }}
            </AsButton>
          </footer>
        </template>
      </AsCard>
    </div>
  </main>
</template>
