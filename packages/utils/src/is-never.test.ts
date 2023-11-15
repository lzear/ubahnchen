import { isNever } from './is-never'

describe(isNever, () => {
  it('throws', () => {
    // @ts-expect-error isNever should never be called
    expect(() => isNever('foo')).toThrow('Unexpected value: foo')

    expect(() => isNever()).toThrow('Unexpected value: undefined')

    expect(() => isNever('' as never)).toThrow('Unexpected value: ')
  })
})
