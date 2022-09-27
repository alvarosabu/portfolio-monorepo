<script setup lang="ts">
import { reactive, watch } from 'vue'
import {
  InputControl,
  InputValidator,
  FieldTypes,
  useInputValidation,
  isEmptyInputValue,
} from '/@/composables/useValidation'

const props = defineProps<{
  label?: string
  modelValue: string
  required?: boolean
  validations?: InputValidator[]
  type: FieldTypes
  forceValidation?: boolean
}>()

const control = reactive<InputControl>({
  dirty: false,
  valid: true,
  errors: {},
  touched: false,
  value: props.modelValue,
  validations: props.validations,
})

const emit = defineEmits(['update:modelValue'])

const { validate } = useInputValidation(control)

function onInput($event: Event) {
  const element = $event.target as HTMLInputElement
  control.value = element.value
  emit('update:modelValue', element.value)
}

function onBlur() {
  if (isEmptyInputValue(control.value)) {
    control.dirty = false
  } else {
    control.dirty = true
  }
  validate()
}

watch(
  () => props.forceValidation,
  value => {
    if (value) {
      validate()
    }
  },
)
</script>
<template>
  <div class="px-4 mb-2">
    <label
      v-if="label"
      class="font-display text-primary-400 dark:text-light-400"
      :class="{ 'important-text-red-500': !control.valid, 'important-text-green-500': control.valid && control.dirty }"
      >{{ label }} <span v-if="required" aria-hidden="true">*</span></label
    >
    <input
      outline-none
      border-t-none
      border-x-none
      border-b-1
      bg-transparent
      border-primary-400
      dark:border-light-400
      text-primary-400
      dark:text-light-400
      :class="{ 'important-text-red-500 important-border-red-500': !control.valid }"
      w-full
      py-4
      font-sans
      :type="type"
      :value="modelValue"
      @input="onInput"
      @blur="onBlur"
    />
    <div class="text-red-500 text-xs h-4 inline-block">
      <span v-for="error in control.errors" :key="error">{{ error }}</span>
    </div>
  </div>
</template>
