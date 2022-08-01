<script setup lang="ts">
import { highlightAll } from 'prismjs'

onMounted(() => {
  highlightAll()
})
</script>
<template>
  <pre class="important-my-16 not-prose" :class="$attrs.class">
    <code class="not-prose">
      <slot />
    </code>
  </pre>
</template>
