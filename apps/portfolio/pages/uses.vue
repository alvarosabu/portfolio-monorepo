<script setup lang="ts">
import {
  AnimationTriggers,
  ShevasAnimationTypes,
} from '@/composables/useShevas'

useHead({ title: 'Uses - AS Portfolio' })

const { getStory } = useStories()

const story = await getStory('uses')

const { updateCurrentAnimation } = useShevas()
const { isMobile } = useBreakpoints()

onMounted(async () => {
  updateCurrentAnimation({
    condition: AnimationTriggers.MANUAL,
    animation: ShevasAnimationTypes.IN_THE_MAC,
  })
})
</script>
<template>
  <main role="main" class="pt-12">
    <AsGraphic
      type="zigzag"
      class="absolute top-48 right-0 transform scale-75 dark:text-gray-50"
    />
    <TheShevas class="absolute top-16 right-10 lg:right-100" v-if="!isMobile" />
    <StoryblokComponent v-if="story" :blok="story.content" />
  </main>
</template>
