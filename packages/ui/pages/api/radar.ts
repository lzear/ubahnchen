import type { NextApiRequest, NextApiResponse } from 'next'
import { radarHandler } from '../../src/api/radar/handler'
import { MapName } from '../../src/lib/enums'
import { RadarDto } from '../../src/lib/radar'

const handler = async (
  request: NextApiRequest,
  response: NextApiResponse<RadarDto | { error: string }>,
) => {
  const mapName = request.query['map']

  if (MapName.U !== mapName && MapName.SU !== mapName) {
    return response
      .status(400)
      .json({ error: `map must be in ${[MapName.U, MapName.SU]}` })
  }
  const r = await radarHandler(mapName)
  return response.status(200).json(r)
}

export default handler
