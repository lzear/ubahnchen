import { z } from 'zod'

export const UrlParameter = {
  RouteType: 'route-type',
  StraightLines: 'straight-lines',
  MergeStops: 'merge-stops',
  Map: 'map',
}

export const zBoolean = z
  .string()
  .nullish()
  .transform((v) => {
    if (v === 'true') return true
    if (v === 'false') return false
    return
  })

const userInput = (u: Record<string, string | undefined>) => {
  const r: Record<string, string | undefined> = {}
  for (const [key, value] of Object.entries(UrlParameter)) r[key] = u[value]
  return r
}

export const parseUrlParameters = (
  u: Record<string, string | undefined> = {},
) =>
  z
    .object({
      RouteType: z.optional(z.string()).transform((v) => {
        return (
          v
            ?.split('-')
            .map(Number)
            .filter((n) => !Number.isNaN(n)) || []
        )
      }),
      StraightLines: zBoolean,
      MergeStops: zBoolean,
      Map: z.string().optional(),
    })
    .parse(userInput(u))

export type UrlParameterKey = keyof typeof UrlParameter
export type UrlParameterValue = (typeof UrlParameter)[UrlParameterKey]
