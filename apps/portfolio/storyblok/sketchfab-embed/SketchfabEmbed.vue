<script setup lang="ts">
import { SearchParams } from 'ohmyfetch'

const props = defineProps({
  blok: {
    type: Object,
    required: true,
  },
})

const params: SearchParams = {
  url: props.blok.url.url as string,
  maxwidth: 700,
  format: 'json',
}

const {
  data: sketch,
  pending,
  error,
} = await useFetch('https://sketchfab.com/oembed', {
  params,
})
</script>
<template>
  <div class="rounded overflow-hidden shadow-lg bg-gray-200">
    <div v-if="pending" class="w-full h-full flex justify-center items-center">
      <AsParticleLoader size="4rem" />
    </div>
    <div v-if="error">
      <ErrorState title="Oops 😳">
        <p>Something went wrong while fetching the Sketchfab embed.</p>
      </ErrorState>
    </div>
    <div v-if="sketch" v-html="sketch.html" />
  </div>
</template>
