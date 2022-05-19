<script lang="ts" setup>
const { fetchStories } = useStories()

await fetchStories()
</script>
<template>
  <TheHeader />

  <div class="page mt-16">
    <slot />
  </div>
</template>
