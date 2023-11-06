'use server'

import type { City } from '@ubahnchen/cities'

import { ActionCityMapIO } from '../../../app/_server/actions.js'

export type StopsPositions = {
  [stopId: string]: {
    stop_name: string
    stop_id: string
    point: [number, number]
  }
}

const actionIO = (city: City, map: string) =>
  new ActionCityMapIO<StopsPositions>(city, map, 'place-stops')

export const getStopPositions = async (city: City, map: string) =>
  actionIO(city, map).read({})

export const recordStopPosition = (params: {
  city: City
  map: string
  stops: StopsPositions
}) => actionIO(params.city, params.map).write(params.stops)
