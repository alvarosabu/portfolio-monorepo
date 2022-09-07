<script setup lang="ts">
import { AsImg } from '@alvarosabu/ui'

import { useAttrs } from 'vue'

const attrs = useAttrs()

const root = () => h(AsImg, { class: 'important-my-16 important-mx-auto ', ...attrs, objectFit: 'fill' })
</script>
<template>
  <root />
</template>
