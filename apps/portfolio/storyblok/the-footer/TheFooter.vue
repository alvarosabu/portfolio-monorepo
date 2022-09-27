<script setup lang="ts">
import { RichTextRenderer } from '@marvr/storyblok-rich-text-vue-renderer'
import { navOrientation } from '@/components/the-nav/consts'
/* tslint:disable-next-line */
import Logo from '@/assets/logo.svg'
/* tslint:disable-next-line */
import Storyblok from '@/assets/storyblok.svg'

defineProps({
  blok: {
    type: Object,
    required: true,
  },
})

const showVersion = ref(false)

const { version, environment } = useVersion()

// Feature Menu
const { storiesForNav } = await useStories()
</script>
<template>
  <footer bg="gray-100 dark:primary-600" text="gray-100" p="8 sm:y-8" min-h-90px relative snap-start>
    <Logo m="x-auto b-16" @click="showVersion = !showVersion" />

    <div container mx-auto m="b-4" class="flex flex-col sm:(flex-row justify-between)">
      <div class="mb-8 sm:(w-1/2 mb-0)">
        <TheNav
          class="w-full sm:w-1/3 mb-8"
          :orientation="navOrientation.VERTICAL"
          :menu="storiesForNav"
          parent="footer"
        />
      </div>
      <div class="flex flex-col items-center sm:(w-1/3 items-end)">
        <SocialLinks mb-14 :items="blok.socialLinks" />
        <div absolute left-0 bottom-0 px-4 w-full flex justify-between align-center>
          <div>
            <span v-show="showVersion" text-xs text-gray-400 inline>{{ environment }} - v{{ version }}</span>
          </div>
          <div flex justify-between items-center class="prose text-gray-600 dark:text-gray-50 sm:justify-end">
            <RichTextRenderer v-if="blok" :document="blok.text" />

            <AsIcon name="heart-fill" text-red-400 text-lg mx-2 />
            <i i-logos-nuxt-icon text-2xl mr-2 />
            +
            <Storyblok class="scale-50%" mr-4 />
            {{ blok.author }} &copy; {{ new Date().getFullYear() }}
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
