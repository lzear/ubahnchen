import { stringToDom } from './string-to-dom'

export const annotate = (input: string, xAttribute: string): string => {
  const dom = stringToDom(input)
  const document = dom.window.document

  const elements = document.querySelectorAll<HTMLElement>('svg *')

  for (const [index, element] of elements.entries())
    if (element.dataset) element.dataset[xAttribute] = `${index}`

  return dom.serialize()
}
