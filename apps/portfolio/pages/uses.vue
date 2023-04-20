<script setup lang="ts">
import { AnimationTriggers, ShevasAnimationTypes } from '@/composables/useShevas'

useHead({
  title: 'Uses - AS Portfolio',
  meta: [
    {
      hid: 'og:title',
      property: 'og:title',
      content: 'Uses - AS Portfolio',
    },
    {
      hid: 'twitter:title',
      name: 'twitter:title',
      content: 'Uses - AS Portfolio',
    },
    {
      hid: 'og:image',
      property: 'og:image',
      content: 'https://res.cloudinary.com/alvarosaburido/image/upload/v1671031889/portfolio/og/og-uses_tj6zvb.png',
    },
    {
      hid: 'twitter:image',
      name: 'twitter:image',
      content: 'https://res.cloudinary.com/alvarosaburido/image/upload/v1671031889/portfolio/og/og-uses_tj6zvb.png',
    },
  ],
})

const { getStory } = useStories()

const story = await getStory('uses')

const { updateCurrentAnimation } = useShevas()
const { isMobile } = useBreakpoints()

onMounted(() => {
  updateCurrentAnimation({
    condition: AnimationTriggers.MANUAL,
    animation: ShevasAnimationTypes.IN_THE_MAC,
  })
})
</script>
<template>
  <main role="main" class="page" as-container>
    <AsGraphic type="zigzag" class="absolute top-48 right-0 transform scale-75 dark:text-gray-50" />
    <TheShevas v-if="!isMobile" class="absolute top-16 right-10 lg:right-100" />
    <StoryblokComponent v-if="story" :blok="story.content" />
  </main>
  <!--   <LazyTheFooter /> -->
</template>
