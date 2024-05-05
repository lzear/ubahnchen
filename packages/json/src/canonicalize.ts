export type Json =
  | string
  | number
  | boolean
  | null
  | undefined
  | Json[]
  | { [key: string]: Json }

export type CanonicalOrder = 'alphabetical' | 'numerical' | 'keepAlike'

export interface JsonSchema {
  type: string
  properties?: Record<string, JsonSchema>
  items?: JsonSchema
  required?: string[]
  canonicalOrder?: CanonicalOrder
  [key: string]: unknown // Allow other schema properties as well
}

const sortArray = <T>(array: T[], ordering: CanonicalOrder) =>
  ({
    alphabetical: (a: T[]) =>
      a.sort((a, b) => JSON.stringify(a).localeCompare(JSON.stringify(b))),
    numerical: (a: T[]) => a.sort((a, b) => Number(a) - Number(b)),
    keepAlike: (a: T[]) => a,
  })[ordering](array)

const canonicalizeObject = <O extends Record<string, Json>>(
  obj: O,
  schema?: JsonSchema,
): O => {
  const keys = sortArray(
    Object.keys(obj) as (keyof O)[],
    schema?.canonicalOrder ?? 'alphabetical',
  )

  // eslint-disable-next-line unicorn/no-array-reduce
  return keys.reduce((acc: O, key: keyof O) => {
    // @ts-ignore
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    acc[key] = canonicalize(obj[key], schema?.properties?.[key])
    return acc
  }, {} as O)
}

const canonicalizeArray = <T extends Json>(
  arr: T[],
  schema?: JsonSchema,
): T[] => {
  const items = arr.map((item) => canonicalize(item, schema?.items))
  return sortArray(items, schema?.canonicalOrder ?? 'alphabetical')
}

export const canonicalize = <O extends Json>(
  data: O,
  schema?: JsonSchema,
): O => {
  if (Array.isArray(data))
    // @ts-ignore
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return canonicalizeArray(data, schema)
  else if (typeof data === 'object' && data !== null)
    // @ts-ignore
    return canonicalizeObject(data, schema)
  else return data
}

export const canonicalizeToString = <O extends Json>(
  data: O,
  schema?: JsonSchema,
): string => JSON.stringify(canonicalize(data, schema), null, 2)
