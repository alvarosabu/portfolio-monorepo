<script setup lang="ts">
import AsButton from '/@/components/as-button/AsButton.vue'

defineProps<{
  title?: string
  isOpen: boolean
  content?: string
}>()
</script>
<template>
  <div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
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
      <div v-show="isOpen" class="fixed inset-0 z-10 overflow-y-auto">
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
            class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"
          >
            <div class="bg-white">
              <header relative px-4 pt-4 pb-4 sm:p-6 sm:pb-4>
                <slot name="header">
                  <h2 id="modal-title" class="headline-1">
                    {{ title }}
                  </h2>
                </slot>
                <AsButton transparent p-4 absolute top-4 right-4 icon="close" />
              </header>
              <div p-4 sm:p-6>
                <slot name="content">
                  <p class="prose">{{ content }}</p>
                </slot>
              </div>
            </div>
            <footer class="px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              <slot name="footer"></slot>
            </footer>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>
