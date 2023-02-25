<script setup lang="ts">
useHead({
  title: 'Talks - AS Portfolio',
  meta: [
    {
      hid: 'og:title',
      property: 'og:title',
      content: 'Talks - AS Portfolio',
    },
    {
      hid: 'twitter:title',
      name: 'twitter:title',
      content: 'Talks - AS Portfolio',
    },
    {
      hid: 'og:image',
      property: 'og:image',
      content: 'https://res.cloudinary.com/alvarosaburido/image/upload/v1671031889/portfolio/og/og-talks_yjr5rw.png',
    },
    {
      hid: 'twitter:image',
      name: 'twitter:image',
      content: 'https://res.cloudinary.com/alvarosaburido/image/upload/v1671031889/portfolio/og/og-talks_yjr5rw.png',
    },
  ],
})

const { getStory } = useStories()

const story = await getStory('talks')

const { fetchTalks, talksList } = useTalks()

await fetchTalks()
</script>
<template>
  <main v-if="story" class="page" role="main" pt-4 md:pt-12 container mx-auto w-full>
    <AsGraphic type="zigzag" class="absolute top-48 right-0 transform scale-75 dark:text-gray-50" />
    <header prose dark:prose-invert text-primary-500 dark:text-gray-100 important-container>
      <h1 important="mt-12 mb-12 md:mb-36">
        {{ story.content.title }}
      </h1>
    </header>
    <div grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full gap-24 py-32 data-cy="project-list">
      <AsCard
        v-for="talk of talksList"
        :key="talk.content.title"
        :media="talk.content.media.filename"
        :media-alt="talk.content.media.alt"
        data-cy="talk"
      >
        <template #header>
          <header relative>
            <lite-youtube
              v-if="talk.content.url.url"
              controls
              important-my-0
              object-cover
              w-full
              aspect-ratio="16/9"
              :videoid="talk.videoId"
              :playlabel="talk.content.title"
              :params="talk.videoParams"
            >
            </lite-youtube>
            <NuxtImg
              v-else-if="talk.content?.media.filename"
              :src="talk.content.media.filename"
              :alt="talk.content.media.alt"
              aspect-video
              object-cover
              w-full
              provider="storyblok"
              format="webp"
              sizes="sm:100vw md:75vw lg:50vw xl:25vw"
            />

            <h2 v-if="talk.content.title" font="bold display" text="base lg" p-4 m-0>
              {{ talk.content.title }}
            </h2>
            <a flex px-4 py-2 text-sm :href="talk.content.event_url.url">{{ talk.content.event_name }}</a>
            <hr />
          </header>
        </template>
        <template #content>
          <p px-4 py-2 text-sm font-sans>{{ talk.eventDate }}</p>
          <p p-4 text-sm line-clamp-4 text-ellipsis max-h-96px mb-8>{{ talk.content.excerpt }}</p>

          <footer px-4 py-2 md:flex md:justify-end>
            <NuxtLink :to="`/${talk.full_slug}`">
              <AsButton variant="secondary" size="md" class="w-full">
                {{ story.content.read_more_cta_label }}
              </AsButton>
            </NuxtLink>
          </footer>
        </template>
      </AsCard>
    </div>
  </main>
</template>
