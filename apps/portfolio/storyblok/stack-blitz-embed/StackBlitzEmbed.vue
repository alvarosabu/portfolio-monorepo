<script setup lang="ts">
import sdk, { EmbedOptions } from '@stackblitz/sdk'

const props = defineProps({
  blok: {
    type: Object,
    required: true,
  },
})

const embed = ref(null)
const isSnippetLoaded = ref(false)

watch(
  () => embed.value,
  () => {
    const options: EmbedOptions = { openFile: '', forceEmbedLayout: true, width: 500, height: 500, view: 'preview' }
    if (props.blok.file) {
      options.openFile = props.blok.file
    }
    if (props.blok.preview) {
      options.view = 'preview'
    }
    sdk.embedProjectId(embed.value, props.blok.projectId, options)
  },
)
</script>
<template>
  <LazyHydrate :when-visible="{ rootMargin: '50px' }">
    <div
      ref="embed"
      class="rounded break-out-prose w-full my-8 min-h-500px bg-gray-200 flex justify-center items-center"
    >
      <AsParticleLoader v-if="!isSnippetLoaded" size="4rem" />
    </div>
  </LazyHydrate>
</template>
