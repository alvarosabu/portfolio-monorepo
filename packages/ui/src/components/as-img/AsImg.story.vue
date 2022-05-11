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
        <HstSelect
          title="Aspect ratio"
          v-model="state.aspectRatio"
          :options="imgAspectRatios"
        />
        <HstText title="Caption" v-model="state.caption" />
        <HstSelect
          title="Caption Type"
          v-model="state.captionType"
          :options="imgCaptionTypeList"
        />
        <HstSelect
          title="Object fit"
          v-model="state.objectFit"
          :options="imgFitModesList"
        />
        <HstSelect
          title="Loading Mode"
          v-model="state.loading"
          :options="imgLoadingModeList"
        />
      </template>
    </Variant>
  </Story>
</template>
