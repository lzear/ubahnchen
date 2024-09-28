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

  return Math.hypot(rDiff / 255, gDiff / 255, bDiff / 255) / Math.sqrt(3)
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

// https://stackoverflow.com/a/41491220/4823861
export const textLightOrDark = (
  bgColor: string | Color,
  light = '#fff',
  dark = '#000',
) => {
  if (typeof bgColor === 'string') bgColor = Color(bgColor)
  const c = [
    bgColor.red() / 255,
    bgColor.green() / 255,
    bgColor.blue() / 255,
  ].map((col) =>
    col <= 0.039_28 ? col / 12.92 : Math.pow((col + 0.055) / 1.055, 2.4),
  ) as [number, number, number]
  return 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2] > 0.179 ? dark : light
}
