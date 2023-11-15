import type { ReadStream } from 'node:fs'
import fs from 'node:fs'

import type { ParserOptionsArgs } from 'fast-csv'

import type { DataCsv } from '@ubahnchen/csv-helpers'
import { streamCsvPerfOra } from '@ubahnchen/csv-helpers'
import { countLines } from '@ubahnchen/node'

import type { GtfsCsvTypes, GtfsTypes } from './gtfs-csv-types'

export type GtfsIteratorOptions = {
  gtfsDirectory: string
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type FixIndexSignature<T> = { [k: string]: any } & T

export type GtfsKeys = keyof GtfsTypes

export class GtfsIterator {
  protected readonly gtfsDirectory: string

  constructor(gtfsDirectory: string) {
    this.gtfsDirectory = gtfsDirectory
  }

  public filePath<K extends GtfsKeys>(type: K) {
    return `${this.gtfsDirectory}/${type}.txt`
  }

  public iterate<K extends GtfsKeys>(type: K) {
    return async (
      onData: (data: DataCsv<FixIndexSignature<GtfsCsvTypes[K]>>) => unknown,
      parserOptions?: ParserOptionsArgs,
    ) => {
      const r = await streamCsvPerfOra<FixIndexSignature<GtfsCsvTypes[K]>>(
        {
          filePath: this.filePath(type),
          parserOptions: parserOptions || { headers: true },
          ora: { text: type.padEnd(14) },
        },
        onData,
      )
      return r
    }
  }

  public getStream<K extends GtfsKeys>(type: K) {
    return fs.createReadStream(this.filePath(type))
  }

  public streamIterator<K extends GtfsKeys>(type: K, stream: ReadStream) {
    return (
      onData: (row: DataCsv<FixIndexSignature<GtfsTypes[K]>>) => unknown,
    ) =>
      streamCsvPerfOra<FixIndexSignature<GtfsTypes[K]>>(
        {
          stream,
          parserOptions: { headers: true },
          ora: { text: type.padEnd(14) },
          lineCount: countLines(this.filePath(type)),
        },
        onData,
      )
  }
}

export const getValue = (
  object: Record<string, string>,
  key: string,
): string => {
  // const o2 = object as any as Record<string, string>
  const v: string | undefined = object[key]
  if (!v) throw new Error('Key not found')
  return v
}
