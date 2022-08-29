export const getNameChildren = (
  item: paper.Item,
  names: string[],
  searchMode = 1,
): paper.Item[] => {
  if (
    item.className === 'Group' &&
    item.name &&
    names.some((n) => item.name.split(' ')[0]!.startsWith(n))
  )
    return (
      item.children?.flatMap((index) => getNameChildren(index, names, 2)) || []
    )

  if (searchMode === 2) return [item]

  return item.children?.flatMap((index) => getNameChildren(index, names)) || []
}

export const getStations = (item: paper.Item): paper.Item[] =>
  getNameChildren(item, ['stations'])

export const getLines = (item: paper.Item): paper.Path[] =>
  getNameChildren(item, ['U', 'S']) as paper.Path[]

export const getULines = (item: paper.Item): paper.Path[] =>
  getNameChildren(item, ['U']) as paper.Path[]
