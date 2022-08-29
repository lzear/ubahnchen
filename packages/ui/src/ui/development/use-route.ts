import { useRouter } from 'next/router'

export const useRoute = () => {
  const router = useRouter()
  const activeRoute = router.query['route']
  const activeTrip = router.query['trip']

  const setRoute = (route_name: string) =>
    router.push({
      query: {
        ...router.query,
        route: route_name,
      },
    })
  const setTrip = (trip_id: string) =>
    router.push({
      query: {
        ...router.query,
        trip: trip_id,
      },
    })
  if (Array.isArray(activeRoute)) throw new Error('no array')
  return { activeRoute, activeTrip, setRoute, setTrip }
}
