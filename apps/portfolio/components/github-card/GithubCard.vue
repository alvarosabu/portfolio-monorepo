<script setup lang="ts">
/* import { GithubOrganization } from './consts' */

defineProps<{
  name: string
  url: string
  description: string
  language: string
  /*   organization: GithubOrganization */
  stars: number
  forks: number
  languageColor: string
}>()
</script>
<template>
  <a data-cy="github-card" inline-flex :href="url" :alt="`Github repository ${name}`">
    <AsCard p-4 h-full>
      <template #header>
        <header flex w-full mb-4>
          <span block w-full :href="url">
            <AsIcon name="repo" mr-4 size="21" />
            <h3 inline-flex>{{ name }}</h3>
            <!--   <span v-if="organization">{{ organization.name }} /</span>
            <span :class="{ 'font-bold': organization }">{{ name }}</span> -->
          </span>
          <!--  <img
            v-if="organization"
            :src="organization.avatarUrl"
            :alt="organization.name"
            class="rounded-full w-8 h-8"
          /> -->
        </header>
      </template>
      <template #content>
        <p class="text-sm mb-4">{{ description }}</p>
      </template>
      <template #footer>
        <footer class="flex w-full text-sm">
          <span class="w-1/3 inline-flex items-center">
            <span class="w-2 h-2 rounded-full mr-4" :style="{ backgroundColor: languageColor }" />
            <span>{{ language }}</span>
          </span>
          <span class="w-1/3 inline-flex items-center">
            <AsIcon name="star" class="mr-4 -mt-1" :size="'18px'" />
            <span>{{ stars }}</span>
          </span>
          <span class="w-1/3 inline-flex items-center">
            <AsIcon name="fork" class="mr-4 -mt-1" :size="'18px'" />
            <span>{{ forks }}</span>
          </span>
        </footer>
      </template>
    </AsCard>
  </a>
</template>
