<script lang="ts" setup>
import 'uno.css'
import AsButton from './AsButton.vue'
import { btnVariant } from './const'

function initState() {
  return {
    variant: btnVariant.PRIMARY,
    flat: false,
    outline: false,
    disabled: false,
  }
}
</script>

<template>
  <Story title="AsButton">
    <Variant title="playground" :init-state="initState">
      <template #default="{ state }">
        <AsButton
          :variant="state.variant"
          :flat="state.flat"
          :outline="state.outline"
          :disabled="state.disabled"
        >
          Awiwi
        </AsButton>
      </template>

      <template #controls="{ state }">
        <HstText title="Variant" v-model="state.variant" />
        <HstCheckbox title="Flat" v-model="state.flat"> Flat </HstCheckbox>
        <HstCheckbox title="Outline" v-model="state.outline">
          Outline
        </HstCheckbox>
        <HstCheckbox title="Disabled" v-model="state.disabled">
          Disabled
        </HstCheckbox>
      </template>
    </Variant>

    <Variant title="Primary" icon="carbon:star-filled" icon-color="#10B981">
      <AsButton variant="primary"> Awiwi </AsButton>
    </Variant>
  </Story>
</template>
