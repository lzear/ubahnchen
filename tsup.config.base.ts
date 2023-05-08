import type { Format, Options } from 'tsup'

export const defaultConfig = (
  config: Omit<Options, 'external' | 'format' | 'minify' | 'dts'>,
  options: Options,
): Options => ({
  ...config,
  clean: !options.watch,
  target: 'esnext',
  dts: true,
  minify: !options.watch,
  loader: {
    '.node': 'file',
  },
  format: ['cjs', 'esm'] as Format[],
  // external: ['fsevents'],
})
