import type { ExoticComponent } from 'react'
import { SelectItemText } from '@radix-ui/react-select'
import { FileDiff, WandSparkles } from 'lucide-react'
import { parseAsStringLiteral, useQueryState } from 'nuqs'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select'

export const modes = ['diff', 'svgomfg'] as const

type SvgomfgMode = (typeof modes)[number]

const modeOptions = {
  diff: {
    name: 'Compare two SVGs',
    description: 'Add two SVGs and display their differences',
    icon: FileDiff,
  },
  svgomfg: {
    name: 'SVGOMFG',
    description: 'SVGOMG Missing Features and GUI',
    icon: WandSparkles,
  },
} as const satisfies {
  [key in SvgomfgMode]: {
    name: string
    description: string
    icon: ExoticComponent
  }
}

export const useSvgomfgMode = () => {
  const [comp, setComp] = useQueryState(
    'mode',
    parseAsStringLiteral(modes).withDefault('diff'),
  )

  return [comp, setComp] as const
}

export const ModeDropdown = () => {
  const [comp, setComp] = useSvgomfgMode()
  return (
    <Select onValueChange={(v) => void setComp(v as SvgomfgMode)}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a mode" aria-label={comp}>
          {modeOptions[comp].name}
        </SelectValue>
      </SelectTrigger>
      <SelectContent>
        {modes.map((mode) => {
          const Icon = modeOptions[mode].icon
          return (
            <SelectItem key={mode} value={mode}>
              <div className="flex items-center gap-2 align-middle">
                <Icon className="size-6" />
                <SelectItemText>
                  <strong>{modeOptions[mode].name}</strong>
                  <div className="text-sm text-gray-500">
                    {modeOptions[mode].description}
                  </div>
                </SelectItemText>
              </div>
            </SelectItem>
          )
        })}
      </SelectContent>
    </Select>
  )
}
