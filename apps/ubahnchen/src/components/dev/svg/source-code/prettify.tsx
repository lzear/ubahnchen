'use client'

import { useContext } from 'react'
import _ from 'lodash'
import xmlFormat from 'xml-formatter'

import { Toggle } from '@/components/ui/toggle'

import { SourceContext } from './source-context'

export const Prettify = () => {
  const { code, setCode } = useContext(SourceContext)

  const isPretty = isPrettyCompute(code)
  return (
    <Toggle
      pressed={isPretty}
      onPressedChange={() => setCode(xmlFormat(code))}
      className="h-6 border"
      size="xs"
    >
      Pretty
    </Toggle>
  )
}

const isPrettyCompute = (text: string) => {
  try {
    const og = text.replaceAll(/[\n\r]+/g, '\n')
    const pr = xmlFormat(text).replaceAll(/[\n\r]+/g, '\n')

    return _.isEqual(og, pr)
  } catch {
    return true
  }
}
