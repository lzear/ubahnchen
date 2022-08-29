import { NextApiRequest, NextApiResponse } from 'next'
import { BERLIN_GTFS_URL } from 'gtfs-loader/src/gtfs-url'
import { setCachingHeader } from '../../src/api/utils/cache'

const FIVE_MINUTES = 60 * 5

const gtfsLastModified = async (
  _request: NextApiRequest,
  response: NextApiResponse,
) => {
  const { headers } = await fetch(BERLIN_GTFS_URL, { method: 'HEAD' })
  setCachingHeader(response, FIVE_MINUTES)
  return response.status(200).json(headers.get('last-modified'))
}

export default gtfsLastModified
