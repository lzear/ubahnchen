import { expect } from '@jest/globals'

import { humanizeTime } from './humanize-time.js'

describe(humanizeTime, () => {
  it('humanizes time', () => {
    expect(humanizeTime(1000)).toBe('1s')
    expect(humanizeTime(1_000_000)).toBe('16m 40s')
    expect(humanizeTime(1_000_000_000)).toBe('1w 5d')
    expect(humanizeTime(1_000_000_000_000)).toBe('31y 8mo')
  })
})
