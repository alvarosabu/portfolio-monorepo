<script lang="ts" setup>
import 'uno.css'
import AsIcon from './AsIcon.vue'
/* import asIcons from './const' */

function initState() {
  return {
    name: 'github',
  }
}
</script>

<template>
  <Story title="AsIcon">
    <Variant title="playground" :init-state="initState">
      <template #default="{ state }">
        <AsIcon :name="state.name" />
      </template>

      <template #controls="{ state }">
        <HstText v-model="state.name" title="Name" />
      </template>
    </Variant>
  </Story>
</template>
