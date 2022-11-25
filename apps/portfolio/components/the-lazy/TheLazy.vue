<script setup lang="ts">
import { useIntersectionObserver } from '@vueuse/core'
import { onUnmounted, ref } from 'vue'

const target = ref(null)
const targetIsVisible = ref(false)

const { stop } = useIntersectionObserver(target, ([{ isIntersecting }], observerElement) => {
  targetIsVisible.value = isIntersecting
  if (isIntersecting) {
    stop()
  }
})
onUnmounted(() => {
  stop()
})
</script>
<template>
  <div ref="target" class="da-lazy-loading h-full">
    <slot v-if="targetIsVisible" />
  </div>
</template>
