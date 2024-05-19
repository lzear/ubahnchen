import type { Linter } from '@typescript-eslint/utils/ts-eslint'

import pckg from '../package.json'

import { preferRelativeImports } from './rules/prefer-relative-imports'

const { name, version } = pckg

export const rules = {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  'prefer-relative-imports': preferRelativeImports,
} satisfies Linter.PluginRules

const plugin = {
  meta: { name, version },
  rules,
} satisfies Linter.Plugin

export default plugin
