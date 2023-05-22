import { Select } from '@chakra-ui/react'

export const SelectRouteType = () => {
  // const city = useCity()
  const options: string[] = []
  return (
    <Select size="xs" placeholder="Select a route type" bg="#ddd">
      {Object.keys(options).map((_routeType) => {
        const routeType = Number(_routeType)
        return (
          <option value={routeType} key={routeType}>
            {routeType}
          </option>
        )
      })}
    </Select>
  )
}
