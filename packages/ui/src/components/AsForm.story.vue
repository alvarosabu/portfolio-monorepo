<script setup lang="ts">
import { reactive, ref } from 'vue'
import { required, FieldTypes, email, InputValidator } from '/@/composables/useValidation'
import { hstEvent } from 'histoire/client'

import AsTextInput from './as-text-input/AsTextInput.vue'
import AsButton from './as-button/AsButton.vue'

const form = reactive({
  name: {
    label: 'Name',
    value: '',
    validations: [
      {
        validator: required,
        type: 'required',
        text: 'This field is required',
      },
    ],
  },
  email: {
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
  },
})

const isSummited = ref(false)

const values = reactive({
  name: '',
  email: '',
})

function onSubmit() {
  isSummited.value = true

  hstEvent('My event', values)
}
</script>
<template>
  <Story title="AsForm">
    <Variant title="playground">
      <form action="" class="p-4 w-1/2" @submit.prevent="onSubmit">
        <AsTextInput
          v-model="values.name"
          :label="form.name.label"
          :type="FieldTypes.TEXT"
          :validations="form.name.validations as InputValidator[]"
          :force-validation="isSummited"
        />
        <AsTextInput
          v-model="values.email"
          :label="form.email.label"
          :type="FieldTypes.EMAIL"
          :validations="form.email.validations as InputValidator[]"
          :force-validation="isSummited"
        />
        <footer class="py-4 flex justify-end">
          <AsButton type="submit">Submit</AsButton>
        </footer>
      </form>
    </Variant>
  </Story>
</template>
