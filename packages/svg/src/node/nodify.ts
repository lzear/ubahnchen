import fs from 'node:fs'

export const nodify = <
  F extends // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (...args: [string, ...any[]]) => string,
>(
  func: F,
) => {
  type RestArgs = Parameters<F> extends [string, ...infer R] ? R : never
  return (inputPath: string, outputPath: string, ...args: RestArgs) =>
    fs.promises.writeFile(
      outputPath,
      func(fs.readFileSync(inputPath, 'utf8'), ...args),
    )
}
