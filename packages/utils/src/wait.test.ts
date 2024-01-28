import { expect } from '@jest/globals'

import { wait } from './wait'

describe(wait, () => {
  it('waits', async () => expect(await wait(10)).toBe(undefined))
})
