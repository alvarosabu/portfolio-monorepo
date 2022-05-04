<script lang="ts" setup>
import 'uno.css'
import AsImg from './AsImg.vue'
import { imgCaptionType, imgLoadingMode } from './const'

function initState() {
  return {
    src: 'https://images.unsplash.com/photo-1585366119957-e9730b6d0f60?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2102&q=80',
    alt: 'Awiwi',
    caption: 'Talking About it',
    imgCaptionType: imgCaptionType.OUTSIDE,
    loading: imgLoadingMode.EAGER,
  }
}
</script>

<template>
  <Story title="AsImg">
    <Variant title="playground" :init-state="initState">
      <template #default="{ state }">
        <AsImg v-bind="state" />
      </template>

      <template #controls="{ state }">
        <HstText title="src" v-model="state.src" />
      </template>
    </Variant>
  </Story>
</template>
