export const SelectRouteType = () => {
  // const city = useCity()
  const options: string[] = []
  return (
    <div className="form-control w-full max-w-xs">
      <select
        placeholder="Select a route type ??"
        className="select select-bordered w-full max-w-xs"
      >
        {Object.keys(options).map((_routeType) => {
          const routeType = Number(_routeType)
          return (
            <option value={routeType} key={routeType}>
              {routeType}
            </option>
          )
        })}
      </select>
    </div>
  )
}
