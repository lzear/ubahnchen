import { defineConfig } from 'tsup'

import { defaultConfig } from '../../tsup.config.base.js'

export default defineConfig((options) => {
  return defaultConfig(
    {
      shims: true,
      entry: ['./src/index.ts'],
    },
    options,
  )
})
