<script setup lang="ts">
import { reactive } from 'vue'
import { email, FieldTypes, InputValidator, required } from '/@/composables/useValidation'

import AsTextInput from './AsTextInput.vue'

const inputTextState = reactive({
  label: 'Label',
  value: '',
})

const inputUrlState = reactive({
  label: 'URL',
  value: '',
})

const inputEmailState = reactive({
  label: 'Email',
  value: '',
  validations: [
    {
      validator: required,
      type: 'required',
      text: 'This field is required',
    },
    {
      validator: email,
      type: 'email',
      text: 'Please enter a valid email',
    },
  ],
})
</script>
<template>
  <Story title="AsTextInput">
    <Variant title="playground">
      <AsTextInput v-model="inputTextState.value" :label="inputTextState.label" :type="FieldTypes.TEXT" />
    </Variant>
    <Variant title="TextInput">
      <AsTextInput v-model="inputTextState.value" :label="inputTextState.label" :type="FieldTypes.TEXT" />
    </Variant>
    <Variant title="UrlInput">
      <AsTextInput v-model="inputUrlState.value" :label="inputUrlState.label" :type="FieldTypes.URL" />
    </Variant>
    <Variant title="Email">
      <AsTextInput
        v-model="inputEmailState.value"
        :label="inputEmailState.label"
        :type="FieldTypes.EMAIL"
        :validations="(inputEmailState.validations as InputValidator[])"
      />
    </Variant>
  </Story>
</template>
