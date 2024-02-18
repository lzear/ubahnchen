import { expect } from '@jest/globals'

import { reverse } from './reverse'

describe(reverse, () => {
  it('reverses', () => {
    expect(reverse('M0,0h10v5h-7z')).toMatchInlineSnapshot(`"M3,5h7v-5h-10z"`)
  })
})
