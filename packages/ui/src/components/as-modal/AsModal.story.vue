<script setup lang="ts">
import { reactive } from 'vue'
import { hstEvent } from 'histoire/client'

import AsButton from '../as-button/AsButton.vue'
import AsModal from './AsModal.vue'

const state = reactive({
  isOpen: false,
  title: 'Modal Title',
  content: `It's commonly known that creative careers like Front-end development 
   or Design can't really show all their work they do with clients, 
  because of confidentiality agreements,
   non-disclosure agreement or just because the project isn't live yet.`,
})

function onClose(value: boolean) {
  hstEvent('modal close', { value })
  state.isOpen = value
}
</script>
<template>
  <Story title="AsModal">
    <Variant title="playground">
      <teleport to="body">
        <AsModal v-bind="state" @update:is-open="onClose($event)">
          <template #footer>
            <AsButton :variant="'secondary'" @click="state.isOpen = false"> Accept </AsButton>
          </template>
        </AsModal>
      </teleport>
      <template #controls>
        <HstCheckbox v-model="state.isOpen" title="isOpen" />
        <HstText v-model="state.title" title="Title" />
        <HstTextarea v-model="state.content" title="Content" />
      </template>
    </Variant>
    <Variant title="Content Slot">
      <teleport to="body">
        <AsModal v-bind="state" @update:is-open="onClose($event)">
          <template #content>
            <!-- TODO: this should be replaced with a form -->
            <p class="text-gray-700 dark:text-gray-50">Awiwi</p>
          </template>
          <template #footer>
            <AsButton :variant="'secondary'" class="mr-4" outline @click="state.isOpen = false"> Cancel </AsButton>
            <AsButton :variant="'secondary'" @click="state.isOpen = false"> Accept </AsButton>
          </template>
        </AsModal>
      </teleport>
    </Variant>
  </Story>
</template>
