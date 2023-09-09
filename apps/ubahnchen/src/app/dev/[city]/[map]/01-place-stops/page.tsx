import 'server-only'

import { ToggleUrlParameter } from '../../../../../components/server/toggle-checkbox'
import type { UrlParameterValue } from '../../../../[city]/search-parameters'
import type { CityMapParam } from '../params'

import { PlaceStopsServer } from './place-stops.server'

import 'leaflet/dist/leaflet.css'

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
