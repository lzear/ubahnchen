import stripAnsi from 'strip-ansi'

const printedLength = (s: string) => [...stripAnsi(s)].length

function padStart(inputString: string, targetLength: number, padString = ' ') {
  const printedL = printedLength(inputString)
  return printedL >= targetLength
    ? inputString
    : padString.repeat(targetLength - printedL) + inputString
}

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
      const printedL = printedLength(cellStr)
      columnWidths[i] = Math.max(columnWidths[i] ?? 1, printedL + 1)
    }
  }

  return data.map((row) =>
    row
      .map((cell, i) => padStart(String(cell), columnWidths[i] ?? 1))
      .join(separator),
  )
}

export const logStrings = (strings: string[], prefix = '') => {
  const maxLen = Math.max(...strings.map((s) => [...s].length))
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

export const wrapLines = (words: string[], width: number) => {
  const lines: string[] = []
  let line = ''
  for (const word of words) {
    if (line.length > 0 && printedLength(line + ' ' + word) > width) {
      lines.push(line.trim())
      line = ''
    }
    line += word + ' '
  }
  lines.push(line.trim())
  return lines
}
