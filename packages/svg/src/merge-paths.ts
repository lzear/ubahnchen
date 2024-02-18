import chalk from 'chalk'

import { mergePaths as paperMerge } from './paper/merge-paths'
import { normalize } from './normalize'
import { stringToDom } from './string-to-dom'

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
    console.log(chalk.hex(color)(_elements.length))
    if (_elements.length < 2) continue
    const ds = _elements
      .map((el) => el.getAttribute('d'))
      .filter(Boolean)
      .flatMap((d) => normalize(d!).split('M'))
      .filter((d) => d?.length > 1)
      .map((d) => `M${d}`)
    console.log(`antoinelog ds`, ds)

    const newD = paperMerge(ds)
    const [first, ...rest] = _elements
    if (!first) throw new Error('first must not be empty')
    first.setAttribute('d', newD)
    for (const el of rest) el.remove()
  }
  return dom.serialize()
}
