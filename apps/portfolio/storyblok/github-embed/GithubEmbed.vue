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

interface GithubContent {
  owner: {
    login: string
    avatar_url: string
    url: string
  }
  repo: string
  id: string
  full_name: string
  title: string
  body: string
  url: string
  created_at: string
  updated_at: string
  number: number
  state: string
  description: string
  stargazers_count: number
  forks_count: number
  language: string
  files: {
    filename: string
    raw_url: string
    type: string
    language: string
    size: number
    content: string
  }[]
  user: {
    login: string
    avatar_url: string
    url: string
  }
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
  if (url.includes(githubEmbedType.GIST)) {
    embedType.value = githubEmbedType.GIST
    return `${BASE_URL}gists/${url.replace('https://gist.github.com/', '').split('/')[1]}`
  } else {
    embedType.value = githubEmbedType.REPO
    return `${BASE_URL}repos/${url.split('github.com/')[1]}`
  }
})
const { data: content, pending, error } = await useFetch<GithubContent>(url.value)

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

const gistFiles = computed(() => {
  if (embedType.value === githubEmbedType.GIST) {
    return Object.values(content.value.files)
  }
})

const repoOrganization = computed(() => {
  if (embedType.value === githubEmbedType.REPO) {
    return {
      name: content.value.full_name,
      avatarUrl: content.value.owner.avatar_url,
    }
  }
})
</script>
<template>
  <LazyHydrate :when-visible="{ rootMargin: '50px' }">
    <!--
      Content never hydrated.
    -->
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
          <h3 class="pb-4 border-b mt-2">
            <AsIcon name="github" /> {{ content.title }} <AsBadge :label="`# ${content.number}`" />
          </h3>
          <div class="py-4 flex">
            <AsImg :src="content.user.avatar_url" class="w-10 h-10 rounded-full mr-4" />
            <div class="border-gray-200 border-1 rounded w-full">
              <header class="p-2 border-b">
                Posted by <a :href="content.user.url" :alt="content.user.login">{{ content.user.login }}</a> on
                {{ formattedDate }}
              </header>
              <div class="bg-white prose p-2 max-h-400px overflow-scroll" v-html="contentBody" />
            </div>
          </div>
          <footer class="w-full p-2 flex justify-center">
            <AsButton :link="blok.url.url" variant="secondary" label="View on github" class="text-light" />
          </footer>
        </div>
        <div v-else-if="embedType === githubEmbedType.PULL" class="px-4 pb-8">
          <h3 class="pb-4 border-b mt-2">
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
              <div class="bg-white prose p-2 max-h-400px overflow-scroll" v-html="contentBody" />
            </div>
          </div>
          <footer class="w-full p-2 flex justify-center">
            <AsButton :link="blok.url.url" variant="secondary" label="View on github" class="text-light" />
          </footer>
        </div>

        <div v-else-if="embedType === githubEmbedType.GIST && gistFiles.length > 0" class="px-4 pb-8">
          <h3 class="flex items-center pb-4 border-b mt-2">
            <AsImg :src="content.owner.avatar_url" class="w-10 h-10 rounded-full mr-4" /> {{ content.description }}
            <AsBadge :label="`${gistFiles[0].language}`" />
          </h3>
          <div class="border-gray-200 border-1 rounded w-full">
            <header class="p-2 border-b bg-white">
              {{ gistFiles[0].filename }}
            </header>
            <div class="bg-white prose max-h-400px overflow-scroll">
              <AsCodeBlock
                class="gist-code-block"
                :code="gistFiles[0].content"
                :language="gistFiles[0].language.toLowerCase()"
              />
            </div>
          </div>
          <footer class="w-full mt-2 p-2 flex justify-center">
            <AsButton :link="blok.url.url" variant="secondary" label="View on github" class="text-light" />
          </footer>
        </div>
        <div v-else>
          <GithubCard
            class="w-full"
            :name="content.full_name"
            :organization="repoOrganization"
            :description="content.description"
            :stars="content.stargazers_count"
            :forks="content.forks_count"
            :url="blok.url.url"
            :language="content.language"
          ></GithubCard>
        </div>
      </template>
    </div>
  </LazyHydrate>
</template>

<style lang="scss">
.gist-code-block {
  pre.shiki {
    @apply rounded-t-none rounded-b-lg;
  }
}
</style>
