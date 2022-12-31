<script setup lang="ts">
import { onClickOutside } from '@vueuse/core'
import { ref } from 'vue'

import AsButton from '/@/components/as-button/AsButton.vue'

defineProps<{
  title?: string
  isOpen: boolean
  content?: string
}>()

const modal = ref<HTMLElement>()

onClickOutside(modal, onClose)

const emit = defineEmits(['update:isOpen'])

function onClose() {
  emit('update:isOpen', false)
}
</script>
<template>
  <div class="relative z-70" aria-labelledby="modal-title" role="dialog" aria-modal="true">
    <!--
    Background backdrop, show/hide based on modal state.

    Entering: "ease-out duration-300"
      From: "opacity-0"
      To: "opacity-100"
    Leaving: "ease-in duration-200"
      From: "opacity-100"
      To: "opacity-0"
  -->
    <Transition
      name="fade-overlay"
      enter-active-class="opacity-1 transition-opacity duration-200"
      leave-active-class="opacity-0 transition-opacity duration-200"
    >
      <div v-show="isOpen" fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity></div>
    </Transition>
    <Transition
      name="fade-overlay"
      enter-active-class="opacity-1 translate-y-0 sm:scale-100 delay-200 transition-all duration-300"
      leave-active-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95 transition-all duration-200"
    >
      <div v-show="isOpen" class="fixed inset-0 z-70 overflow-y-auto">
        <div class="flex min-h-full items-start justify-center p-4 text-center sm:items-center sm:p-0">
          <!--
        Modal panel, show/hide based on modal state.

        Entering: "ease-out duration-300"
          From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          To: "opacity-100 translate-y-0 sm:scale-100"
        Leaving: "ease-in duration-200"
          From: "opacity-100 translate-y-0 sm:scale-100"
          To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
      -->
          <div
            ref="modal"
            relative
            transform
            overflow-hidden
            rounded-lg
            bg-white
            dark:bg-primary-600
            text-left
            shadow-xl
            transition-all
            sm:my-8
            w-full
            sm:max-w-3xl
          >
            <div bg-white dark:bg-primary-600 text-primary dark:text-gray-400>
              <header relative px-4 pt-4 pb-4 sm:p-6 sm:pb-4>
                <slot name="header">
                  <h2 class="headline-3 sm:headline-2">
                    {{ title }}
                  </h2>
                </slot>
                <AsButton transparent p-4 absolute top="2 sm:4" right="2 sm:4" icon="close" @click="onClose" />
              </header>
              <div p-4 sm:p-6>
                <slot name="content">
                  <p class="prose">{{ content }}</p>
                </slot>
              </div>
            </div>
            <footer class="px-4 py-3 flex justify-end">
              <slot name="footer"></slot>
            </footer>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>
