import { execSync } from 'node:child_process'
import path from 'node:path'

export const countLines = (filepath: string): number => {
  const absPath = path.resolve(filepath)
  const r = execSync(`sed -n '$=' "${absPath}"`, { encoding: 'utf8' })
  return Number(r)
}

export const catFile = (filepath: string): string =>
  execSync(`cat "${filepath}"`, { encoding: 'utf8' })
