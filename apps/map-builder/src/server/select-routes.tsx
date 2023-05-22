'use client'

import { Select } from '@chakra-ui/react'

import { gtfsTypes } from '../gtfs-data/gtfs-types'

export const SelectRouteType = ({
  options,
  value,
}: {
  value?: string
  options: number[]
}) => {
  return (
    <Select
      size="xs"
      placeholder="Select a route type"
      value={value}
      bg="#ddd"
      // onChange={(v) =>
      //   setRouteType(v.target.value ? Number(v.target.value) : undefined)
      // }
    >
      {Object.keys(options).map((_routeType) => {
        const routeType = Number(_routeType)
        return (
          <option value={routeType} key={routeType}>
            {routeType} - {gtfsTypes[routeType]?.name}
          </option>
        )
      })}
    </Select>
  )
}
