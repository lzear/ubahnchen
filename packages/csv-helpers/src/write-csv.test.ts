import fs from 'node:fs'

import { Temporary } from '@ubahnchen/utils'

import { writeCsv } from './write-csv'

describe(writeCsv, () => {
  let temporary: Temporary
  beforeAll(async () => (temporary = new Temporary()))
  afterAll(() => temporary.cleanup())

  it('writes a csv file', async () => {
    const stream = await writeCsv(temporary.file(), { headers: true })
    stream.write({ a: 1, b: 2 })
    stream.write({ a: 'text', b: true })
    await stream.finish()
    const content = await fs.promises.readFile(temporary.file(), 'utf8')
    expect(content).toEqual(`a,b
1,2
text,true`)
  })
})
