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

const { isMobile } = useBreakpoints()

// Feature Menu
const { storiesForNav } = await useStories()
</script>
<template>
  <LazyHydrate :when-visible="{ rootMargin: '50px' }">
    <footer
      bg="gray-100 dark:primary-600"
      text="gray-100"
      p="8 sm:y-8"
      height-vh
      sm:min-h-90px
      sm:height-auto
      relative
      snap-start
    >
      <Logo m="x-auto b-4 sm:b-16" @click="showVersion = !showVersion" />

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
          <SocialLinks v-if="blok" mb-14 :items="blok.socialLinks" />
          <div sm:absolute left-0 bottom-0 px-4 w-full flex justify-end align-center>
            <div
              flex
              flex-col
              sm:flex-row
              justify-between
              items-center
              class="prose text-gray-600 dark:text-gray-50 sm:justify-end w-full"
            >
              <RichTextRenderer v-if="blok && !isMobile" :document="blok.text" />

              <div flex items-center>
                <AsIcon name="heart-fill" text-red-400 text-lg mx-2 />
                <i i-logos-nuxt-icon text-2xl mr-2 />
                +
                <Storyblok class="scale-50%" mr-4 />
              </div>
              <!--  {{ blok.author }} &copy; {{ new Date().getFullYear() }} -->
            </div>
          </div>
        </div>
      </div>
    </footer>
  </LazyHydrate>
</template>
