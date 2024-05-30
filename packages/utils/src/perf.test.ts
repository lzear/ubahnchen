import { Perf, PerfSimple } from './perf'

describe(PerfSimple, () => {
  let perfSimple: PerfSimple

  beforeEach(() => {
    perfSimple = new PerfSimple()
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('starts and stops correctly', () => {
    perfSimple.go()
    perfSimple.stop()
    expect(perfSimple.duration()).toBeGreaterThan(0)
  })
})

describe(Perf, () => {
  let perf: Perf

  beforeEach(() => {
    perf = new Perf({ sampleDurationMs: 1000, totalCount: 100 })
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('ticks correctly', () => {
    perf.go()
    perf.tick(10)
    expect(perf.count).toBe(10)
  })

  it('calculates average per second correctly', () => {
    perf.go()
    perf.tick(10)
    expect(perf.averagePerS()).toBeGreaterThan(0)
  })

  it('calculates time left correctly', () => {
    const perf = new Perf({ totalCount: 100 })
    perf.go()
    perf.tick(10)
    expect(perf.timeLeft).toBeGreaterThan(0)
  })

  it('calculates progress correctly', () => {
    const perf = new Perf({ totalCount: 100 })
    perf.go()
    perf.tick(10)
    expect(perf.progress).toBe(0.1)
  })
})
