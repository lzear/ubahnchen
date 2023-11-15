import fs from 'node:fs'
import path from 'node:path'

import prettyBytes from 'pretty-bytes'

export const initializeFile = async (filePath: string) => {
  const d = path.dirname(filePath)
  if (!fs.existsSync(d)) await fs.promises.mkdir(d, { recursive: true })
  if (fs.existsSync(filePath)) await fs.promises.unlink(filePath)
}

export const initializeFileIfNotExists = async (filePath: string) => {
  if (!fs.existsSync(filePath)) await initializeFile(filePath)
}

export const fileSize = async (
  path: string,
): Promise<{
  size: number | undefined
  prettySize: string | undefined
}> => {
  try {
    const fileStats = await fs.promises.stat(path)
    return { size: fileStats.size, prettySize: prettyBytes(fileStats.size) }
  } catch {
    return { size: undefined, prettySize: undefined }
  }
}
