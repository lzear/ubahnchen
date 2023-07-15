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
