<script lang="ts" setup>
defineProps({
  videoId: {
    type: String,
    required: true,
  },
  title: {
    type: String,
  },
  controls: {
    type: Boolean,
    default: false,
  },
})
</script>
<template>
  <lite-youtube
    rounded-lg
    :videoid="videoId"
    :playlabel="title"
    params="controls=0&start=10&end=30&modestbranding=2&rel=0&enablejsapi=1"
  />
</template>
