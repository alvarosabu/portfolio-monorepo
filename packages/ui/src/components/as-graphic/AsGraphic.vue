<script setup lang="ts">
import { useLogger } from '/@/composables/useLogger'
import { graphicType, graphicTypeMap } from './const'

const props = defineProps({
  type: {
    type: String,
    default: graphicType.DOTS,
    validator: (val: string) => {
      const { logError } = useLogger()
      const valid = Object.values(graphicType).includes(val as graphicType)
      if (!valid) {
        logError(
          `Invalid button variant specified "${val}". Valid values are [${Object.values(
            graphicType,
          )}]`,
        )
      }
      return valid
    },
  },
})
</script>
<template>
  <component :is="graphicTypeMap[type]" />
</template>
