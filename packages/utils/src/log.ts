export const log2DArray = (
  data: (number | string | undefined | null)[][],
  separator = ' ',
) => {
  if (data.length === 0 || data[0]?.length === 0)
    return data.map((row) => row.join(separator))
  const columnWidths = data[0]?.map(() => 1)
  if (!columnWidths) return data.map((row) => row.join(separator))

  for (const row of data) {
    for (const [i, cell] of row.entries()) {
      const cellStr = String(cell)
      columnWidths[i] = Math.max(columnWidths[i] ?? 1, cellStr.length)
    }
  }

  return data.map((row) =>
    row
      .map((cell, i) => String(cell).padStart(columnWidths[i] || 1))
      .join(separator),
  )
}

export const logStrings = (strings: string[], prefix = '') => {
  const maxLen = Math.max(...strings.map((s) => s.length))
  for (const s of strings) {
    console.log(`${prefix}${s.padEnd(maxLen)}`)
  }
}

export const prettyNumber = (
  n: number,
  options?: Intl.NumberFormatOptions & { integer?: boolean },
  locale?: string,
) =>
  new Intl.NumberFormat(locale, {
    ...options,
    maximumFractionDigits: options?.integer
      ? 0
      : options?.maximumFractionDigits,
  }).format(n)
