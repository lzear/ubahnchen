import paper from 'paper'

export const reverse = (pathData: string) => {
  paper.setup(new paper.Size(10, 5))
  const path = new paper.Path(pathData)
  path.reverse()
  return path.pathData
}
