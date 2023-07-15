import type { City } from '@ubahnchen/cities'
import { getCity } from '@ubahnchen/cities'

import 'server-only'

import { MapPicker } from '../../components/map-picker'
import { Opacity } from '../../server/opacity'
import { SelectRouteType } from '../../server/select-routes'
import { ToggleLocked } from '../../server/toggle-lock'
import { ToggleMergeStops } from '../../server/toggle-merge-stops'
import { TogglePointer } from '../../server/toggle-pointer'
import { ToggleStraightLines } from '../../server/toggle-straight-lines'

import {
  getUnassignedStopPairsFilePath,
  getUnassignedStopsFilePath,
} from './get-unassigned'
import type { UrlParameterValue } from './search-parameters'
import { parseUrlParameters } from './search-parameters'
import { server } from './server'
import { Ssvg } from './svg'
import { UnassignedStopPairsTable } from './unassigned-stop-pairs-table'
import { UnassignedStopsTable } from './unassigned-stops-table'

import 'leaflet/dist/leaflet.css'

const CityComp = async (props: {
  params: { city: City }
  searchParams: Partial<Record<UrlParameterValue, string>>
}) => {
  const { city } = props.params
  const cityData = getCity(city)
  const parameters = parseUrlParameters(props.searchParams)

  const serverProps = await server(city, parameters)

  const map =
    (parameters.Map &&
      parameters.Map in cityData.maps &&
      cityData.maps[parameters.Map as keyof typeof cityData.maps]) ||
    undefined

  console.log('🦺 antoinelog map2222', map)
  console.log('🦺 antoinelog parameters.Map', parameters.Map)

  // const svg = map && getSvg(map)

  // console.log('🦺 antoinelog svg', svg)

  const unassignedStops = parameters.Map
    ? await getUnassignedStopsFilePath(
        city,
        parameters.Map,
        serverProps.stopById,
        serverProps.stopPairs,
      )
    : undefined

  const unassignedStopPairs = parameters.Map
    ? await getUnassignedStopPairsFilePath(
        city,
        parameters.Map,
        serverProps.stopPairs,
      )
    : undefined

  const stopToClick = unassignedStops?.[0]
  return (
    <main className="h-screen">
      <UnassignedStopsTable
        unassignedStops={unassignedStops}
        stopToClick={stopToClick}
      />
      <UnassignedStopPairsTable
        stopById={serverProps.stopById}
        unassignedStopPairs={unassignedStopPairs}
      />
      {parameters.Map && city && (
        <Ssvg city={city} map={parameters.Map} stopToClick={stopToClick} />
      )}

      {/*<MapCity*/}
      {/*  stops={serverProps.stops}*/}
      {/*  stopPairs={serverProps.stopPairs}*/}
      {/*  stopById={serverProps.stopById}*/}
      {/*  shapes={serverProps.shapes}*/}
      {/*  mergeStops={parameters.MergeStops}*/}
      {/*/>*/}

      <div className="card absolute bottom-0 left-0 z-[1050] gap-2 bg-base-100 p-2 opacity-70 shadow-xl">
        {parameters.Map && city && (
          <>
            <TogglePointer />
            <ToggleLocked />
            <Opacity />
          </>
        )}
        <ToggleMergeStops checked={parameters.MergeStops} />
        <ToggleStraightLines checked={parameters.StraightLines} />
        <SelectRouteType
          options={serverProps.allRouteTypes}
          value={serverProps.selectedRouteTypes}
        />
        <MapPicker city={city} />
      </div>
    </main>
  )
}

export default CityComp
