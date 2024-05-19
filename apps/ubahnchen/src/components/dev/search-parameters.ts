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

export type UrlParameterKey = keyof typeof UrlParameter
export type UrlParameterValue = (typeof UrlParameter)[UrlParameterKey]
