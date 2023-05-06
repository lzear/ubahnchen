import { StateCreator } from 'zustand'

export type StateFromFunctions<T extends [...any]> = T extends [
  infer F,
  ...infer R,
]
  ? F extends (...arguments_: any) => object
    ? StateFromFunctions<R> & ReturnType<F>
    : unknown
  : unknown

export type StateCreatorWithSubscribe<Slice extends object> = StateCreator<
  Slice,
  [['zustand/subscribeWithSelector', never]]
>
