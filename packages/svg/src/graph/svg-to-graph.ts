import type { Edge } from './types'

export type PathForAlgorithm<D = unknown> = {
  id: string
  d: string
  boundingBox: {
    x: number
    y: number
    width: number
    height: number
  }
  color: string | null
  data: D
}

export type PathPoint = {
  x: number
  y: number
  path: PathForAlgorithm
  pathLength: number
}

export const getPathsForAlgorithm = <D>(
  svgString: string,
): PathForAlgorithm<D>[] => {
  const parser = new DOMParser()
  const doc = parser.parseFromString(svgString, 'image/svg+xml')
  const paths = [...doc.querySelectorAll('path')]
  const visitedIds = new Set<string>()
  return paths.map((p) => {
    const id = p.getAttribute('id')
    if (!id) throw new Error('No id found')
    if (visitedIds.has(id)) throw new Error('Duplicate id')
    visitedIds.add(id)
    return {
      id,
      d: p.getAttribute('d')!,
      boundingBox: p.getBBox(),
      color: p.getAttribute('stroke'),
      data: {} as D,
      path: p,
    }
  })
}

const getJumps2Paths = (

)


export const getBaseGraph = (svgString: string, precision = 10) => {
  const paths = getPathsForAlgorithm(svgString)

  const edges: Edge[] = []
}
