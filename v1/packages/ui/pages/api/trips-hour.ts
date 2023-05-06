import type { NextApiRequest, NextApiResponse } from 'next'
import { isValid, parseISO } from 'date-fns'
import { findTripsHour } from '../../src/api/find-trips-hour'
import { TripNFrames } from '../../src/lib/keyframe'
import { MapName } from '../../src/lib/enums'
import { setCachingHeader } from '../../src/api/utils/cache'

const api = async (
  request: NextApiRequest,
  response: NextApiResponse<TripNFrames[] | { error: string }>,
) => {
  const queryDate = Array.isArray(request.query['date'])
    ? undefined
    : request.query['date']

  if (
    request.query['skipPrevious'] !== 'true' &&
    request.query['skipPrevious'] !== undefined
  )
    return response
      .status(400)
      .json({ error: 'skipPrevious must be absent or "true"' })
  if (!queryDate || !queryDate.endsWith(':00:00Z'))
    return response
      .status(400)
      .json({ error: 'date param must be present and end with :00:00Z' })

  const mapName = request.query['map']
  if (!(mapName === MapName.U || mapName === MapName.SU)) {
    return response
      .status(400)
      .json({ error: `Need a map (${[MapName.U, MapName.SU]})` })
  }

  const date = parseISO(queryDate)
  if (!isValid(date))
    return response.status(400).json({ error: 'invalid date' })
  const skipPrevious = request.query['skipPrevious'] === 'true'

  const data = await findTripsHour(queryDate, skipPrevious, mapName)

  setCachingHeader(response)
  return response.status(200).json(data)
}

export default api
