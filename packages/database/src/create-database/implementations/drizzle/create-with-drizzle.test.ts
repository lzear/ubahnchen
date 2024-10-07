import { Temporary } from '@ubahnchen/node'

import { getSchema } from '../../get-schema'

import { createWithDrizzle } from './create-with-drizzle'

describe.skip(createWithDrizzle, () => {
  const temporary = new Temporary()
  it('creates with SQLite', async () => {
    const { database } = await createWithDrizzle({ filePath: temporary.file() })
    const schema = getSchema(database)
    expect(schema).toMatchSnapshot()
  })
})
