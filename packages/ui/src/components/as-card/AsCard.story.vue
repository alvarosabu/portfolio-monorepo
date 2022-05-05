<script lang="ts" setup>
import 'uno.css'
import AsCard from './AsCard.vue'
import AsIcon from '../as-icon/AsIcon.vue'

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
          :media="state.media"
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

    <Variant title="Simple" icon="carbon:star-filled" icon-color="#10B981">
      <AsCard
        title="Find the repo on your channel"
        content="Write stories to showcase and document your components."
      />
    </Variant>
    <Variant title="Slots" icon="carbon:star-filled" icon-color="#10B981">
      <AsCard>
        <template #header>
          <header>
            <header class="flex w-full items-center mb-4 p-4">
              <span class="block w-full">
                <AsIcon name="repo" class="mr-4 text-lg" />
                <span> asigloo /</span>
                <span class="font-bold">vue-dynamic-forms</span>
              </span>
              <img
                src="https://avatars.githubusercontent.com/u/72650433?s=200&v=4"
                alt="asigloo"
                class="rounded-full w-6 h-6"
              />
            </header>
          </header>
        </template>
        <template #content>
          <p class="px-4 m-0 pb-4">
            Write stories to showcase and document your components.
          </p>
        </template>
        <template #footer>
          <footer class="flex w-full text-sm px-4 pb-4">
            <span class="w-1/3 inline-flex items-center">
              <AsIcon name="star" class="mr-4 -mt-1" :size="'18px'" />
              200
            </span>
            <span class="w-1/3 inline-flex items-center">
              <AsIcon name="fork" class="mr-4 -mt-1" :size="'18px'" />
              14
            </span>
          </footer>
        </template>
      </AsCard>
    </Variant>
  </Story>
</template>
