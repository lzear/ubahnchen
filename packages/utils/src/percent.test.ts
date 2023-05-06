import { percent } from './percent'

describe(percent, () => {
  it('should return a percentage', () => {
    expect(percent(0.5)).toEqual('50.00%')
  })
})
