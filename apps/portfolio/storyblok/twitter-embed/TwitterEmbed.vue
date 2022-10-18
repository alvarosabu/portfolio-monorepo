<script setup lang="ts">
import sanitizeHtml from 'sanitize-html'

const props = defineProps({
  blok: {
    type: Object,
    required: true,
  },
})

const tweet = computed(() => {
  return sanitizeHtml(props.blok.embed, {
    /*   allowedTags: ['script'], */
    allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img', 'script']),
    allowVulnerableTags: true,
    allowedAttributes: {
      a: ['href', 'name', 'target'],
      p: ['lang', 'dir'],
      blockquote: ['class'],
      script: ['src', 'async', 'charset'],
    },
    allowedScriptDomains: ['twitter.com'],
  })
})
</script>
<template>
  <div v-html="tweet" />
</template>
