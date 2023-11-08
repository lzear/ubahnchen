import type { Config } from 'drizzle-kit'

import { paths } from '@ubahnchen/cities/node'

export const small = {
  out: './migrations-folder',
  schema: './src/small',
  breakpoints: true,
  driver: 'better-sqlite',
  dbCredentials: {
    url: paths('berlin').SQLITE_SMALL,
  },
} satisfies Config

export const big = {
  out: './migrations-folder',
  schema: './src/drizzle',
  breakpoints: true,
  driver: 'better-sqlite',
  dbCredentials: {
    url: paths('berlin').SQLITE_BIG,
  },
} satisfies Config

export default big
