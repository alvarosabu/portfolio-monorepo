<script setup lang="ts">
import { reactive } from 'vue'
import AsModal from './AsModal.vue'

const state = reactive({
  isOpen: false,
  title: 'Modal Title',
  content: `It's commonly known that creative careers like Front-end development 
   or Design can't really show all their work they do with clients, 
  because of confidentiality agreements,
   non-disclosure agreement or just because the project isn't live yet.`,
})
</script>
<template>
  <Story title="AsModal">
    <Variant title="playground">
      <teleport to="body">
        <AsModal v-bind="state" />
      </teleport>
      <template #controls>
        <HstCheckbox v-model="state.isOpen" title="isOpen" />
        <HstText v-model="state.title" title="Title" />
        <HstTextarea v-model="state.content" title="Content" />
      </template>
    </Variant>
  </Story>
</template>
