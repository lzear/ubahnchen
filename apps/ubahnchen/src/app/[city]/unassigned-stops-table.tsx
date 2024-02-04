import type { Stop } from '@ubahnchen/cities'

type Props = {
  unassignedStops?: Stop[]
  stopToClick?: Stop
}

export const UnassignedStopsTable = (props: Props) => {
  const { unassignedStops, stopToClick } = props
  return (
    <div className="absolute left-0 z-40 max-h-[20%] max-w-[50%] overflow-scroll border-4 border-gray-400">
      <table className="table table-xs">
        <thead>
          <tr>
            <th>i</th>
            <th>ID</th>
            <th>Name</th>
            <th>Parent</th>
          </tr>
        </thead>
        <tbody>
          {unassignedStops?.map((stop, index) => (
            <tr
              key={stop.stop_id}
              className={
                stopToClick?.stop_id === stop.stop_id
                  ? 'bg-amber-200'
                  : undefined
              }
            >
              <th>{index}</th>
              <th>{stop.stop_id}</th>
              <td>{stop.stop_name}</td>
              <td>{stop.parent_station}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
