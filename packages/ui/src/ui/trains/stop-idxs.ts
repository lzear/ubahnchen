import stops from '../../lib/lib/data/stops.json'

export const stopIdByIndex: Record<string, string> = {}

for (const current of stops) {
  stopIdByIndex[current.stop_idx] = current.stop_id
}

export const stopIndexById: Record<string, number> = {}

for (const current of stops) {
  stopIndexById[current.stop_id] = current.stop_idx
}
