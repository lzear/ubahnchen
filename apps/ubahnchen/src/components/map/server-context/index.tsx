'use server'

import type { ReactNode } from 'react'
import { cache } from 'react'
import { eq, inArray } from 'drizzle-orm'

import type { RoutesDao } from '@/pages/api/routes-dao'
import type { City } from '@ubahnchen/cities'
import { cities, getMap } from '@ubahnchen/cities'
import type { MapPaths } from '@ubahnchen/cities/node'
import { MapAssetName, MapAssets, P } from '@ubahnchen/cities/node'
import { drizzleTables, getDatabase } from '@ubahnchen/database'

import { ServerContextProviderClient } from './client'
import type { ServerContextProps, StopPair, WP } from './type'

const { stopPairsSvgPaths, stopPairs, routes, stops } = drizzleTables

const getStopPathSvgs = (c: City, m: string) => {
  const database = getDatabase(P(c).SQLITE.BIG).drizzled
  return database
    .select({
      stopPairIdx: stopPairsSvgPaths.stop_pair_idx,
      waypoints: stopPairsSvgPaths.waypoints,
      length: stopPairsSvgPaths.length,
    })
    .from(stopPairsSvgPaths)
    .where(eq(stopPairsSvgPaths.map, m))
    .all()
    .map(({ waypoints, ...rest }) => ({
      ...rest,
      waypoints: JSON.parse(waypoints) as WP[],
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

const getStopPairs = (c: City, routeIds: string[]): StopPair[] => {
  const database = getDatabase(P(c).SQLITE.BIG).drizzled
  return database
    .select()
    .from(stopPairs)
    .where(inArray(stopPairs.route_id, routeIds))
    .all()
}

export const getServerProps = cache(
  async (city: City, map: string): Promise<ServerContextProps> => {
    console.log(`antoinelog city`, city)
    console.log(`antoinelog map`, map)

    const stopPairSvgs = getStopPathSvgs(city, map)
    const stopPositions = await getStopPositions(city, map)
    const mapPaths: MapPaths = P(city, map)
    const routes = getRoutes(city, map)
    const routeIds = routes.map((r) => r.route_id)
    const stopPairs = getStopPairs(city, routeIds)
    const stops = getStops(city)
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
