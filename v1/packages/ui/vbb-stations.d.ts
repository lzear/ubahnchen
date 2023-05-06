// declare module 'svg-path-reverse' {
//
// }
declare module 'vbb-stations/simple' {
  type Station = {
    id: string
    name: string
    location: {
      latitude: number
      longitude: number
    }
  }
  const station: Station[]
  export default station
}
