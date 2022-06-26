<script lang="ts" setup>
import { PropType } from 'vue'
import { navOrientation, MenuItem, navOrigin } from './consts'

defineProps({
  menu: {
    type: Array as PropType<MenuItem[]>,
    default: () => [],
  },
  orientation: {
    type: String,
    default: navOrientation.HORIZONTAL,
  },
  parent: {
    type: String,
    default: navOrigin.HEADER,
  },
})
</script>
<template>
  <nav :aria-label="`${parent} navigation`" data-cy="main-navigation">
    <ul
      v-if="menu.length > 0"
      flex
      :class="{
        'flex-col': orientation === navOrientation.VERTICAL,
      }"
    >
      <li
        v-for="link in menu"
        :key="link.label"
        font-bold
        mr-4
        important-w-full
        text="primary-400 hover:bg-md dark:gray-50"
      >
        <nuxt-link
          :class="{
            'p-4 !w-full inline-flex': orientation === navOrientation.VERTICAL,
          }"
          :to="link.path"
        >
          {{ link.label }}
        </nuxt-link>
      </li>
    </ul>
  </nav>
</template>
