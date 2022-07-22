<script lang="ts" setup>
import { reactive } from 'vue'
import AsIcon from './AsIcon.vue'

const state = reactive({
  name: 'github',
})
</script>

<template>
  <Story title="AsIcon">
    <Variant title="playground">
      <AsIcon :name="state.name" />

      <template #controls>
        <HstText v-model="state.name" title="Name" />
      </template>
    </Variant>
  </Story>
</template>
