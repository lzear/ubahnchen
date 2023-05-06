import React, { useEffect } from 'react'

import _ from 'lodash'
import { useIsInitialized } from '../store/maps'
import { useFindManyTripsQuery } from '../../generated/components'
import { useRoute } from './use-route'
import { useInvalidTrips } from './use-invalid-trips'
import { highlightStops } from './highlight-stops'
import { getInvalidTripsForStops } from './filter-invalid-trips'

export const InvalidTrip = () => {
  const { activeRoute } = useRoute()

  const invalidTrips = useInvalidTrips()

  const invalidTripsForRoute = invalidTrips?.data.find(
    (index) => index.route_name === activeRoute,
  )

  const { data } = useFindManyTripsQuery(
    {
      where: {
        trip_id: {
          in: invalidTripsForRoute?.trip_ids ?? [],
        },
      },
    },
    { enabled: !!invalidTripsForRoute },
  )

  const stops =
    activeRoute &&
    data?.findManyTrips
      .map((t) => t.stop_times.flatMap((s) => s?.stops))
      .find(
        (sto) =>
          getInvalidTripsForStops(
            activeRoute,
            sto.map((sto) => sto.stop_id),
          ).length === 0,
      )

  const isInit = useIsInitialized()
  const ustops = _.uniqBy(stops || [], 'stop_id')

  useEffect(() => {
    if (data?.findManyTrips && activeRoute) {
      const stops = data.findManyTrips
        .map((t) => t.stop_times.flatMap((s) => s?.stops))
        .find(
          (sto) =>
            getInvalidTripsForStops(
              activeRoute,
              sto.map((sto) => sto.stop_id),
            ).length === 0,
        )
      const ustops = _.uniqBy(stops, 'stop_id')
      if (ustops.length > 0) {
        console.error('Found invalid trip:', ustops)

        const stops = {
          route_name: data?.findManyTrips?.[0]?.routes.route_name,
          stops: ustops,
        }
        console.log('Save this:', JSON.stringify(stops))
        highlightStops(ustops.map((s) => s.stop_id))
      } else {
        console.log(`✅ ${activeRoute}`)
      }
    }
  }, [activeRoute, data?.findManyTrips, isInit, stops])

  if (!stops) return <></>

  return <>{ustops.length}</>
}
