import fs from 'node:fs'
import https from 'node:https'
import path from 'node:path'

import type { Ora } from 'ora'
import { oraPromise } from 'ora'

import { percent } from '@ubahnchen/utils'

type Headers = {
  etag: string
  'last-modified': string
  'content-length': number
}

const getHeaders = async (url: string): Promise<Headers> => {
  const { headers } = await fetch(url, { method: 'HEAD' })
  if (!headers) throw new Error('no headers')
  return {
    etag: headers.get('etag')!,
    'last-modified': headers.get('last-modified')!,
    'content-length': Number(headers.get('content-length')),
  }
}

class CacheKeys {
  constructor(private filePath: string) {}

  public get() {
    const directory = path.dirname(this.filePath)
    // read json in .headers.json in same dir
    const headersPath = path.join(directory, '.headers.json')
    try {
      const buffer = fs.readFileSync(headersPath)
      return JSON.parse(buffer.toString()) as Headers
    } catch {
      // pass
    }
    return null
  }

  public async set(h: Headers) {
    const dirname = path.dirname(this.filePath)
    const headersPath = path.join(dirname, '.headers.json')
    await fs.promises.writeFile(headersPath, JSON.stringify(h))
  }

  public isEquals(h: Headers) {
    const oldHeaders = this.get()
    return JSON.stringify(oldHeaders) === JSON.stringify(h)
  }
}

export const downloadOnceOra = async (
  city: string,
  url: string,
  destinationPath: string,
  force?: boolean,
  post?: (spin: Ora) => Promise<void>,
) =>
  oraPromise(async (spin) => {
    await downloadOnce(
      url,
      destinationPath,
      (current, total) => {
        spin.text = `⬇️ Downloading ${percent(current / total)}`
      },
      spin,
      force,
    )
    return post?.(spin)
  }, `Downloaded ${city} gtfs`)

export const isAlreadyUpToDate = async (
  url: string,
  destinationPath: string,
) => {
  const cache = new CacheKeys(destinationPath)
  const newHeaders = await getHeaders(url)
  const isUpToDate = cache.isEquals(newHeaders)
  return [isUpToDate, { oldHeaders: cache.get(), newHeaders }] as const
}

export const downloadOnce = async (
  url: string,
  destinationPath: string,
  onChunk?: (current: number, total: number) => void,
  logger: { info: (message: string) => void } = console,
  force?: boolean,
) => {
  // get the folder path

  // const basename = path.basename(destinationPath)

  const headers = new CacheKeys(destinationPath)

  const [isUpToDate, { oldHeaders, newHeaders }] = await isAlreadyUpToDate(
    url,
    destinationPath,
  )

  if (!force && isUpToDate) {
    logger.info(`No update from remote since ${oldHeaders?.['last-modified']}`)
    return
  }

  await downloadFile(url, destinationPath, onChunk)

  await headers.set(newHeaders)
}

export const downloadFile = async (
  url: string,
  destinationPath: string,
  onChunk?: (current: number, total: number) => void,
) => {
  const d = path.dirname(destinationPath)
  await fs.promises.mkdir(d, { recursive: true })
  const file = fs.createWriteStream(destinationPath)
  return new Promise<void>((resolve, reject) => {
    https.get(url, (response) => {
      const total = Number(response.headers['content-length'])
      let current = 0
      response
        .on('data', (chunk: { length?: number }) => {
          if (typeof chunk.length !== 'number')
            throw new Error('chunk.length is not a number')
          current += chunk.length
          onChunk?.(current, total)
        })
        .on('error', reject)
      response.pipe(file)
      file.on('finish', () => file.close(() => resolve()))
    })
  })
}
