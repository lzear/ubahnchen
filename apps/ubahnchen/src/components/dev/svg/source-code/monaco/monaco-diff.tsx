'use client'

import { useRef } from 'react'
import type { MonacoDiffEditor } from '@monaco-editor/react'
import { DiffEditor } from '@monaco-editor/react'
import { ImageOff, LoaderCircle } from 'lucide-react'
import type * as monaco from 'monaco-editor'

import {
  usePersistentSVG1,
  usePersistentSVG2,
} from '@/components/dev/svg/use-persistent-svg'

import {
  getXmlCompletionProvider,
  getXmlHoverProvider,
} from './svg/completion-provider'

type IDiffEditorConstructionOptions =
  monaco.editor.IDiffEditorConstructionOptions
type IStandaloneCodeEditor = monaco.editor.IStandaloneCodeEditor

const options: IDiffEditorConstructionOptions = {
  selectOnLineNumbers: true,
  scrollBeyondLastLine: false,
  readOnly: false,
  originalEditable: true,
  lineNumbersMinChars: 3,
}

type M = typeof monaco

const Loader1 = () => (
  <LoaderCircle
    size={32}
    color="white"
    className="pointer-events-none absolute bottom-4 left-9 animate-spin opacity-40"
  />
)

const IsInvalid1 = () => (
  <ImageOff
    size={32}
    color="white"
    className="pointer-events-none absolute bottom-4 left-9 opacity-40"
  />
)

export const MonacoDiff = () => {
  const editorRef = useRef<IStandaloneCodeEditor | MonacoDiffEditor>()

  const handleEditorDidMount = (editor: MonacoDiffEditor, monaco: M) => {
    editorRef.current = editor
    monaco.languages.registerCompletionItemProvider(
      'xml',
      getXmlCompletionProvider(monaco),
    )
    monaco.languages.registerHoverProvider('xml', getXmlHoverProvider(monaco))

    const o = editor.getOriginalEditor()
    o.onDidChangeModelContent(() => s1.updateSVG(o.getValue()))
    if (s1.svg) o.setValue(s1.svg)

    const m = editor.getModifiedEditor()
    m.onDidChangeModelContent(() => s2.updateSVG(m.getValue()))
    if (s2.svg) m.setValue(s2.svg)
  }

  const s1 = usePersistentSVG1()
  const s2 = usePersistentSVG2()

  return (
    <div className="relative flex h-full flex-1">
      <DiffEditor
        className="flex-1"
        language="xml"
        theme="vs-dark"
        options={options}
        onMount={handleEditorDidMount}
      />
      {s1.isStale ? <Loader1 /> : !s1.isValid && <IsInvalid1 />}
    </div>
  )
}
