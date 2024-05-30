import {
  ClearableSingletons,
  clearableSingletons,
  defaultSerializer,
  singletonize,
  Singletons,
  SingletonUnique,
} from './singletons'

describe(SingletonUnique, () => {
  it('calls the function once', () => {
    const mock = vi.fn()
    const singleton = new SingletonUnique(mock)
    singleton.run()
    expect(mock).toHaveBeenCalledTimes(1)
    singleton.run()
    expect(mock).toHaveBeenCalledTimes(1)
  })

  it('clears', () => {
    const mock = vi.fn()
    const singleton = new SingletonUnique(mock)
    singleton.run()
    expect(mock).toHaveBeenCalledTimes(1)
    singleton.clear()
    singleton.run()
    expect(mock).toHaveBeenCalledTimes(2)
    singleton.delete()
    singleton.run()
    expect(mock).toHaveBeenCalledTimes(3)
  })

  it('deletes', () => {
    const mock = vi.fn((a: number, b: number) => a + b)
    const singleton = new Singletons(mock, defaultSerializer)
    expect(singleton.run(1, 2)).toBe(3)
    expect(mock).toHaveBeenCalledTimes(1)
    expect(singleton.run(3, 4)).toBe(7)
    expect(mock).toHaveBeenCalledTimes(2)
    expect(singleton.run(1, 2)).toBe(3)
    expect(singleton.run(3, 4)).toBe(7)
    expect(mock).toHaveBeenCalledTimes(2)
    singleton.delete(1, 2)
    expect(singleton.run(1, 2)).toBe(3)
    expect(mock).toHaveBeenCalledTimes(3)
  })
})

describe(singletonize, () => {
  it('required custom serializer if params arent serializable', () => {
    singletonize(() => null)
    singletonize(() => null, { serializer: defaultSerializer })

    // @ts-expect-error ✅ as expected
    singletonize((a: () => null) => a)
    singletonize((a: () => null) => a, { serializer: () => '' })
  })
})

describe(ClearableSingletons, () => {
  it('creates and clear singletons', () => {
    clearableSingletons.create(
      (a: number, b: number) => a + b,
      (a: number, b: number) => `${a}+${b}`,
    )
    clearableSingletons.create(
      (a: number, b: number) => a + b,
      (a: number, b: number) => `${a}+${b}`,
    )
    expect(clearableSingletons.size).toBe(2)
    clearableSingletons.clear()
    expect(clearableSingletons.size).toBe(0)
  })
  it('creates and clear singletons 2', () => {
    const clearableSingletons = new ClearableSingletons()
    clearableSingletons.create(
      (a: number, b: number) => a + b,
      (a: number, b: number) => `${a}+${b}`,
    )
    clearableSingletons.create(
      (a: number, b: number) => a + b,
      (a: number, b: number) => `${a}+${b}`,
    )
    expect(clearableSingletons.size).toBe(2)
    clearableSingletons.clear()
    expect(clearableSingletons.size).toBe(0)
  })
})
