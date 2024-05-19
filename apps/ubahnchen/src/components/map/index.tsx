import type { City } from '@ubahnchen/cities'
import type { MapPaths } from '@ubahnchen/cities/node'
import { P } from '@ubahnchen/cities/node'

import { PaperCanvas } from './canvas/paper-canvas'

export const UbahnMap = ({ city, map }: { city: City; map: string }) => {
  const mapPaths: MapPaths = P(city, map)
  return (
    <div>
      <PaperCanvas mapPaths={mapPaths} />
    </div>
  )
}

export default UbahnMap
