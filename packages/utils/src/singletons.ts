/* eslint-disable @typescript-eslint/no-explicit-any */

type Serializable = string | number | null | boolean

export const defaultSerializer = (...arguments_: Serializable[]) =>
  JSON.stringify(arguments_)

type Cache<K, V> = Pick<Map<K, V>, 'has' | 'get' | 'delete' | 'clear'> & {
  set(key: K, value: V): void
}

export class Singletons<
  A extends any[],
  R,
  S extends (...arguments_: A) => string = (...arguments_: A) => string,
> {
  constructor(
    private promise: (...arguments_: A) => R,
    private serializer: S,
    private cache: Cache<string, R> = new Map<string, R>(),
  ) {}

  public run(...arguments_: A): R {
    const serialized = this.serializer(...arguments_)
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    if (this.cache.has(serialized)) return this.cache.get(serialized)!
    const newPromise = this.promise(...arguments_)
    this.cache.set(serialized, newPromise)
    return newPromise
  }

  public delete(...arguments_: Parameters<S>) {
    this.cache.delete(this.serializer(...arguments_))
  }

  public clear() {
    this.cache.clear()
  }
}

// type AllowedParameters<A, S> = { A: A; S: S } extends {
//   A: Serializable[]
//   B: any
// }
//   ? never
//   : { A: A; B: B }
//
// type AllowedSParameters<A> = A extends Serializable ? never : { A: A; B: B }

export function singletonize<A extends Serializable[], R>(
  promise: (...arguments_: A) => R,
  options?: {
    serializer?: (...arguments_: Serializable[]) => string
    cache?: Cache<string, R>
  },
): (...arguments_: A) => R
export function singletonize<
  A extends any[],
  R,
  S extends (...arguments_: A) => string,
>(
  promise: (...arguments_: A) => R,
  options: { serializer: S; cache?: Cache<string, R> },
): (...arguments_: A) => R

export function singletonize<
  A extends any[],
  R,
  S extends (...arguments_: A) => string,
>(
  promise: (...arguments_: A) => R,
  options?: { serializer?: S; cache?: Cache<string, R> },
) {
  const getSerializer = options?.serializer ?? defaultSerializer
  const cache = options?.cache ?? new Map<string, R>()

  const s = new Singletons(promise, getSerializer, cache)
  return (...arguments_: A) => s.run(...arguments_)
}

const UNIQUE_KEY = 'const'
export class SingletonUnique<A extends any[], R> extends Singletons<A, R> {
  constructor(promise: (...arguments_: A) => R) {
    super(promise, () => UNIQUE_KEY)
  }

  /**
   * @deprecated Use `clear`
   */
  public override delete() {
    this.clear()
  }
}

class ClearableSingletons extends Set<Singletons<any, any>> {
  constructor() {
    super()
  }

  public create<A extends any[], R, S extends (...arguments_: A) => string>(
    promise: (...arguments_: A) => R,
    serializer: S,
  ) {
    const singleton = new Singletons(promise, serializer)
    this.add(singleton)
    return singleton
  }
}

export const clearableSingletons = new ClearableSingletons()
