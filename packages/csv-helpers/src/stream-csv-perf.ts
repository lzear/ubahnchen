import { countLines } from '@ubahnchen/node-utils'
import { Perf } from '@ubahnchen/utils'

import type {
  BasicStreamCsv,
  DataCsv,
  Row,
  StreamCsvOptions,
} from './stream-csv.js'

export type DataPerf<T> = DataCsv<T> & {
  perf: Perf
  lineCount?: number
}

export type StreamCsvPerfReturn = { lineCount?: number; perf: Perf }

export type StreamCsvPerfOptions = StreamCsvOptions & {
  lineCount?: number
}

export type OnDataPerf<T> = (data: DataPerf<T>) => unknown

export type PerfCsv<T extends Row, SC extends BasicStreamCsv<T>> = SC & {
  perf: Perf
  lineCount: number | undefined
  run: (onData: OnDataPerf<T>) => Promise<StreamCsvPerfReturn>
}

export const withPerf =
  <T extends Row>() =>
  <SC extends BasicStreamCsv<T>>(
    inputCsvStream: SC,
    options: StreamCsvPerfOptions,
  ): PerfCsv<T, SC> => {
    const lineCount = options.filePath
      ? countLines(options.filePath)
      : options.lineCount

    const perf = new Perf({ totalCount: lineCount })

    const run = async (onData: OnDataPerf<T>) => {
      const runResults = await inputCsvStream.run((data) => {
        perf.tickIndex(data.index)
        return onData({ ...data, perf, lineCount })
      })
      perf.stop()
      return { ...runResults, perf, lineCount }
    }

    return { ...inputCsvStream, run, perf, lineCount }
  }
