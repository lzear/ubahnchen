const jsonStringify = (...arguments_: unknown[]) => JSON.stringify(arguments_)

export class Singleton<Result, Arguments extends unknown[]> {
  private cache = new Map<string, Promise<Result>>()

  constructor(
    private fun: (...arguments_: Arguments) => Promise<Result>,
    private serializer: (...arguments_: Arguments) => string = jsonStringify,
  ) {}

  public exec(...arguments_: Arguments): Promise<Result> {
    const key = this.serializer(...arguments_)

    const m = this.cache.get(key)
    if (m) return m

    const result = this.fun(...arguments_)

    this.cache.set(key, result)

    return result
  }

  public clear(): void {
    this.cache.clear()
  }

  public clearKey(key: string): void {
    this.cache.delete(key)
  }

  public clearArgs(...arguments_: Arguments): void {
    this.clearKey(this.serializer(...arguments_))
  }
}

export class Singleton0<Result, Arguments extends unknown[]> {
  private cache = new Map<string, Result>()

  constructor(
    private fun: (...arguments_: Arguments) => Result,
    private serializer: (...arguments_: Arguments) => string = jsonStringify,
    private keepNumber: number = Number.POSITIVE_INFINITY,
  ) {}

  public exec(...arguments_: Arguments): Result {
    const key = this.serializer(...arguments_)

    const m = this.cache.get(key)
    if (m) return m

    if (this.keepNumber <= 1) this.clear()
    else if (this.cache.size >= this.keepNumber) {
      const keyToRemove = [...this.cache.keys()][0]
      if (keyToRemove) this.cache.delete(keyToRemove)
    }

    const result = this.fun(...arguments_)

    this.cache.set(key, result)

    return result
  }

  public clear(): void {
    this.cache.clear()
  }

  public clearKey(key: string): void {
    this.cache.delete(key)
  }

  public clearArgs(...arguments_: Arguments): void {
    this.clearKey(this.serializer(...arguments_))
  }
}
