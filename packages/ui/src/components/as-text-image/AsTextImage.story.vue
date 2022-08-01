<script lang="ts" setup>
import { reactive } from 'vue'

import {
  imgAspectRatios,
  imgCaptionType,
  imgFitModes,
  imgLoadingMode,
  /*   imgFitModesList,
  imgLoadingModeList,
  imgCaptionTypeList, */
} from '../as-img/const'

import AsTextImage from './AsTextImage.vue'
import { textImgDirection } from './const'

const state = reactive({
  media: {
    src: 'https://images.unsplash.com/photo-1585366119957-e9730b6d0f60?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2102&q=80',
    alt: 'Awiwi',
    aspectRatio: imgAspectRatios[0],
    objectFit: imgFitModes.COVER,
    caption: 'Talking About it',
    captionType: imgCaptionType.OUTSIDE,
    loading: imgLoadingMode.EAGER,
  },
  content:
    'Arepa ipsum dolor amet aliquam Santa Teresa In polarcita lorem chamo rompe colchón! Consequat lorem? Molleja et raspado magna vel Ut harina pan? Guachiman tequeños ut ensalada de gallina coroto ex enchufao sed. Magna macundales carajita criolla lorem ni lava ni presta la batea. ',
  direction: textImgDirection.ROW,
})
</script>

<template>
  <Story title="AsTextImage">
    <AsTextImage :media="state.media" :direction="state.direction">
      <p>{{ state.content }}</p>
    </AsTextImage>

    <template #controls>
      <HstText v-model="state.media.src" title="Url" />
      <!--   <HstSelect v-model="state.media.aspectRatio" title="Aspect ratio" :options="imgAspectRatios" /> -->
      <HstText v-model="state.media.caption" title="Caption" />
      <!--       <HstSelect v-model="state.media.captionType" title="Caption Type" :options="imgCaptionTypeList" />
      <HstSelect v-model="state.media.objectFit" title="Object fit" :options="imgFitModesList" />
      <HstSelect v-model="state.media.loading" title="Loading Mode" :options="imgLoadingModeList" /> -->
    </template>
  </Story>
</template>
