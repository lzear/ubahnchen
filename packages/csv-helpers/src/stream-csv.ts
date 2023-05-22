import type { ReadStream } from 'node:fs'
import { createReadStream } from 'node:fs'

import type { ParserOptionsArgs } from 'fast-csv'
import * as csv from 'fast-csv'
import Papa from 'papaparse'

export type Row = { [key: string]: string | number | undefined | null }

export type DataCsv<T> = { row: T; index: number; stream: ReadStream }

export type OnData<T> = (data: DataCsv<T>) => unknown

export type StreamCsvOptions = {
  parserOptions?: ParserOptionsArgs
  stream?: ReadStream
  filePath?: string
}

export type BasicStreamCsv<T> = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  run: (onData: OnData<T>) => Promise<Record<string, any>>
  filePath?: string
  stream: ReadStream
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const streamCsvFactoryFC = <T extends Row>(
  options: StreamCsvOptions,
): BasicStreamCsv<T> => {
  const filePath = options.filePath
  const stream =
    options.stream ||
    (filePath &&
      createReadStream(
        filePath,
        // { encoding: 'utf8' }
      ))

  if (!stream) throw new Error('Need stream or filePath')

  return {
    filePath,
    stream,
    run: async (onData: OnData<T>) => {
      let index = 0
      return new Promise<Record<string, unknown>>((resolve, reject) =>
        stream
          .pipe(csv.parse(options.parserOptions))
          .on('data', (row: T) => onData({ row, index: index++, stream }))
          .on('end', resolve)
          .on('error', (error) => reject(error)),
      )
    },
  }
}
const streamCsvPapaFactory = <T extends Row>(
  options: StreamCsvOptions,
): BasicStreamCsv<T> => {
  const filePath = options.filePath
  const stream =
    options.stream ||
    (filePath &&
      createReadStream(
        filePath,
        // { encoding: 'utf8' }
      ))

  if (!filePath) throw new Error('Need filePath')
  if (!stream) throw new Error('Need stream or filePath')

  return {
    filePath,
    stream,
    run: async (onData: OnData<T>) => {
      let index = 0

      // const s2 = parseStream(stream, options.parserOptions)
      //
      // const processChunk = (chunk: any) => {
      //   // Perform your custom processing on the chunk
      //   return onData({ row: chunk, index: index++, stream })
      // }
      // for await (const chunk of s2) {
      //   processChunk(chunk)
      // }
      //
      // return {}

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      return new Promise<Record<string, any>>((resolve, reject) =>
        // csv
        // .parseStream(stream, options.parserOptions)

        // eslint-disable-next-line import/no-named-as-default-member
        Papa.parse<T>(stream, {
          header: true,
          step: ({ data }) => {
            onData({ row: data, index: index++, stream })
          },
          complete: () => resolve({}),
          error: (error) => reject(error),
          // fastMode: true,
          // delimiter: ',',
          // newline: '\n',
          // // quotes: null,
          // encoding: 'utf8',
          // chunkSize: 100_000_000,
        }),
      )
    },
  }
}

// export const streamCsvFactory = streamCsvFactoryFC
export const streamCsvFactory = streamCsvPapaFactory

export const streamCsv = <T extends Row>(
  options: StreamCsvOptions,
  onData: OnData<T>,
) => streamCsvFactory<T>(options).run(onData)
