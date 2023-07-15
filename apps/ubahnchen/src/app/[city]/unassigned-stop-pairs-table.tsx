import type { Stop } from '../../server/get-stops'

import type { StopPair } from './used-stops'

type Props = {
  unassignedStopPairs?: StopPair[]
  stopById: Record<string, Stop>
  pairToClick?: StopPair
}

export const UnassignedStopPairsTable = (props: Props) => {
  const { unassignedStopPairs, pairToClick, stopById } = props
  return (
    <div className="absolute right-0 z-40 max-h-[50%] max-w-[50%] overflow-scroll border-4 border-gray-400">
      <table className="table table-xs">
        <thead>
          <tr>
            <th>i</th>
            <th>idx</th>
            <th>route_name</th>
            <th>stop 1</th>
            <th>stop 2</th>
            <th>count</th>
          </tr>
        </thead>
        <tbody>
          {unassignedStopPairs?.map((pair, index) => (
            <tr
              key={pair.stop_pairs.idx}
              className={
                pairToClick?.stop_pairs.idx === pair.stop_pairs.idx
                  ? 'bg-amber-200'
                  : undefined
              }
            >
              <td>{index}</td>
              <td>{pair.stop_pairs.idx}</td>
              <th>{pair.routes.route_name}</th>
              <td>{stopById[pair.stop_pairs.stop_id_1].stop_name}</td>
              <td>{stopById[pair.stop_pairs.stop_id_2].stop_name}</td>
              <td>{pair.stop_pairs.count}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
