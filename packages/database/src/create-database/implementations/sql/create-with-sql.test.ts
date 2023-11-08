import { Temporary } from '@ubahnchen/node'

import { getSchema } from '../../get-schema.js'

import { createWithSql } from './create-with-sql.js'

describe(createWithSql, () => {
  const temporary = new Temporary()
  it('creates with SQLite', async () => {
    const database = await createWithSql({ filePath: temporary.file() })
    const schema = getSchema(database.database)
    // eslint-disable-next-line unicorn/template-indent
    expect(schema).toMatchSnapshot()
  })
})
