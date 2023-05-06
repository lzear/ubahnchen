import type { NextApiRequest, NextApiResponse } from 'next'
import { Trip } from 'hafas-client'
import { findHafasTrip } from '../../src/api/find-hafas-trip'
import { setCachingHeader } from '../../src/api/utils/cache'

const handler = async (
  request: NextApiRequest,
  response: NextApiResponse<Trip | { error: string }>,
) => {
  const jid = request.query['jid']
  const route_name = request.query['route_name']

  if (!jid || typeof jid !== 'string') {
    return response.status(400).json({ error: `jid must be set` })
  }
  if (!route_name || typeof route_name !== 'string') {
    return response.status(400).json({ error: `route_name must be set` })
  }
  const r = await findHafasTrip(jid, route_name)
  if (!r) return response.status(404).json({ error: `trip not found` })
  setCachingHeader(response)
  return response.status(200).json(r)
}

export default handler
