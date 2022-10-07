<script setup lang="ts">
import AsBadge from './AsBadge.vue'

function initState() {
  return {
    label: 'Awiwi',
    icon: null,
    outline: false,
  }
}
</script>
<template>
  <Story
    title="AsBadge"
    :layout="{
      type: 'grid',
      width: 200,
    }"
  >
    <Variant title="playground" :init-state="initState">
      <template #default="{ state }">
        <AsBadge :label="state.label" :icon="state.icon" :outline="state.outline" />
      </template>
    </Variant>
    <Variant title="outline" :init-state="initState">
      <template #default="{ state }">
        <AsBadge :label="state.label" :icon="state.icon" :outline="true" />
      </template>
    </Variant>
    <Variant title="icon" :init-state="initState">
      <template #default="{ state }">
        <AsBadge :label="state.label" :icon="'art'" />
      </template>
    </Variant>
    <Variant title="outline icon" :init-state="initState">
      <template #default="{ state }">
        <AsBadge :label="state.label" :icon="'3d'" :outline="true" />
      </template>
    </Variant>
    <Variant title="icon only" :init-state="initState">
      <AsBadge :icon="'art'" />
    </Variant>
    <Variant title="outline icon only" :init-state="initState">
      <AsBadge :icon="'3d'" :outline="true" />
    </Variant>
  </Story>
</template>
