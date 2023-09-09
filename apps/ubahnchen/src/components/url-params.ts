import { z } from 'zod'

// export const zBoolean = z.coerce.boolean()
export const zBoolean = z
  .string()
  .nullish()
  .transform((v) => {
    if (v === 'true') return true
    if (v === 'false') return false
    return
  })

export const UrlParameter = {
  RouteType: 'route-type',
  StraightLines: 'straight-lines',
  MergeStops: 'merge-stops',
  Map: 'map',
} as const

export const zUrlParameters = z.object({
  [UrlParameter.RouteType]: z.optional(z.string()).transform(
    (v) =>
      v
        ?.split('-')
        .map(Number)
        .filter((n) => !Number.isNaN(n)) || [],
  ),
  [UrlParameter.StraightLines]: zBoolean,
  [UrlParameter.MergeStops]: zBoolean,
  [UrlParameter.Map]: z.string().optional().nullable(),
})

export type ZUrlParameters = typeof zUrlParameters
