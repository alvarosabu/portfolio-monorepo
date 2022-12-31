<script lang="ts" setup>
import { useLogger } from '@alvarosabu/use'

const { fetchStories } = useStories()

await fetchStories()

const { log, info, error, warn, table } = useLogger('[ AS 🐧]')

log('Hello from the default layout!')

info('Awiwi')

warn('This is a warning')

error('This is an error', new Error('404'))

table([
  { name: 'Alvaro', age: 26 },
  { name: 'Sara', age: 24 },
  { name: 'Paco', age: 2 },
])
</script>
<template>
  <div>
    <TheHeader />

    <div class="page">
      <slot />
    </div>
  </div>
</template>
