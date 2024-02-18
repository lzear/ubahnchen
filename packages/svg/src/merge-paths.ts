import chalk from 'chalk'

import { stringToDom } from './string-to-dom'

const mergeP = (input: SVGPathElement[], precision = 10): SVGPathElement[] => {
  const merged: SVGPathElement[] = []

  for (let i = 0; i < input.length; i++) {
    for (let j = i + 1; j < input.length; j++) {
      if (i === j) continue

      const p1 = input[i]
      const p2 = input[j]
    }
  }
  return merged
}

export const mergePaths = (input: string, precision = 10): string => {
  const dom = stringToDom(input)
  const document = dom.window.document

  const elements = document.querySelectorAll<SVGElement>('svg *')

  const groupedByColor = new Map<string, SVGElement[]>()

  for (const element of elements.values()) {
    const color = element.getAttribute('stroke') ?? ''
    const group = groupedByColor.get(color) ?? []
    group.push(element)
    groupedByColor.set(color, group)
  }

  for (const [color, elements] of groupedByColor.entries()) {
    console.log(chalk.hex(color)(color))
  }

  return dom.serialize()
}
