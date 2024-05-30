import { Temporary } from '@ubahnchen/node'

import { streamCsvFactory } from './stream-csv'
import { writeCsv } from './write-csv'

describe(streamCsvFactory, () => {
  let temporary: Temporary

  beforeAll(async () => {
    temporary = new Temporary()
    const stream = await writeCsv(temporary.file(), {
      headers: true,
    })
    stream.write({ a: 1, b: 2 })
    stream.write({ a: 'text', b: true })
    await stream.finish()
  })

  afterAll(() => temporary.cleanup())

  it('streams csv file - headers are handled by default', async () => {
    const callback = vi.fn()
    const streamCsv = streamCsvFactory({
      filePath: temporary.file(),
    })
    await streamCsv.run(({ row }) => callback(row))
    expect(callback).toHaveBeenNthCalledWith(1, { a: '1', b: '2' })
    expect(callback).toHaveBeenNthCalledWith(2, { a: 'text', b: 'true' })
  })

  it('streams csv file with headers', async () => {
    const callback = vi.fn()
    const streamCsv = streamCsvFactory({
      filePath: temporary.file(),
      parserOptions: { headers: true },
    })
    await streamCsv.run(({ row }) => callback(row))
    expect(callback).toHaveBeenNthCalledWith(1, { a: '1', b: '2' })
    expect(callback).toHaveBeenNthCalledWith(2, { a: 'text', b: 'true' })
  })

  it('fails if no filePath no stream', () => {
    expect(() =>
      streamCsvFactory({
        parserOptions: { headers: true },
      }),
    ).toThrow('Need filePath')
  })

  it('fails if no onData throws', async () => {
    const streamCsv = streamCsvFactory({
      filePath: temporary.file(),
    })
    return expect(() =>
      streamCsv.run(() => {
        throw new Error('aaa')
      }),
    ).rejects.toMatchInlineSnapshot(`[Error: aaa]`)
  })
})
