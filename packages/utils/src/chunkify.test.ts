import { chunkify } from './chunkify'

describe(chunkify, () => {
  it('processes data in specified chunk sizes', async () => {
    const mockData = Array.from({ length: 10 }, (_, i) => i)
    const chunkSize = 2
    const processChunk = vi.fn<[number[]]>().mockResolvedValue(null)
    const run = vi.fn((pusher: (n: number) => void) => {
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
