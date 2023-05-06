import React from 'react'

export const Spacer: React.FC<{
  x?: number // multiplier of theme.spacing
  y?: number
}> = ({ x, y }) => {
  return <div data-testid="Spacer" style={{ height: y, width: x }} />
}
