<script setup lang="ts">
import { computed } from 'vue'
import { useLogger } from '@alvarosabu/use'
import { graphicType, graphicTypeMap } from './const'

const props = defineProps({
  type: {
    type: String,
    default: graphicType.DOTS,
    validator: (val: string) => {
      const { error } = useLogger()

      const valid = Object.values(graphicType).includes(val as graphicType)
      if (!valid) {
        error(`Invalid button variant specified "${val}". Valid values are [${Object.values(graphicType)}]`)
      }
      return valid
    },
  },
})
const graphic = computed(() => {
  const { type } = props
  return graphicTypeMap[type]
})
</script>
<template>
  <component :is="graphic" />
</template>
