<script setup lang="ts">
import { RichTextRenderer } from '@marvr/storyblok-rich-text-vue-renderer'
import { format } from 'date-fns'

definePageMeta({
  layout: 'single',
})
const route = useRoute()

const { isDesktop, isMobile, isTablet } = useBreakpoints()

const { fetchArticleBySlug } = useBlog()

const story = await fetchArticleBySlug(route.params.slug as string)

const isPublished = computed(() => story.published_at)

const storyPublishedDate = computed(() =>
  isMobile.value
    ? format(new Date(story.published_at), 'MM/dd/yy')
    : format(new Date(story.published_at), 'MMMM dd, yyyy'),
)

useHead({
  title: `${story.content.title} - AS Portfolio`,
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: story.content.excerpt,
    },
    {
      hid: 'keywords',
      property: 'keywords',
      keywords: story.tag_list.join(', '),
    },
    // og
    {
      hid: 'og:description',
      property: 'og:description',
      content: story.content.excerpt,
    },
    {
      hid: 'og:title',
      property: 'og:title',
      content: `${story.content.title} - AS Portfolio`,
    },
    {
      hid: 'og:type',
      property: 'og:type',
      content: 'article',
    },
    {
      hid: 'og:url',
      property: 'og:url',
      content: `http://alvarosaburido.dev/portfolio/${route.params.slug}`,
    },
    {
      hid: 'og:image',
      property: 'og:image',
      content: story.content.media?.filename,
    },
    {
      hid: 'og:image:alt',
      property: 'og:image:alt',
      content: story.content.media?.alt,
    },
    {
      hid: 'og:publish_date',
      property: 'og:publish_date',
      content: story.published_at,
    },
    // Twitter
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:site', content: '@alvarosabu' },
    {
      hid: 'twitter:title',
      property: 'twitter:title',
      content: `${story.content.title} - AS Portfolio`,
    },
    {
      hid: 'twitter:description',
      name: 'twitter:description',
      content: story.content.excerpt,
    },
    {
      hid: 'twitter:image',
      name: 'twitter:image',
      content: story.content.media?.filename,
    },
    {
      hid: 'twitter:image:alt',
      name: 'twitter:image:alt',
      content: story.content.media?.alt,
    },
  ],
})
</script>
<template>
  <main role="main" pt-4 md:pt-12>
    <div mx-auto container>
      <header pt-12 pb-0 lg:py-12 w-full relative flex flex-col lg:flex-row lg:items-end data-cy="article-hero">
        <AsImg
          v-if="story.content.media"
          data-cy="article-thumbnail"
          important-my-0
          rounded-xl
          z-10
          mr-12
          important-mb-8
          class="w-full sm:w-4/5 md:w-2/3 lg:w-2/3 xl:w-4/5"
          shadow-lg
          :src="story.content.media?.filename"
          :alt="story.content.media?.alt"
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
          z-10
          w-full
          border-rounded
          text-4xl
        >
          <AsIcon name="brush" />
        </div>
        <div flex flex-col lg:justify-end lg:items-end lg:h-full relative class="w-full lg:w-1/3">
          <h1
            important-mt-0
            text-primary-500
            dark:text-gray-100
            text-4xl
            lg:text-6xl
            font-bold
            font-display
            z-10
            data-cy="article-hero-title"
            important-line-height-6
          >
            {{ story.content.title }}
          </h1>
          <client-only>
            <!-- this component will only be rendered on client-side -->
            <AsGraphic v-if="isMobile || isTablet" class="absolute -right-4 bottom-16 sm:(right-16)" type="dots" />
            <AsGraphic v-if="isDesktop" class="absolute right-4 lg:right-36 -bottom-[15%]" type="dots-2x" />
          </client-only>
        </div>
      </header>
      <div border-b md:border-none border-gray-300 prose mx-auto text-primary-500 dark:text-gray-100 pb-8 z-20>
        <p v-if="isPublished" class="flex items-center" data-cy="published-date">
          Published on {{ storyPublishedDate }}
          <client-only><AsIcon name="calendar" class="mx-4" /> </client-only>
          <span
            v-if="story.content.category"
            class="bg-secondary-500 text-white rounded-lg text-sm font-bold py-0.5 px-1 ml-4"
          >
            {{ story.content.category.name }}
          </span>
        </p>
        <p v-else>
          This story is in <span class="bg-secondary-500 text-white rounded-lg text-sm py-0.5 px-1">Draft</span> state
          and {{ storyPublishedDate }} will be published.
        </p>
        <br />

        <TagList v-if="isDesktop" :tags="story.tag_list" />
      </div>
      <div mb-24 container mx-auto w-full prose dark:prose-invert text-primary-500 dark:text-gray-100>
        <RichTextRenderer v-if="story && story.content.content" :document="story.content.content" />
        <TagList v-if="!isDesktop" :tags="story.tag_list" />
      </div>
    </div>
  </main>
</template>
