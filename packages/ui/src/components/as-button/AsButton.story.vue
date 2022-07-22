<script lang="ts" setup>
/* import { computed } from 'vue'

import { iconList } from '../as-icon' */
import AsButton from './AsButton.vue'
import { btnVariant /* btnVariantList */ } from './const'

const btnVariants = ['primary', 'secondary']

/* const iconOptions = computed(() =>
  iconList.map(([key, value]) => ({
    label: value,
    value: key,
  })),
) */
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
  <Story
    title="AsButton"
    :layout="{
      type: 'grid',
      width: 200,
    }"
  >
    <Variant title="playground" :init-state="initState">
      <template #default="{ state }">
        <AsButton
          :label="state.label"
          :variant="state.variant"
          :flat="state.flat"
          :outline="state.outline"
          :disabled="state.disabled"
        />
      </template>

      <template #controls="{ state }">
        <HstText v-model="state.label" title="Label" />
        <HstSelect v-model="state.variant" title="Variant" :options="btnVariants" />
        <HstCheckbox v-model="state.flat" title="Flat"> Flat </HstCheckbox>
        <HstCheckbox v-model="state.outline" title="Outline"> Outline </HstCheckbox>
        <HstCheckbox v-model="state.disabled" title="Disabled"> Disabled </HstCheckbox>
        <!--         <HstSelect v-model="state.icon" title="Icon" :options="iconOptions" />
        <HstSelect v-model="state.iconRight" title="IconRight" :options="iconOptions" /> -->
      </template>
    </Variant>

    <Variant title="Primary" icon="carbon:star-filled" icon-color="#10B981">
      <AsButton variant="primary"> Awiwi </AsButton>
    </Variant>

    <Variant title="Secondary" icon="carbon:star-filled" icon-color="#34D399">
      <AsButton variant="secondary"> Awiwi </AsButton>
    </Variant>

    <Variant title="Primary Outline" icon="carbon:outline">
      <AsButton variant="primary" outline> Awiwi </AsButton>
    </Variant>

    <Variant title="Secondary Outline" icon="carbon:outline">
      <AsButton variant="secondary" outline> Awiwi </AsButton>
    </Variant>

    <Variant title="Primary Flat" icon="carbon:outline">
      <AsButton variant="primary" flat> Awiwi </AsButton>
    </Variant>

    <Variant title="Secondary Flat" icon="carbon:outline">
      <AsButton variant="secondary" flat> Awiwi </AsButton>
    </Variant>

    <Variant title="Icon" icon="carbon:logo-github" icon-color="#10B981">
      <AsButton variant="primary" :icon="'github'"> Awiwi </AsButton>
    </Variant>

    <Variant title="IconRight" icon="carbon:download" icon-color="#10B981">
      <AsButton variant="primary" :icon-right="'download'" label="Download" />
    </Variant>

    <Variant title="Only Icon" icon="carbon:star-filled" icon-color="#10B981">
      <AsButton variant="primary" icon="term" />
    </Variant>
  </Story>
</template>

<style>
.__histoire-sandbox > div {
  padding: 1rem;
}
</style>
