import fs from 'node:fs'

import { format } from '@fast-csv/format'
import type { CsvFormatterStream, FormatterOptionsArgs } from 'fast-csv'

import { initializeFile } from '@ubahnchen/utils'

/** @hidden */
export type AnyRow = Record<string, unknown>

/**
 * @deprecated use {@link withCsvWrite}
 * @example
 * ```ts
 * const { write, finish } = await writeCsv(filePath)
 * write({ a: 1, b: 2 })
 * write({ a: 42, b: 'bar' })
 *
 * // ensures writes are finished and the stream is closed
 * // to avoid having this think about it, use `withCsvWrite`
 * await finish()
 * ```
 */
export const writeCsv = async <I extends AnyRow, O extends AnyRow>(
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

export type WritingFunction<I extends AnyRow, O extends AnyRow> = <R>(
  callback: (write: CsvFormatterStream<I, O>['write']) => Promise<R>,
) => Promise<R>

export const withCsvWrite: <I extends AnyRow, O extends AnyRow>(
  filePath: string,
  formatterOptions?: FormatterOptionsArgs<I, O>,
) => WritingFunction<I, O> =
  (filePath, formatterOptions) => async (callback) => {
    const { write, finish } = await writeCsv(filePath, formatterOptions)
    const r = await callback(write)
    await finish()
    return r
  }
