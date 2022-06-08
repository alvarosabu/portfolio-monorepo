import { defineConfig } from 'cypress'

export default defineConfig({
  component: {
    /*    setupNodeEvents(on, config) {}, */
    specPattern: 'src/**/*.cy.ts',
    devServer: {
      framework: 'vue',
      bundler: 'vite',
    },
  },
})
