import type { NextApiRequest, NextApiResponse } from 'next'
import { findTripsCount } from '../../src/api/find-trips-count'
import { setCachingHeader } from '../../src/api/utils/cache'

const api = async (_request: NextApiRequest, response: NextApiResponse) => {
  const tripsCounts = await findTripsCount()
  setCachingHeader(response)
  return response.status(200).json(tripsCounts)
}

export default api
