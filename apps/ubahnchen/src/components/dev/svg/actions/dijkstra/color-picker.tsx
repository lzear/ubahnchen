'use client'

import React from 'react'
import { SketchPicker } from 'react-color'

import {
  UrlParamType,
  useUrlParams,
} from '@/components/dev/url-params/url-params'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { textLightOrDark } from '@ubahnchen/utils'

export const ColorPicker = () => {
  const { value, setValue } = useUrlParams<UrlParamType.String, string>({
    name: 'color',
    type: UrlParamType.String,
  })

  return (
    <Popover>
      <PopoverTrigger
        className="h-5 min-w-5 rounded-md border border-gray-900 px-1 font-mono text-xs"
        style={{
          backgroundColor: value ? `#${value}` : '#000000',
          color: textLightOrDark(value ? `#${value}` : '#000000'),
        }}
      >
        {value ? `#${value}` : null}
      </PopoverTrigger>
      <PopoverContent className="w-auto rounded-none border-0 bg-transparent p-0 shadow-none">
        <SketchPicker
          color={value ? `#${value}` : '#000000'}
          onChange={(color) => setValue(color.hex.replaceAll('#', ''))}
          onChangeComplete={(color) => setValue(color.hex.replaceAll('#', ''))}
        />
      </PopoverContent>
    </Popover>
  )
}
