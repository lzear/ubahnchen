import { getDatabase } from '@ubahnchen/database'
import { citySqlitePath } from '@ubahnchen/paths'

export const getDatabaseForCity = (city: string) =>
  getDatabase(citySqlitePath(city))
