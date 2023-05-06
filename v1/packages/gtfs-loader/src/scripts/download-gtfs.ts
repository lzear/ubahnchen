import * as fs from 'node:fs'
import path from 'node:path'
import https from 'node:https'
import fetch from 'node-fetch'
import chalk from 'chalk'
import { oraPromise } from 'ora'
import { readFile, writeFile } from '../files/files'
import { GTFS_ZIP_HEADERS, GTFS_ZIP_PATH } from '../data'
import { percent } from '../utils'
import { BERLIN_GTFS_URL } from '../gtfs-url'
import { unzip } from './unzip'

const isOutdated = async () => {
  const { headers } = await fetch(BERLIN_GTFS_URL, { method: 'HEAD' })
  const newHeaderData = {
    etag: headers.get('etag'),
    'last-modified': headers.get('last-modified'),
  }
  const newHeaderDataJson = JSON.stringify(newHeaderData, undefined, 2)
  const oldHeaderDataJson = await readFile(GTFS_ZIP_HEADERS)

  const isOutdated =
    oldHeaderDataJson !== newHeaderDataJson || !fs.existsSync(GTFS_ZIP_PATH)
  const oldHeaderData = oldHeaderDataJson && JSON.parse(oldHeaderDataJson)

  console.log(`new gtfs.zip file from ${newHeaderData['last-modified']}`)

  if (isOutdated) {
    if (oldHeaderData)
      console.log(
        chalk.yellow(
          `gtfs.zip changed since ${oldHeaderData['last-modified']}`,
        ),
      )
    else console.log(`gtfs.zip: downloading: ${newHeaderData['last-modified']}`)
    return JSON.stringify(newHeaderData, undefined, 2)
  } else
    console.log(
      chalk.green(
        `gtfs.zip did not change since ${newHeaderData['last-modified']}`,
      ),
    )
  return false
}

const doDownload = async () => {
  const d = path.dirname(GTFS_ZIP_PATH)
  await fs.promises.mkdir(d, { recursive: true })
  const file = fs.createWriteStream(GTFS_ZIP_PATH)

  const text = 'Download gtfs.zip'
  await oraPromise(
    (spin) =>
      new Promise<void>((resolve, reject) => {
        https.get(BERLIN_GTFS_URL, (response) => {
          const total = Number(response.headers['content-length'])
          let current = 0
          response
            .on('data', (chunk) => {
              current += chunk.length
              spin.text = `${text} ${percent(current / total)}`
            })
            .on('error', reject)
          response.pipe(file)
          file.on('finish', () => file.close(() => resolve()))
        })
      }),
    'Download gtfs.zip',
  )
}

export const downloadGtfs = async () => {
  const newHeaderDataJson = await isOutdated()
  if (!newHeaderDataJson) return
  await doDownload()
  await unzip()
  await writeFile(GTFS_ZIP_HEADERS, newHeaderDataJson)
}
