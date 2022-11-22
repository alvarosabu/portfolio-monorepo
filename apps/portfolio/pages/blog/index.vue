<script setup lang="ts">
import { RichTextRenderer } from '@marvr/storyblok-rich-text-vue-renderer'

useHead({ title: 'Blog - AS Portfolio' })

const { getStory } = useStories()

const story = await getStory('blog')

const { fetchArticles, featuredArticle, articleList } = useBlog()

await fetchArticles()
</script>
<template>
  <main role="main" pt-4 md:pt-12 container mx-auto w-full>
    <template v-if="story && articleList.length > 0">
      <header prose dark:prose-invert text-primary-500 dark:text-gray-100 important-container>
        <h1 important="mt-12 mb-12 md:mb-36">{{ story.content.title }}</h1>

        <FeaturedHero
          v-if="story.content && featuredArticle"
          :title="`${story.content.featured_title} ⭐️`"
          :subtitle="featuredArticle.content.title"
          :description="featuredArticle.content.excerpt"
          :media="featuredArticle.content.media"
        >
          <template #footer>
            <footer md:flex md:justify-end>
              <NuxtLink :to="`/${featuredArticle.full_slug}`">
                <AsButton variant="secondary" outline class="w-full">
                  {{ story.content.read_more_cta_label }}
                </AsButton>
              </NuxtLink>
            </footer>
          </template>
        </FeaturedHero>
      </header>
      <div grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 w-full gap-24 py-32 data-cy="blog-list">
        <AsCard
          v-for="article of articleList"
          :key="article.content?.title"
          data-cy="article"
          :media="article.content?.media.filename"
          :media-alt="article.content?.media.alt"
        >
          <template #header>
            <header relative>
              <NuxtImg
                v-if="article.content?.media.filename"
                :src="article.content.media.filename"
                :alt="article.content.media.alt"
                aspect-video
                provider="storyblok"
                format="webp"
                sizes="sm:100vw md:75vw lg:50vw xl:25vw"
              />
              <h2 v-if="article.content.title" font="bold display" text="base lg" p-4 m-0>
                {{ article.content.title }}
              </h2>
            </header>
          </template>

          <template #content>
            <p p-4 text-sm line-clamp-4 text-ellipsis max-h-96px md:mb-8>{{ article.content?.excerpt }}</p>
            <footer px-4 p-4 md:py-2 md:flex md:justify-end>
              <NuxtLink :to="`/${article.full_slug}`">
                <AsButton variant="secondary" size="md" class="w-full">
                  {{ story.content?.read_more_cta_label }}
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
