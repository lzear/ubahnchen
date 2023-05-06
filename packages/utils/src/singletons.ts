/* eslint-disable @typescript-eslint/no-explicit-any */

export const defaultSerializer = (...arguments_: (string | number)[]) =>
  JSON.stringify(arguments_)

export class Singletons<
  A extends any[],
  R,
  S extends (...arguments_: A) => string = (...arguments_: A) => string,
> {
  private promises = new Map<string, R>()

  constructor(
    private promise: (...arguments_: A) => R,
    private serializer: S,
  ) {}

  public run(...arguments_: A): R {
    const serialized = this.serializer(...arguments_)
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    if (this.promises.has(serialized)) return this.promises.get(serialized)!
    const newPromise = this.promise(...arguments_)
    this.promises.set(serialized, newPromise)
    return newPromise
  }

  public delete(...arguments_: Parameters<S>) {
    this.promises.delete(this.serializer(...arguments_))
  }

  public clear() {
    this.promises.clear()
  }
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
