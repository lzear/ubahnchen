import fs from 'node:fs'

import type { CsvFormatterStream, FormatterOptionsArgs } from 'fast-csv'
import { format } from 'fast-csv'

import { initializeFile } from '@ubahnchen/utils'

type URecord = Record<string, unknown>

/** @deprecated use withCsvWrite */
export const writeCsv = async <I extends URecord, O extends URecord>(
  filePath: string,
  formatterOptions?: FormatterOptionsArgs<I, O>,
) => {
  await initializeFile(filePath)
  const writeStream = fs.createWriteStream(filePath)
  const csvFormatterStream = format(formatterOptions)
  csvFormatterStream.pipe(writeStream)

  writeStream.on('error', (error) => {
    throw error
  })
  csvFormatterStream.on('error', (error) => {
    throw error
  })

  return {
    write: csvFormatterStream.write.bind(csvFormatterStream),
    // writeStream,
    // csvFormatterStream,
    finish: () =>
      new Promise<void>((resolve) => {
        // csvFormatterStream.on('end', () => {})
        writeStream.on('finish', resolve)
        csvFormatterStream.end()
      }),
  }
}

export type WritingFunction<I extends URecord, O extends URecord> = <R>(
  callback: (write: CsvFormatterStream<I, O>['write']) => R,
) => Promise<R>

export const withCsvWrite: <I extends URecord, O extends URecord>(
  filePath: string,
  formatterOptions?: FormatterOptionsArgs<I, O>,
) => WritingFunction<I, O> =
  (filePath, formatterOptions) => async (callback) => {
    const { write, finish } = await writeCsv(filePath, formatterOptions)
    const r = callback(write)
    await finish()
    return r
  }
