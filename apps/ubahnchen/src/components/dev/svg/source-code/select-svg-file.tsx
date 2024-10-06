'use client'

import {
  UrlParamType,
  useUrlParams,
} from '@/components/dev/url-params/url-params'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

type Props = {
  files: { rel: string; abs: string }[]
}

export const SelectSvgFile = ({ files }: Props) => {
  const { value, setValue } = useUrlParams({
    name: 'file',
    type: UrlParamType.String,
  })

  return (
    <div>
      <Select
        onValueChange={(filename) => setValue(filename)}
        value={value ?? undefined}
      >
        <SelectTrigger className="h-6 gap-2 text-xs">
          <span className="text-muted-foreground">Source: </span>
          <SelectValue placeholder="Select a source" />
        </SelectTrigger>
        <SelectContent>
          {files.map((file) => (
            <SelectItem key={file.abs} value={file.rel}>
              {file.rel}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}
