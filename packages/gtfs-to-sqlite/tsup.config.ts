import { defineConfig } from 'tsup'

import { defaultConfig } from '../../tsup.config.base'

export default defineConfig((options) => {
  return defaultConfig(
    {
      shims: true,
      entry: ['./src/index.ts'],
    },
    options,
  )
})
