'use client'

import type { ReactNode } from 'react'
import { useRef } from 'react'
import type { ImperativePanelHandle } from 'react-resizable-panels'

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from '@/components/ui/resizable'

import { SplitPanels } from './panels'

type Props = {
  topLeft: ReactNode
  topRight: ReactNode
  bottomLeft: ReactNode
  bottomRight: ReactNode
}

export const FourPanels = ({
  topLeft,
  topRight,
  bottomLeft,
  bottomRight,
}: Props) => {
  const refA = useRef<ImperativePanelHandle>(null)
  const refB = useRef<ImperativePanelHandle>(null)

  return (
    <SplitPanels
      direction="horizontal"
      panels={[
        <SplitPanels
          key="1"
          direction="vertical"
          panels={[topLeft, topRight]}
        />,
        <SplitPanels
          key="1"
          direction="vertical"
          panels={[topLeft, topRight]}
        />,
      ]}
    />
  )
  // return (
  //   <ResizablePanelGroup direction="vertical">
  //     <ResizablePanel defaultSize={50}>
  //       <ResizablePanelGroup direction="horizontal">
  //         <ResizablePanel
  //           defaultSize={50}
  //           ref={refA}
  //           onResize={(wer) => {
  //             refA.current?.resize(wer)
  //             refB.current?.resize(wer)
  //           }}
  //         >
  //           {topLeft}
  //         </ResizablePanel>
  //         <ResizableHandle />
  //         <ResizablePanel defaultSize={50}>{topRight}</ResizablePanel>
  //       </ResizablePanelGroup>
  //     </ResizablePanel>
  //     <ResizableHandle />
  //     <ResizablePanel defaultSize={50}>
  //       <ResizablePanelGroup direction="horizontal">
  //         <ResizablePanel
  //           defaultSize={50}
  //           ref={refB}
  //           onResize={(wer) => {
  //             refA.current?.resize(wer)
  //             refB.current?.resize(wer)
  //           }}
  //         >
  //           {bottomLeft}
  //         </ResizablePanel>
  //         <ResizableHandle />
  //         <ResizablePanel defaultSize={50}>{bottomRight}</ResizablePanel>
  //       </ResizablePanelGroup>
  //     </ResizablePanel>
  //   </ResizablePanelGroup>
  // )
}
