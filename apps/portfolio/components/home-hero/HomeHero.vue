<script lang="ts" setup>
import { computed } from 'vue'
import { RichTextRenderer } from '@marvr/storyblok-rich-text-vue-renderer'

const { isMobile } = useBreakpoints()

const props = defineProps({
  blok: {
    type: Object,
    required: true,
  },
})

const title = computed(() => {
  return props.blok.title.content[0].content[0].text
})
</script>
<template>
  <div
    data-cy="home-hero"
    class="home-hero"
    container
    mx-auto
    w-full
    h-screen
    flex
    justify-between
    items-center
    snap-start
    v-editable="blok"
  >
    <div flex w="1/2" justify-center v-if="!isMobile">
      <PancakePlanet />
      <!--    <TheShevas /> -->
    </div>
    <div
      class="home-hero__content sm:w-2/5 text-primary-500 dark:text-gray-100 flex flex-col justify-center animate__animated animate__fadeIn"
      v-show="true"
    >
      <h2
        font-display
        text="primary-400 dark:gray-50 3xl"
        mb-8
        v-html="title"
      ></h2>
      <RichTextRenderer :document="blok.content" v-if="blok" />
      <SocialLinks mb-8 :items="blok.socialLinks" />
    </div>
  </div>
</template>

<style lang="scss">
.home-hero {
  &__content p {
    @apply mb-4;
  }
}
.space {
  background: url('/home/space-dust.png');
}

.pancake-planet {
  width: 460px !important;
  height: 460px !important;
  transform: scale(0.75);
}
</style>
