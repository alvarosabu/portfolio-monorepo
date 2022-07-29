<script lang="ts" setup>
/* import Prism from 'prismjs' */
import 'uno.css'
import '../styles/base.css'
import { onMounted, ref } from 'vue'

const typescript = ref(`
 export interface HelloWorld {
    hello: string
  } 
`)
onMounted(() => {
  window.Prism = window.Prism || {}
  window.Prism.manual = false
  /*   Prism.highlightAll() */
})
</script>

<template>
  <Story title="Prism">
    <Variant title="playground">
      <template #default>
        <pre><code class="language-javascript">
  // code here for example
  function hello(){
     console.log(Hello World)
  }
</code></pre>
      </template>
    </Variant>
    <Variant title="javascript">
      <template #default>
        <pre><code class="language-javascript">
  // code here for example
  function hello(){
     console.log(Hello World)
  }
</code></pre>
      </template>
    </Variant>
    <Variant title="typescript">
      <template #default>
        <pre>
          <code class="language-typescript">{{ typescript }}
          </code>
        </pre>
      </template>
    </Variant>
  </Story>
</template>
