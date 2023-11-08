import fs from 'node:fs'

import { getDatabase, schemaMinify } from '@ubahnchen/database'

export const minify = async (big: string, small: string) => {
  await fs.promises.copyFile(big, small)

  const databaseSmall = getDatabase(small)

  databaseSmall.database.pragma('foreign_keys = OFF')
  databaseSmall.database.pragma('synchronous = OFF')
  databaseSmall.database.pragma('journal_mode = OFF')

  databaseSmall.database.exec(schemaMinify)
}
