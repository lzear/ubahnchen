import { DB_HEADERS, GTFS_CSV_HEADERS } from '../data'
import { readFile, writeFile } from '../files/files'
import chalk from 'chalk'
import { makeDatabase } from '../db/make-database'
import { seedDatabase } from '../db/seed-database'

const isOutdated = async () => {
  const datHeaderDataJson = await readFile(DB_HEADERS)
  const csvHeaderDataJson = await readFile(GTFS_CSV_HEADERS)

  const datHeaders = datHeaderDataJson && JSON.parse(datHeaderDataJson)

  if (csvHeaderDataJson === datHeaderDataJson)
    console.log(
      chalk.green(
        `The database up to date since ${datHeaders['last-modified']}`,
      ),
    )
  else {
    if (datHeaders)
      console.log(
        chalk.yellow(`The CSVs need an update: ${datHeaders['last-modified']}`),
      )
    return csvHeaderDataJson
  }
  return false
}

export const gtfsToSqlite = async () => {
  const zipHeaderDataJson = await isOutdated()
  if (!zipHeaderDataJson) return
  await makeDatabase()
  await seedDatabase()
  await writeFile(DB_HEADERS, zipHeaderDataJson)
}
