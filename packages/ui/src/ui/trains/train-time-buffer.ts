import { TripNFrames } from '../../lib/keyframe'

export const BUFFER = 120

export const trainTimeBuffer2 = (train: TripNFrames): TripNFrames => {
  const firstFrame = train.keyframes2[0]
  const lastFrame = train.keyframes2.at(-1)
  const frame0 = []
  const frameN = []
  if (firstFrame)
    frame0.push({
      ...firstFrame,
      type: 'BUFFER_START' as const,
      offset1: firstFrame.offset1,
      offset2: firstFrame.offset1,
      time1: firstFrame.time1 - BUFFER,
      time2: firstFrame.time1,
    })
  if (lastFrame)
    frameN.push({
      ...lastFrame,
      type: 'BUFFER_END' as const,
      offset1: lastFrame.offset2,
      offset2: lastFrame.offset2,
      time1: lastFrame.time2,
      time2: lastFrame.time2 + BUFFER,
    })
  return {
    ...train,
    keyframes2: [...frame0, ...train.keyframes2, ...frameN],
    start_time: train.start_time - BUFFER,
    end_time: train.end_time + BUFFER,
  }
}
