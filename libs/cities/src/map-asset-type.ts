export type StopsPositions = {
  [stopId: string]: {
    stop_name: string
    stop_id: string
    point: [number, number]
  }
}
