<script setup lang="ts">
/* tslint:disable-next-line */
import Logo from '@/assets/logo.svg'
/* tslint:disable-next-line */
import Nuxt from '@/assets/nuxt.svg'

import { navOrientation } from '../the-nav/consts'

const props = defineProps({
  blok: {
    type: Object,
    required: true,
  },
})

// Feature Menu
const { storiesForNav } = await useStories()
</script>
<template>
  <footer
    bg="gray-100 dark:primary-600"
    text="gray-100"
    p="8 sm:y-8"
    min-h-90px
    relative
    snap-start
  >
    <Logo m="x-auto b-16" />
    <div container mx-auto class="flex flex-col sm:(flex-row justify-between)">
      <div class="mb-8 sm:(w-1/2 mb-0)">
        <TheNav
          class="w-full sm:w-1/3 mb-8"
          :orientation="navOrientation.VERTICAL"
          :menu="storiesForNav"
          parent="footer"
        />
      </div>
      <div class="flex flex-col items-center sm:(w-1/3 items-end)">
        <SocialLinks mb-14 size="xl" :items="blok.socialLinks" />
        <div absolute left-0 bottom-0 px-4 w-full>
          <p
            flex
            justify-between
            items-center
            class="text-xs text-gray-600 dark:text-gray-50 sm:justify-end"
          >
            {{ blok.framework }}
            <AsIcon name="heart-fill" text-red-400 text-lg mx-2 />
            <Nuxt scale mr-4 />
            {{ blok.author }} &copy; {{ new Date().getFullYear() }}
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>
