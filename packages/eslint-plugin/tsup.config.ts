import { defineConfig, type Format } from 'tsup'

import { defaultConfig } from '../../tsup.config.base'

export default defineConfig((options) => {
  return defaultConfig(
    {
      tsconfig: './tsconfig.json',
      entry: ['./src/index.ts'],

      format: ['esm', 'cjs'] as Format[],
      // dts: true
    },
    options,
  )
})
