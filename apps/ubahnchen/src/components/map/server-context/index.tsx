'use server'

import type { ReactNode } from 'react'
import { cache } from 'react'
import { eq, inArray } from 'drizzle-orm'

import type { RoutesDao } from '@/pages/api/routes-dao'
import type { City } from '@ubahnchen/cities'
import { cities, getMap } from '@ubahnchen/cities'
import type { MapPaths } from '@ubahnchen/cities/node'
import { MapAssetName, MapAssets, P } from '@ubahnchen/cities/node'
import {
  drizzleTables,
  type DrizzleTypes,
  getDatabase,
} from '@ubahnchen/database'
import type { Segment } from '@ubahnchen/gtfs'

import { ServerContextProviderClient } from './client'
import type { ServerContextProps } from './type'

const { stopPairsSvgPaths, stopPairs, routes, stops } = drizzleTables

const getStopPathSvgs = (c: City, m: string) => {
  const database = getDatabase(P(c).SQLITE.BIG).drizzled
  return database
    .select()
    .from(stopPairsSvgPaths)
    .where(eq(stopPairsSvgPaths.map, m))
    .all()
    .map(({ segments, ...rest }) => ({
      ...rest,
      segments: JSON.parse(segments) as Segment[],
    }))
}

const getRoutes = (c: City, m: string): RoutesDao[] => {
  const { routeTypes } = getMap(c, m)
  const database = getDatabase(P(c).SQLITE.BIG).drizzled
  return database
    .select()
    .from(routes)
    .where(inArray(routes.route_type, routeTypes))
    .all()
    .sort((a, b) => a.route_name.localeCompare(b.route_name))
}

const getStopPositions = async (c: City, m: string) => {
  const mapStopsPlacements = new MapAssets(c, m, MapAssetName.PLACE_STOPS)
  return mapStopsPlacements.read()
}

const getStops = (c: City) => {
  const database = getDatabase(P(c).SQLITE.BIG).drizzled
  return database.select().from(stops).all()
}

const getStopPairs = (
  c: City,
  routeIds: string[],
): DrizzleTypes['stopPairs'][] => {
  const database = getDatabase(P(c).SQLITE.BIG).drizzled
  return database
    .select()
    .from(stopPairs)
    .where(inArray(stopPairs.route_id, routeIds))
    .all()
}

export const getServerProps = cache(
  async (city: City, map: string): Promise<ServerContextProps> => {
    const stopPairSvgs = getStopPathSvgs(city, map)
    const stopPositions = await getStopPositions(city, map)
    const mapPaths: MapPaths = P(city, map)
    const routes = getRoutes(city, map)
    const routeIds = routes.map((r) => r.route_id)
    const stopPairs = getStopPairs(city, routeIds)
    const stops = getStops(city)

    const mapNames = Object.keys(cities[city].maps)

    return {
      city,
      map,
      stopPairSvgs,
      stopPositions,
      stops,
      mapPaths,
      routes,
      routeIds,
      stopPairs,
      // mapConfig: getMap(city, map),
      // cityConfig: cities[city],
      gtfs: cities[city].gtfs,
      mapNames,
    }
  },
)

export const ServerContextProvider = async ({
  city,
  map,
  children,
}: {
  city: City
  map: string
  children: ReactNode
}) => (
  <ServerContextProviderClient value={await getServerProps(city, map)}>
    {children}
  </ServerContextProviderClient>
)
