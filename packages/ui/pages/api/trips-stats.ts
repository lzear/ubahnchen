import type { NextApiRequest, NextApiResponse } from 'next'
import { setCachingHeader } from '../../src/api/utils/cache'
import { findTripsStats } from '../../src/api/find-trips-stats'

const api = async (
  request: NextApiRequest,
  response: NextApiResponse<
    | Record<
        string,
        {
          count: number
          minutes: Record<number, number>
          stops: Record<string, number>
        }
      >
    | { error: string }
  >,
) => {
  const queryDate = Array.isArray(request.query['day'])
    ? undefined
    : request.query['day']
  if (!queryDate)
    return response
      .status(400)
      .json({ error: 'day param must be present (YYYYMMDD)' })

  const data = await findTripsStats(queryDate)

  setCachingHeader(response)
  return response.status(200).json(data)
}

export default api
