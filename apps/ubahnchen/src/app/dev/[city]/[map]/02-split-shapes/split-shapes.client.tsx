'use client'

import type { MouseEvent } from 'react'
import { useEffect, useMemo, useRef, useState, useTransition } from 'react'
import _ from 'lodash'

import { Pinch } from '../../../../_components/pinch'
import { useLoadSvg } from '../../../svg/load'
import type { CityMapParam } from '../params'

import { saveShapes } from './split-shapes.action'

const SplitShapesClient = (props: {
  cityMap: CityMapParam
  shapeIds: string[]
}) => {
  const [isRendered, setIsRendered] = useState(false)
  const { city, map } = props.cityMap

  // const ImportedSvg = svgs[city]?.[map]?.splitShapes
  // if (!ImportedSvg) throw new Error(`No svg for ${city} ${map}`)
  const [shapeIds, setShapeIds] = useState(props.shapeIds)
  const svgContainerRef = useRef<HTMLDivElement | null>(null)
  const [isPending, startTransition] = useTransition()

  const svgSource = svgContainerRef.current?.getElementsByTagName('svg')[0]

  const selectedShapes = useMemo(
    () =>
      isRendered
        ? [
            ...document.querySelectorAll<HTMLElement>('#source-ubhchn svg *'),
          ].filter((el) => {
            const selected =
              el.dataset.ubhchn && shapeIds.includes(el.dataset.ubhchn)
            if (selected) el.setAttribute('opacity', '0.1')
            else el.removeAttribute('opacity')
            return selected
          })
        : [],
    [shapeIds, isRendered],
  )
  const shapes = useMemo(() => {
    const clones = selectedShapes.map((shape) => {
      const clone = shape.cloneNode(true) as HTMLElement
      clone.removeAttribute('opacity')
      return clone
    })
    const xmlSerializer = new XMLSerializer()
    const shapes = clones.map((clone) => xmlSerializer.serializeToString(clone))
    return isRendered ? shapes : []
  }, [selectedShapes, isRendered])
  const refXY = useRef<null | [number, number]>(null)

  const s = useLoadSvg(`/${city}/${map}/svg/10-annoted.svg`, svgContainerRef)

  useEffect(() => {
    if (s.data) setIsRendered(true)
  }, [s])
  return (
    <div>
      <Pinch>
        <div
          id="source-ubhchn"
          ref={svgContainerRef}
          className="relative"
          onMouseOver={() => setIsRendered(true)}
          onMouseDown={(e: MouseEvent<SVGSVGElement>) => {
            console.log('🦺 antoinelog e', e)

            refXY.current = [e.pageX, e.pageY]
          }}
          onMouseUp={(e: MouseEvent<SVGSVGElement>) => {
            console.log('🦺 antoinelog e', e)

            if (!refXY.current) return

            const [x1, y1] = refXY.current
            const [x2, y2] = [e.pageX, e.pageY]
            const distance = Math.hypot(x2 - x1, y2 - y1)

            refXY.current = null
            if (distance > 2) {
              return
            }

            const target = e.target as SVGSVGElement
            console.log('🦺 antoinelog target', target)

            const id = target.dataset.ubhchn

            if (id)
              setShapeIds((ids) =>
                ids.includes(id) ? _.without(ids, id) : [...ids, id],
              )
          }}
        >
          <div
          // onLoad={() => {
          //   setIsRendered(true)
          // }}
          >
            loading...
          </div>
        </div>
        {isRendered && svgSource && (
          <svg
            id="target-ubhchn"
            height={svgSource?.getAttribute('height') ?? undefined}
            width={svgSource?.getAttribute('width') ?? undefined}
            viewBox={svgSource?.getAttribute('viewBox') ?? undefined}
          >
            <g
              dangerouslySetInnerHTML={{ __html: shapes.join('') }}
              fill="transparent"
            />
            {/*{shapes}*/}
          </svg>
        )}
        <div className="flex-1">
          {shapeIds.map((id) => (
            <button
              key={id}
              className="btn btn-xs"
              onMouseEnter={() => {
                const s = [
                  ...document.querySelectorAll<HTMLElement>('#target-ubhchn *'),
                ].find((el) => el.dataset.ubhchn === id)
                if (s) s.style.outline = '3px solid red'
              }}
              onMouseLeave={() => {
                const s = [
                  ...document.querySelectorAll<HTMLElement>('#target-ubhchn *'),
                ].find((el) => el.dataset.ubhchn === id)
                if (s) s.style.removeProperty('outline')
              }}
              onClick={() => setShapeIds((ids) => ids.filter((i) => i !== id))}
            >
              {id}
            </button>
          ))}
        </div>

        <div>
          <button
            className="btn"
            onClick={() =>
              startTransition(() => saveShapes({ city, map, shapeIds }))
            }
          >
            {isPending && <span className="loading loading-spinner" />}
            Save
          </button>
        </div>
      </Pinch>
    </div>
  )
}

export default SplitShapesClient
