import { IndexDynamic } from '@/components/map/index-dynamic'

import type { CityMapParam } from '../../dev/[city]/[map]/params'

const MapPage = (props: { params: CityMapParam }) => {
  const { city, map } = props.params
  return <IndexDynamic city={city} map={map} />
}

export default MapPage
