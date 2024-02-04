'use client'

import React, { useState } from 'react'
import { Circle, Polyline, useMap, useMapEvents } from 'react-leaflet'
import dynamic from 'next/dynamic'

import type { Shape } from '@ubahnchen/cities'

import type { Edge, Node } from '../app/[city]/save.action'
import { save } from '../app/[city]/save.action'
// import { drizzleTables } from '@ubahnchen/database'
import { TileLayer } from '../lll'

const MapContainer = dynamic(() => import('./map-container'), {
  loading: () => <p className="absolute">loading...</p>,
  ssr: false,
})

type SStop = {
  stop_id: string
  parent_station: string | null
  stop_lon: number
  stop_lat: number
}

type Props = {
  mapData?: { stops: { [stopId: string]: { position: [number, number] } } }
  mergeStops: boolean
  stopById: Record<string, SStop>
  stops: SStop[]
  stopPairs: {
    routes: {
      route_id: string
      route_name: string
      route_type: number
    }
    stop_pairs: {
      idx: number
      route_id: string
      stop_id_1: string
      stop_id_2: string
      count: number
    }
  }[]
  shapes?: Shape[]
}

const MMap = ({ setZoom }: { setZoom: (zoom: number) => void }) => {
  const m = useMap()
  useMapEvents({ zoom: () => setZoom(m.getZoom()) })
  return null
}

const ZOOM = 10
export const MapCity = (props: Props) => {
  const { mergeStops, stopById, stopPairs, shapes } = props
  const usedStops = new Set<string>()

  // const [radius, setRadius] = useState(40)
  const [zoom, setZoom] = useState(ZOOM)

  for (const sp of stopPairs) {
    const s1 = stopById[sp.stop_pairs.stop_id_1]
    const s2 = stopById[sp.stop_pairs.stop_id_2]
    usedStops.add((mergeStops && s1.parent_station) || s1.stop_id)
    usedStops.add((mergeStops && s2.parent_station) || s2.stop_id)
  }

  const getStop = (stopId: string) => {
    const stop = stopById[stopId]
    if (stop.parent_station && mergeStops) return stopById[stop.parent_station]
    return stop
  }

  const stops = Object.values(stopById)
  const nodes: Node[] = stops
    .filter((s) => usedStops.has(s.stop_id))
    .map((s) => ({
      id: s.stop_id,
      center: [s.stop_lat, s.stop_lon],
    }))
  const edges: Edge[] = shapes
    ? shapes?.map((s) => ({
        id: s.shape_id,
        positions: s.shape_pts.map((p) => [p.shape_pt_lat, p.shape_pt_lon]),
      }))
    : stopPairs.map((s) => ({
        id: s.stop_pairs.idx,
        positions: [s.stop_pairs.stop_id_1, s.stop_pairs.stop_id_2].map((s) => [
          getStop(s).stop_lat,
          getStop(s).stop_lon,
        ]),
      }))
  // const radius = 2000 / Math.pow(1.3, zoom)

  const radius = 20_000 / Math.pow(1.5, zoom)

  return (
    <>
      <MapContainer
        center={[52.52, 13.4]}
        zoom={10}
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
        }}
      >
        <TileLayer
          // attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {nodes.map((s) => (
          <Circle
            onAdd={(event: unknown) => {
              console.log('marker onAdd', event)
            }}
            key={s.id}
            opacity={0.9}
            weight={1.5}
            radius={radius}
            color="red"
            center={s.center}
            draggable={true}
            interactive
            eventHandlers={{
              click: (event) => {
                console.log('marker clicked', event)
              },
              dragend: (event) => {
                console.log('marker dragend', event)
              },
              drag: (event) => {
                console.log('marker dragend', event)
              },
              dragstart: (event) => {
                console.log('marker dragend', event)
              },
              // @ts-ignore
              ondragenter: (event: unknown) => {
                console.log('marker dragend', event)
              },
              mousedown: (event) => {
                console.log('marker mousedown', event)
              },
            }}
          />
        ))}
        {edges.map((s) => (
          <Polyline
            key={s.id}
            opacity={0.9}
            weight={1.5}
            positions={s.positions}
          />
        ))}
        <MMap setZoom={setZoom} />
      </MapContainer>
      <form
        action={() => {
          void save({ edges, nodes })
        }}
      >
        <button
          className="btn absolute bottom-0 right-0 z-[1050]"
          onClick={() => {
            const stopIds = [...usedStops]
            console.log(stopIds)
            console.log(stopIds.length)
          }}
          type="submit"
        >
          Save
        </button>
      </form>
    </>
  )
}
