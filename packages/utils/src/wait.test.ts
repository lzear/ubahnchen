import { expect } from '@jest/globals'

import { wait } from './wait.js'

describe(wait, () => {
  it('wait', async () => expect(await wait(10)).toBe(undefined))
})
