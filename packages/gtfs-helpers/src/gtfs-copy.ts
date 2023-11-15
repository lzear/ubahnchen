import { filterCsv } from '@ubahnchen/csv-helpers'

import type { GtfsCsvTypes } from './gtfs-csv-types'
import type {
  FixIndexSignature,
  GtfsIteratorOptions,
  GtfsKeys,
} from './gtfs-iterator'
import { GtfsIterator } from './gtfs-iterator'

export class GtfsCopy extends GtfsIterator {
  private readonly targetDirectory: string

  constructor({
    targetDirectory,
    gtfsDirectory,
  }: GtfsIteratorOptions & { targetDirectory: string }) {
    super(gtfsDirectory)
    this.targetDirectory = targetDirectory
  }

  public getFilter<K extends GtfsKeys>(type: K) {
    return (filter: (value: GtfsCsvTypes[K], index: number) => boolean) =>
      filterCsv<FixIndexSignature<GtfsCsvTypes[K]>>({
        targetPath: `${this.targetDirectory}/${type}.txt`,
        sourcePath: `${this.gtfsDirectory}/${type}.txt`,
        lineFilter: (p) => filter(p.row, p.index),
        parserOptions: { headers: true },
        ora: { text: type.padEnd(14) },
      })
  }
}
