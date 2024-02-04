export type StopsPositions = Record<
  string,
  {
    stop_name: string
    stop_id: string
    point: [number, number]
  }
>
