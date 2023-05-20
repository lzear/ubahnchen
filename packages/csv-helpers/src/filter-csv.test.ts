import { catFile, Perf, Temporary } from '@ubahnchen/utils'

import { filterCsv } from './filter-csv'
import { writeCsv } from './write-csv'

describe(filterCsv, () => {
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

  it('copies a csv file', async () => {
    const targetPath = temporary.file('destination.csv')
    const c = await filterCsv({
      sourcePath: temporary.file(),
      targetPath,
      lineFilter: () => true,
      parserOptions: { headers: true },
    })

    expect(c).toStrictEqual({
      lineCount: 3,
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      perf: expect.any(Perf),
    })

    expect(catFile(targetPath)).toMatchInlineSnapshot(`
      "a,b
      1,2
      text,true"
    `)
  })
  it('copies a csv file 2', async () => {
    const targetPath = temporary.file('destination2.csv')
    const c = await filterCsv({
      sourcePath: temporary.file(),
      targetPath,
      lineFilter: () => true,
      ora: { sample: 1 },
    })

    expect(c).toStrictEqual({
      lineCount: 3,
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      perf: expect.any(Perf),
    })

    expect(catFile(targetPath)).toMatchInlineSnapshot(`
      "a,b
      1,2
      text,true"
    `)
  })
})
