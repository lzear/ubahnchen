import { SectionWithAbs } from '../../lib/intineraries'
import { getItineraryPositions } from '../trips-keyframes'

type Itinerary = {
  sections: SectionWithAbs[]
}

export const findFrameAtAbsOffset = (
  itinerary: Itinerary,
  absOffset: number,
) => {
  const itiPos = getItineraryPositions(itinerary)

  const posAfterIndex = itiPos.findIndex(
    (position) => absOffset <= position.absOffset,
  )
  const posAfter = itiPos[posAfterIndex]

  if (!posAfter) throw new Error('!posAfter')

  if (posAfter.absOffset === absOffset) {
    return {
      path: posAfter.path,
      offset: posAfter.offset,
      absOffset,
    }
  }

  const posBefore = itiPos[posAfterIndex - 1]
  if (!posBefore) throw new Error('!posBefore')

  const ratio =
    (absOffset - posBefore.absOffset) /
    (posAfter.absOffset - posBefore.absOffset)
  return {
    path: posAfter.path,
    offset: ratio * posBefore.offset + (1 - ratio) * posAfter.offset,
    absOffset,
  }
}
export const findAbsFrameAtAbsOffset = (
  itinerary: Itinerary,
  absOffset: number,
) => {
  const itiPos = getItineraryPositions(itinerary)

  const posAfterIndex = itiPos.findIndex(
    (position) => absOffset <= position.absOffset,
  )
  const posAfter = itiPos[posAfterIndex]

  if (!posAfter) throw new Error('!posAfter')

  if (posAfter.absOffset === absOffset) {
    return {
      path: posAfter.path,
      offset: posAfter.offset,
      absOffset,
    }
  }

  const posBefore = itiPos[posAfterIndex - 1]
  if (!posBefore) throw new Error('!posBefore')

  return {
    path: posAfter.path,
    absOffset,
  }
}
