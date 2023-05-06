const compareFunction = (a: string, b: string) => a.localeCompare(b)

/**
 *
 * @param ar Sorted array
 * @param element
 * @param returnIndexAfter
 * If false: return the index of the last value being lower than the searched value
 * If true: return the index of the first value being greater than the searched value
 * @return Index of a found
 */
export const binarySearch = (
  ar: string[],
  element: string,
  returnIndexAfter = false,
): number => {
  let m = -1
  let n = ar.length
  while (m <= n) {
    const k = (n + m) >> 1
    let cmp: number

    if (k === -1) cmp = 1
    else if (k === ar.length) cmp = -1
    else cmp = compareFunction(element, ar[k]!)
    if (cmp > 0) m = k + 1
    else if (cmp < 0) n = k - 1
    else if (m === n) return returnIndexAfter ? n + 1 : m - 1
    else returnIndexAfter ? (m = k + 1) : (n = k - 1)
  }
  return returnIndexAfter ? m : n
}
