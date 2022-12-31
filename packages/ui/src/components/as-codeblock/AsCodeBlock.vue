<script setup lang="ts">
import { ref, h, computed } from 'vue'
import AsButton from '/@/components/as-button/AsButton.vue'

import { useLogger } from '@alvarosabu/use'
import { useSyntaxHighlighter } from '/@/composables/useSyntaxHighlighter'

const props = defineProps({
  language: {
    type: String,
  },
  code: {
    type: String,
  },
})

const showCopyButton = ref(false)

const { error } = useLogger()

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
  } catch (errorMsg) {
    error('There was an error copying content to clipboard', errorMsg as Error)
  }
}

const { highlighter } = await useSyntaxHighlighter()

const codeHtml = highlighter.codeToHtml(props.code as string, { lang: formattedLanguage.value })

const root = () => h('div', { innerHTML: codeHtml.replace('class="shiki"', 'class="shiki not-prose"') })
</script>
<template>
  <div class="relative" @mouseenter="showCopyButton = true" @mouseleave="showCopyButton = false">
    <Transition
      name="fade-language"
      enter-active-class="opacity-1 transition-opacity duration-200"
      leave-active-class="opacity-0 transition-opacity duration-200"
    >
      <span v-show="!showCopyButton" class="absolute top-1 right-1 px-3 text-primary-300">{{ formattedLanguage }}</span>
    </Transition>
    <Transition
      name="fade-copy"
      enter-active-class="opacity-1 transition-opacity duration-200"
      leave-active-class="opacity-0 transition-opacity duration-200"
    >
      <AsButton
        v-if="showCopyButton"
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

.dark {
  --shiki-color-background: #273341;
}

@media (prefers-color-scheme: dark) {
  :root {
    --shiki-color-background: #273341;
  }
}
pre.shiki {
  @apply p-4 rounded overflow-scroll;
}
code {
  @apply font-mono font-bold;
}
</style>
