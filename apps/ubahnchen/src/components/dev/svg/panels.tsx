'use client'

import type { ReactNode } from 'react'
import { useRef, useState } from 'react'
import type { ImperativePanelHandle } from 'react-resizable-panels'

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from '@/components/ui/resizable'
import { reactJoin } from '@/lib/react-join'

// type Props = {
//   topLeft: ReactNode
//   topRight: ReactNode
//   bottomLeft: ReactNode
//   bottomRight: ReactNode
// }
//
// export const FourPanels = ({
//   topLeft,
//   topRight,
//   bottomLeft,
//   bottomRight,
// }: Props) => {
//   const refA = useRef<ImperativePanelHandle>(null)
//   const refB = useRef<ImperativePanelHandle>(null)
//   return (
//     <ResizablePanelGroup direction="vertical">
//       <ResizablePanel defaultSize={50}>
//         <ResizablePanelGroup direction="horizontal">
//           <ResizablePanel
//             defaultSize={50}
//             ref={refA}
//             onResize={(wer) => {
//               refA.current?.resize(wer)
//               refB.current?.resize(wer)
//             }}
//           >
//             {topLeft}
//           </ResizablePanel>
//           <ResizableHandle />
//           <ResizablePanel defaultSize={50}>{topRight}</ResizablePanel>
//         </ResizablePanelGroup>
//       </ResizablePanel>
//       <ResizableHandle />
//       <ResizablePanel defaultSize={50}>
//         <ResizablePanelGroup direction="horizontal">
//           <ResizablePanel
//             defaultSize={50}
//             ref={refB}
//             onResize={(wer) => {
//               refA.current?.resize(wer)
//               refB.current?.resize(wer)
//             }}
//           >
//             {bottomLeft}
//           </ResizablePanel>
//           <ResizableHandle />
//           <ResizablePanel defaultSize={50}>{bottomRight}</ResizablePanel>
//         </ResizablePanelGroup>
//       </ResizablePanel>
//     </ResizablePanelGroup>
//   )
// }

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
