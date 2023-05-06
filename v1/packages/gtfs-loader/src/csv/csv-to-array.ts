import { streamCsv3 } from './stream-csv'

export const csvToArray = async <T>(
  filePath: string,
  mapper: (row: Record<string, string>) => T,
) => {
  const array: T[] = []
  await streamCsv3({
    filePath,
    func: (row) => array.push(mapper(row)),
  })
  return array
}
