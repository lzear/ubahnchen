import { oraPromise, type PromiseOptions } from 'ora'

import type { Perf } from '@ubahnchen/utils'
import { truthy } from '@ubahnchen/utils'

import type {
  BasicStreamCsv,
  DataCsv,
  OnData,
  Row,
  StreamCsvOptions,
} from './stream-csv'

export type TextPerf = (p: DataCsv<Row>) => string

export type OraProperty = PromiseOptions<Record<string, unknown>> & {
  textPerf?: TextPerf
  sample?: number
}

export type OraTxt = {
  ora: OraProperty | undefined
  perf?: Perf
}

export const defaultTextPerf = ({ perf, ora }: OraTxt) =>
  [ora?.text, ...(perf ? perf.displayProgress() : [])] // eslint-disable-next-line unicorn/no-array-callback-reference
    .filter(truthy)
    .join(' ∙ ')

export const successText = ({ perf, ora }: OraTxt) =>
  [ora?.successText || ora?.text, ...(perf ? perf.displayFinal() : [])]
    .filter(Boolean)
    .join(' ∙ ')

export type StreamCsvOraOptions = StreamCsvOptions & {
  ora?: CustomOraOptions
}

export type CustomOraOptions = OraProperty & { sample?: number }

export const withOra =
  <T extends Row>() =>
  <SC extends BasicStreamCsv<T>>(
    streamC: SC,
    options: StreamCsvOraOptions,
  ): SC => {
    const oraOptions = {
      ...options.ora,
      sample: options.ora?.sample ?? 2000,
      successText: ({ perf }: { perf?: Perf }) =>
        successText({ perf, ora: options.ora }),
    }

    return {
      ...streamC,
      run: async (onData: OnData<T>) =>
        oraPromise(
          (spinner) =>
            streamC.run((data: DataCsv<T>) => {
              if (oraOptions.sample && data.index % oraOptions.sample === 0)
                spinner.text = defaultTextPerf({ ...data, ora: oraOptions })
              onData(data)
            }),
          oraOptions,
        ),
    }
  }
