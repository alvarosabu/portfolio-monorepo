<script setup lang="ts">
import { reactive } from 'vue'

import AsTextInput from './AsTextInput.vue'

const state = reactive({
  value: '',
})
</script>
<template>
  <Story title="AsTextInput">
    <AsTextInput v-model="state.value" />
  </Story>
</template>
