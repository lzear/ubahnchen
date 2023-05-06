import { ParserOptionsArgs, parseStream } from 'fast-csv'
import fs from 'node:fs'
import { countLines } from '../files/files'
import { performance } from 'node:perf_hooks'
import { Ora, oraPromise } from 'ora'
import { percent } from '../utils'
import { log2cols } from './csv-utils'

export const streamCsv2 = (filePath: string, options?: ParserOptionsArgs) => {
  const stream = fs.createReadStream(filePath)
  return parseStream(stream, options)
}

export const streamCsv3 = async ({
  func,
  filePath,
  options = { headers: true },
  oraText,
  onStart,
}: {
  func: (current: Record<string, string>, index: number) => void
  filePath: string
  options?: ParserOptionsArgs
  oraText?: string
  onStart?: (total: number) => void
}) => {
  const stream = fs.createReadStream(filePath)
  const total = countLines(filePath)
  onStart?.(total)
  const start = performance.now()
  const prom = (spinner?: Ora) =>
    new Promise<void>((resolve, reject) => {
      let index = 0
      parseStream(stream, options)
        .on('data', async (row) => {
          if (index % 1000 === 0 && spinner)
            spinner.text = `${oraText} ${percent(index / total)}`
          func(row, index++)
        })
        .on('end', () => {
          resolve()
        })
        .on('error', reject)
    })

  const r = await (oraText
    ? oraPromise(prom, { successText: oraText, failText: oraText })
    : prom())

  log2cols('', `[ ${Math.round(performance.now() - start)}ms ]`)

  return r
}
