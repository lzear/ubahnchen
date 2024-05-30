import { inArray } from 'drizzle-orm'
import _ from 'lodash'

import { drizzleTables } from '@ubahnchen/database'

import type { City } from './index'
import { cities, citiesList } from './index'
import { getDatabaseForCity } from './node'

describe('lineColors', () => {
  describe.each(citiesList)('%s', (city: City) => {
    it('has lineColors', () => {
      const cityConfig = cities[city]
      expect(cityConfig.gtfs.lineColors).toBeDefined()
    })

    it('has all route names', () => {
      const cityConfig = cities[city]
      const lineColors = cityConfig.gtfs.lineColors

      const db = getDatabaseForCity(city)
      const { routes } = drizzleTables

      const mapConfigs = Object.values(cityConfig.maps)

      const routeTypes = _.uniq(mapConfigs.flatMap((m) => m.routeTypes))

      const routesData = db.drizzled
        .selectDistinct({ route_name: routes.route_name })
        .from(routes)
        .where(inArray(routes.route_type, routeTypes))
        .all()
        .map((r) => r.route_name)

      const routeNames = Object.keys(lineColors)
      expect(routeNames).toEqual(expect.arrayContaining(routesData))
    })

    it('has foreground and background colors', () => {
      const cityConfig = cities[city]
      const lineColors = cityConfig.gtfs.lineColors

      const missingRoutes = []

      for (const [route, colors] of Object.entries(lineColors))
        if (!colors.bg || !colors.text) missingRoutes.push(route)

      expect(missingRoutes).toEqual([])
    })
  })
})
