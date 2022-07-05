import { resolve } from 'path'
import { fileURLToPath } from 'url'
import { defineNuxtModule, addPlugin, addComponentsDir } from '@nuxt/kit'

export interface ModuleOptions {
  addPlugin: boolean
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'nuxt-markdownit',
    configKey: 'markdownit',
  },
  /*  defaults: {
    addPlugin: true,
  }, */
  setup(options, nuxt) {
    const runtimeDir = fileURLToPath(new URL('./runtime', import.meta.url))
    nuxt.options.build.transpile.push(runtimeDir)
    addPlugin(resolve(runtimeDir, 'plugin'))

    addComponentsDir({
      path: resolve(runtimeDir, 'components'),
      pathPrefix: false,
      extensions: ['vue', 'ts'],
      prefix: '',
      level: 999,
      global: true,
    })
  },
})
