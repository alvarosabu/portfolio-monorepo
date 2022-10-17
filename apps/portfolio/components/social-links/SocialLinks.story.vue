<script setup lang="ts">
import { SocialLink } from './SocialLinks.vue'

const state = reactive<{
  size: string
  items: SocialLink[]
}>({
  size: 'xl',
  items: [
    {
      icon: 'twitter',
      url: {
        url: 'https://twitter.com/alvarosabu',
        id: 'asas',
        linktype: 'external',
        fieldtype: 'url',
        cached_url: 'https://twitter.com/alvarosabu',
      },
    },
    {
      icon: 'github',
      url: {
        url: 'https://github.com/alvarosabu',
        id: 'asas',
        linktype: 'external',
        fieldtype: 'url',
        cached_url: 'https://github.com/alvarosabu',
      },
    },
  ],
})
</script>
<template>
  <Story title="components/SocialLinks" icon="ion-share-social-outline">
    <SocialLinks :size="state.size" :items="state.items" />
  </Story>
</template>
