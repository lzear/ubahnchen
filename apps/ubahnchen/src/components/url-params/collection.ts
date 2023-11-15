import { UrlParamType, useUrlParams } from './url-params'

export const useCandidatesMagnet = () =>
  useUrlParams({
    name: 'candidates-magnet',
    type: UrlParamType.Boolean,
  })
