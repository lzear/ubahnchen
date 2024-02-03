import type { Config } from 'drizzle-kit'

import { P } from '@ubahnchen/cities/node'

export const small = {
  out: './migrations-folder',
  schema: './src/small',
  breakpoints: true,
  driver: 'better-sqlite',
  dbCredentials: {
    url: P('berlin').SQLITE.SMALL,
  },
} satisfies Config

export const big = {
  out: './migrations-folder',
  schema: './src/drizzle',
  breakpoints: true,
  driver: 'better-sqlite',
  dbCredentials: {
    url: P('berlin').SQLITE.BIG,
  },
} satisfies Config

export default big
