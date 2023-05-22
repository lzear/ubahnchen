import _ from 'lodash'

import 'server-only'

import { MapCity } from '../../../map/leaftlet'
import { getRoutes } from '../../../server/get-routes'
import { SelectRouteType } from '../../../server/select-routes'

import 'leaflet/dist/leaflet.css'

const City = (props: { params: { city: string } }) => {
  console.log('🦺 antoinelog props', props)
  const { city } = props.params
  const routes = getRoutes(city)

  const routeTypes = _.uniq(routes.map((r) => r.route_type))
  console.log('🦺 antoinelog routes', routes)

  return (
    <div>
      <MapCity></MapCity>
      <SelectRouteType options={routeTypes} value={undefined} />
    </div>
  )
}

export default City
