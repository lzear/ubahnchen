import { describe } from '@jest/globals'

import { Temporary } from '../../../../../utils'
import { getSchema } from '../../get-schema'

import { createWithDrizzle } from './create-with-drizzle'

describe(createWithDrizzle, () => {
  const temporary = new Temporary()
  it('creates with SQLite', async () => {
    const { database } = await createWithDrizzle({ filePath: temporary.file() })
    const schema = getSchema(database)
    expect(schema).toMatchSnapshot()
  })
})
