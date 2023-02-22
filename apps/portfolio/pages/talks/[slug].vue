<script setup lang="ts">
import { RichTextRenderer } from '@marvr/storyblok-rich-text-vue-renderer'
import { format } from 'date-fns'

definePageMeta({
  layout: 'single',
})
const route = useRoute()

const { isDesktop, isMobile, isTablet } = useBreakpoints()

const { fetchTalkBySlug } = useTalks()

const story = await fetchTalkBySlug(route.params.slug as string)

useHead({
  title: `${story?.content.title} - AS Portfolio`,
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: story?.content.excerpt,
    },
    {
      hid: 'keywords',
      property: 'keywords',
      keywords: story?.tag_list?.join(', '),
    },
    // og
    {
      hid: 'og:description',
      property: 'og:description',
      content: story?.content.excerpt,
    },
    {
      hid: 'og:title',
      property: 'og:title',
      content: `${story?.content.title} - AS Portfolio`,
    },
    {
      hid: 'og:type',
      property: 'og:type',
      content: 'project',
    },
    {
      hid: 'og:url',
      property: 'og:url',
      content: `http://alvarosaburido.dev/portfolio/${route.params.slug}`,
    },
    {
      hid: 'og:image',
      property: 'og:image',
      content: story?.content.media.filename,
    },
    {
      hid: 'og:image:alt',
      property: 'og:image:alt',
      content: story?.content.media.alt,
    },
    {
      hid: 'og:publish_date',
      property: 'og:publish_date',
      content: story?.published_at,
    },
    // Twitter
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:site', content: '@alvarosabu' },
    {
      hid: 'twitter:title',
      property: 'twitter:title',
      content: `${story?.content.title} - AS Portfolio`,
    },
    {
      hid: 'twitter:description',
      name: 'twitter:description',
      content: story?.content.excerpt,
    },
    {
      hid: 'twitter:image',
      name: 'twitter:image',
      content: story?.content.media.filename,
    },
    {
      hid: 'twitter:image:alt',
      name: 'twitter:image:alt',
      content: story?.content.media.alt,
    },
  ],
})
</script>
<template>
  <main role="main" pt-4 md:pt-12>
    <div mx-auto container>
      <header
        v-if="story"
        pt-12
        pb-0
        lg:py-12
        w-full
        relative
        flex
        flex-col
        lg:flex-row
        lg:items-start
        data-cy="project-hero"
      >
        <lite-youtube
          v-if="story?.videoId"
          controls
          important-my-0
          rounded-xl
          z-10
          mr-12
          important-mb-8
          class="w-full sm:w-4/5 md:w-2/3 lg:w-2/3 xl:w-4/5"
          shadow-lg
          aspect-ratio="16/9"
          :videoid="story?.videoId"
          :playlabel="story?.content.title"
          params="controls=1&start=10&end=30&modestbranding=2&rel=0&enablejsapi=1"
        >
        </lite-youtube>
        <NuxtImg
          v-else-if="story?.content.media"
          data-cy="project-thumbnail"
          important-my-0
          rounded-xl
          z-10
          mr-12
          important-mb-8
          class="w-full sm:w-4/5 md:w-2/3 lg:w-2/3 xl:w-4/5"
          shadow-lg
          :src="story.content.media.filename"
          :alt="story.content.media.alt"
          aspect-ratio="16/9"
          provider="storyblok"
          format="webp"
          sizes="sm:100vw md:75vw lg:600px xl:1200px"
        />
        <div
          v-else
          flex
          justify-center
          items-center
          bg-gray-300
          text-gray-400
          aspect-video
          mr-12
          w-full
          border-rounded
          text-4xl
          z-10
        >
          <AsIcon name="brush" />
        </div>
        <div flex flex-col lg:justify-end lg:h-full relative class="w-full lg:w-1/3">
          <h1
            important-mt-0
            text-primary-500
            dark:text-gray-100
            text-2xl
            lg:text-4xl
            font-bold
            font-display
            z-10
            mb-6
            data-cy="project-hero-title"
            important-line-height-6
          >
            <!--        Hasura GraphQL Baas for the busy developer. -->
            {{ story?.content.title }}
          </h1>
          <h2 font-bold mb-4 text-primary-300>
            <a :href="story?.content.event_url.url">{{ story?.content.event_name }}</a>
          </h2>
          <p py-4 text-sm font-sans>{{ story?.eventDate }}</p>
          <p mb-8>{{ story?.content.excerpt }}</p>
          <TagList :tags="story?.tag_list" />
          <client-only>
            <!-- this component will only be rendered on client-side -->
            <AsGraphic
              v-if="isMobile || isTablet"
              class="absolute -right-4 bottom-16 sm:(right-16) opacity-50"
              type="dots"
            />
            <AsGraphic v-if="isDesktop" class="absolute right-4 lg:right-36 -bottom-[15%] opacity-20" type="dots-2x" />
          </client-only>
        </div>
      </header>
    </div>
  </main>
</template>
