import { useQuery, type UseQueryOptions } from '@tanstack/react-query'
import { MapName } from '../../lib/enums'
import type { RadarDto } from '../../lib/radar'
import { noRefetch } from './no-refetch'

type RadarKey = readonly ['radar', MapName]

const fetchRadar = async (mapName: MapName): Promise<RadarDto> => {
  const resp = await fetch(`/api/radar?map=${mapName}`)
  return await resp.json()
}

const queryOption = (
  mapName: MapName,
): UseQueryOptions<RadarDto, unknown, RadarDto, RadarKey> => ({
  queryFn: ({ queryKey: [, mapName] }) => fetchRadar(mapName),
  queryKey: ['radar', mapName],
  refetchInterval: 25_000,
  ...noRefetch,
})

export const useRadar = (mapName: MapName) =>
  useQuery<RadarDto, unknown, RadarDto, RadarKey>(queryOption(mapName))
