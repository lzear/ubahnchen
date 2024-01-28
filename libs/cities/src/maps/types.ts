export type Route = { route_id: string; route_name: string; route_type: number }

export type ShapePoint = { shape_pt_lon: number; shape_pt_lat: number }

export type Shape = {
  shape_id: string
  lat_max: number
  lat_min: number
  lon_max: number
  lon_min: number
  shape_pts: ShapePoint[]
  route_id: string
}

export type Stop = {
  stop_id: string
  stop_name: string
  stop_lat: number
  stop_lon: number
  parent_station: string | null
}

export type StopPair = {
  routes: { route_id: string; route_name: string; route_type: number }
  stop_pairs: {
    route_id: string
    idx: number
    stop_id_1: string
    stop_id_2: string
    count: number
    is_one_way: number
  }
}
