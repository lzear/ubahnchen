import { mergePaths } from './merge-paths'

describe(mergePaths, () => {
  it('mergePaths', () => {
    expect(mergePaths(['M0,0h10v5', 'M1,1h10v5h-7'])).toMatchInlineSnapshot(
      `"M10,5v-5h-10l1,1h10v5h-7"`,
    )
  })
})
