<script lang="ts" setup></script>
<template>
  <div>
    <TheHeader />

    <div class="page mt-16 relative">
      <AsGraphic class="fixed left-0 blur-sm" type="blob" />
      <slot />
    </div>
  </div>
</template>
