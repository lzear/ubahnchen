import fs from 'node:fs'
import path from 'node:path'

import type { City } from '@ubahnchen/cities'
import { paths } from '@ubahnchen/cities/node'
import { initializeFileIfNotExists } from '@ubahnchen/node'

import type { StopsPositions } from './map-asset-type'

export enum MapAssetName {
  PLACE_STOPS = 'place-stops',
  SPLIT_SHAPES = 'split-shapes',
}

export type AssetTypes = {
  [MapAssetName.PLACE_STOPS]: StopsPositions
  [MapAssetName.SPLIT_SHAPES]: string[]
}

class FileAssets<T> {
  constructor(private filePath: string) {}

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
    return fs.promises.writeFile(this.filePath, JSON.stringify(data))
  }
}

export class MapAssets<
  N extends MapAssetName,
  T = AssetTypes[N],
> extends FileAssets<T> {
  constructor(
    protected city: City,
    protected map: string,
    protected name: N,
  ) {
    super(path.join(paths(city).MAPS_DATA, map, `${name}.json`))
  }
}

export const mapAsset = <M extends MapAssetName>(
  city: City,
  map: string,
  name: M,
) => new MapAssets(city, map, name)
