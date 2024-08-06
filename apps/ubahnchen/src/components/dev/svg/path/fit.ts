// From https://github.com/paperjs/paper.js/blob/db82f41/src/path/PathFitter.js

/*
 * Paper.js - The Swiss Army Knife of Vector Graphics Scripting.
 * http://paperjs.org/
 *
 * Copyright (c) 2011 - 2020, Jürg Lehni & Jonathan Puckey
 * http://juerglehni.com/ & https://puckey.studio/
 *
 * Distributed under the MIT license. See LICENSE file for details.
 *
 * All rights reserved.
 */

// An Algorithm for Automatically Fitting Digitized Curves
// by Philip J. Schneider
// from "Graphics Gems", Academic Press, 1990
// Modifications and optimizations of original algorithm by Jürg Lehni.

import type { Point } from '@ubahnchen/utils'

import { add, distance, dot, eq, mul, negate, normalize, subs } from '../point'

const EPSILON = 1e-12
const MACHINE_EPSILON = 1.12e-16

const isMachineZero = (val: number) =>
  val >= -MACHINE_EPSILON && val <= MACHINE_EPSILON

type Segment =
  | Point
  | [number, number, number, number]
  | [number, number, number, number, number, number]
  | [number, number, null, null, number, number]

const isNumber = (val: unknown): val is number => typeof val === 'number'

const setHandleOut = (segment: Segment, point: Point) => {
  const newSegment: Segment =
    isNumber(segment[2]) && isNumber(segment[3])
      ? [segment[0], segment[1], segment[2], segment[3], point[0], point[1]]
      : [segment[0], segment[1], null, null, point[0], point[1]]

  for (let i = 2; i < newSegment.length; i++) segment[i] = newSegment[i]!
}

export class Fit {
  points: Point[]
  closed: boolean

  constructor(points: Point[], closed: boolean) {
    this.points = []
    this.closed = closed

    let prev
    for (const point_ of points) {
      const point: Point = [...point_]
      if (point && (!prev || !eq(prev, point))) this.points.push([...point])
      prev = point
    }
    // We need to duplicate the first and last segment when simplifying a
    // closed path.
    if (closed) {
      const last = this.points.at(-1)
      const first = this.points[0]
      if (last && first) {
        this.points.unshift(last)
        this.points.push(first)
      }
    }
  }

  fit(error: number) {
    const points = this.points
    const length = points.length
    let segments: Point[] | null = null
    if (length > 0) {
      // To support reducing paths with multiple points in the same place
      // to one segment:
      segments = [points[0]!]
      if (length > 1) {
        this.fitCubic(
          segments,
          error,
          0,
          length - 1,
          // Left Tangent
          subs(points[1]!, points[0]!),
          // Right Tangent
          subs(points[length - 2]!, points[length - 1]!),
        )
        // Remove the duplicated segments for closed paths again.
        if (this.closed) {
          segments.shift()
          segments.pop()
        }
      }
    }
    return segments
  }

  // Fit a Bezier curve to a (sub)set of digitized points
  fitCubic(
    segments: Point[],
    error: number,
    first: number,
    last: number,
    tan1: Point,
    tan2: Point,
  ) {
    const points = this.points
    //  Use heuristic if region only has two points in it
    if (last - first === 1) {
      const pt1 = points[first]!
      const pt2 = points[last]!
      const dist = distance(pt1, pt2) / 3
      this.addCurve(segments, [
        pt1,
        add(pt1, normalize(tan1, dist)),
        add(pt2, normalize(tan2, dist)),
        pt2,
      ])
      return
    }
    // Parameterize points, and attempt to fit curve
    const uPrime = this.chordLengthParameterize(first, last)
    let maxError = Math.max(error, error * error)
    let split = Infinity
    let parametersInOrder = true
    // Try 4 iterations
    for (let i = 0; i <= 4; i++) {
      const curve = this.generateBezier(first, last, uPrime, tan1, tan2)
      //  Find max deviation of points to fitted curve
      const max = this.findMaxError(first, last, curve, uPrime)
      if (max.error < error && parametersInOrder) {
        this.addCurve(segments, curve)
        return
      }
      split = max.index
      // If error not too large, try reparameterization and iteration
      if (max.error >= maxError) break
      parametersInOrder = this.reparameterize(first, last, uPrime, curve)
      maxError = max.error
    }
    // Fitting failed -- split at max error point and fit recursively
    const tanCenter = subs(points[split - 1]!, points[split + 1]!)
    this.fitCubic(segments, error, first, split, tan1, tanCenter)
    this.fitCubic(segments, error, split, last, negate(tanCenter), tan2)
  }

  addCurve(segments: Segment[], curve: Point[]) {
    const prev = segments.at(-1)!
    setHandleOut(prev, subs(curve[1]!, curve[0]!))
    segments.push([...curve[3]!, ...subs(curve[2]!, curve[3]!)])
  }

