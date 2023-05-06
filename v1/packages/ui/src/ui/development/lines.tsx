import React, { useEffect, useState } from 'react'
import { Button } from '@chakra-ui/react'
import defaultRoutes from '../../lib/lib/data/01-stops-for-route-names.json'
import specialRoutes from '../../lib/lib/data/02-stops-for-route-names-alternatives.json'
import linePaths from '../../lib/lib/data/03-paths-for-route-names.json'
import { useStore } from '../store/store'
import { MapName } from '../../lib/enums'
import { truthy } from '../../lib/non-nullish'
import { _getPathsForStops } from './get-paths-for-stops'
import { useRoute } from './use-route'
import { highlightStops } from './highlight-stops'
import { highlightEdges } from './highlight-edges'

type Route = {
  route_name: string
  stops: { stop_name: string; stop_id: string }[]
}

export const Lines = () => {
  const { activeRoute } = useRoute()

  const mapName = useStore(({ mapName }) => mapName)

  const [selectedRoute, setSelectedRoute] = useState<Route | null>()
  const defaultRoute = defaultRoutes.find((r) => r.route_name === activeRoute)
  const specialRoute = specialRoutes.filter((r) => r.route_name === activeRoute)
  const linePath = linePaths.find((r) => r.route_name === activeRoute)
  useEffect(() => {
    const routes = (
      selectedRoute
        ? [selectedRoute]
        : ([defaultRoute, ...specialRoute] as Route[])
    ).filter((r) => selectedRoute && r?.route_name === activeRoute)

    const stops = routes
      // eslint-disable-next-line unicorn/no-array-callback-reference
      .filter(truthy)
      .map((r) => r.stops)

    const stopIds = stops.map((r) => r.map((s) => s.stop_id))

    highlightStops(stopIds.flat())
    highlightEdges(stopIds)
    try {
      if (linePath) _getPathsForStops(stops.flat(), linePath, mapName)
      else if (activeRoute) throw new Error(`missing ${activeRoute}`)
    } catch (error) {
      console.error(error)
    }
  }, [
    activeRoute,
    defaultRoute,
    linePath,
    mapName,
    selectedRoute,
    specialRoute,
  ])

  const computeSections = () => {
    const routes: {
      id?: string
      route_name: string
      stops: { stop_id: string; stop_name: string; path?: string }[]
    }[] = [...defaultRoutes, ...specialRoutes]

    try {
      const aaa = routes
        .filter((r) => mapName === MapName.SU || r.route_name.startsWith('U'))
        .map((r) => {
          const line = linePaths.find((rr) => rr.route_name === r.route_name)
          if (!line) throw new Error('sd')
          const sections = _getPathsForStops(r.stops, line, mapName)
          const lastSection = sections.at(-1)
          if (!lastSection) throw new Error('lastSection')
          return {
            ...r,
            sections,
            id: r.id || r.route_name,
            length: lastSection.absEnd,
          }
        })
        .map((r) => {
          const { stops, ...rest } = r
          return {
            ...rest,
            sections: rest.sections.map((section) => ({
              ...section,
              stops: section.stops.map((s) => {
                const stop_name = stops.find(
                  (sto) => s.stop_id === sto.stop_id,
                )?.stop_name
                if (!stop_name) throw new Error('FIEW')
                return {
                  stop_name,
                  ...s,
                }
              }),
            })),
          }
        })
      console.log(JSON.stringify(aaa))
    } catch (error) {
      console.error(error)
    }
  }
  if (!activeRoute)
    return (
      <>
        <Button size="xs" onClick={computeSections}>
          Compute Sections
        </Button>
      </>
    )

  return (
    <div className="container">
      <Button size="xs" onClick={computeSections}>
        Compute Sections
      </Button>
      {!!defaultRoute && (
        <Button size="xs" onClick={() => setSelectedRoute(defaultRoute)}>
          Default route
        </Button>
      )}
      {specialRoute.map((r, index) => (
        <Button size="xs" key={index} onClick={() => setSelectedRoute(r)}>
          Special {index}
        </Button>
      ))}
      {/* eslint-disable-next-line unicorn/no-null */}
      <Button onClick={() => setSelectedRoute(null)} size="xs">
        x
      </Button>
      <style jsx>{`
        .container {
          display: flex;
          gap: 15px;
          flex-wrap: wrap;
          justify-content: center;
        }
      `}</style>
    </div>
  )
}
