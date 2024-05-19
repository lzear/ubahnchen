import path from 'node:path'

import type { TSESTree } from '@typescript-eslint/utils'
import type {
  RuleListener,
  RuleModule,
} from '@typescript-eslint/utils/ts-eslint'
import type { Rule } from 'eslint'
import moduleVisitor from 'eslint-module-utils/moduleVisitor'
import resolve from 'eslint-module-utils/resolve'

import { createEslintRule } from '@/utils/create-eslint-rule'

type MESSAGE_ID = 'CHANGE_TO_RELATIVE'

type Options = []

export const RULE_NAME = 'prefer-relative-imports'

const MAX_PARENT_DIRECTORY_PREFIXES = 1

const relativize = (
  source: string,
  target: string,
  context: Rule.RuleContext,
) => {
  const resolved = resolve(target, context)
  if (!resolved) return null
  const relative = path.relative(path.dirname(source), resolved)
  if (!relative) return null
  return fixupEnding(fixupBeginning(relative), target)
}

const fixupBeginning = (relativePath: string) =>
  relativePath.startsWith('./') || relativePath.startsWith('..')
    ? relativePath
    : `./${relativePath}`

const fixupEnding = (relativePath: string, initial: string) => {
  const dropAfter = initial.split('/').at(-1)
  if (!dropAfter) return relativePath
  const s = `/${dropAfter}`
  const parts = relativePath.split(s).slice(0, -1)
  return parts.join(s) + s
}

const countParentDirectoryPrefixes = (path: string) => {
  const matches = path.match(/^(?:\.\.\/)+/)
  return matches ? matches[0].length / 3 : 0
}

// eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-assignment
export const preferRelativeImports = createEslintRule<Options, MESSAGE_ID>({
  name: RULE_NAME,
  meta: {
    type: 'problem',
    docs: {
      description: 'prefer relative imports',
    },
    fixable: 'code',
    schema: [{ type: 'object' }],
    messages: {
      CHANGE_TO_RELATIVE:
        'Prefer a relative import when closeby `{{relativePath}}`',
    },
  },
  defaultOptions: [],
  // @ts-ignore
  create: (context: Rule.RuleContext): RuleListener => {
    const myPath = context.physicalFilename || context.filename
    const checkSourceValue = (node: TSESTree.ImportDeclaration) => {
      // @ts-ignore
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const nodeValue: string = node.value
      const relativePath = relativize(myPath, nodeValue, context)
      if (!relativePath) return {}
      if (
        relativePath &&
        relativePath.length < nodeValue.length &&
        countParentDirectoryPrefixes(relativePath) <=
          MAX_PARENT_DIRECTORY_PREFIXES
      ) {
        context.report({
          node,
          messageId: 'CHANGE_TO_RELATIVE',
          data: { relativePath },
          fix: (fixer) => {
            return fixer.replaceText(node, `'${relativePath}'`)
          },
        })
      }
      return {}
    }

    // @ts-ignore
    return moduleVisitor(checkSourceValue)
  },
}) satisfies RuleModule<MESSAGE_ID>
