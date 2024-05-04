import chalk from 'chalk'

import { stringToDom } from './string-to-dom'

const _mergeP = (
  _input: SVGPathElement[],
  _precision = 10,
): SVGPathElement[] => {
  const merged: SVGPathElement[] = []

  for (let i = 0; i < _input.length; i++) {
    for (let j = i + 1; j < _input.length; j++) {
      if (i === j) continue

      const _p1 = _input[i]
      const _p2 = _input[j]
    }
  }
  return merged
}

export const mergePaths = (input: string, _precision = 10): string => {
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

  for (const [color, _elements] of groupedByColor.entries()) {
    console.log(chalk.hex(color)(color))
  }

  return dom.serialize()
}
