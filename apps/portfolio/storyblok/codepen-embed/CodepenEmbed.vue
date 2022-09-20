<script setup lang="ts">
defineProps({
  blok: {
    type: Object,
    required: true,
  },
})
const codepenEmbed = ref(null)

watch(
  () => codepenEmbed.value,
  () => {
    const codepenScript = document.createElement('script')
    codepenScript.setAttribute('src', 'https://cpwebassets.codepen.io/assets/embed/ei.js')
    codepenScript.setAttribute('async', 'true')
    codepenEmbed.value.appendChild(codepenScript)
  },
)
</script>
<template>
  <div ref="codepenEmbed" class="rounded overflow-hidden break-out-prose my-8">
    <p
      class="codepen"
      data-height="500"
      data-default-tab="html,result"
      :data-slug-hash="blok.penId"
      :data-user="blok.author"
      style="
        height: 500px;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 2px solid;
        margin: 1em 0;
        padding: 1em;
      "
    >
      <span>
        See the Pen <a :href="`https://codepen.io/${blok.author}/pen/${blok.penId}`"> Pen</a> by {{ blok.author }} (<a
          :href="`https://codepen.io/${blok.author}`"
          >@{{ blok.author }} </a
        >) on <a href="https://codepen.io">CodePen</a>.
      </span>
    </p>
  </div>
</template>
