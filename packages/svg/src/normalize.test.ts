import { expect } from '@jest/globals'

import { normalize } from './normalize'

describe(normalize, () => {
  it('normalize paths', () => {
    expect(normalize('M0,0h10v5')).toMatchInlineSnapshot(
      `"M 0 0 C 0 0 10 0 10 0 C 10 0 10 5 10 5"`,
    )
  })
})
