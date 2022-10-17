<script setup lang="ts">
import { Ref } from 'vue'
import MarkdownIt from 'markdown-it'
import { format } from 'date-fns'

const props = defineProps({
  blok: {
    type: Object,
    required: true,
  },
})

type GithubEmbedType = 'issue' | 'repo' | 'gist' | 'user' | 'pull'
enum githubEmbedType {
  ISSUE = 'issue',
  REPO = 'repo',
  GIST = 'gist',
  USER = 'user',
  PULL = 'pull',
}

const BASE_URL = 'https://api.github.com/'
const embedType: Ref<GithubEmbedType> = ref(githubEmbedType.REPO)
const md = new MarkdownIt()

const url = computed(() => {
  const { url } = props.blok.url

  if (url.includes(githubEmbedType.ISSUE)) {
    embedType.value = githubEmbedType.ISSUE
    return `${BASE_URL}repos/${url.split('github.com/')[1]}`
  }
  if (url.includes(githubEmbedType.PULL)) {
    embedType.value = githubEmbedType.PULL

    return `${BASE_URL}repos/${url.split('github.com/')[1]}`.replace('pull', 'pulls')
  }
})
const { data: content, pending, error } = await useFetch(url.value)

const contentBody = computed(() => {
  if (embedType.value === githubEmbedType.ISSUE || embedType.value === githubEmbedType.PULL) {
    return md.render(content.value.body)
  }
})

const formattedDate = computed(() => {
  if (embedType.value === githubEmbedType.ISSUE || embedType.value === githubEmbedType.PULL) {
    return format(new Date(content.value.created_at), 'MMMM dd, yyyy')
  }
})
</script>
<template>
  <div class="rounded overflow-hidden shadow-lg bg-gray-100">
    <div v-if="pending" class="w-full h-full flex justify-center items-center">
      <AsParticleLoader size="4rem" />
    </div>
    <div v-if="error">
      <ErrorState title="Oops 😳">
        <p>Something went wrong while fetching the Github embed.</p>
      </ErrorState>
    </div>
    <template v-if="content">
      <div v-if="embedType === githubEmbedType.ISSUE" class="px-4 pb-8">
        <h3 class="pb-4 border-b">
          <AsIcon name="github" /> {{ content.title }} <AsBadge :label="`# ${content.number}`" />
        </h3>
        <div class="py-4 flex">
          <AsImg :src="content.user.avatar_url" class="w-10 h-10 rounded-full mr-4" />
          <div class="border-gray-200 border-1 rounded w-full">
            <header class="p-2 border-b">
              Posted by <a :href="content.user.url" :alt="content.user.login">{{ content.user.login }}</a> on
              {{ formattedDate }}
            </header>
            <div class="bg-white prose p-2 max-h-400px overflow-scroll" v-html="contentBody"></div>
          </div>
        </div>
        <footer class="w-full p-2 flex justify-center">
          <AsButton :link="blok.url.url" variant="secondary" label="View on github" class="text-light" />
        </footer>
      </div>
      <div v-else-if="embedType === githubEmbedType.PULL" class="px-4 pb-8">
        <h3 class="pb-4 border-b">
          <AsIcon name="pull-request" /> {{ content.title }} <AsBadge :label="`# ${content.number}`" />
          <AsBadge class="border important-border-gray-600 text-gray-600 bg-transparent" :label="content.state" />
        </h3>
        <div class="py-4 flex">
          <AsImg :src="content.user.avatar_url" class="w-10 h-10 rounded-full mr-4" />
          <div class="border-gray-200 border-1 rounded w-full">
            <header class="p-2 border-b">
              Posted by <a :href="content.user.url" :alt="content.user.login">{{ content.user.login }}</a> on
              {{ formattedDate }}
            </header>
            <div class="bg-white prose p-2 max-h-400px overflow-scroll" v-html="contentBody"></div>
          </div>
        </div>
        <footer class="w-full p-2 flex justify-center">
          <AsButton :link="blok.url.url" variant="secondary" label="View on github" class="text-light" />
        </footer>
      </div>
    </template>
  </div>
</template>
