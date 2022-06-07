<script setup lang="ts">
import 'uno.css'
import AsParticleLoader from './AsParticleLoader.vue'

function initState() {
  return {
    size: '2rem',
  }
}
</script>
<template>
  <Story
    :layout="{
      type: 'grid',
      width: 200,
    }"
  >
    <Variant title="playground" :init-state="initState">
      <template #default="{ state }">
        <div p-4>
          <AsParticleLoader :size="state.size" />
        </div>
      </template>
      <template #controls="{ state }">
        <HstText v-model="state.size" title="Size" />
      </template>
    </Variant>
  </Story>
</template>
