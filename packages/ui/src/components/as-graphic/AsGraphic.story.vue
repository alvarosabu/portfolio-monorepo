<script setup lang="ts">
import 'uno.css'
import AsGraphic from './AsGraphic.vue'
import { graphicType } from './const'

function initState() {
  return {
    type: graphicType.DOTS,
  }
}
</script>
<template>
  <Story
    title="AsGraphic"
    :layout="{
      type: 'grid',
      width: 300,
    }"
  >
    <Variant title="playground" :init-state="initState">
      <template #default="{ state }">
        <div p-4>
          <AsGraphic :type="state.type" />
        </div>
      </template>
      <template #controls="{ state }">
        <HstText title="Type" v-model="state.type" />
      </template>
    </Variant>

    <Variant title="Zigzag" icon="gg:shape-zigzag" icon-color="#10B981">
      <AsGraphic type="zigzag" />
    </Variant>

    <Variant title="Dots" icon="ph:dots-nine" icon-color="#34D399">
      <AsGraphic type="dots" />
    </Variant>

    <Variant title="Cross" icon="ion-close-round" icon-color="#34D399">
      <AsGraphic type="cross" />
    </Variant>

    <Variant title="Check" icon="ph-circle-bold" icon-color="#34D399">
      <AsGraphic type="donut" />
    </Variant>

    <Variant title="Curve Small" icon="mdi-vector-curve" icon-color="#34D399">
      <AsGraphic type="curve-small" />
    </Variant>

    <Variant title="Curve Big" icon="ph-bezier-curve-fill" icon-color="#34D399">
      <AsGraphic type="curve-big" />
    </Variant>

    <Variant
      title="Dots"
      icon="ic-baseline-format-color-fill"
      icon-color="#34D399"
    >
      <AsGraphic type="dots" class="text-teal-400" />
    </Variant>
  </Story>
</template>
