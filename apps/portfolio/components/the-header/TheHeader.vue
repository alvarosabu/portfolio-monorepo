<script setup lang="ts">
import { ref } from 'vue'

const { storiesForNav } = useStories()
const { isMobile } = useBreakpoints()

const navMenu = ref(null)
// Feature Menu visibiliy
const showMenu = ref(false)

function toggleMenu() {
  showMenu.value = !showMenu.value
}

const route = useRoute()

watch(route, () => {
  showMenu.value = false
})
</script>
<template>
  <transition
    name="fade"
    enter-active-class="animate-fade-in animate-duration-200 animate-count-1"
    leave-active-class="animate-fade-out animate-duration-200 animate-count-1"
  >
    <div
      v-show="showMenu && isMobile"
      w-full
      h-full
      fixed
      inset-0
      bg="black opacity-50"
      @click="showMenu = false"
    ></div>
  </transition>
  <div ref="navMenu">
    <header w-full fixed top-0 z-60 bg="white dark:primary-500" text="dark:gray-200" role="banner">
      <div md:container mx-auto p="x-4 md:x-0 md:y-2" flex justify-between items-center>
        <TheLogo class="animate-tada animate-count-1" />
        <div flex items-center>
          <AsDarkModeSwitch mr-8 data-cy="dark-switch" />
          <TheNav hidden md:block :menu="storiesForNav" />
          <AsButton
            block
            md:hidden
            ml-4
            border-transparent
            bg-transparent
            w-16
            h-14
            text="md dark:gray-50"
            cursor-pointer
            :icon="showMenu ? 'close' : 'menu'"
            flat="true"
            :aria-label="showMenu ? 'Close menu' : 'Open menu'"
            @click="toggleMenu"
          />
        </div>
      </div>
    </header>
    <transition
      name="fade"
      enter-active-class="animate-slide-in-down animate-duration-200 animate-count-1"
      leave-active-class="animate-slide-out-up animate-duration-200 animate-count-1"
    >
      <TheNav
        v-show="showMenu && isMobile"
        w-full
        fixed
        top-13
        bg-white
        dark:bg-primary-500
        z-50
        :menu="storiesForNav"
        orientation="vertical"
      />
    </transition>
  </div>
</template>
