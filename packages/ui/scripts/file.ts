import path from 'node:path'
import process from 'node:process'
import fs from 'node:fs'

export const getAbsPath = (folder: string) =>
  path.resolve(process.cwd(), folder)

export const writeFile = async (filePath: string, content: string) => {
  const f = getAbsPath(filePath)
  const d = path.dirname(f)
  if (!fs.existsSync(d)) await fs.promises.mkdir(d, { recursive: true })
  return fs.promises.writeFile(f, content)
}
