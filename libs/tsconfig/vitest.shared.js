// eslint-disable-next-line import/no-extraneous-dependencies
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['vitest-canvas-mock'],
    environmentOptions: {
      jsdom: {
        resources: 'usable',
      },
    },
  },
})
