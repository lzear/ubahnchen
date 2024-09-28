import type { Config } from 'drizzle-kit'

export const small = {
  dialect: 'sqlite',
  out: './migrations-folder',
  schema: './src/small',
  breakpoints: true,
  dbCredentials: {
    // @TODO: Fix this avoiding
    // Invalid package dependency graph: cyclic dependency detected:
    //         @ubahnchen/database, @ubahnchen/cities
    url: 'FIXME',
  },
} satisfies Config

export const big = {
  dialect: 'sqlite',
  out: './migrations-folder',
  schema: './src/drizzle',
  breakpoints: true,
  dbCredentials: {
    // @TODO: Fix this avoiding
    // Invalid package dependency graph: cyclic dependency detected:
    //         @ubahnchen/database, @ubahnchen/cities
    url: 'FIXME',
  },
} satisfies Config

export default big
