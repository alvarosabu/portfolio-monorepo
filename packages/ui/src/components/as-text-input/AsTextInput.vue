<script setup lang="ts">
defineProps<{ modelValue: string; label: string }>()
const emit = defineEmits(['update:modelValue'])

function onInput($event: Event) {
  const element = $event.target as HTMLInputElement
  emit('update:modelValue', element.value)
}
</script>
<template>
  <div class="px-4">
    <label v-if="label" class="font-display text-primary-400">{{ label }}</label>
    <input
      outline-none
      border-t-none
      border-x-none
      border-b-1
      border-primary-400
      text-primary-400
      w-full
      py-4
      font-sans
      :value="modelValue"
      @input="onInput"
    />
  </div>
</template>
