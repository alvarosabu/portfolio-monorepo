<script setup lang="ts">
import { computed } from 'vue'
import { graphicType, graphicTypeMap } from './const'
import { useLogger } from '@alvarosabu/use'

const props = defineProps({
  type: {
    type: String,
    default: graphicType.DOTS,
    validator: (val: string) => {
      const { error } = useLogger('[ AS 🎨]')

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
