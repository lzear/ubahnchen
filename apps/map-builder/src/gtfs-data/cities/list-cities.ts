import { readdir } from 'node:fs/promises'
import * as path from 'node:path'
import * as url from 'node:url'

import { cities } from '@ubahnchen/paths'

export const listCities = async () => {
  console.log('🦺 antoinelog cities', await cities())

  console.log(
    '🦺 antoinelog url.fileURLToPath(import.meta.url)',
    url.fileURLToPath(import.meta.url),
  )

  console.log('🦺 antoinelog import.meta.url', import.meta.url)

  const citiesDirectory = path.join(
    path.dirname(url.fileURLToPath(import.meta.url)),
    '../',
  )
  const list = await readdir(citiesDirectory, { withFileTypes: true })
  console.log('🦺 antoinelog list', list)

  const lll = list
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name)

  console.log('🦺 antoinelog lll', lll);

  return lll
}
