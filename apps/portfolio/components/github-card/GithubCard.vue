<script setup lang="ts">
defineProps({
  name: {
    type: String,
  },
  url: {
    type: String,
  },
  description: {
    type: String,
  },
  language: {
    type: String,
  },
  organization: {
    type: Object,
  },
  stars: {
    type: Number,
  },
  forks: {
    type: Number,
  },
  languageColor: {
    type: String,
  },
})
</script>
<template>
  <a inline-flex :href="url" :alt="`Github repository ${name}`">
    <AsCard p-4 h-full>
      <template #header>
        <header flex w-full mb-4>
          <span block w-full :href="url">
            <AsIcon name="repo" mr-4 size="21" />
            <span v-if="organization">{{ organization.name }} /</span>
            <span :class="{ 'font-bold': organization }">{{ name }}</span>
          </span>
          <img
            v-if="organization"
            :src="organization.avatarUrl"
            :alt="organization.name"
            class="rounded-full w-8 h-8"
          />
        </header>
      </template>
      <template #content>
        <p class="text-sm mb-4">{{ description }}</p>
      </template>
      <template #footer>
        <footer class="flex w-full text-sm">
          <span class="w-1/3 inline-flex items-center" v-if="language">
            <span
              class="w-2 h-2 rounded-full mr-4"
              :style="{ backgroundColor: languageColor }"
            />{{ language }}
          </span>
          <span class="w-1/3 inline-flex items-center">
            <AsIcon name="star" class="mr-4 -mt-1" :size="'18px'" />
            {{ stars }}
          </span>
          <span class="w-1/3 inline-flex items-center">
            <AsIcon name="fork" class="mr-4 -mt-1" :size="'18px'" />
            {{ forks }}
          </span>
        </footer>
      </template>
    </AsCard>
  </a>
</template>
