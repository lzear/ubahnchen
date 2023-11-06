import { describe, it, jest } from '@jest/globals'

import { projectRoot } from '@ubahnchen/paths'

import { listDirectories } from './packages.js'

const getPackageJson = async (workspace: string, directory: string) => {
  const { default: package_ } = (await import(
    `${projectRoot}/${workspace}/${directory}/package.json`
  )) as { default: Record<string, any> }
  return package_
}

describe('namings', () => {
  describe.each(['packages', 'libs', 'apps', 'cities'])('%p', (workspace) => {
    const directories: string[] = listDirectories(workspace)

    describe.each(directories)('%p', (directory) => {
      it('should be named correctly', async () => {
        const package_ = await getPackageJson(workspace, directory)
        expect(package_.name).toBe(`@ubahnchen/${directory}`)
      })

      it('should have volta', async () => {
        const package_ = await getPackageJson(workspace, directory)
        expect(package_.volta).toMatchObject({ extends: '../../package.json' })
      })
    })
  })
})
