import { readdir } from 'node:fs/promises'
import path from 'node:path'
import * as url from 'node:url'

export const projectRoot = path.join(
  path.dirname(url.fileURLToPath(import.meta.url)),
  '../../..',
)

export const getCurrentCity = () => {
  const currentCity = process.cwd().split('/').at(-1)
  if (!currentCity) throw new Error('no city?')
  return currentCity
}

// eslint-disable-next-line unicorn/prevent-abbreviations
export const cityDistPath = (city: string) =>
  path.join(projectRoot, 'cities', city, 'dist')
export const cityCsvPath = (city: string) =>
  path.join(cityDistPath(city), 'gtfs/csv')
export const cityZipPath = (city: string) =>
  path.join(cityDistPath(city), 'gtfs/gtfs.zip')
export const citySqlitePath = (city: string) =>
  path.join(cityDistPath(city), 'gtfs/gtfs.sqlite')

export const projectPath = (city: string, ...rest: string[]) => {
  return path.resolve(process.cwd(), ...rest)
}

export const cities = async () => {
  const citiesDirectory = path.join(projectRoot, 'cities')
  const list = await readdir(citiesDirectory, { withFileTypes: true })
  return list
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name)
}
