import { Clock } from './clock/clock'
import { Trips } from './trips/trips'
import { Speed } from './speed'

export const MainMenu = () => {
  return (
    <div className="absolute top-4 right-4 flex-col">
      <Clock />
      <Speed />
      <Trips />
    </div>
  )
}
