import fs from 'node:fs'

import { oraPromise } from 'ora'

import { defaultTextPerf, successText } from '@ubahnchen/csv'
import { getDatabase, schemaMinify } from '@ubahnchen/database'
import { Perf, wait } from '@ubahnchen/utils'

const text = 'minify'.padEnd(14)

export const minify = async (big: string, small: string) => {
  const instructionss = splitSqlInstructions(schemaMinify)
    .map(
      (instruction) => instruction,
      // .replaceAll(/--.*/g, '')
      // .replaceAll('\n', ' ')
      // .replaceAll(/ +/g, ' ')
      // .trim(),
    )
    .filter(Boolean)

  const perf = new Perf({ go: true, totalCount: instructionss.length + 1 })
  await oraPromise(
    async (ora) => {
      const tick = async () => {
        perf?.tick(1)
        ora.text = defaultTextPerf({ perf, ora: { text } })
        await wait(0)
      }
      await fs.promises.copyFile(big, small)
      await tick()
      const databaseSmall = getDatabase(small)
      databaseSmall.database.pragma('foreign_keys = OFF')
      databaseSmall.database.pragma('synchronous = OFF')
      databaseSmall.database.pragma('journal_mode = OFF')
      for (const instruction of instructionss) {
        databaseSmall.database.exec(instruction)
        perf.record(
          instruction
            .replaceAll(/--.*/g, '')
            .replaceAll('\n', ' ')
            .replaceAll(/ +/g, ' ')
            .trim()
            .slice(0, 120),
        )
        await tick()
      }
    },
    { text, successText: () => successText({ perf, ora: { text } }) },
  )
  perf.stop()
  return { perf }
}

const splitSqlInstructions = (schema: string): string[] =>
  schema
    .split(';')
    .map((instruction) => `${instruction.trim()};`)
    .filter(Boolean)
