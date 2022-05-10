<script setup lang="ts">
import TheLogo from './index.vue'

function initState() {
  return {
    inverse: false,
  }
}
</script>
<template>
  <template>
    <Story
      title="TheLogo"
      :layout="{
        type: 'grid',
        width: 200,
      }"
    >
      <Variant title="playground" :init-state="initState">
        <template #default="{ state }">
          <TheLogo :inverse="state.inverse" />
        </template>
      </Variant>
    </Story>
  </template>
</template>