  // Use least-squares method to find Bezier control points for region.
  generateBezier(
    first: number,
    last: number,
    uPrime: number[],
    tan1: Point,
    tan2: Point,
  ) {
    const epsilon = EPSILON
    const abs = Math.abs
    const points = this.points
    const pt1 = points[first]!
    const pt2 = points[last]!
    // Create the C and X matrices
    const C = [
      [0, 0],
      [0, 0],
    ] as [[number, number], [number, number]]
    const X: Point = [0, 0]

    for (let i = 0, l = last - first + 1; i < l; i++) {
      const u = uPrime[i]!
      const t = 1 - u
      const b = 3 * u * t
      const b0 = t * t * t
      const b1 = b * t
      const b2 = b * u
      const b3 = u * u * u
      const a1 = normalize(tan1, b1)
      const a2 = normalize(tan2, b2)
      const tmp = subs(
        subs(points[first + i]!, mul(pt1, b0 + b1)),
        mul(pt2, b2 + b3),
      )
      C[0][0] += dot(a1, a1)
      C[0][1] += dot(a1, a2)
      C[1][0] = C[0][1]
      C[1][1] += dot(a2, a2)
      X[0] += dot(a1, tmp)
      X[1] += dot(a2, tmp)
    }

    // Compute the determinants of C and X
    const detC0C1 = C[0][0] * C[1][1] - C[1][0] * C[0][1]
    let alpha1
    let alpha2
    if (abs(detC0C1) > epsilon) {
      // Kramer's rule
      const detC0X = C[0][0] * X[1] - C[1][0] * X[0]
      const detXC1 = X[0] * C[1][1] - X[1] * C[0][1]
      // Derive alpha values
      alpha1 = detXC1 / detC0C1
      alpha2 = detC0X / detC0C1
    } else {
      // Matrix is under-determined, try assuming alpha1 == alpha2
      const c0 = C[0][0] + C[0][1],
        c1 = C[1][0] + C[1][1]
      alpha1 = alpha2 =
        abs(c0) > epsilon ? X[0] / c0 : abs(c1) > epsilon ? X[1] / c1 : 0
    }

    // If alpha negative, use the Wu/Barsky heuristic (see text)
    // (if alpha is 0, you get coincident control points that lead to
    // divide by zero in any subsequent NewtonRaphsonRootFind() call.
    const segLength = distance(pt1, pt2)
    const eps = epsilon * segLength
    let handle1
    let handle2
    if (alpha1 < eps || alpha2 < eps) {
      // fall back on standard (probably inaccurate) formula,
      // and subdivide further if needed.
      alpha1 = alpha2 = segLength / 3
    } else {
      // Check if the found control points are in the right order when
      // projected onto the line through pt1 and pt2.
      const line = subs(pt2, pt1)
      // Control points 1 and 2 are positioned an alpha distance out
      // on the tangent vectors, left and right, respectively
      handle1 = normalize(tan1, alpha1)
      handle2 = normalize(tan2, alpha2)
      if (dot(handle1, line) - dot(handle2, line) > segLength * segLength) {
        // Fall back to the Wu/Barsky heuristic above.
        alpha1 = alpha2 = segLength / 3
        handle1 = handle2 = null // Force recalculation
      }
    }

    // First and last control points of the Bezier curve are
    // positioned exactly at the first and last data points
    return [
      pt1,
      add(pt1, handle1 ?? normalize(tan1, alpha1)),
      add(pt2, handle2 ?? normalize(tan2, alpha2)),
      pt2,
    ]
  }

  // Given set of points and their parameterization, try to find
  // a better parameterization.
  reparameterize(first: number, last: number, u: number[], curve: Point[]) {
    for (let i = first; i <= last; i++) {
      u[i - first] = this.findRoot(curve, this.points[i]!, u[i - first]!)
    }
    // Detect if the new parameterization has reordered the points.
    // In that case, we would fit the points of the path in the wrong order.
    for (let i = 1, l = u.length; i < l; i++) {
      if (u[i]! <= u[i - 1]!) return false
    }
    return true
  }

  // Use Newton-Raphson iteration to find better root.
  findRoot(curve: Point[], point: Point, u: number) {
    const curve1: Point[] = []
    const curve2: Point[] = []
    // Generate control vertices for Q'
    for (let i = 0; i <= 2; i++) {
      curve1[i] = mul(subs(curve[i + 1]!, curve[i]!), 3)
    }
    // Generate control vertices for Q''
    for (let i = 0; i <= 1; i++) {
      curve2[i] = mul(subs(curve1[i + 1]!, curve1[i]!), 2)
    }
    // Compute Q(u), Q'(u) and Q''(u)
    const pt = this.evaluate(3, curve, u)!
    const pt1 = this.evaluate(2, curve1, u)!
    const pt2 = this.evaluate(1, curve2, u)!
    const diff = subs(pt, point)
    const df = dot(pt1, pt1) + dot(diff, pt2)
    // u = u - f(u) / f'(u)
    return isMachineZero(df) ? u : u - dot(diff, pt1) / df
  }

  // Evaluate a bezier curve at a particular parameter value
  evaluate(degree: number, curve: Point[], t: number) {
    // Copy array
    const tmp = [...curve]
    // Triangle computation
    for (let i = 1; i <= degree; i++) {
      for (let j = 0; j <= degree - i; j++) {
        tmp[j] = add(mul(tmp[j]!, 1 - t), mul(tmp[j + 1]!, t))
      }
    }
    return tmp[0]
  }

  // Assign parameter values to digitized points
  // using relative distances between points.
  chordLengthParameterize(first: number, last: number) {
    const u = [0]
    for (let i = first + 1; i <= last; i++) {
      u[i - first] =
        u[i - first - 1]! + distance(this.points[i]!, this.points[i - 1]!)
    }
    for (let i = 1, m = last - first; i <= m; i++) {
      u[i]! /= u[m]!
    }
    return u
  }

  // Find the maximum squared distance of digitized points to fitted curve.
  findMaxError(first: number, last: number, curve: Point[], u: number[]) {
    let index = Math.floor((last - first + 1) / 2),
      maxDist = 0
    for (let i = first + 1; i < last; i++) {
      const P = this.evaluate(3, curve, u[i - first]!)
      const v = subs(P!, this.points[i]!)
      const dist = dot(v, v) // squared
      if (dist >= maxDist) {
        maxDist = dist
        index = i
      }
    }
    return {
      error: maxDist,
      index,
    }
  }
}
