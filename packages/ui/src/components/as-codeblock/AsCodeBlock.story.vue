<script lang="ts" setup>
import 'uno.css'
import { reactive } from 'vue'
import AsCodeBlock from './AsCodeBlock.vue'
const state = reactive({
  // eslint-disable-next-line max-len
  code: "const getProducts = async () => {\n  try {\n    return apolloClient.query({\n      query: FETCH_PRODUCTS,\n      variables: {\n        order_by: { created_at: 'asc' },\n      },\n    });\n  } catch (e) {\n    console.error('err', e);\n  }\n};",
  language: 'javascript',
})
</script>

<template>
  <Story title="AsCodeBlock">
    <Variant title="playground">
      <template #default>
        <Suspense>
          <AsCodeBlock :language="state.language" :code="state.code" />
        </Suspense>
      </template>
    </Variant>
  </Story>
</template>
