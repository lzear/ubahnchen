import type { UrlParameterValue } from '@/components/dev/search-parameters'
import { ToggleUrlParameter } from '@/components/dev/server/toggle-checkbox'

import 'server-only'

import type { CityMapParam } from '../params'

import { PlaceStopsServer } from './place-stops.server'

const PlaceStops = (props: {
  params: CityMapParam
  searchParams: Partial<Record<UrlParameterValue, string>>
}) => {
  const { city, map } = props.params
  if (!map || !city) throw new Error('Need city and map!')
  return (
    <main className="h-screen">
      <PlaceStopsServer city={city} map={map} />
      <div className="card absolute bottom-0 left-0 z-20 gap-2 bg-base-100 p-2 opacity-70 shadow-xl">
        <ToggleUrlParameter
          label="Magnet"
          urlParameter="magnet"
          defaultValue={false}
        />
        <ToggleUrlParameter
          label="Delaunay"
          urlParameter="delaunay"
          defaultValue={false}
        />
      </div>
    </main>
  )
}

export default PlaceStops
