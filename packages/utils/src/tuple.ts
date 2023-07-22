import _ from 'lodash'

/**
 * From https://github.com/sindresorhus/type-fest/blob/f445cc690c4dac6c8fe3d58512d1fcf967f73e6c/source/readonly-tuple.d.ts
 * but without readonly
 */
type BuildTupleHelper<
  Element,
  Length extends number,
  Rest extends Element[],
> = Rest['length'] extends Length
  ? [...Rest] // Terminate with readonly array (aka tuple)
  : BuildTupleHelper<Element, Length, [Element, ...Rest]>

export type Tuple<Element, Length extends number> = number extends Length
  ? // Because `Length extends number` and `number extends Length`, then `Length` is not a specific finite number.
    Element[] // It's not fixed length.
  : BuildTupleHelper<Element, Length, []> // Otherwise it is a fixed length tuple.

export const toTuples = <T, N extends number>(
  list: T[],
  n: N,
): Tuple<T, N>[] => {
  if (list.length % n != 0)
    throw new Error(
      `list.length % n != 0 (${list.length} % ${n} == ${list.length % n})`,
    )
  const tuples = _.chunk(list, n) as Tuple<T, N>[]
  return tuples
}
