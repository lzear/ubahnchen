import type { City } from '@ubahnchen/cities'
import { paths } from '@ubahnchen/cities/node'
import { getDatabase } from '@ubahnchen/database'

export const getDatabaseForCity = (city: City) =>
  getDatabase(paths(city).SQLITE_BIG)

export const getSmallDatabaseForCity = (city: City) =>
  getDatabase(paths(city).SQLITE_SMALL)
