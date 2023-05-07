import { Temporary } from '../../../../../utils'
import { getSchema } from '../../get-schema'

import { createWithSql } from './create-with-sql'

describe(createWithSql, () => {
  const temporary = new Temporary()
  it('creates with SQLite', async () => {
    const database = await createWithSql({ filePath: temporary.file() })
    const schema = getSchema(database.database)
    // eslint-disable-next-line unicorn/template-indent
    expect(schema).toMatchSnapshot()
  })
})