<script lang="ts" setup>
import 'uno.css'
import AsImg from './AsImg.vue'
import {
  imgAspectRatios,
  imgCaptionType,
  imgFitModes,
  imgLoadingMode,
} from './const'

function initState() {
  return {
    src: 'https://images.unsplash.com/photo-1585366119957-e9730b6d0f60?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2102&q=80',
    alt: 'Awiwi',
    aspectRatio: imgAspectRatios[0],
    objectFit: imgFitModes.COVER,
    caption: 'Talking About it',
    captionType: imgCaptionType.OUTSIDE,
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
        <HstText title="Url" v-model="state.src" />
        <!--TODO: Replace this with HstSelect when is finished -->
        <HstText title="Aspect ratio" v-model="state.aspectRatio" />
        <HstText title="Caption" v-model="state.caption" />
        <HstText title="Caption type" v-model="state.captionType" />
        <HstText title="Object fit" v-model="state.objectFit" />
        <HstText title="Loading mode" v-model="state.loading" />
        <!--  <HstSelect
          title="Aspect ratio"
          v-model="state.aspectRatio"
          :options="imgAspectRatios"
        /> -->
      </template>
    </Variant>
  </Story>
</template>
