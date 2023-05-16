import type BetterSqlite3 from 'better-sqlite3'

export const getSchema = (database: BetterSqlite3.Database) => {
  let schema = ''
  const rows = database
    .prepare(
      "SELECT type, name, sql FROM sqlite_master WHERE type IN ('table', 'index')",
    )
    .all() as { type: string; name: string; sql: string }[]

  for (const row of rows)
    schema += [`-- ${row.type.toUpperCase()} ${row.name}`, row.sql, ''].join(
      '\n',
    )
  return schema
}
