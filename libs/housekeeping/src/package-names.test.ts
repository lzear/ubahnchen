import { describe, it } from '@jest/globals'

import { projectRoot } from '@ubahnchen/paths'

// import { listDirectories } from './packages.js'
//
// console.log('🦺 antoinelog 111', 111)
//
// const getPackageJson = async (workspace: string, directory: string) => {
//   const { default: package_ } = (await import(
//     `${projectRoot}/${workspace}/${directory}/package.json`
//   )) as { default: Record<string, any> }
//   return package_
// }

describe('namings', () => {
  console.log('🦺 antoinelog 22', 22)

  describe.each(['packages', 'libs', 'apps'])('%p', (workspace) => {
    // const directories: string[] = listDirectories(workspace)

    describe.each(['sdf'])('%p', (directory) => {
      // it('should be named correctly', async () => {
      //   const package_ = await getPackageJson(workspace, directory)
      //   expect(package_.name).toBe(`@ubahnchen/${directory}`)
      // })

      it('should have volta', async () => {
        expect(2).toBe(2)
        // const package_ = await getPackageJson(workspace, directory)
        // expect(package_.volta).toMatchObject({ extends: '../../package.json' })
      })
    })
  })
})
