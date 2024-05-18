import type { StateCreator } from 'zustand'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type StateFromFunctions<T extends [...any]> = T extends [
  infer F,
  ...infer R,
]
  ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
    F extends (...arguments_: any) => object
    ? StateFromFunctions<R> & ReturnType<F>
    : unknown
  : unknown

export type StateCreatorWithSubscribe<Slice extends object> = StateCreator<
  Slice,
  [['zustand/subscribeWithSelector', never]]
>
