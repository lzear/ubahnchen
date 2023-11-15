import type { City } from '@ubahnchen/cities'

import 'server-only'

import { MapPicker } from '../../../../components/client/map-picker'
import { PlacePathsServer } from '../../../../components/client/place-paths/place-paths.server'
import {
  UrlParameter,
  zUrlParameters,
} from '../../../../components/url-params'
import type { UrlParameterValue } from '../../../[city]/search-parameters'

import 'leaflet/dist/leaflet.css'

const PlacePaths = (props: {
  params: { city: City }
  searchParams: Partial<Record<UrlParameterValue, string>>
}) => {
  const { city } = props.params
  const params = zUrlParameters.parse(props.searchParams)
  const map = params[UrlParameter.Map]
  const routeName = props.searchParams['route-name']
  return (
    <main className="h-screen">
      {map && <PlacePathsServer city={city} map={map} routeName={routeName} />}
      <div className="card bg-base-100 absolute bottom-0 left-0 z-20 gap-2 p-2 opacity-70 shadow-xl">
        <MapPicker city={city} />
      </div>
    </main>
  )
}

export default PlacePaths
