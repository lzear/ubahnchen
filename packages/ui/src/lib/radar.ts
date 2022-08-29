import { Keyframe2 } from './keyframe'

export interface LocL {
  lid: string
  type: string
  name: string
  icoX: number
  extId: string
  state: string
  pCls: number
  gidL: string[]
  chgTime: string
}

export interface ProductionContext {
  name: string
  line: string
  lineId: string
  catOut: string
  catOutS: string
  catOutL: string
}

export interface ProductionL {
  pid: string
  name: string
  nameS: string
  icoX: number
  cls: number
  prodCtx: ProductionContext
  himIdL: string[]
}

export interface PolyL {
  delta: boolean
  dim: number
  crdEncYX: string
  crdEncS: string
  crdEncF: string
}

export interface Common {
  locL: LocL[]
  prodL: ProductionL[]
  polyL: PolyL[]
}

export interface Location2 {
  type: string
  id: string
  latitude: number
  longitude: number
}

export interface Location {
  type: string
  id: string
  name: string
  location: Location2
  stationDHID: string
}

export interface StopL {
  locX: number
  dInS: boolean
  dInR: boolean
  dTimeS: string
  dTimeR: string
  location: Location
  aOutS?: boolean
  aOutR?: boolean
  aTimeS: string
  aTimeR: string
}

export interface FromOrToLocation {
  type: string
  id: string
  name: string
  location: Location2
  stationDHID: string
}

export interface Ani {
  mSec: number[]
  proc: number[]
  procAbs: number[]
  fLocX: number[]
  tLocX: number[]
  dirGeo: number[]
  stcOutputX: number[]
  state: string[]
  fromLocations: FromOrToLocation[]
  toLocations: FromOrToLocation[]
}

export interface Line {
  type: string
  id: string
  fahrtNr?: any
  name: string
  public: boolean
  productName: string
  mode: string
  product: string
  symbol: string
  nr: number
  metro: boolean
  express: boolean
  night: boolean
}

export interface JnyL {
  jid: string
  date: string
  prodX: number
  dirTxt: string
  dirGeo: number
  stopL: StopL[]
  proc: number
  ani: Ani
  isBase: boolean
  line: Line
}

export interface HafasRadarResponse {
  common: Common
  date: string
  time: string
  jnyL: JnyL[]
  fpB: string
  fpE: string
  planrtTS: string
}

export type RadarResponse = {
  routeName: string
  frames: { path: string; offset: number; absOffset: number }[]
}

export type RadarTrip = {
  jid: string
  dirTxt: string
  date: string
  routeName: string
}

export type RadarDto = {
  trips: (RadarTrip & {
    keyframes: Keyframe2[]
  })[]
  errors: (RadarTrip & {
    message: string
  })[]
}
