import { Button, type IconButtonProps } from '@chakra-ui/react'
import React, {
  JSXElementConstructor,
  ReactElement,
  useCallback,
  useEffect,
  useRef,
} from 'react'

type Props = {
  child1: ReactElement<unknown, string | JSXElementConstructor<unknown>>
  child2: ReactElement<unknown, string | JSXElementConstructor<unknown>>
  isChild1On: boolean
  innerRef: React.LegacyRef<HTMLButtonElement>
} & IconButtonProps
const TogglingButton: React.FC<Props> = ({
  child1,
  child2,
  isChild1On,
  innerRef,
  onClick,
  onMouseEnter,
  onMouseLeave,
  ...props
}) => {
  const child1span = useRef<HTMLSpanElement>(null)
  const child2span = useRef<HTMLSpanElement>(null)

  const onHover = useCallback(
    (isHovered: boolean) => {
      const [spanToShow, spanToHide] =
        isChild1On !== isHovered
          ? [child1span.current, child2span.current]
          : [child2span.current, child1span.current]

      if (spanToShow) {
        spanToShow.style.visibility = 'visible'
      }
      if (spanToHide) {
        spanToHide.style.visibility = 'hidden'
      }
    },
    [isChild1On],
  )

  useEffect(() => onHover(false), [isChild1On, onHover])

  return (
    <>
      <Button
        ref={innerRef}
        onMouseEnter={(event) => {
          onMouseEnter?.(event)
          onHover(true)
        }}
        onMouseLeave={(event) => {
          onMouseLeave?.(event)
          onHover(false)
        }}
        className="button-toggle"
        variant="ghost"
        // icon={hovered !== isChild1On ? child1 : child2}
        pointerEvents="auto"
        onClick={(event) => {
          onClick?.(event)
        }}
        {...props}
      >
        <span className="child1" ref={child1span}>
          {child1}
        </span>
        <span className="child2" ref={child2span}>
          {child2}
        </span>
      </Button>

      <style jsx>{`
        .child1,
        .child2 {
          position: absolute;
        }
        .child1 {
          visibility: ${isChild1On ? 'visible' : 'hidden'};
        }
        .child2 {
          visibility: ${!isChild1On ? 'visible' : 'hidden'};
        }
      `}</style>
    </>
  )
}

export const TogglingButtonWithReference = React.forwardRef(
  (
    p: Omit<Props, 'innerRef'>,
    reference: React.LegacyRef<HTMLButtonElement>,
  ) => {
    return <TogglingButton {...p} innerRef={reference} />
  },
)
