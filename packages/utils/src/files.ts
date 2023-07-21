import fs from 'node:fs'
import path from 'node:path'

export const initializeFile = async (filePath: string) => {
  const d = path.dirname(filePath)
  if (!fs.existsSync(d)) await fs.promises.mkdir(d, { recursive: true })
  if (fs.existsSync(filePath)) await fs.promises.unlink(filePath)
}

export const initializeFileIfNotExists = async (filePath: string) => {
  if (!fs.existsSync(filePath)) await initializeFile(filePath)
}
