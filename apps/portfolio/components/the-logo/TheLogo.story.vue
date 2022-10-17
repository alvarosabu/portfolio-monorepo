<script setup lang="ts">
const state = reactive({
  inverse: false,
})
</script>
<template>
  <Story title="components/TheLogo" icon="fluent-text-whole-word-20-filled">
    <Variant title="playground" icon-color="#10B981">
      <TheLogo :inverse="state.inverse" />
    </Variant>
  </Story>
</template>
