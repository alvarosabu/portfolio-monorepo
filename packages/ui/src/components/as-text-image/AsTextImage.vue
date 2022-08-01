<script setup lang="ts">
import { computed } from 'vue'
import { textImgDirection } from './const'
import AsImg from '/@/components/as-img/AsImg.vue'
import AsGraphic from '/@/components/as-graphic/AsGraphic.vue'

const props = defineProps({
  media: {
    type: Object,
    default: null,
  },
  direction: {
    type: String,
    default: textImgDirection.ROW,
  },
})

const isReverse = computed(() => props.direction === textImgDirection.REVERSE)
</script>
<template>
  <div
    class="flex"
    :class="
      isReverse
        ? 'important-flex-col-reverse sm:important-flex-row-reverse'
        : 'important-flex-col sm:important-flex-row'
    "
  >
    <div class="relative w-full sm:w-1/2 py-4 min-h-252px sm:min-h-325px">
      <AsGraphic class="absolute top-16 scale-75" :class="isReverse ? 'right-0' : 'left-0'" />
      <div class="absolute w-4/5 rounded-xl" :class="isReverse ? 'left-0' : 'right-0'">
        <AsImg class="shadow-lg" :src="media.src" :alt="media.alt" :aspect-ratio="media.aspectRatio" />
      </div>
    </div>
    <div class="w-full sm:w-1/2 prose" :class="isReverse ? 'sm:pr-16' : 'sm:pl-16'">
      <slot />
    </div>
  </div>
</template>
