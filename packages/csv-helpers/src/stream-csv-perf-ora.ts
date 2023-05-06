import type { BasicStreamCsv, Row } from './stream-csv'
import { streamCsvFactory } from './stream-csv'
import type { StreamCsvOraOptions } from './stream-csv-ora'
import { withOra } from './stream-csv-ora'
import type { OnDataPerf, StreamCsvPerfOptions } from './stream-csv-perf'
import { withPerf } from './stream-csv-perf'

type StreamCsvPerfOraOptions = StreamCsvOraOptions & StreamCsvPerfOptions

export const withPerfOra =
  <T extends Row>() =>
  <SC extends BasicStreamCsv<T>>(
    streamCsv: SC,
    options: StreamCsvPerfOraOptions,
  ) =>
    withOra<T>()(withPerf<T>()(streamCsv, options), options)

export const streamCsvPerfOra = <T extends Row>(
  options: StreamCsvPerfOraOptions,
  onData: OnDataPerf<T>,
) => withPerfOra<T>()(streamCsvFactory<T>(options), options).run(onData)
