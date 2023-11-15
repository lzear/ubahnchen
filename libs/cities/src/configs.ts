import path from 'node:path'
import url from 'node:url'

import { z } from 'zod'

import type { City } from './index'

export const CityConfig = z.object({ gtfs: z.object({ url: z.string() }) })

export type CityConfigExports = z.infer<typeof CityConfig>

export const gtfsConfig = async (city: City): Promise<CityConfigExports> =>
  CityConfig.parse(
    await import(
      path.resolve(
        path.dirname(url.fileURLToPath(import.meta.url)),
        `../src/data/${city}/gtfs.ts`,
      )
    ),
  )
