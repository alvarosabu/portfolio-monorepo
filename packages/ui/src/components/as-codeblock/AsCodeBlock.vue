<script setup lang="ts">
import { ref, h, computed } from 'vue'
import { getHighlighter } from 'shiki-es'
import AsButton from '/@/components/as-button/AsButton.vue'

import { useLogger } from '/@/composables/useLogger'

const props = defineProps({
  language: {
    type: String,
  },
  code: {
    type: String,
  },
})

const showCopyButton = ref(false)

const { logError } = useLogger()

const copySuccesfully = ref(false)

const formattedLanguage = computed(() => {
  if (props.language === 'javascript') {
    return 'js'
  }
  if (props.language === 'typescript') {
    return 'ts'
  }
  return props.language
})

async function copyToClipboard() {
  try {
    await navigator.clipboard.writeText(props.code as unknown as string)
    copySuccesfully.value = true

    setTimeout(() => {
      copySuccesfully.value = false
    }, 2000)
  } catch (error) {
    logError('There was an error copying content to clipboard')
  }
}

const highlighter = await getHighlighter({ theme: 'css-variables' })
const codeHtml = highlighter.codeToHtml(props.code as string, { lang: formattedLanguage.value })

const root = h('div', { class: 'not-prose', innerHTML: codeHtml })
</script>
<template>
  <div class="not-prose relative" @mouseenter="showCopyButton = true" @mouseleave="showCopyButton = false">
    <span class="absolute top-1 right-1 py-2 px-3 text-primary-300">{{ formattedLanguage }}</span>
    <Transition
      name="fade"
      enter-active-class="animate-fade-in animate-duration-200 animate-count-1"
      leave-active-class="animate-fade-out animate-duration-200 animate-count-1"
    >
      <AsButton
        v-show="showCopyButton"
        class="absolute top-1 right-1"
        :class="{ 'text-green-500': copySuccesfully }"
        size="sm"
        :icon="copySuccesfully ? 'check' : 'copy'"
        @click="copyToClipboard()"
      />
    </Transition>

    <root />
  </div>
</template>

<style>
:root {
  --shiki-color-text: #88e5c3;
  --shiki-color-background: #3e5166;
  --shiki-token-constant: #7aceaf;
  --shiki-token-string: #f8e4aa;
  --shiki-token-comment: #a0ada0;
  --shiki-token-keyword: #ff80bf;
  --shiki-token-parameter: #f8e4aa;
  --shiki-token-function: #e5f1af;
  --shiki-token-string-expression: #f8e4aa;
  --shiki-token-punctuation: #fbfbfb;
  --shiki-token-link: #b3f9df;
}
pre.shiki {
  @apply p-4 rounded;
}
code {
  @apply font-mono font-bold;
}
</style>
