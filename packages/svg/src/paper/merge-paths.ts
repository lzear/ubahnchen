import paper from 'paper'

import { normalize } from '../normalize'

import { reverse } from './reverse'

const mergePathsStr = (d1: string, d2: string) => {
  const n1 = normalize(d1)
  const n2 = normalize(d2)

  if (!n2.startsWith('M')) throw new Error('d2 must start with M')

  if (
    n1.endsWith('Z') ||
    n1.endsWith('z') ||
    n2.endsWith('Z') ||
    n2.endsWith('z')
  )
    throw new Error('Z not supported')

  return `${n1} L${n2.slice(1)}`
}

export const mergePaths = (ds: string[]): string => {
  if (ds.length === 0) throw new Error('ds must not be empty')

  if (ds.length === 1) return ds[0]!

  let bestLength = Number.POSITIVE_INFINITY
  let best: string | undefined

  for (let i = 0; i < ds.length; i++) {
    const d1 = ds[i]
    if (!d1) throw new Error('d1 must not be empty')
    const rest = ds.filter((_, j) => i !== j)
    const d2 = mergePaths(rest)
    if (!d2) throw new Error('d2 must not be empty')
    const merged = merge2Paths(d1, d2)
    if (!merged) throw new Error('merged must not be empty')
    const newLength = new paper.Path(merged).length
    if (newLength < bestLength) {
      bestLength = newLength
      best = merged
    }
  }
  if (!best) throw new Error('No best found')
  return best
}

export const merge2Paths = (n1: string, n2: string) => {
  const r1 = reverse(n1)
  const r2 = reverse(n2)
  const candidates = [
    mergePathsStr(n1, n2),
    mergePathsStr(n1, r2),
    mergePathsStr(r1, n2),
    mergePathsStr(r1, r2),
    mergePathsStr(n2, n1),
    mergePathsStr(n2, r1),
    mergePathsStr(r2, n1),
    mergePathsStr(r2, r1),
  ]
  paper.setup(new paper.Size(15, 15))
  const paperCandidates = candidates.map((c) => new paper.Path(c))
  const lengths = paperCandidates.map((c) => c.length)
  const minLength = Math.min(...lengths)
  const minIndex = lengths.indexOf(minLength)
  const best = paperCandidates[minIndex]
  return best?.pathData
}
