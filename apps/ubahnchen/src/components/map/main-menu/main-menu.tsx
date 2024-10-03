import { Clock } from './clock/clock'
import { Trips } from './trips/trips'
import { ModeToggle } from './dark-mode'
import { Speed } from './speed'

export const MainMenu = () => {
  return (
    <div className="absolute right-4 top-4 flex-col">
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
