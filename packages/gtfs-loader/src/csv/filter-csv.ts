import { countLines } from '../files/files'
import { writeCsv } from './write-csv'
import { performance } from 'node:perf_hooks'
import { Ora, oraPromise } from 'ora'
import { percent } from '../utils'
import { streamCsv2, streamCsv3 } from './stream-csv'
import { log2cols } from './csv-utils'

export const filterCsv = async (
  source: string,
  destination: string,
  lineFilter: (
    row: Record<string, string>,
    read: number,
    total: number,
  ) => boolean,
  oraText?: string,
) => {
  const total = countLines(source)
  const w = writeCsv(destination, { headers: true })
  const start = performance.now()
  const prom = (spinner?: Ora) =>
    new Promise<{ read: number; kept: number }>((resolve, reject) => {
      let kept = 0
      let read = 0
      streamCsv2(source, { headers: true })
        .on('data', (row) => {
          read++
          if (read % 10 === 0 && spinner)
            spinner.text = `${oraText} ${percent(read / total)}`
          if (!lineFilter(row, read, total)) return
          w.write(row)
          kept++
        })
        .on('end', (read: number) => {
          w.end()
          resolve({ read, kept })
        })
        .on('error', reject)
    })
  const { read, kept } = await (oraText
    ? oraPromise(prom, {
        successText: oraText,
        failText: oraText,
      })
    : prom())
  oraText &&
    log2cols(
      `    ${kept} / ${read} (${percent(kept / read)})`,
      `[ ${Math.round(performance.now() - start)}ms ]`,
      60,
    )
}

export const filterCsv3 = async ({
  filePath,
  dest,
  lineFilter,
  lineTransform,
  headers = true,
  oraText,
}: {
  filePath: string
  dest: string
  lineFilter?: (
    row: Record<string, string>,
    read: number,
    total: number,
  ) => boolean
  lineTransform?: (row: Record<string, string>) => unknown
  headers?: boolean | (string | undefined)[]
  oraText?: string
}) => {
  const total = countLines(filePath)
  const w = writeCsv(dest, { headers: !!headers })
  const accumulator = { kept: 0, read: 0 }
  const prom = (spinner?: Ora) =>
    streamCsv3({
      func: (current, index) => {
        if (index % 1000 === 0 && spinner)
          spinner.text = `${oraText} ${percent(index / total)}`
        if (!(lineFilter && !lineFilter(current, index, total))) {
          w.write(lineTransform ? lineTransform(current) : current)
          accumulator.kept++
        }
        accumulator.read = index
      },
      filePath,
      options: { headers: true },
      oraText,
    })

  const { read, kept } = accumulator

  lineFilter &&
    oraText &&
    log2cols(`${kept} / ${read}`.padStart(5), `(${percent(kept / read)})`)
}
