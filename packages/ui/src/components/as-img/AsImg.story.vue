<script lang="ts" setup>
import 'uno.css'
import AsImg from './AsImg.vue'
import {
  imgAspectRatios,
  imgCaptionType,
  imgFitModes,
  imgLoadingMode,
  imgFitModesList,
  imgLoadingModeList,
  imgCaptionTypeList,
} from './const'

function initState() {
  return {
    // eslint-disable-next-line
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
        <HstText v-model="state.src" title="Url" />
        <HstSelect v-model="state.aspectRatio" title="Aspect ratio" :options="imgAspectRatios" />
        <HstText v-model="state.caption" title="Caption" />
        <HstSelect v-model="state.captionType" title="Caption Type" :options="imgCaptionTypeList" />
        <HstSelect v-model="state.objectFit" title="Object fit" :options="imgFitModesList" />
        <HstSelect v-model="state.loading" title="Loading Mode" :options="imgLoadingModeList" />
      </template>
    </Variant>
  </Story>
</template>
