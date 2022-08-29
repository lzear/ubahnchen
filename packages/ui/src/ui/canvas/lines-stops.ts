import { useStore } from '../store/store'
import { itineraries } from '../../lib/intineraries'

export const useItineraries = () => {
  const mapName = useStore((s) => s.mapName)
  return itineraries[mapName]
}
