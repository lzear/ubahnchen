import fs from 'node:fs'
import https from 'node:https'
import path from 'node:path'

import type { Ora } from 'ora'
import { oraPromise } from 'ora'

import { percent } from './percent'

type Headers = { etag: string; 'last-modified': string }
type HeadersMap = Record<string, Headers>

const getHeaders = async (url: string): Promise<Headers> => {
  const { headers } = await fetch(url, { method: 'HEAD' })
  return {
    etag: headers.get('etag') as string,
    'last-modified': headers.get('last-modified') as string,
  }
}

const getHeadersMap = (destinationPath: string): HeadersMap => {
  const dirname = path.dirname(destinationPath)
  const headersPath = path.join(dirname, '.headers.json')
  let oldHeadersMap: HeadersMap | null = null
  try {
    const buffer = fs.readFileSync(headersPath)
    oldHeadersMap = JSON.parse(buffer.toString()) as HeadersMap
  } catch {
    // pass
  }
  return oldHeadersMap || {}
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

export const downloadOnce = async (
  url: string,
  destinationPath: string,
  onChunk?: (current: number, total: number) => void,
  logger: {
    info: (message: string) => void
  } = console,
  force?: boolean,
) => {
  const basename = path.basename(destinationPath)
  const oldHeaders = getHeadersMap(destinationPath)[basename]
  const newHeaders = await getHeaders(url)

  if (!force && JSON.stringify(oldHeaders) === JSON.stringify(newHeaders)) {
    logger.info(`No update from remote since ${oldHeaders?.['last-modified']}`)
    return
  }

  await downloadFile(url, destinationPath, onChunk)

  const oldHeadersMap = getHeadersMap(destinationPath)
  const dirname = path.dirname(destinationPath)
  const headersPath = path.join(dirname, '.headers.json')
  await fs.promises.writeFile(
    headersPath,
    JSON.stringify({ ...oldHeadersMap, [basename]: newHeaders }),
  )
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
