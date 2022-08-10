<script lang="ts" setup>
import { reactive, computed } from 'vue'
import AsIcon from './AsIcon.vue'
import { iconList } from './const'

const state = reactive({
  name: 'github',
})

const iconOptions = computed(() =>
  iconList.map(([key, value]) => ({
    label: value,
    value: key,
  })),
)
</script>

<template>
  <Story title="AsIcon">
    <Variant title="playground">
      <AsIcon :name="state.name" />

      <template #controls>
        <HstSelect v-model="state.name" title="Icon" :options="iconOptions" />
      </template>
    </Variant>
  </Story>
</template>
