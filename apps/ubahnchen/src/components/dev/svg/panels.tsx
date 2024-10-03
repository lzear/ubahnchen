'use client'

import type { ReactNode } from 'react'

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from '@/components/ui/resizable'
import { reactJoin } from '@/lib/react-join'

type Panel = {
  content: ReactNode
  size?: number
  syncId: string | number
}

type Props = {
  direction: 'horizontal' | 'vertical'
  // panels: ReactNode[]
  // defaultSizes: number[]
  panels: (Panel | ReactNode)[]
}

export const SplitPanels = (props: Props) => {
  const renderPanel = (panel: Panel | ReactNode, index: number) => {
    if (!panel) return null
    if (typeof panel === 'object' && 'content' in panel)
      return (
        <ResizablePanel key={`e${index}`} defaultSize={panel.size}>
          {panel.content}
        </ResizablePanel>
      )
    return <ResizablePanel key={`e${index}`}>{panel}</ResizablePanel>
  }
  return (
    <ResizablePanelGroup direction={props.direction}>
      {reactJoin(
        props.panels
          .filter(Boolean)
          .map((element, index) => renderPanel(element, index)),
        (index) => (
          <ResizableHandle key={`s${index}`} />
        ),
      )}
    </ResizablePanelGroup>
  )
}
