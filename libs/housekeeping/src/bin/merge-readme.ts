#!/usr/bin/env -S node --no-warnings --loader ts-node/esm --es-module-specifier-resolution=node

import * as fs from 'node:fs'
import * as path from 'node:path'

import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'

import { projectRoot } from '@ubahnchen/paths'
import { truthy } from '@ubahnchen/utils'

import { listDirectories } from '../packages'

await yargs(hideBin(process.argv))
  .command(
    'merge-readme',
    'Merge packages/libraries READMEs into the root README',
  )
  .parse()

const packages = listDirectories('packages')

const newString = await Promise.all(
  packages.map(async (directory) => {
    try {
      const currentReadme = await fs.promises.readFile(
        path.join(projectRoot, 'packages', directory, 'README.md'),
      )
      return currentReadme.toString()
    } catch (error) {
      if ((error as { code?: string })['code'] === 'ENOENT') return
      throw error
    }
  }),
  // eslint-disable-next-line unicorn/no-array-callback-reference
).then((s) => s.filter(truthy).join('\n\n\n'))

const ogReadmeBuffer = await fs.promises.readFile(
  path.join(projectRoot, 'README.md'),
)

const og = ogReadmeBuffer.toString()

const newReadme = og.replace(
  /\[comment]: <> \(LIBRARIES BEGIN\).*\[comment]: <> \(LIBRARIES END\)/ms,
  `[comment]: <> (LIBRARIES BEGIN)

${newString}

[comment]: <> (LIBRARIES END)
`,
)
await fs.promises.writeFile(path.join(projectRoot, 'README.md'), newReadme)

process.exit(0)
