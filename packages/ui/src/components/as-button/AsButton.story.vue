<script lang="ts" setup>
import 'uno.css'
import AsButton from './AsButton.vue'
import { btnVariant } from './const'

function initState() {
  return {
    label: 'Awiwi',
    variant: btnVariant.PRIMARY,
    flat: false,
    outline: false,
    disabled: false,
    icon: null,
    iconRight: null,
  }
}
</script>

<template>
  <Story title="AsButton">
    <Variant title="playground" :init-state="initState">
      <template #default="{ state }">
        <AsButton
          :label="state.label"
          :variant="state.variant"
          :flat="state.flat"
          :outline="state.outline"
          :disabled="state.disabled"
          :icon="state.icon"
          :icon-right="state.iconRight"
        />
      </template>

      <template #controls="{ state }">
        <HstText title="Label" v-model="state.label" />
        <HstText title="Variant" v-model="state.variant" />
        <HstCheckbox title="Flat" v-model="state.flat"> Flat </HstCheckbox>
        <HstCheckbox title="Outline" v-model="state.outline">
          Outline
        </HstCheckbox>
        <HstCheckbox title="Disabled" v-model="state.disabled">
          Disabled
        </HstCheckbox>
        <HstText title="Icon" v-model="state.icon" />
        <HstText title="IconRight" v-model="state.iconRight" />
      </template>
    </Variant>

    <Variant title="Primary" icon="carbon:star-filled" icon-color="#10B981">
      <AsButton variant="primary"> Awiwi </AsButton>
    </Variant>

    <Variant title="Secondary" icon="carbon:star-filled" icon-color="#34D399">
      <AsButton variant="primary"> Awiwi </AsButton>
    </Variant>

    <Variant title="Icon" icon="carbon:logo-github" icon-color="#10B981">
      <AsButton variant="primary" :icon="'github'"> Awiwi </AsButton>
    </Variant>
    <Variant title="IconRight" icon="carbon:download" icon-color="#10B981">
      <AsButton variant="primary" :icon-right="'download'" label="Download" />
    </Variant>
  </Story>
</template>
