export const geoToSvg = (
  [lat, lon]: [number, number],
  origin: [number, number],
  zoom: number,
): [number, number] => [(lon - origin[1]) * zoom, (origin[0] - lat) * zoom]

export const svgToGeo = (
  [x, y]: [number, number],
  origin: [number, number],
  zoom: number,
): [number, number] => [origin[0] - y / zoom, origin[1] + x / zoom]
