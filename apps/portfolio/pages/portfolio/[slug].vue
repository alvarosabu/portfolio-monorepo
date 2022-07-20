<script setup lang="ts">
import { RichTextRenderer } from '@marvr/storyblok-rich-text-vue-renderer'

definePageMeta({
  layout: 'single',
})
const route = useRoute()

const { isDesktop, isMobile, isTablet } = useBreakpoints()

const { fetchProjectBySlug } = usePortfolio()

const story = await fetchProjectBySlug(route.params.slug as string)
</script>
<template>
  <div v-editable="story" mx-auto container>
    <header py-24 lg:py-12 w-full relative flex flex-col lg:flex-row lg:items-end data-cy="project-hero">
      <AsImg
        important-my-0
        rounded-xl
        z-10
        mr-12
        important-mb-8
        class="w-full sm:w-4/5 md:w-2/3 lg:w-2/3 xl:w-4/5"
        shadow-lg
        :src="story.content.media.filename"
        :alt="story.content.media.alt"
      />
      <AsGraphic v-if="isMobile || isTablet" class="absolute -right-8 -top-4 sm:(right-16)" type="dots" />
      <AsGraphic v-if="isDesktop" class="absolute right-4 lg:right-36 -bottom-[15%]" type="dots-2x" />
      <div flex flex-col lg:justify-end lg:items-end lg:h-full relative class="w-full lg:w-1/3">
        <h1
          important-mt-0
          text-primary-500
          text-3xl
          lg:text-6xl
          font-bold
          font-display
          z-10
          data-cy="project-hero-title"
          important-line-height-6
        >
          <!--        Hasura GraphQL Baas for the busy developer. -->
          {{ story.content.title }}
        </h1>
      </div>
    </header>

    <main role="main" pt-12 container mx-auto w-full prose dark:prose-invert text-primary-500 dark:text-gray-100>
      <RichTextRenderer v-if="story" :document="story.content.content" />
    </main>
  </div>
</template>
