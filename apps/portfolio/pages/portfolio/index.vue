<script setup lang="ts">
import { RichTextRenderer } from '@marvr/storyblok-rich-text-vue-renderer'

useHead({ title: 'Portfolio - AS Portfolio' })

const { getStory } = useStories()

const story = await getStory('portfolio')

const { fetchProjects, featuredProject, projectList } = usePortfolio()

await fetchProjects()
</script>
<template>
  <main role="main" pt-4 md:pt-12 container mx-auto w-full>
    <template v-if="story && projectList.length > 0">
      <header prose dark:prose-invert text-primary-500 dark:text-gray-100 important-container>
        <h1 important="mt-12 mb-12 md:mb-36">{{ story.content.title }}</h1>

        <FeaturedHero
          v-if="story.content && featuredProject"
          :title="`${story.content.featured_title} ⭐️`"
          :subtitle="featuredProject.content.title"
          :description="featuredProject.content.excerpt"
          :media="featuredProject.content.media"
        >
          <template #footer>
            <footer md:flex md:justify-end>
              <NuxtLink :to="`/${featuredProject.full_slug}`">
                <AsButton variant="secondary" class="w-full">
                  {{ story.content.read_more_cta_label }}
                </AsButton>
              </NuxtLink>
            </footer>
          </template>
        </FeaturedHero>
      </header>
      <div grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full gap-24 py-32 data-cy="project-list">
        <AsCard
          v-for="project of projectList"
          :key="project.content.title"
          :title="project.content.title"
          :media="project.content.media.filename"
          :media-alt="project.content.media.alt"
          data-cy="project"
        >
          <template #content>
            <p p-4 text-sm line-clamp-4 text-ellipsis max-h-96px mb-8>{{ project.content.excerpt }}</p>
            <footer px-4 py-2 md:flex md:justify-end>
              <NuxtLink :to="`/${project.full_slug}`">
                <AsButton variant="secondary" size="md" class="w-full">
                  {{ story.content.read_more_cta_label }}
                </AsButton>
              </NuxtLink>
            </footer>
          </template>
        </AsCard>
      </div>
    </template>
    <template v-else>
      <ErrorState :title="story?.content?.error_state[0].title + ' 🐛'">
        <RichTextRenderer :document="story?.content?.error_state[0].message.content" />
      </ErrorState>
    </template>
  </main>
</template>
