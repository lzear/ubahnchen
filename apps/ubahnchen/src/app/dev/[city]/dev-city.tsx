import Link from 'next/link'

import type { City, CityConfig } from '@ubahnchen/cities'

import { PlaceStopsInfo } from './[map]/01-place-stops/info.js'
import { SplitShapesInfo } from './[map]/02-split-shapes/info.js'

type Props = {
  city: City
  cityConfig: CityConfig
}

export const DevCity = (props: Props) => {
  const { city, cityConfig } = props
  return (
    <div>
      {Object.entries(cityConfig.maps).map(([map, mapConfig]) => (
        <div key={map}>
          <h3>{mapConfig.name}</h3>
          <ol>
            <li>
              <Link href={`/dev/${city}/${map}/01-place-stops`}>
                Place stops
              </Link>{' '}
              <PlaceStopsInfo city={city} map={map} />
            </li>
            <li>
              <Link href={`/dev/${city}/${map}/02-split-shapes`}>
                Split shapes
              </Link>{' '}
              <SplitShapesInfo city={city} map={map} />
            </li>
            <li>
              <Link href={`/dev/${city}/${map}/03-stop-pairs`}>Stop pairs</Link>{' '}
            </li>
          </ol>
        </div>
      ))}
    </div>
  )
}
