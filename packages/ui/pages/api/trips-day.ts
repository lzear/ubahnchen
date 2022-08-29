import type { NextApiRequest, NextApiResponse } from 'next'
import { findTripsDay } from '../../src/api/find-trips-day'
import { setCachingHeader } from '../../src/api/utils/cache'

const api = async (request: NextApiRequest, response: NextApiResponse) => {
  const queryDate = Array.isArray(request.query['day'])
    ? undefined
    : request.query['day']
  if (!queryDate)
    return response
      .status(400)
      .json({ error: 'day param must be present (YYYYMMDD)' })
  const data = await findTripsDay(queryDate)

  setCachingHeader(response)
  return response.status(200).json({ data })
}

export default api
