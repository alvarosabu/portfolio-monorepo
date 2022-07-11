<script setup lang="ts">
import { highlightAll } from 'prismjs'

onMounted(() => {
  highlightAll()
})
</script>
<template>
  <pre class="not-prose" :class="$attrs.class">
    <code class="not-prose">
      <slot />
    </code>
  </pre>
</template>
