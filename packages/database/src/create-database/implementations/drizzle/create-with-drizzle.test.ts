import { describe, expect, it } from '@jest/globals'

import { Temporary } from '@ubahnchen/node-utils'

import { getSchema } from '../../get-schema.js'

import { createWithDrizzle } from './create-with-drizzle.js'

xdescribe(createWithDrizzle, () => {
  const temporary = new Temporary()
  it('creates with SQLite', async () => {
    const { database } = await createWithDrizzle({ filePath: temporary.file() })
    const schema = getSchema(database)
    expect(schema).toMatchSnapshot()
  })
})
