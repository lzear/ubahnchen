import { useStore } from '../store/store'
import { paperView } from './paper-view'

export const setCenter = (center: paper.Point, stopFollow = true) => {
  const view = paperView()
  if (view) view.center = center
  if (stopFollow) {
    const { setFollowing } = useStore.getState()
    setFollowing(false)
  }
}
