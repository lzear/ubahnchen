import type { NextApiRequest, NextApiResponse } from 'next'
import { dateRange } from '../../src/api/date-range'
import { setCachingHeader } from '../../src/api/utils/cache'

const api = async (_request: NextApiRequest, response: NextApiResponse) => {
  const data = await dateRange()
  setCachingHeader(response)
  return response.status(200).json({ data })
}

export default api
