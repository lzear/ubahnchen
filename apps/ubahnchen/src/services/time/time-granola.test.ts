import { TimeGranola } from './time-granola'

describe(TimeGranola, () => {
  jest.useFakeTimers().setSystemTime(new Date('2020-01-01'))
  it('should granularize date UTC', () => {
    const date = new Date('2021-01-01T12:34:56Z')
    const granularized = TimeGranola.granularize(date)
    expect(granularized).toBe('2021-01-01T12:00:00Z')
  })
  it('should granularize date timezone', () => {
    const date = new Date('2021-01-01T12:34:56+02:00')
    const granularized = TimeGranola.granularize(date)
    expect(granularized).toBe('2021-01-01T10:00:00Z')
  })
  it('should granularize date now', () => {
    const granularized = TimeGranola.now()
    expect(granularized).toBeInstanceOf(TimeGranola)
    expect(granularized.dateStr).toBe('2020-01-01T00:00:00Z')
    expect(granularized.next()).toBeInstanceOf(TimeGranola)
    expect(granularized.next().dateStr).toBe('2020-01-01T01:00:00Z')
  })
})
