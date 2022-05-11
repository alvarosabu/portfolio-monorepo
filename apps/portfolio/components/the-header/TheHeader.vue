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
</script>
<template>
  <transition
    name="fade"
    enter-active-class="animate-fade-in animate-duration-200 animate-count-1"
    leave-active-class="animate-fade-out animate-duration-200 animate-count-1"
  >
    <div
      w-full
      h-full
      fixed
      inset-0
      bg="black opacity-50"
      v-show="showMenu && isMobile"
    ></div>
  </transition>
  <div ref="navMenu">
    <header
      w-full
      fixed
      top-0
      z-60
      bg="white dark:primary-500"
      text="dark:gray-200"
    >
      <div
        md:container
        mx-auto
        p="x-4 md:x-0 md:y-2"
        flex
        justify-between
        items-center
      >
        <TheLogo class="animate-tada animate-count-1" />
        <div flex items-center>
          <AsDarkModeSwitch mr-8 />
          <TheNav :menu="storiesForNav" v-if="!isMobile" />
          <AsButton
            ml-4
            border-transparent
            bg-transparent
            w-16
            h-14
            text="md dark:gray-50"
            cursor-pointer
            :icon="showMenu ? 'close' : 'menu'"
            @click="toggleMenu"
            flat="true"
            v-if="isMobile"
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
        w-full
        fixed
        top-13
        bg-white
        dark:bg-primary-500
        z-50
        :menu="storiesForNav"
        v-show="showMenu && isMobile"
        orientation="vertical"
      />
    </transition>
  </div>
</template>
