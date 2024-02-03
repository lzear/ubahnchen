import type { City } from '@ubahnchen/cities'
import { P } from '@ubahnchen/cities/node'
import { getDatabase } from '@ubahnchen/database'

export const getDatabaseForCity = (city: City) =>
  getDatabase(P(city).SQLITE.BIG)

export const getSmallDatabaseForCity = (city: City) =>
  getDatabase(P(city).SQLITE.SMALL)
