import { Clock } from '@/components/map/main-menu/clock/clock'
import { Speed } from '@/components/map/main-menu/speed'
import { Trips } from '@/components/map/main-menu/trips/trips'

export const MainMenu = () => {
  return (
    <div className="absolute top-4 right-4 flex-col">
      <Clock />
      <Speed />
      <Trips />
    </div>
  )
}
