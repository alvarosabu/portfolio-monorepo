<script lang="ts" setup>
const { fetchStories } = useStories()

await fetchStories()
</script>
<template>
  <div>
    <TheHeader />

    <div class="page mt-8 sm:mt-16 relative">
      <AsGraphic class="fixed left-0 blur-sm pointer-events-none" type="blob" />
      <slot />
    </div>
  </div>
</template>
