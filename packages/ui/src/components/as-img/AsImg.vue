<script setup lang="ts">
import { computed, ref, StyleValue } from 'vue'
import { useLogger } from '/@/composables/useLogger'

import { imgFitModes, imgCaptionType, imgAspectRatios } from './const'

const props = defineProps({
  aspectRatio: {
    type: String,
    default: '16/9',
    validator: (val: string) => {
      const { logError } = useLogger()

      const valid = imgAspectRatios.includes(val)
      if (!valid) {
        logError(
          `Invalid image aspect-ratio specified "${val}". Valid values are [${imgAspectRatios}]`,
        )
      }
      return valid
    },
  },
  objectFit: {
    type: String,
    default: imgFitModes.COVER,
    validator: (val: string) => {
      const { logError } = useLogger()

      const valid = Object.values(imgFitModes).includes(val as imgFitModes)
      if (!valid) {
        logError(
          `Invalid object-ratio specified "${val}". Valid values are [${Object.values(
            imgFitModes,
          )}]`,
        )
      }
      return valid
    },
  },
  caption: String,
  captionMode: {
    type: String,
    default: imgCaptionType.OUTSIDE,
    validator: (val: string) => {
      const { logError } = useLogger()

      const valid = Object.values(imgCaptionType).includes(
        val as imgCaptionType,
      )
      if (!valid) {
        logError(
          `Invalid image caption mode specified "${val}". Valid values are [${Object.values(
            imgCaptionType,
          )}]`,
        )
      }
      return valid
    },
  },
  captionType: {
    type: String,
    default: imgCaptionType.OUTSIDE,
    validator: (val: string) => {
      const { logError } = useLogger()

      const valid = Object.values(imgCaptionType).includes(
        val as imgCaptionType,
      )
      if (!valid) {
        logError(
          `Invalid caption-type specified "${val}". Valid values are [${Object.values(
            imgCaptionType,
          )}]`,
        )
      }
      return valid
    },
  },
})

const emit = defineEmits<{
  (e: 'loaded', event: Event): void
  (e: 'error', errorMessage: string): void
}>()

const hasError = ref(false)
const loading = ref(true)
const { logWarning } = useLogger()

const imgStyles = computed(
  () =>
    ({
      aspectRatio: props.aspectRatio,
      objectFit: props.objectFit,
    } as StyleValue),
)

const imgClasses = computed(() => ({
  'rounded-lg w-full bg-gray-100 relative': true,
  'overflow-hidden :before:(bg-red-100 block absolute inset-0 bg-no-repeat bg-center)':
    hasError.value,
}))

const figureClasses = ref([
  `as-img`,
  'relative',
  'overflow-hidden',
  'rounded',
  'm-0',
  props.aspectRatio ? `aspect-${props.aspectRatio}` : null,
])

const captionClasses = computed(() => {
  switch (props.captionType) {
    case imgCaptionType.OUTSIDE:
      return ['text-sm', 'py-4']
    case imgCaptionType.BOTTOM:
      return 'absolute bg-black text-sm text-white bottom-0 bg-opacity-20 w-full p-4 text-center'
    case imgCaptionType.FULL:
      return 'absolute bg-black text-sm text-white inset-0 bg-opacity-20 w-full p-4 text-center flex items-center justify-center'
    default:
      break
  }
})

function onLoad(event: Event) {
  hasError.value = false
  loading.value = false

  emit('loaded', event)
}

function onError(event: Event) {
  hasError.value = true
  loading.value = false

  const { src } = event.target as HTMLImageElement
  const errorMessage = `Image source ${src} not found`

  emit('error', errorMessage)
  logWarning(errorMessage)
}
</script>
<template>
  <figure :class="figureClasses">
    <img
      v-bind="$attrs"
      :class="imgClasses"
      :style="imgStyles"
      @load="onLoad"
      @error="onError"
    />
    <!-- TODO: Implement when loaders -->
    <!--  <as-particle-loader
      size="4rem"
      class="absolute text-gray-400 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      v-if="loading"
    /> -->
    <figcaption :class="captionClasses" v-if="caption || $slots.default">
      <slot>{{ caption }} </slot>
    </figcaption>
  </figure>
</template>
