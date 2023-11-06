// eslint-disable-next-line import/no-extraneous-dependencies
import { defineConfig } from 'tsup'

import { defaultConfig } from '../../tsup.config.base.js'

export default defineConfig((options) => {
  return defaultConfig(
    {
      entry: ['./src/index.ts'],
    },
    options,
  )
})
