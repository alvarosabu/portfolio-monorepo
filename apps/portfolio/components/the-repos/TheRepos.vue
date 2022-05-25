<script lang="ts" setup>
import { useIntersectionObserver } from '@vueuse/core'

defineProps({
  blok: {
    type: Object,
    required: true,
  },
})

const { listRelevantRepos, fetchRepos, error, pending } = useGithubRepo()
const hasError = computed(() => error.value && !pending.value)
const showRepos = computed(
  () => !error.value && !pending.value && listRelevantRepos.value.length > 0,
)

const { beforeEnter, enter, leave } = useStaggered(450)
const { isMobile } = useBreakpoints()

const repos = ref(null)
const reposAreVisible = ref(false)

useIntersectionObserver(repos, async ([{ isIntersecting }]) => {
  reposAreVisible.value = isIntersecting
  if (isIntersecting) {
    await fetchRepos()
  }
})
</script>
<template>
  <section
    data-cy="repos"
    ref="repos"
    container
    mx-auto
    h-screen
    flex
    flex-col
    justify-center
    snap-start
    v-editable="blok"
    v-if="!isMobile"
  >
    <h2
      data-cy="repos-title"
      font-display
      text="primary-400 dark:gray-50 3xl"
      mb-24
    >
      {{ blok.title }}
    </h2>
    <div
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
      v-if="listRelevantRepos.length === 0"
    >
      <img
        w-8
        h-8
        mr-4
        src="/pixel-penguin.png"
        :alt="blok.errorState"
        v-if="hasError"
      />
      <AsParticleLoader size="4rem" v-if="pending" />
      {{ hasError ? blok.errorState : '' }}
    </div>
    <transition-group
      v-show="showRepos"
      grid
      grid-cols-3
      min-h-40
      gap-8
      mb-8
      appear
      name="staggered-fade"
      tag="div"
      @before-enter="beforeEnter"
      @enter="enter"
      @leave="leave"
    >
      <GithubCard
        v-for="(repo, $index) of listRelevantRepos"
        :key="repo.name"
        v-bind="repo"
        :data-index="$index + 1"
      />
    </transition-group>
    <footer class="flex w-full justify-end">
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
