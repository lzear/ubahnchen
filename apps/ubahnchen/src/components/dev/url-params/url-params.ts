import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { z } from 'zod'

export enum UrlParamType {
  String = 'string',
  Number = 'number',
  Boolean = 'boolean',
  NumberArray = 'number-array',
}

type Types = {
  [UrlParamType.String]: string | null | undefined
  [UrlParamType.Number]: number | null | undefined
  [UrlParamType.Boolean]: boolean | null | undefined
  [UrlParamType.NumberArray]: number[] | null | undefined
}

export const zBoolean = z
  .string()
  .nullish()
  .transform((v) => {
    if (v === 'true') return true
    if (v === 'false') return false
    return
  })

const parse: {
  [T in UrlParamType]: (v: string | null | undefined) => Types[T]
} = {
  [UrlParamType.String]: (v) => (v === null || v === undefined ? v : String(v)),
  [UrlParamType.Number]: (v) => (v === null || v === undefined ? v : Number(v)),
  [UrlParamType.Boolean]: (v) =>
    v === null || v === undefined ? v : v === 'true',
  [UrlParamType.NumberArray]: (v) =>
    v
      ?.split('-')
      .map(Number)
      .filter((n) => !Number.isNaN(n)),
}

const format: {
  [T in UrlParamType]: (v: NonNullable<Types[T]>) => string
} = {
  [UrlParamType.String]: String,
  [UrlParamType.Number]: String,
  [UrlParamType.Boolean]: String,
  [UrlParamType.NumberArray]: (v) => v.map(String).join('-'),
}

export const useUrlParams = <
  TypeName extends UrlParamType,
  ActualType extends Types[TypeName] = Types[TypeName],
>({
  name,
  type,
}: {
  name: string
  type: TypeName
}) => {
  const router = useRouter()
  const params = useSearchParams()
  const pathname = usePathname()
  const value = params
    ? (parse[type](params.get(name)) as ActualType | null)
    : null
  const getHref = (newValue: ActualType) => {
    const parameters = new URLSearchParams(params?.toString())
    if (newValue === null || newValue === undefined) parameters.delete(name)
    else parameters.set(name, format[type](newValue))
    return `${pathname}?${parameters.toString()}`
  }
  const setValue = (newValue: ActualType) => router.replace(getHref(newValue))
  return { value, setValue, getHref }
}

export const useUrlParamsMulti = <
  TypeName extends UrlParamType,
  ActualType extends Types[TypeName] = Types[TypeName],
>(
  nameAndTypeArray: {
    name: string
    type: TypeName
  }[],
) => {
  const router = useRouter()
  const params = useSearchParams()
  const pathname = usePathname()
  const values = nameAndTypeArray.map(({ name, type }) =>
    params ? (parse[type](params.get(name)) as ActualType | null) : null,
  )

  const getHref = (newValues: ActualType[]) => {
    const parameters = new URLSearchParams(params?.toString())
    for (const [i, { name, type }] of nameAndTypeArray.entries()) {
      const newValue = newValues[i]
      if (newValue === null || newValue === undefined) parameters.delete(name)
      else parameters.set(name, format[type](newValue))
    }
    return `${pathname}?${parameters.toString()}`
  }
  const setValues = (newValues: ActualType[]) =>
    router.replace(getHref(newValues))

  return { values, setValues, getHref }
}
