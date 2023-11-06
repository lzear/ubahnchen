import { UrlParamType, useUrlParams } from './url-params.js'

export const useCandidatesMagnet = () =>
  useUrlParams({
    name: 'candidates-magnet',
    type: UrlParamType.Boolean,
  })
