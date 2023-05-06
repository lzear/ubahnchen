import { jest } from '@jest/globals'

import { defaultSerializer, Singletons, SingletonUnique } from './singletons'

describe(SingletonUnique, () => {
  it('calls the function once', () => {
    const mock = jest.fn()
    const singleton = new SingletonUnique(mock)
    singleton.run()
    expect(mock).toHaveBeenCalledTimes(1)
    singleton.run()
    expect(mock).toHaveBeenCalledTimes(1)
  })

  it('clears', () => {
    const mock = jest.fn()
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
    const mock = jest.fn((a: number, b: number) => a + b)
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