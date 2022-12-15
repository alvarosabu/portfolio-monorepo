<script lang="ts" setup>
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

const { listRelevantRepos, fetchRepos, error, pending } = useGithubRepo()
const hasError = computed(() => error.value && !pending.value)
/* const showRepos = computed(() => !error.value && !pending.value && listRelevantRepos.value.length > 0)
const { beforeEnter, enter, leave } = useStaggered(450) */

const repos = ref(null)
const reposAreVisible = ref(false)

useIntersectionObserver(repos, async ([{ isIntersecting }]) => {
  reposAreVisible.value = isIntersecting
  if (isIntersecting) {
    await fetchRepos()
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
    ref="repos"
    v-editable="blok"
    data-cy="repos"
    container
    mx-auto
    h-screen
    flex
    flex-col
    justify-center
    snap-start
  >
    <h2 data-cy="repos-title" class="text-primary-400" font-display text="primary-400 dark:gray-50 3xl" mb-24>
      {{ blok.title }}
    </h2>
    <div
      v-if="listRelevantRepos?.length === 0"
      w-full
      min-h-40
      p-4
      mb-8
      flex
      justify-center
      items-center
      bg="gray-50 dark:primary-600"
      font-mono
      text="sm gray-500 dark:gray-50"
    >
      <img v-if="hasError" w-8 h-8 mr-4 src="/pixel-penguin.png" :alt="blok.errorState" />
      <AsParticleLoader v-if="pending" size="4rem" />
      {{ hasError ? blok.errorState : '' }}
    </div>
    <div class="relative" :class="[{ 'swiper-gradient--left': !isBeginning }, { 'swiper-gradient--right': !isEnd }]">
      <swiper
        :slides-per-view="isMobile ? 1 : 3"
        :space-between="50"
        class="w-full mb-12 md:mb-8 min-h-40"
        @swiper="onSwiper"
        @slide-change="onSlideChange"
      >
        <swiper-slide v-for="(repo, $index) of listRelevantRepos" :key="repo.name">
          <GithubCard v-bind="repo" :data-index="$index + 1" class="w-full" />
        </swiper-slide>
      </swiper>
    </div>
    <footer class="flex w-full md:justify-end">
      <a
        href="https://github.com/sponsors/alvarosabu"
        target="_blank"
        data-cy="button-sponsor"
        border="2 gray-300"
        py-2
        px-4
        mr-8
        rounded-sm
        transition-all
        duration-300
        text-gray-500
        dark:text-gray-50
        font="sans semibold"
        bg="hover:gray-100 dark:hover:primary-600"
      >
        <AsIcon text-red-400 mr-4 name="heart-outline" />
        {{ blok.sponsorLabel }}
      </a>
      <AsButton
        :label="blok.githubLabel"
        variant="secondary"
        data-cy="button-github"
        outline
        :link="'https://github.com/alvarosabu?tab=repositories'"
      />
    </footer>
  </section>
</template>
