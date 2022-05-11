<script lang="ts" setup>
const { fetchStories } = useStories()

await fetchStories()
</script>
<template>
  <TheHeader />

  <div class="mt-16">
    <slot />
  </div>
</template>
