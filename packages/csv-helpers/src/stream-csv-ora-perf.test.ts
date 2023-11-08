import { jest } from '@jest/globals'

import { Temporary } from '@ubahnchen/node'
import { Perf } from '@ubahnchen/utils'

import { streamCsvPerfOra, withPerfOra } from './stream-csv-perf-ora.js'
import { writeCsv } from './write-csv.js'

describe(withPerfOra, () => {
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

  it('streams csv file - handles headers by default', async () => {
    const callback = jest.fn()
    const r = await streamCsvPerfOra(
      {
        filePath: temporary.file(),
      },
      ({ row }) => callback(row),
    )
    expect(callback).toHaveBeenNthCalledWith(1, { a: '1', b: '2' })
    expect(callback).toHaveBeenNthCalledWith(2, { a: 'text', b: 'true' })
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    expect(r).toStrictEqual({ lineCount: 3, perf: expect.any(Perf) })
  })

  it('streams csv file with headers', async () => {
    const callback = jest.fn()
    await streamCsvPerfOra(
      {
        filePath: temporary.file(),
        parserOptions: { headers: true },
      },
      ({ row }) => callback(row),
    )
    expect(callback).toHaveBeenNthCalledWith(1, { a: '1', b: '2' })
    expect(callback).toHaveBeenNthCalledWith(2, { a: 'text', b: 'true' })
  })

  it('fails if no filePath no stream', () =>
    expect(() =>
      streamCsvPerfOra({ parserOptions: { headers: true } }, () => null),
    ).toThrow(`Need filePath`))

  it('fails if no onData throws', async () => {
    return expect(() =>
      streamCsvPerfOra(
        {
          filePath: temporary.file(),
          parserOptions: { headers: true },
        },
        () => {
          throw new Error('aaa')
        },
      ),
    ).rejects.toMatchInlineSnapshot(`[Error: aaa]`)
  })
})
