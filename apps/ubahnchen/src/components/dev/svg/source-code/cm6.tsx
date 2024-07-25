'use client'

import { useContext } from 'react'
import { xml } from '@codemirror/lang-xml'
import CodeMirror from '@uiw/react-codemirror'
import _ from 'lodash'
import xmlFormat from 'xml-formatter'

import { Toggle } from '@/components/ui/toggle'

import { SourceContext } from './source-context'

import './cm6.css'

type Props = {
  // value: string
  readOnly?: boolean
}

type BarProps = {
  isPretty: boolean
  onPrettify: (v: unknown) => void
}

const Bar = (props: BarProps) => {
  return (
    <div>
      <Toggle
        pressed={props.isPretty}
        onPressedChange={props.onPrettify}
        className="border"
      >
        Pretty
      </Toggle>
    </div>
  )
}

// async check if text == xmlFormat(text)
// Do that debounced in the background so it doesn't block the UI

const isPrettyCompute = (text: string) => {
  try {
    const og = text.replaceAll(/[\n\r]+/g, '\n')
    const pr = xmlFormat(text).replaceAll(/[\n\r]+/g, '\n')

    return _.isEqual(og, pr)
  } catch {
    return true
  }
}

export const Cm6 = (props: Props) => {
  // const [value, setValue] = useState(props.value)

  const { code, setCode } = useContext(SourceContext)

  const [value, setValue] = [code, setCode]
  const isPretty = isPrettyCompute(value)

  return (
    <div className="relative flex min-h-0 flex-initial flex-col">
      <Bar
        isPretty={isPretty}
        onPrettify={(v) => {
          if (v === true) setValue(xmlFormat(value))
        }}
      />
      <CodeMirror
        readOnly={props.readOnly}
        value={value}
        extensions={[xml({})]}
        className="cm6"
        onChange={(v) => setValue(v)}
      />
    </div>
  )
}
