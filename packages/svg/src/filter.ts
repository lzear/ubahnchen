import { stringToDom } from './string-to-dom'

export const filterSvg = (
  input: string,
  filterFn: (element: SVGElement) => boolean,
): string => {
  const dom = stringToDom(input)
  const document = dom.window.document

  const elements = document.querySelectorAll<SVGElement>('svg *')

  for (const element of elements.values())
    if (!filterFn(element)) element.remove()

  return dom.serialize()
}
