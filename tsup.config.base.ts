import type { Format, Options } from 'tsup'

export const defaultConfig = (
  config: Omit<Options, 'external' | 'minify'>,
  options: Options,
): Options => ({
  clean: !options.watch,
  target: 'esnext',
  // dts: true,
  minify: !options.watch,
  loader: {
    '.node': 'file',
  },
  format: ['esm'] as Format[],
  // external: ['fsevents'],
  ...config,
})
