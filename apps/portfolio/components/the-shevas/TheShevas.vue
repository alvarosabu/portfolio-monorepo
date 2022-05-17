<script lang="ts" setup>
const { outfit, currentAnimation, nextAnimation } = useShevas()

const getCSSAnimation = computed(() => {
  const { animation, animationDuration, steps, repeat } = currentAnimation.value
  return `${animation} ${animationDuration}s steps(${steps}) ${repeat || ''}`
})
</script>

<template>
  <div
    v-if="currentAnimation"
    :style="{
      backgroundImage: `url(/home/outfit${outfit}/${currentAnimation.backgroundImage})`,
      animation: getCSSAnimation,
    }"
    class="shevas"
    w-300px
    h-200px
    z-2
    @animationend="nextAnimation"
  ></div>
</template>

<style lang="scss">
.shevas {
  transform: translate3d(0, 0, 0);

  &__preloader {
    z-index: -1;
    visibility: hidden;
  }
}

/*
  Shevas Cel Animation
 */

@keyframes cel-play {
  from {
    background-position: 0;
  }

  to {
    background-position: -15300px;
  }
}

/*
   Shevas Cel Animation
  */

@keyframes painting-play {
  from {
    background-position: 0;
  }

  to {
    background-position: -1500px;
  }
}

/*
   Shevas Iddle Animation
  */

@keyframes iddle-play {
  from {
    background-position: 0;
  }

  to {
    background-position: -5700px;
  }
}

/*
   Shevas astronaut Animation
  */

@keyframes astronaut-play {
  from {
    background-position: 0;
  }

  to {
    background-position: -4500px;
  }
}

/*
   Shevas Eat Animation
  */

@keyframes eat-play {
  from {
    background-position: 0;
  }

  to {
    background-position: -32100px;
  } //original -32100
}

/*
   Shevas Goingtobed Animation
  */

@keyframes goingtobed-play {
  from {
    background-position: 0;
  }

  to {
    background-position: -12600px;
  }
}

/*
   Shevas leavingthebed Animation
  */

@keyframes leavingthebed-play {
  from {
    background-position: 0;
  }

  to {
    background-position: -12300px;
  }
}

/*
   Shevas enterthemac Animation
  */

@keyframes enterthemac-play {
  from {
    background-position: 0;
  }

  to {
    background-position: -8700px;
  }
}

/*
   Shevas inthemac Animation
  */

@keyframes inthemac-play {
  from {
    background-position: 0;
  }

  to {
    background-position: -1500px;
  }
}

/*
   Shevas leavingthemac Animation
  */

@keyframes leavingthemac-play {
  from {
    background-position: 0;
  }

  to {
    background-position: -4800px;
  }
}

/*
   Shevas sleeptightleft Animation
  */

@keyframes sleeptightleft-play {
  from {
    background-position: 0;
  }

  to {
    background-position: -2400px;
  }
}

/*
   Shevas sleeptightright Animation
  */

@keyframes sleeptightright-play {
  from {
    background-position: 0;
  }

  to {
    background-position: -2400px;
  }
}

/*
   Shevas sleepingleft Animation
  */

@keyframes sleepingleft-play {
  from {
    background-position: 0;
  }

  to {
    background-position: -600px;
  }
}

/*
   Shevas sleepingright Animation
  */

@keyframes sleepingright-play {
  from {
    background-position: 0;
  }

  to {
    background-position: -600px;
  }
}
</style>
