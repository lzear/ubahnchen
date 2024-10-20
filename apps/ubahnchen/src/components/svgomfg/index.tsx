'use client'

import React from 'react'

import { MonacoDiff } from '../dev/svg/source-code/monaco/monaco-diff'
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from '../ui/resizable'

import { TopBar } from './01-topbar'
import { PreviewSvg } from './05-preview'

export const Svgomfg = () => {
  return (
    <div className="flex h-screen flex-col">
      <TopBar />
      <ResizablePanelGroup direction="vertical">
        <ResizablePanel
          key="code"
          defaultSize={40}
          collapsible
          collapsedSize={0}
          minSize={12}
          onCollapse={() => console.log('collapsed')}
        >
          <MonacoDiff key="src" />
        </ResizablePanel>
        <ResizableHandle key="handle" />
        <ResizablePanel
          key="image"
          collapsible
          collapsedSize={0}
          minSize={8}
          onCollapse={() => console.log('collapsed')}
        >
          <PreviewSvg key="preview" />
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  )
}
