import PaperCanvas from '@/components/map/canvas/paper-canvas'
import type { City } from '@ubahnchen/cities'
import type { MapPaths } from '@ubahnchen/cities/node'
import { P } from '@ubahnchen/cities/node'

export const UbahnMap = ({ city, map }: { city: City; map: string }) => {
  const mapPaths: MapPaths = P(city, map)
  return (
    <div>
      <PaperCanvas mapPaths={mapPaths} />
    </div>
  )
}

export default UbahnMap
