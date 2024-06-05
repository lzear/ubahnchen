import { Clock } from './clock/clock'
import { Trips } from './trips/trips'
import { ModeToggle } from './dark-mode'
import { Speed } from './speed'

export const MainMenu = () => {
  return (
    <div className="absolute top-4 right-4 flex-col">
      <div>
        <ModeToggle />
      </div>
      <div>
        <Clock />
        <Speed />
        <Trips />
      </div>
    </div>
  )
}
