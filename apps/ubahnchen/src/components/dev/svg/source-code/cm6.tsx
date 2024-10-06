'use client'

import { useContext } from 'react'
import { xml } from '@codemirror/lang-xml'
import CodeMirror from '@uiw/react-codemirror'

import { SourceContext } from './source-context'

import './cm6.css'

type Props = {
  // value: string
  readOnly?: boolean
}

export const Cm6 = (props: Props) => {
  const { code, setCode } = useContext(SourceContext)

  return (
    <div className="relative flex min-h-full flex-initial flex-col">
      <CodeMirror
        readOnly={props.readOnly}
        value={code}
        extensions={[xml({})]}
        className="cm6"
        onChange={(v) => setCode(v)}
      />
    </div>
  )
}
