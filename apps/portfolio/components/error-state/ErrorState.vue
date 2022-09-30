<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true,
  },
})
</script>
<template>
  <div bg-gray-100 p-4 rounded>
    <div prose mx-auto pb-16>
      <h2 mb-8>{{ title }}</h2>
      <slot></slot>
    </div>
  </div>
</template>
