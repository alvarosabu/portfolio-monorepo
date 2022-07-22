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
  <div class="flex max-w-1024px" :class="isReverse ? 'flex-row-reverse' : 'flex-row'">
    <div class="relative w-1/2 py-4">
      <AsGraphic class="absolute top-16 scale-75" :class="isReverse ? 'right-0' : 'left-0'" />
      <div class="absolute w-4/5 rounded-xl shadow-lg" :class="isReverse ? 'left-0' : 'right-0'">
        <AsImg :src="media.src" :alt="media.alt" :aspect-ratio="media.aspectRatio" class="" />
      </div>
    </div>
    <div class="w-1/2 prose" :class="isReverse ? 'pr-16' : 'pl-16'">
      <slot />
    </div>
  </div>
</template>
