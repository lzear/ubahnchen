import createClient from 'hafas-client'
import dbProfile from 'hafas-client/p/vbb'
import { MapName } from '../../lib/enums'
import type { HafasRadarResponse, RadarDto, RadarTrip } from '../../lib/radar'
import { Keyframe2 } from '../../lib/keyframe'
import { aniToFrames } from './ani'

const client = createClient(dbProfile, 'my-awesome-program')

const productsOff = {
  suburban: false,
  subway: false,
  ferry: false,
  bus: false,
  tram: false,
  express: false,
  regional: false,
}

export const radarHandler: (mapName: MapName) => Promise<RadarDto> = async (
  mapName: MapName,
) => {
  const r = (await client?.radar?.(
    {
      north: 52.824_966,
      south: 52.262_152,
      east: 13.884_369,
      west: 12.919_495,
      // north: Number(request.query['north']),
      // south: Number(request.query['south']),
      // east: Number(request.query['east']),
      // west: Number(request.query['west']),
    },
    {
      results: 200,
      products: {
        ...productsOff,
        subway: true,
        suburban: mapName === MapName.SU,
      },
      frames: 15,
    },
  )) as unknown as HafasRadarResponse

  const result = r.jnyL.map((jnyLn) => {
    const routeName = jnyLn.line.name
    return {
      ...aniToFrames(jnyLn.ani, routeName, mapName),
      jid: jnyLn.jid,
      date: jnyLn.date,
      dirTxt: jnyLn.dirTxt,
      routeName,
    }
  })

  const trips = result.filter((v) => !v.hasError) as (RadarTrip & {
    keyframes: Keyframe2[]
  })[]
  const errors = result.filter((v) => v.hasError) as (RadarTrip & {
    message: string
  })[]
  return {
    trips,
    errors,
  }
}
