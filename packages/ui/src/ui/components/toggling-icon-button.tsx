import { IconButton, type IconButtonProps } from '@chakra-ui/react'
import React, { JSXElementConstructor, ReactElement, useState } from 'react'

export const TogglingIconButton: React.FC<
  {
    child1: ReactElement<unknown, string | JSXElementConstructor<unknown>>
    child2: ReactElement<unknown, string | JSXElementConstructor<unknown>>
    isChild1On: boolean
    toggle: () => void
  } & IconButtonProps
> = ({ child1, child2, isChild1On, toggle, ...props }) => {
  const [hovered, setHovered] = useState(false)
  return (
    <IconButton
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      size="sm"
      className="button-toggle"
      variant="ghost"
      icon={hovered === isChild1On ? child2 : child1}
      pointerEvents="auto"
      onClick={() => {
        toggle()
        setHovered(false)
      }}
      {...props}
    />
  )
}
