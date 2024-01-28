import { jest } from '@jest/globals'

import { chunkify } from './chunkify'

describe(chunkify, () => {
  it('processes data in specified chunk sizes', async () => {
    const mockData = Array.from({ length: 10 }, (_, i) => i)
    const chunkSize = 2
    // @ts-ignore
    const processChunk = jest.fn<(n: number[]) => void>().mockResolvedValue()
    const run = jest.fn((pusher: (n: number) => void) => {
      for (const d of mockData) pusher(d)
      return 'done'
    })

    const result = await chunkify(processChunk, run, chunkSize)

    expect(processChunk).toHaveBeenCalledTimes(5)
    expect(
      processChunk.mock.calls.every((call) => call[0].length === chunkSize),
    ).toBe(true)
    expect(run).toHaveBeenCalled()
    expect(result).toBe('done')
  })

  // Additional tests for edge cases, async behavior, error handling, etc.
})