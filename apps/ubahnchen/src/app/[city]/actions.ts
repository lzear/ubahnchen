'use server'

import * as fs from 'node:fs'

import { revalidatePath } from 'next/cache'

import type { City } from '@ubahnchen/cities'
// eslint-disable-next-line import/no-extraneous-dependencies
import { initializeFileIfNotExists } from '@ubahnchen/node-utils'

export const getDataFilePath = (city: City, map: string) => {
  return `./data/${city}/${map}.json`
}

type Json = {
  stops: {
    [stopId: string]: {
      position: [number, number]
      name: string
      id: string
    }
  }
  stopPairs: {
    [idx: string]: {
      route_id: string
      stop_id_1: string
      stop_id_2: string
    }
  }
}

export const getMapData = async (city: City, map: string) => {
  // open JSON file at path ./data/[city]/[map].json
  // Create the file if it doesn't exist
  const filePath = getDataFilePath(city, map)
  await initializeFileIfNotExists(filePath)
  const file = await fs.promises.open(filePath, 'a+')
  let json: Json
  try {
    const data = await file.readFile('utf8')
    await file.close()
    console.log('🦺 antoinelog data', data)
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    json = JSON.parse(data)
  } catch (error) {
    console.log('🦺 antoinelog e', error)
    json = { stops: {}, stopPairs: {} }
  }
  return json
}

export const recordStopPosition = async (a: {
  city: City
  map: string
  id: string
  name: string
  position: [number, number]
}) => {
  const { city, map, id, position, name } = a
  const jsonOld = await getMapData(city, map)
  const jsonNew: Json = {
    ...jsonOld,
    stops: {
      ...jsonOld.stops,
      [id]: { id, name, position },
    },
    stopPairs: {
      ...jsonOld.stopPairs,
    },
  }
  await fs.promises.writeFile(
    getDataFilePath(city, map),
    JSON.stringify(jsonNew),
  )
  revalidatePath(`/${city}`)
}
