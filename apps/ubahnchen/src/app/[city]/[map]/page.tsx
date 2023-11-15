import dynamic from 'next/dynamic'

import type { CityMapParam } from '../../dev/[city]/[map]/params'

const PaperJsMain = dynamic(() => import('../../_components/paper-js/main'), {
  ssr: false,
})

const MapPage = (props: { params: CityMapParam }) => {
  const { city, map } = props.params
  return (
    <div>
      <h1>MapPage</h1>
      <h2>
        {city} - {map}
      </h2>
      <PaperJsMain city={city} map={map} />
    </div>
  )
}

export default MapPage
