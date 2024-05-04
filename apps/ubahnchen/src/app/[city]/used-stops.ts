import type { Stop, StopPair } from '@ubahnchen/cities'

export const usedStopIds = ({
  stopPairs,
  stopById,
  onlyParents,
}: {
  stopPairs: StopPair[]
  stopById: Record<string, Stop>
  onlyParents: boolean
}) => {
  const usedStops = new Set<string>()

  for (const sp of stopPairs) {
    const s1 = stopById[sp.stop_pairs.stop_id_1]
    const s2 = stopById[sp.stop_pairs.stop_id_2]
    if (!s1 || !s2) throw new Error('No stop for ' + sp.stop_pairs.idx)
    if (onlyParents) {
      usedStops.add(s1.parent_station ?? s1.stop_id)
      usedStops.add(s2.parent_station ?? s2.stop_id)
    } else {
      usedStops.add(s1.stop_id)
      usedStops.add(s2.stop_id)
    }
  }

  return [...usedStops]
}

export const usedStops = ({
  stopPairs,
  stopById,
  onlyParents,
}: {
  stopPairs: StopPair[]
  stopById: Record<string, Stop>
  onlyParents: boolean
}) =>
  usedStopIds({ stopPairs, stopById, onlyParents }).map(
    (stopId) => stopById[stopId],
  )
