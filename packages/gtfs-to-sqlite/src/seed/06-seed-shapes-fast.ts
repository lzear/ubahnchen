import fs from 'node:fs'

import type { DefaultOptions } from './00-seed.js'

export const seedShapes = async ({
  gtfsIterator,
  inserter,
  databasePath,
}: DefaultOptions) => {
  const filePath = gtfsIterator.filePath('shapes')
  if (!fs.existsSync(filePath)) return false

  let current:
    | undefined
    | {
        shape_id: string
        pts: { shape_pt_lat: string; shape_pt_lon: string }[]
      }

  return inserter({
    databasePath,
    prepare: `INSERT INTO shapes (shape_id,shape_pts,lat_min,lat_max,lon_min,lon_max)
     VALUES (@shape_id, @shape_pts, @lat_min, @lat_max, @lon_min, @lon_max)`,
    run: async (pusher) => {
      const send = (c: {
        shape_id: string
        pts: { shape_pt_lat: string; shape_pt_lon: string }[]
      }) => {
        const { pts, shape_id } = c
        const lat_min = Math.min(...pts.map((s) => Number(s.shape_pt_lat)))
        const lat_max = Math.max(...pts.map((s) => Number(s.shape_pt_lat)))
        const lon_min = Math.min(...pts.map((s) => Number(s.shape_pt_lon)))
        const lon_max = Math.max(...pts.map((s) => Number(s.shape_pt_lon)))
        pusher({
          shape_id,
          shape_pts: JSON.stringify(pts),
          lat_max,
          lat_min,
          lon_max,
          lon_min,
        })
      }
      let is0indexed: boolean | undefined
      await gtfsIterator.iterate('shapes')(({ row }) => {
        if (is0indexed === undefined) {
          // @ts-ignore
          if (row.shape_pt_sequence === '0') is0indexed = true
          // @ts-ignore
          else if (row.shape_pt_sequence === '1') is0indexed = false
          else
            throw new Error(`row.shape_pt_sequence: ${row.shape_pt_sequence}`)
        }
        if (!current || current?.shape_id !== row.shape_id) {
          // @ts-ignore
          if (row.shape_pt_sequence !== (is0indexed ? '0' : '1'))
            throw new Error(`row.shape_pt_sequence: ${row.shape_pt_sequence}`)
          if (current) send(current)
          current = { shape_id: row.shape_id, pts: [] }
        }
        current.pts.push({
          // @ts-ignore
          shape_pt_lat: row.shape_pt_lat,
          // @ts-ignore
          shape_pt_lon: row.shape_pt_lon,
        })
        if (
          Number(row.shape_pt_sequence) + (is0indexed ? 1 : 0) !==
          current.pts.length
        )
          throw new Error('asdf')
      })

      if (!current) throw new Error('?!')
      send(current)
      return true
    },
  })
}
