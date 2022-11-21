<script setup lang="ts"></script>
<template>
  <NuxtImg
    class="important-my-16 important-mx-auto"
    v-bind="$attrs"
    provider="storyblok"
    format="webp"
    object-fit="fill"
    sizes="sm:100vw md:655px"
  />
</template>
