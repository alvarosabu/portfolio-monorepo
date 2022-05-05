<script setup lang="ts">
import AsImg from '/@/components/as-img/AsImg.vue'

const props = defineProps({
  title: {
    type: String,
    default: '',
  },
  subtitle: {
    type: String,
    default: '',
  },
  media: {
    type: String,
    default: '',
  },
  content: {
    type: String,
    default: '',
  },
})
</script>
<template>
  <div
    class="as-card"
    border="1 gray-300 rounded"
    text="primary-500 dark:gray-100 left"
    font="sans"
    w-full
    inline-flex
    flex-col
    cursor-pointer
  >
    <slot name="header">
      <header>
        <AsImg w-full rounded-none v-if="media" :src="media" />
        <h2 v-if="title" font="bold display" text="base lg" p-4 m-0>
          <slot name="title">{{ title }}</slot>
        </h2>
        <p m-0 pl-4 font-typewrite text-xs v-if="subtitle">
          <slot name="subtitle">{{ subtitle }}</slot>
        </p>
      </header>
    </slot>
    <slot name="content">
      <div text-sm p-4>
        {{ content }}
      </div>
    </slot>
    <slot name="footer">
      <footer flex w-full text-sm justify-end></footer>
    </slot>
  </div>
</template>
