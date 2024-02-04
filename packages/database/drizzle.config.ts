import type { Config } from 'drizzle-kit'

export const small = {
  out: './migrations-folder',
  schema: './src/small',
  breakpoints: true,
  driver: 'better-sqlite',
  dbCredentials: {
    // @TODO: Fix this avoiding
    // Invalid package dependency graph: cyclic dependency detected:
    //         @ubahnchen/database, @ubahnchen/cities
    url: 'FIXME',
  },
} satisfies Config

export const big = {
  out: './migrations-folder',
  schema: './src/drizzle',
  breakpoints: true,
  driver: 'better-sqlite',
  dbCredentials: {
    // @TODO: Fix this avoiding
    // Invalid package dependency graph: cyclic dependency detected:
    //         @ubahnchen/database, @ubahnchen/cities
    url: 'FIXME',
  },
} satisfies Config

export default big
