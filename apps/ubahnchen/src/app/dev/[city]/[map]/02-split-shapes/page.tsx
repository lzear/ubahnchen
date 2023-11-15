import dynamic from 'next/dynamic'

import 'server-only'

import type { UrlParameterValue } from '../../../../[city]/search-parameters'
import type { CityMapParam } from '../params'

import { getShapes } from './split-shapes.action'

import 'leaflet/dist/leaflet.css'

const SplitShapesClient = dynamic(() => import('./split-shapes.client'), {
  loading: () => <p>Loading...</p>,
  ssr: false,
})

const SplitShapes = async (props: {
  params: CityMapParam
  searchParams: Partial<Record<UrlParameterValue, string>>
}) => (
  <main className="h-screen">
    <SplitShapesClient
      cityMap={props.params}
      shapeIds={await getShapes(props.params)}
    />
  </main>
)

export default SplitShapes
