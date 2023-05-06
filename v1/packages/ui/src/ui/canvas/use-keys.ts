import * as paper from 'paper'
import { setCenter } from './set-center'
import { paperView } from './paper-view'

const onKeyDown = (event: KeyboardEvent) => {
  const view = paperView()
  if (!view) return
  switch (event.key) {
    // case 'e': {
    //   const s = Paper.project.exportSVG()
    //   break
    // }
    case '+': {
      view.zoom = view.zoom / 0.9
      break
    }
    case '-': {
      view.zoom = view.zoom * 0.9
      break
    }
    case '0': {
      view.zoom = 1
      break
    }
    case 'ArrowRight': {
      setCenter(view.center.add(new paper.Point([10, 0])))
      break
    }
    case 'ArrowLeft': {
      setCenter(view.center.add(new paper.Point([-10, 0])))
      break
    }
    case 'ArrowUp': {
      setCenter(view.center.add(new paper.Point([0, -10])))
      break
    }
    case 'ArrowDown': {
      setCenter(view.center.add(new paper.Point([0, 10])))
      break
      // No default
    }
  }
}

export const onKeys = () => {
  // let lastPoint: paper.Point
  // view.onMouseDrag = (event: PaperEvent) => {
  //   const point = view.projectToView(event.point)
  //   const last = view.viewToProject(lastPoint)
  //   view.center = view.center.add(last.subtract(event.point))
  //   lastPoint = point
  // }

  const view = paperView()
  if (view) view.center = new paper.Point([900, 1050])

  // const onWheel = (event: WheelEvent) => {
  //   view.zoom = view.zoom * (1 - event.deltaY * 0.001)
  //   event.preventDefault()
  //   event.stopPropagation()
  // }
  window.addEventListener('keydown', onKeyDown)
  // window.addEventListener('wheel', onWheel, { passive: false })
  return () => {
    window.removeEventListener('keydown', onKeyDown)
    // window.removeEventListener('wheel', onWheel)
  }
}
