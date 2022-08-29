import type { Keyframe2, Keyframe3, KeyframeAbs } from '../lib/keyframe'
import { isBetween, looseClamp } from '../lib/lib/is-between'

const project = (
  [a, b]: [number, number],
  [x, y]: [number, number],
  c: number,
) => {
  if (a === b) return x
  return looseClamp(x + ((y - x) * (c - b)) / (a - b), [x, y])
}

const absFrameToFrame = (absFrame: KeyframeAbs): Keyframe3 => {
  const section = absFrame.itinerary.sections.find((s) => {
    return isBetween(absFrame.absOffset, [s.absStart, s.absEnd])
  })
  if (!section) throw new Error('!section')
  return {
    path: section.path,
    offset: project(
      [section.absStart, section.absEnd],
      [section.start, section.end],
      absFrame.absOffset,
    ),
    time: absFrame.time,
  }
}

const getJunctions = ([frame1, frame2]: [
  KeyframeAbs,
  KeyframeAbs,
]): Keyframe3[] => {
  if (frame1.itinerary.id !== frame2.itinerary.id) return []

  const itinerary = frame1.itinerary
  const junctionFrames: Keyframe3[] = []
  for (const s of itinerary.sections) {
    if (isBetween(s.absStart, [frame1.absOffset, frame2.absOffset])) {
      junctionFrames.push({
        path: s.path,
        offset: s.start,
        time: project(
          [frame1.absOffset, frame2.absOffset],
          [frame1.time, frame2.time],
          s.absStart,
        ),
      })
    }
    if (isBetween(s.absEnd, [frame1.absOffset, frame2.absOffset])) {
      junctionFrames.push({
        path: s.path,
        offset: s.end,
        time: project(
          [frame1.absOffset, frame2.absOffset],
          [frame1.time, frame2.time],
          s.absEnd,
        ),
      })
    }
  }
  if (frame2.absOffset < frame1.absOffset) junctionFrames.reverse()
  return junctionFrames
}

export const absFramesToFrames = (absFrames: KeyframeAbs[]): Keyframe2[] => {
  const newFrames: Keyframe3[] = []
  for (const [index, frame] of absFrames.entries()) {
    newFrames.push(absFrameToFrame(frame))

    const nextFrame = absFrames[index + 1]

    if (!nextFrame) continue

    newFrames.push(...getJunctions([frame, nextFrame]))
  }
  return keyframe3ToKeyframe(newFrames)
}

export const keyframe3ToKeyframe = (keyframes3: Keyframe3[]): Keyframe2[] => {
  const newFrames: Keyframe2[] = []
  for (const [index, frame1] of keyframes3.entries()) {
    const frame2 = keyframes3[index + 1]
    if (!frame2) continue

    if (frame1.path !== frame2.path) continue

    newFrames.push({
      path: frame1.path,
      offset1: frame1.offset,
      offset2: frame2.offset,
      time1: frame1.time,
      time2: frame2.time,
    })
  }
  return newFrames
}
