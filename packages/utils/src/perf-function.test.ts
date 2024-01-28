import { PerfFunction } from './perf-function'

const fn = () => 'test'

describe('PerfFunction', () => {
  let perfFunction: PerfFunction<typeof fn>

  beforeEach(() => {
    perfFunction = new PerfFunction(fn)
  })

  it('calls the function and records the number of calls and execution time', async () => {
    expect(perfFunction.calls).toBe(0)
    expect(perfFunction.time).toBe(0)

    await perfFunction.wrapped()

    expect(perfFunction.calls).toBe(1)
    expect(perfFunction.time).toBeGreaterThanOrEqual(0) // execution time should be non-negative
  })

  it('calculates the correct averages', async () => {
    // call multiple times
    for (let i = 0; i < 5; i++) {
      await perfFunction.wrapped()
    }

    expect(perfFunction.average).toBe(perfFunction.time / perfFunction.calls)
    expect(perfFunction.averageMs).toBe(perfFunction.average)
    expect(perfFunction.averageS).toBe(perfFunction.average / 1000)
    expect(perfFunction.averagePerS).toBe(1 / perfFunction.averageS)
  })
})
