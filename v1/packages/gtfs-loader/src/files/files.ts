import path from 'node:path'
import process from 'node:process'
import * as fs from 'node:fs'

import { execSync } from 'node:child_process'

export const getAbsPath = (folder: string) =>
  path.resolve(process.cwd(), folder)

export const writeFile = async (filePath: string, content: string) => {
  const f = getAbsPath(filePath)
  const d = path.dirname(f)
  if (!fs.existsSync(d)) await fs.promises.mkdir(d, { recursive: true })
  return fs.promises.writeFile(f, content)
}

export const readFile = async (filePath: string) => {
  const f = getAbsPath(filePath)
  if (!fs.existsSync(f)) return
  return fs.promises.readFile(f, 'utf8')
}

export const countLines = (filepath: string) =>
  Number(execSync(` sed -n '$=' ${filepath}`, { encoding: 'utf8' }))
