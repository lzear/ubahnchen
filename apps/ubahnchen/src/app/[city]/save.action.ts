'use server'

import * as fs from 'node:fs'

export interface SaveData {
  edges: Edge[]
  nodes: Node[]
}

export interface Edge {
  id: number | string
  positions: [number, number][]
}

export interface Node {
  id: string
  center: [number, number]
}

export const save = (data: SaveData) =>
  fs.promises.writeFile('data.json', JSON.stringify(data, null, 2))
