<script setup lang="ts">
import { ref } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/css'

defineProps({
  blok: {
    type: Object,
    required: true,
  },
})
const { isMobile } = useBreakpoints()

const { fetchVideos, popularVideos, error, pending } = useYoutubeVideos()

const videos = ref(null)
const videosAreVisible = ref(false)

useIntersectionObserver(videos, async ([{ isIntersecting }]) => {
  videosAreVisible.value = isIntersecting
  if (isIntersecting) {
    await fetchVideos()
  }
})

// Swiper
const isBeginning = ref(true)
const isEnd = ref(false)

function onSwiper(swiper) {
  isBeginning.value = swiper.isBeginning
  isEnd.value = swiper.isEnd
}
function onSlideChange(swiper) {
  isBeginning.value = swiper.isBeginning
  isEnd.value = swiper.isEnd
}
</script>
<template>
  <section
    ref="videos"
    v-editable="blok"
    data-cy="videos"
    h-screen
    flex
    flex-col
    justify-center
    snap-start
    px-4
    md:px-0
    class="youtube-videos"
    :class="!isMobile ? 'container mx-auto' : null"
  >
    <h2 font-display text="primary-400 dark:gray-50 3xl" mb-24>
      {{ blok.title }}
    </h2>
    <div
      v-if="error?.length > 0 && !pending"
      min-h-40
      bg="gray-50 dark:primary-600"
      text="sm gray-500 dark:gray-50"
      p-4
      w-full
      mb-8
      flex
      justify-center
      items-center
      font-mono
    >
      <img w-8 h-8 mr-4 src="/pixel-penguin.png" :alt="blok.errorState" />{{ blok.errorState }}
    </div>
    <suspense v-else>
      <template #default>
        <div
          class="relative"
          :class="[{ 'swiper-gradient--left': !isBeginning }, { 'swiper-gradient--right': !isEnd }]"
        >
          <swiper
            :slides-per-view="isMobile ? 1.5 : 3"
            :space-between="50"
            class="w-full mb-8 min-h-40"
            @swiper="onSwiper"
            @slide-change="onSlideChange"
          >
            <swiper-slide v-for="{ id, title } of popularVideos" :key="id">
              <YoutubeCard :title="title" :video-id="id" />
            </swiper-slide>
          </swiper>
        </div>
      </template>
      <template #fallback>
        <div>Loading...</div>
      </template>
    </suspense>

    <footer class="flex w-full" :class="isMobile ? 'container mx-auto justify-center' : 'justify-end'">
      <AsButton
        :label="blok.youtubeLabel"
        variant="secondary"
        data-cy="button-youtube"
        outline
        link="https://www.youtube.com/c/AlvaroDevLabs/videos"
      />
    </footer>
  </section>
</template>

<style lang="scss">
.swiper-gradient {
  &--left:before {
    @apply absolute left-0 top-0 z-10 h-full pointer-events-none transition-color duration-300 ease-in-out;

    content: '';
    width: 20%;
    background: linear-gradient(
      to left,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.5) 50%,
      rgba(255, 255, 255, 1) 75%
    );
  }
  &--right:after {
    @apply absolute right-0 top-0 z-10 h-full pointer-events-none transition-color duration-300 ease-in-out;

    content: '';

    width: 20%;
    background: linear-gradient(to right, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 75%);
  }
}

.dark {
  .swiper-gradient {
    &--left:before {
      background: linear-gradient(to left, rgba(62, 81, 255, 0) 0%, #3e5066 75%);
    }
    &--right:after {
      background: linear-gradient(to right, rgba(62, 81, 255, 0) 0%, #3e5066 75%);
    }
  }
}
</style>
