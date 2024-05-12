import { describe, it } from '@jest/globals'

import { P } from '@ubahnchen/cities/node'

import { listDirectories } from './packages'

const WORKSPACES = ['packages', 'libs', 'apps']

const getPackageJson = async (workspace: string, directory: string) => {
  const { default: package_ } = (await import(
    `${P.PROJECT_ROOT}/${workspace}/${directory}/package.json`
  )) as { default: Record<string, unknown> }
  return package_
}

describe('workspaces', () => {
  it('lints', async () => {
    const lintScripts = await Promise.all(
      WORKSPACES.flatMap((workspace) =>
        listDirectories(workspace).map(async (directory) => {
          const package_ = await getPackageJson(workspace, directory)
          // eslint-disable-next-line @typescript-eslint/no-unsafe-return
          // @ts-ignore
          return package_.scripts?.lint as string
        }),
      ),
    )
    expect(lintScripts).toMatchInlineSnapshot(`
      [
        "eslint . --ext js,ts,jsx,tsx,cjs,json,md",
        "eslint . --ext js,ts,jsx,tsx,cjs,json,md",
        "eslint . --ext js,ts,jsx,tsx,cjs,json,md",
        "eslint . --ext js,ts,jsx,tsx,cjs,json,md",
        "eslint . --ext js,ts,jsx,tsx,cjs,json,md",
        "eslint . --ext js,ts,jsx,tsx,cjs,json,md",
        "eslint . --ext js,ts,jsx,tsx,cjs,json,md",
        "eslint . --ext js,ts,jsx,tsx,cjs,json,md",
        "eslint . --ext js,ts,jsx,tsx,cjs,json,md",
        "eslint . --ext js,ts,jsx,tsx,cjs,json,md",
        "eslint . --ext js,ts,jsx,tsx,cjs,json,md",
        "eslint . --ext js,ts,jsx,tsx,cjs,json,md",
        "eslint . --ext js,ts,jsx,tsx,cjs,json,md",
        "eslint . --ext js,ts,jsx,tsx,cjs,json,md",
        "next lint",
      ]
    `)
  })

  it('has license', async () => {
    const lintScripts = await Promise.all(
      WORKSPACES.flatMap((workspace) =>
        listDirectories(workspace).map(async (directory) => {
          const package_ = await getPackageJson(workspace, directory)
          return `${package_.license as string} ${package_.name as string}`
        }),
      ),
    )
    expect(lintScripts).toMatchInlineSnapshot(`
      [
        "MIT @ubahnchen/csv",
        "MIT @ubahnchen/database",
        "MIT @ubahnchen/gtfs",
        "MIT @ubahnchen/gtfs-to-sqlite",
        "MIT @ubahnchen/json",
        "MIT @ubahnchen/node",
        "MIT @ubahnchen/svg",
        "MIT @ubahnchen/utils",
        "MIT @ubahnchen/cities",
        "MIT @ubahnchen/cli",
        "MIT @ubahnchen/eslint-config",
        "MIT @ubahnchen/housekeeping",
        "MIT @ubahnchen/prisma",
        "MIT @ubahnchen/tsconfig",
        "MIT @ubahnchen/ubahnchen",
      ]
    `)
  })

  describe.each(WORKSPACES)('%p', (workspace) => {
    const directories: string[] = listDirectories(workspace)

    describe.each(directories)('%p', (directory) => {
      it('should be named correctly', async () => {
        const package_ = await getPackageJson(workspace, directory)
        expect(package_.name).toBe(`@ubahnchen/${directory}`)
      })

      it('should have volta', async () => {
        expect(2).toBe(2)
        const package_ = await getPackageJson(workspace, directory)
        expect(package_.volta).toMatchObject({ extends: '../../package.json' })
      })

      it('should lint', async () => {
        expect(2).toBe(2)
        const package_ = await getPackageJson(workspace, directory)
        expect(package_.scripts).toMatchObject({ lint: /lint/ })
      })

      it('has license', async () => {
        expect(2).toBe(2)
        const package_ = await getPackageJson(workspace, directory)
        expect(package_.license).toBe('MIT')
      })
    })
  })
})
