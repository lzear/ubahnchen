import { binarySearch } from './binary-search'

describe(binarySearch, () => {
  it('should return idx before', function () {
    expect(binarySearch([], 'a')).toBe(-1)
    expect(binarySearch(['a'], 'a')).toBe(-1)
    expect(binarySearch(['b'], 'a')).toBe(-1)
    expect(binarySearch(['a'], 'b')).toBe(0)
    expect(binarySearch(['b', 'c', 'd'], 'a')).toBe(-1)
    expect(binarySearch(['b', 'c', 'd'], 'b')).toBe(-1)
    expect(binarySearch(['b', 'c', 'd'], 'c')).toBe(0)
    expect(binarySearch(['b', 'c', 'd'], 'd')).toBe(1)
    expect(binarySearch(['b', 'c', 'd'], 'e')).toBe(2)

    expect(binarySearch(['b', 'c', 'd', 'e'], 'a')).toBe(-1)
    expect(binarySearch(['b', 'c', 'd', 'e'], 'b')).toBe(-1)
    expect(binarySearch(['b', 'c', 'd', 'e'], 'c')).toBe(0)
    expect(binarySearch(['b', 'c', 'd', 'e'], 'd')).toBe(1)
    expect(binarySearch(['b', 'c', 'd', 'e'], 'e')).toBe(2)
    expect(binarySearch(['b', 'c', 'd', 'e'], 'f')).toBe(3)

    expect(binarySearch(['b', 'b', 'b', 'b'], 'a')).toBe(-1)
    expect(binarySearch(['b', 'b', 'b', 'b'], 'b')).toBe(-1)
    expect(binarySearch(['b', 'b', 'b', 'b'], 'c')).toBe(3)
  })
  it('should return idx after', function () {
    expect(binarySearch([], 'a', true)).toBe(0)
    expect(binarySearch(['a'], 'a', true)).toBe(1)
    expect(binarySearch(['b'], 'a', true)).toBe(0)
    expect(binarySearch(['a'], 'b', true)).toBe(1)
    expect(binarySearch(['b', 'c', 'd'], 'a', true)).toBe(0)
    expect(binarySearch(['b', 'c', 'd'], 'b', true)).toBe(1)
    expect(binarySearch(['b', 'c', 'd'], 'c', true)).toBe(2)
    expect(binarySearch(['b', 'c', 'd'], 'd', true)).toBe(3)
    expect(binarySearch(['b', 'c', 'd'], 'e', true)).toBe(3)

    expect(binarySearch(['b', 'c', 'd', 'e'], 'a', true)).toBe(0)
    expect(binarySearch(['b', 'c', 'd', 'e'], 'b', true)).toBe(1)
    expect(binarySearch(['b', 'c', 'd', 'e'], 'c', true)).toBe(2)
    expect(binarySearch(['b', 'c', 'd', 'e'], 'd', true)).toBe(3)
    expect(binarySearch(['b', 'c', 'd', 'e'], 'e', true)).toBe(4)
    expect(binarySearch(['b', 'c', 'd', 'e'], 'f', true)).toBe(4)

    expect(binarySearch(['b', 'b', 'b', 'b'], 'a', true)).toBe(0)
    expect(binarySearch(['b', 'b', 'b', 'b'], 'b', true)).toBe(4)
    expect(binarySearch(['b', 'b', 'b', 'b'], 'c', true)).toBe(4)
  })
})
