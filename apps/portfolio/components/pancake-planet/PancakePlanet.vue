<script setup lang="ts">
import { useParallax } from '@vueuse/core'

/* tslint:disable-next-line */
import Blob from '~/assets/hero-blob.svg'
/* import Blob from '~/assets/hero-blob.svg'
import Dots from '~/assets/dots.svg' */

// TODO: move to @alvarosabu/utils

const browser = process.client ? navigator.userAgent : ''

const isSafari = /^((?!chrome|android).)*safari/i.test(browser)

/* const isChrome = /^chrome/i.test(browser) */

const props = defineProps({
  upsidedown: Boolean,
})

const getClasses = computed(() => [
  'pancake-planet',
  { 'planet-pancake--upsidedown': props.upsidedown },
])

const { getTimeOfTheDay } = useTime()
const pancakeClasses = computed(() => ['pancake', `glow-${getTimeOfTheDay()}`])

const backgroundImage = {
  backgroundImage: isSafari
    ? `url(/home/planet-pancake.png)`
    : `url(/home/planet-pancake.webp)`,
}

const planet = ref(null)
const parallax = reactive(useParallax(planet.value))

const blobStyle = computed(() => {
  const { roll, tilt } = parallax
  return {
    transform: `translate3d(${tilt * -20}px, 0, 0) rotate3d(1, 0, 0, ${
      roll * 20
    }deg)`,
  }
})
const dotsStyle = computed(() => {
  const { roll, tilt } = parallax
  return {
    transform: `translate3d(0, ${tilt * -20}px, 0) rotate3d(1, 0, 0, ${
      roll * 20
    }deg)`,
  }
})
</script>

<template>
  <div relative w-full h-full :class="getClasses" ref="planet">
    <AsGraphic
      :type="'dots'"
      absolute
      bottom="-10"
      left="-10"
      :style="dotsStyle"
    />
    <Blob absolute top="-40" right="-40" :style="blobStyle" />
    <div class="salto-angel" />
    <div class="waterfall" />
    <div class="big-tree" />
    <div class="small-tree" />
    <div :class="pancakeClasses" :style="backgroundImage" />
    <TheShevas absolute top="-40" left="8" />
  </div>
</template>

<style lang="scss">
.pancake-planet {
  @apply;

  .pancake {
    @apply relative w-465px h-full bg-cover;

    transform-style: preserve-3d;

    &::before {
      content: '';

      @apply rounded-full w-full h-full;

      transform: translateZ(-1px) scale(0.8);
    }
  }
}

.salto-angel {
  position: absolute;
  background-image: url('/home/salto-angel-mountain.png');
  width: 250px;
  height: 132px;
  transform: rotate(220deg);
  bottom: 2%;
  left: -10%;
}

.waterfall {
  position: absolute;
  bottom: 10%;
  left: 7%;
  background-image: url('/home/waterfall_stripe.png');
  width: 19px;
  height: 83px;
  transform: rotate(220deg);
  animation: waterfall-anim 1s steps(4) infinite; /* IE 10+ */
}

@keyframes waterfall-anim {
  from {
    background-position: 0;
  }

  to {
    background-position: -76px;
  }
}

.big-tree {
  position: absolute;
  background-image: url('/home/big-tree.png');
  width: 88px;
  height: 86px;
  right: 14%;
  bottom: -8%;
  transform: rotate(160deg);
}

.small-tree {
  position: absolute;
  background-image: url('/home/small-tree.png');
  width: 59px;
  height: 63px;
  right: 7%;
  bottom: 3%;
  transform: rotate(148deg);
}
</style>
