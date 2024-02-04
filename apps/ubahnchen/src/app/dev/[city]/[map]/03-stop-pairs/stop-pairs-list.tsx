import _ from 'lodash'
import Link from 'next/link'

import type { Stop, StopPair } from '@ubahnchen/cities'

export const StopPairsList = ({
  stopPairs,
  stops,
  routeName,
}: {
  stopPairs: StopPair[]
  stops: Stop[]
  routeName?: string
}) => {
  const stopById = _.keyBy(stops, 'stop_id')
  const stopPairsByRoute = _.groupBy(stopPairs, 'routes.route_name')
  const routeNames = Object.keys(stopPairsByRoute).sort((a, b) =>
    a.localeCompare(b),
  )
  return (
    <div className="absolute z-30 max-h-[500px] overflow-auto text-xs outline outline-1 outline-blue-800">
      <div>
        {routeNames.map((routeName) => (
          <span key={routeName}>
            <Link href={`?route-name=${routeName}`}>
              <button className="btn btn-xs">{routeName}</button>
            </Link>
          </span>
        ))}
      </div>
      {routeName &&
        stopPairsByRoute[routeName]?.map((stopPair) => {
          return (
            <div key={stopPair.stop_pairs.idx}>
              {stopById[stopPair.stop_pairs.stop_id_1]?.stop_name} -{' '}
              {stopById[stopPair.stop_pairs.stop_id_2]?.stop_name}
            </div>
          )
        })}
    </div>
  )
}
