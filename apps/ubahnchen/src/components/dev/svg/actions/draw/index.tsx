import React from 'react'

import { SplitPanels } from '@/components/dev/svg/panels'
import { Code } from '@/components/dev/svg/source-code/code'
import { SourceContextProvider } from '@/components/dev/svg/source-code/source-context'

import { ActionBaseTop } from '../base/action-base-top'
import { SwitchDraw } from '../base/switch-draw'

import { DrawSvgOutput } from './draw'
import { TopBarForm } from './top-bar-form'

export const DrawSvg = () => (
  <SourceContextProvider code="">
    <div className="flex h-screen w-screen flex-col align-middle">
      <ActionBaseTop>
        <SwitchDraw />
        <TopBarForm />
      </ActionBaseTop>
      <div className="flex flex-1 flex-col">
        <SplitPanels
          direction="vertical"
          panels={[
            {
              syncId: 'src',
              content: <Code key="src" />,
              size: 15,
            },
            {
              syncId: 'svg',
              content: <DrawSvgOutput key="svg" />,
              size: 85,
            },
          ]}
        />
      </div>
    </div>
  </SourceContextProvider>
)
