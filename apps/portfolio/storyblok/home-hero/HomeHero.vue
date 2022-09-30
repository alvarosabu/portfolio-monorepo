<script lang="ts" setup>
/* eslint-disable max-len */
import { computed } from 'vue'
import { RichTextRenderer } from '@marvr/storyblok-rich-text-vue-renderer'

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
    v-editable="blok"
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
  >
    <div hidden md:flex w="1/2" justify-center>
      <PancakePlanet />
    </div>
    <div
      v-show="true"
      class="home-hero__content prose dark:prose-invert sm:w-2/5 text-primary-500 dark:text-gray-100 flex flex-col justify-center animate__animated animate__fadeIn"
    >
      <h1 mb-8 data-cy="home-hero-title" v-html="title"></h1>
      <RichTextRenderer v-if="blok" :document="blok.content" />
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
