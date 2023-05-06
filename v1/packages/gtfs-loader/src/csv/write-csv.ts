import { format, FormatterOptionsArgs } from 'fast-csv'
import fs from 'node:fs'

export const writeCsv = <
  I extends Record<string, unknown>,
  O extends Record<string, unknown>,
>(
  filePath: string,
  options?: FormatterOptionsArgs<I, O>,
) => {
  const csvFile = fs.createWriteStream(filePath)
  const stream = format(options)
  stream.pipe(csvFile)
  return stream
}
