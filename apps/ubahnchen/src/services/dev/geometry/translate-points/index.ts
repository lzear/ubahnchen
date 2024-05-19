import { affineWithDelaunay } from './01-affine-with-delaunay'
import { gravityTranslate } from './02-gravity'
import { linearish } from './03-linear'

export const translatePoints = {
  DELAUNAY: affineWithDelaunay,
  GRAVITY: gravityTranslate,
  LINEARISH: linearish,
}
