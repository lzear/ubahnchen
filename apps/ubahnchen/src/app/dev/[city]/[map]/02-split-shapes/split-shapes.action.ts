'use server'

import type { City } from '@ubahnchen/cities'

import { ActionCityMapIO } from '../../../../_server/actions.js'

const actionIO = (city: City, map: string) =>
  new ActionCityMapIO<string[]>(city, map, 'split-shapes')

export const saveShapes = async ({
  city,
  map,
  shapeIds,
}: {
  city: City
  map: string
  shapeIds: string[]
}) => {
  await actionIO(city, map).write(shapeIds)
}

export const getShapes = async (a: { city: City; map: string }) => {
  const { city, map } = a
  return actionIO(city, map).read([])
}
