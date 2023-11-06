import type { ParserOptionsArgs } from 'fast-csv'

import type { Row } from './stream-csv.js'
import type { CustomOraOptions } from './stream-csv-ora.js'
import type { DataPerf } from './stream-csv-perf.js'
import { streamCsvPerfOra } from './stream-csv-perf-ora.js'
import { withCsvWrite } from './write-csv.js'

export type FilterCsvOptions<T> = {
  sourcePath: string
  targetPath: string
  lineFilter: (p: DataPerf<T>) => boolean
  ora?: CustomOraOptions
  parserOptions?: ParserOptionsArgs
}

export const filterCsv = async <T extends Row = Row>({
  targetPath,
  sourcePath,
  ora,
  lineFilter,
  parserOptions,
}: FilterCsvOptions<T>) =>
  withCsvWrite(targetPath, { headers: true })((write) =>
    streamCsvPerfOra<T>(
      { filePath: sourcePath, ora, parserOptions },
      (data) => lineFilter(data) && write(data.row),
    ),
  )
