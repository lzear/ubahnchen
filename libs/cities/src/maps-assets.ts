import fs from 'node:fs'
import path from 'node:path'

import type { Json, JsonSchema } from '@ubahnchen/json'
import { canonicalizeToString } from '@ubahnchen/json'
import { initializeFileIfNotExists } from '@ubahnchen/node'

import type { City } from './index'
import type { StopsPositions } from './map-asset-type'
import { P } from './paths'

export enum MapAssetName {
  PLACE_STOPS = 'place-stops',
  SPLIT_SHAPES = 'split-shapes',
  PAIRS_PATHS = 'pairs-paths',
}

export type AssetTypes = {
  [MapAssetName.PLACE_STOPS]: StopsPositions
  [MapAssetName.SPLIT_SHAPES]: string[]
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [MapAssetName.PAIRS_PATHS]: Record<string, any>
}

class FileAssets<T extends Json, S extends JsonSchema | undefined = undefined> {
  constructor(
    private filePath: string,
    protected schema?: S | undefined,
  ) {}

  async read(defaultValue?: T): Promise<T> {
    await initializeFileIfNotExists(this.filePath)
    const file = await fs.promises.open(this.filePath, 'a+')
    try {
      const data = await file.readFile('utf8')
      await file.close()
      return JSON.parse(data) as T
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.error(`Error reading file ${this.filePath}`)
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-call
      console.error(error.stack.split('\n').slice(0, 3).join('\n'))
      if (defaultValue) return defaultValue
      throw new Error('No default value')
    }
  }

  public async write(data: T) {
    return fs.promises.writeFile(
      this.filePath,
      canonicalizeToString(data, this.schema),
      // data,
    )
  }
}

export class MapAssets<
  N extends MapAssetName,
  T extends Json = AssetTypes[N],
  S extends JsonSchema | undefined = undefined,
> extends FileAssets<T, S> {
  constructor(
    protected city: City,
    protected map: string,
    protected name: N,
    protected schema?: S,
  ) {
    super(path.join(P(city, map).BUILD.DIR, `${name}.json`), schema)
  }
}

export const mapAsset = <M extends MapAssetName>(
  city: City,
  map: string,
  name: M,
) => new MapAssets(city, map, name)
