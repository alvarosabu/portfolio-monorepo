<script setup lang="ts">
useHead({ title: 'Home - AS Portfolio' })
</script>
<template>
  <TheLogo />
</template>

<style lang="scss" scoped>
.page > div {
  overflow-y: scroll;
  height: 100vh;
  scroll-snap-type: y mandatory;
}
</style>
