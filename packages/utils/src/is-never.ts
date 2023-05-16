export const isNever = (value: never): never => {
  throw new Error(`Unexpected value: ${String(value)}`)
}
