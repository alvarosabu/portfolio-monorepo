<script setup lang="ts">
import 'uno.css'
import AsDarkModeSwitch from './AsDarkModeSwitch.vue'
</script>
<template>
  <Story>
    <Variant title="playground">
      <template #default>
        <div p-4>
          <AsDarkModeSwitch />
        </div>
      </template>
    </Variant>
  </Story>
</template>
