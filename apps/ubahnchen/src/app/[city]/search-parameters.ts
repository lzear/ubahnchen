import { z } from 'zod'

export const UrlParameter = {
  RouteType: 'route-type',
  StraightLines: 'straight-lines',
  MergeStops: 'merge-stops',
  Map: 'map',
}

const zBoolean = z.preprocess(
  (v) => (v === 'false' ? false : Boolean(v)),
  z.boolean(),
)

const userInput = (u: Record<string, string | undefined>) => {
  const r: Record<string, string | undefined> = {}
  for (const [key, value] of Object.entries(UrlParameter)) r[key] = u[value]
  return r
}

export const parseUrlParameters = (u: Record<string, string | undefined>) =>
  z
    .object({
      // RouteType:
      //   defaultRouteType === undefined
      //     ? z.optional(z.coerce.number())
      //     : z.optional(z.coerce.number()).default(defaultRouteType),
      RouteType: z.optional(z.string()).transform((v) => {
        const vs = v
          ?.split('-')
          .map(Number)
          .filter((n) => !Number.isNaN(n))
        if (vs) return vs
        return []
      }),
      StraightLines: zBoolean,
      MergeStops: zBoolean,
      Map: z.optional(z.string()),
    })
    .parse(userInput(u))

export type UrlParameterKey = keyof typeof UrlParameter
export type UrlParameterValue = (typeof UrlParameter)[UrlParameterKey]
