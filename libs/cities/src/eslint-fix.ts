import fs from 'node:fs'
import path from 'node:path'

// eslint-disable-next-line import/no-extraneous-dependencies
import { ESLint } from 'eslint'

export const writeCode = async (code: string, target: string) => {
  await fs.promises.mkdir(path.dirname(target), { recursive: true })
  await fs.promises.writeFile(target, code)
  const eslint = new ESLint({ fix: true })
  const results = await eslint.lintFiles(target)
  await ESLint.outputFixes(results)
}
