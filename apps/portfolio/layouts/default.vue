<script lang="ts" setup>
const { fetchStories } = useStories()

await fetchStories()
</script>
<template>
  <TheHeader />

  <main role="main" class="page mt-16">
    <slot />
  </main>
</template>
