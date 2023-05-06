import { Badge, Button } from '@chakra-ui/react'
import React, { useState } from 'react'

import _ from 'lodash'
import {
  FindManyRoutesQuery,
  useFindManyRoutesQuery,
} from '../../generated/components'
import { truthy } from '../../lib/non-nullish'
import { useRoute } from './use-route'
import { invalidTripCount, useInvalidTrips } from './use-invalid-trips'

const groupRoutes = (routes: FindManyRoutesQuery) => {
  const g = _.groupBy(routes.findManyRoutes, 'route_name')

  return (
    Object.keys(g)
      .map((route_name) => {
        const grou = g[route_name]

        if (!grou) return

        return {
          route_name,
          tripCount: _.sum(grou.flatMap((r) => r._count?.trips)),
        }
      })
      // eslint-disable-next-line unicorn/no-array-callback-reference
      .filter(truthy)
  )
}

export const Routes = () => {
  const { data } = useFindManyRoutesQuery()
  const invalidTrips = useInvalidTrips()
  const { activeRoute, setRoute } = useRoute()
  const [isMinimized, toggle] = useState(true)

  if (!data) return <></>
  const groupedRoutes = groupRoutes(data)
  if (isMinimized) {
    const thisRoute = groupedRoutes.find((r) => r.route_name === activeRoute)
    return (
      <div>
        <Button
          size="xs"
          style={{ margin: '0 10px' }}
          onClick={() => toggle(false)}
        >
          +
        </Button>
        <Badge
          backgroundColor={
            invalidTrips &&
            thisRoute &&
            invalidTripCount(thisRoute.route_name, invalidTrips)
              ? '#EAA'
              : '#AEA'
          }
        >
          {thisRoute?.tripCount
            ? `${thisRoute.route_name} (${
                invalidTrips
                  ? invalidTripCount(thisRoute.route_name, invalidTrips)
                  : '-'
              } / ${thisRoute.tripCount})`
            : activeRoute}
        </Badge>
      </div>
    )
  }

  return (
    <div className="container">
      <Button
        size="xs"
        style={{ margin: '0 10px' }}
        onClick={() => toggle(true)}
      >
        -
      </Button>
      {groupedRoutes.map((route) => (
        <Button
          backgroundColor={
            invalidTrips && invalidTripCount(route.route_name, invalidTrips)
              ? '#EAA'
              : '#AEA'
          }
          key={route.route_name}
          size="xs"
          style={{ margin: 2 }}
          isActive={activeRoute === route.route_name}
          onClick={() => setRoute(route.route_name)}
        >
          {route.route_name} (
          {invalidTrips
            ? invalidTripCount(route.route_name, invalidTrips)
            : '-'}{' '}
          / {route.tripCount})
        </Button>
      ))}
      <style jsx>{`
        .container {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
        }
      `}</style>
    </div>
  )
}
