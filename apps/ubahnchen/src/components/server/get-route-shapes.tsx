import { eq } from 'drizzle-orm'

import type { Shape } from '@ubahnchen/cities'
import { drizzleTables } from '@ubahnchen/database'

import 'server-only'

import { getDatabaseForCity } from './get-database-for-city'
import { lru } from './singletons'

const query = (city: string, route_type: number): Shape[] => {
  const { shapes, trips, routes } = drizzleTables

  const database = getDatabaseForCity(city)
  const q = database.drizzled
    .select({
      shape_id: shapes.shape_id,
      lon_min: shapes.lon_min,
      lon_max: shapes.lon_max,
      lat_max: shapes.lat_max,
      lat_min: shapes.lat_min,
      shape_pts: shapes.shape_pts,
      // column: sql<string>`distinct(${'shapes'})`.as('table.column'),
      route_id: routes.route_id,
    })
    .from(shapes)
    .innerJoin(trips, eq(trips.shape_id, shapes.shape_id))
    .innerJoin(routes, eq(routes.route_id, trips.route_id))
    .where(eq(routes.route_type, route_type))
    .groupBy(shapes.shape_id)

  // const q2 = database.drizzled
  //   .select({
  //     route: routes.route_id,
  //     shape: shapes.shape_id,
  //   })
  //   .from(routes)
  //   .where(eq(routes.route_type, route_type))
  //   .innerJoin(trips, eq(routes.route_id, trips.route_id))
  //   .innerJoin(shapes, eq(trips.shape_id, shapes.shape_id))
  //   .groupBy(shapes.shape_id)
  const s = q.all()
  return s.map((s) => ({
    ...s,
    shape_pts: (
      JSON.parse(s.shape_pts) as {
        shape_pt_lon: string
        shape_pt_lat: string
      }[]
    ).map((p) => ({
      shape_pt_lon: Number(p.shape_pt_lon),
      shape_pt_lat: Number(p.shape_pt_lat),
    })),
  }))
}

export const getRouteShapes = lru(query)
