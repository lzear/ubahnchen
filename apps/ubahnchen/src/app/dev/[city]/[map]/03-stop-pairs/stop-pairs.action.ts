'use server'

import { ActionCityMapIO } from '@/components/dev/server/actions'
import type { City } from '@ubahnchen/cities'

export type Vertex = {
  stop_id_1: string
  stop_id_2: string
  route_name: string
  vertices: { path: string; lengths: [number, number] }[]
}

const actionIO = (city: City, map: string) =>
  new ActionCityMapIO<'vertices', Vertex[]>(city, map, 'vertices')

export const saveVertices = async ({
  city,
  map,
  vertices,
}: {
  city: City
  map: string
  vertices: Vertex[]
}) => {
  await actionIO(city, map).write(vertices)
}

export const getVertices = async (a: { city: City; map: string }) => {
  const { city, map } = a
  return actionIO(city, map).read([])
}
