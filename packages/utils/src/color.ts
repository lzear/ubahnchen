import Color from 'color'

export function colorDistance(
  color1: Color | string,
  color2: Color | string,
): number {
  if (typeof color1 === 'string') color1 = Color(color1)
  if (typeof color2 === 'string') color2 = Color(color2)

  const [r1, g1, b1] = color1.rgb().array()
  const [r2, g2, b2] = color2.rgb().array()

  if (
    r1 === undefined ||
    g1 === undefined ||
    b1 === undefined ||
    r2 === undefined ||
    g2 === undefined ||
    b2 === undefined
  ) {
    throw new Error('Could not get rgb values')
  }

  const rDiff = r1 - r2
  const gDiff = g1 - g2
  const bDiff = b1 - b2

  return Math.hypot(rDiff, gDiff, bDiff)
}

export function findSimilarColor<C extends string>(
  targetColorInput: string,
  colorSet: C[],
): C {
  let minDistance = Number.POSITIVE_INFINITY
  let mostSimilarColor: C | undefined

  const targetColor = Color(targetColorInput)

  for (const colorInput of colorSet) {
    const currentColor = Color(colorInput)
    const distance = colorDistance(targetColor, currentColor)
    if (distance < minDistance) {
      minDistance = distance
      mostSimilarColor = colorInput
    }
  }

  if (!mostSimilarColor) {
    throw new Error('Could not find most similar color')
  }
  return mostSimilarColor
}
