<script setup lang="ts">
import sdk, { EmbedOptions } from '@stackblitz/sdk'

const props = defineProps({
  blok: {
    type: Object,
    required: true,
  },
})

const embed = ref(null)

watch(
  () => embed.value,
  () => {
    const options: EmbedOptions = { openFile: '', forceEmbedLayout: true, height: 500, view: 'preview' }
    if (props.blok.file) {
      options.openFile = props.blok.file
    }
    if (props.blok.preview) {
      options.view = 'preview'
    }
    sdk.embedProjectId(embed.value, props.blok.projectId, options)
  },
)
/* sdk.embedProjectId(embed.value, 'vitejs-vite-uoe7h4', {
  forceEmbedLayout: true,
  openFile: 'README.md',
}) */
</script>
<template>
  <div class="rounded" ref="embed">Awiwi</div>
</template>
