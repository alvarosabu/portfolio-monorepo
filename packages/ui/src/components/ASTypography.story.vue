<script lang="ts" setup>
import 'uno.css'
import '../styles/fonts.css'
</script>

<template>
  <Story title="AsTypography">
    <Variant title="playground">
      <template #default>
        <div class="prose">
          <h1>This is a headline h1</h1>
          <h2>This is a headline h2</h2>
          <h3>This is a headline h2</h3>
          <p>
            This is just normal text with some <strong>bold words</strong> and
            some <a href="#">links</a>
          </p>
        </div>
      </template>
    </Variant>
  </Story>
</template>
