<script lang="ts" setup>
import 'uno.css'
import AsCard from './AsCard.vue'

function initState() {
  return {
    title: 'Soy una pequeña tetera',
    subtitle: 'Pero no una tetera cualquiera',
    media:
      'https://res.cloudinary.com/alvarosaburido/image/upload/v1610379831/blog/Create%20Dynamic%20Forms%20in%20Vue3/create-dynamic-forms-in-vue3_xirpvg.png',
    content:
      'Easy way to dynamically create reactive forms in vue based on a varying business',
  }
}
</script>

<template>
  <Story
    title="AsCard"
    :layout="{
      type: 'grid',
      width: 400,
    }"
  >
    <Variant title="playground" :init-state="initState">
      <template #default="{ state }">
        <AsCard
          :title="state.title"
          :subtitle="state.subtitle"
          :content="state.content"
        />
      </template>

      <template #controls="{ state }">
        <HstText title="Title" v-model="state.title" />
        <HstText title="Subtitle" v-model="state.subtitle" />
        <HstText title="Media" v-model="state.media" />
      </template>
    </Variant>
  </Story>
</template>
