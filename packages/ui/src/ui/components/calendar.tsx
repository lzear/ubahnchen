import React from 'react'
import { addDays, isFirstDayOfMonth, isLastDayOfMonth, parse } from 'date-fns'
import { formatInTimeZone, toDate } from 'date-fns-tz'
import shallow from 'zustand/shallow'
import { useColorMode } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useTripsCount } from '../query/use-trips-count'
import { useStore } from '../store/store'
import { computeVirtualTime } from '../utils/time-conversion'
import { useSetLiveUrl } from '../utils/url-parameters'
import { formatTzInLocale } from '../../lib/date-format'
import { gtfsToIso } from '../../lib/lib/utils'

const CELL_PX = 16
const GAP_PX = 7
const MARGIN_TOP = 20
const MARGIN_LEFT = 12

const Rect = ({
  active,
  monthDayIndex,
  ...props
}: {
  active: boolean
  monthDayIndex: number
  x: number
  y: number
} & React.SVGProps<SVGRectElement>) => {
  return (
    <>
      <rect {...props} />
      <text x={props.x + CELL_PX / 2} y={props.y + CELL_PX / 2}>
        {monthDayIndex}
      </text>
      <style jsx>{`
        rect {
          fill: ${active ? '#589cda' : '#E0B31C'};
          cursor: pointer;
          height: ${CELL_PX}px;
          width: ${CELL_PX}px;
        }
        rect:focus {
          //fill: #589cda;
          outline: 2px solid #589cda;
        }

        text {
          text-anchor: middle;
          pointer-events: none;
          font-size: 10px;
          font-weight: bold;
          dominant-baseline: central;
        }
      `}</style>
    </>
  )
}

const monthBorders = (startDate: Date, dayCount: number): JSX.Element[] => {
  const startDay = (startDate.getDay() + 6) % 7
  const borders: JSX.Element[] = []
  const firstMonth = formatTzInLocale(startDate, "MMM ''yy")
  const monthX: { month: string; start: number; end: number }[] = [
    { month: firstMonth, start: 0, end: 0 },
  ]
  for (let index = 0; index < dayCount; index++) {
    const thisDay = addDays(startDate, index)

    if (isLastDayOfMonth(thisDay)) {
      const currentMonthX = monthX.at(-1)
      if (currentMonthX) {
        const weekIndex = Math.floor((startDay + index) / 7)
        currentMonthX.end = (CELL_PX + GAP_PX) * weekIndex + CELL_PX
      }
    }
    if (isFirstDayOfMonth(thisDay)) {
      const weekIndex = Math.floor((startDay + index) / 7)
      const weekDayIndex = (startDay + index) % 7
      const x = (CELL_PX + GAP_PX) * weekIndex
      const y = (CELL_PX + GAP_PX) * weekDayIndex

      const points: [number, number][] = []

      points.push(
        [x - GAP_PX / 2, (CELL_PX + GAP_PX) * 7],
        [x - GAP_PX / 2, y - GAP_PX / 2],
      )
      if (weekDayIndex > 0) {
        points.push(
          [x + CELL_PX + GAP_PX / 2, y - GAP_PX / 2],
          [x + CELL_PX + GAP_PX / 2, 0],
        )
        monthX.push({
          month: formatTzInLocale(thisDay, "MMM ''yy"),
          start: x + CELL_PX + GAP_PX,
          end: x + CELL_PX + GAP_PX + CELL_PX,
        })
      } else {
        monthX.push({
          month: formatTzInLocale(thisDay, "MMM ''yy"),
          start: x,
          end: x + CELL_PX,
        })
      }
      borders.push(
        <polyline
          key={index}
          fill="none"
          stroke="#888"
          strokeWidth={2}
          points={points.map((p) => p.join(',')).join(' ')}
        />,
      )
    }
  }
  const currentMonthX = monthX.at(-1)
  if (currentMonthX) {
    const weekIndex = Math.floor((startDay + dayCount) / 7)
    currentMonthX.end = (CELL_PX + GAP_PX) * weekIndex + CELL_PX
  }

  for (const monthxx of monthX) {
    borders.push(
      <text
        key={monthxx.month}
        y={-5}
        x={(monthxx.start + monthxx.end) / 2}
        width={monthxx.end}
        fontSize={10}
        textAnchor="middle"
      >
        {monthxx.month}
      </text>,
    )
  }

  return borders
}

export const Calendar: React.FC = () => {
  const { colorMode } = useColorMode()
  const { data } = useTripsCount()
  const { replace } = useRouter()
  const { setAt, setVirtualTimeZero, speed, virtualTimeZero, day } = useStore(
    ({ setVirtualTimeZero, setAt, speed, virtualTimeZero, day }) => ({
      setVirtualTimeZero,
      setAt,
      speed,
      virtualTimeZero,
      day,
    }),
    shallow,
  )
  const queryNoLiveUrl = useSetLiveUrl(false)
  if (!data) return <></>
  const start = data[0]
  if (!start) throw new Error('start')

  const startDate = parse(start.date, 'yyyyMMdd', new Date())
  const startDay = (startDate.getDay() + 6) % 7
  const nbWeeks = Math.floor((startDay + data.length - 1) / 7) + 1
  const maxCount = Math.max(...data.map((c) => c.trip_count))
  const minCount = Math.min(...data.map((c) => c.trip_count))
  const WIDTH = nbWeeks * (CELL_PX + GAP_PX) - GAP_PX
  const HEIGHT = 7 * (CELL_PX + GAP_PX) - GAP_PX
  const todayGtfs = day.replaceAll('-', '')

  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div className="container">
      <div className="week-days">
        <div>M</div>
        <div>T</div>
        <div>W</div>
        <div>T</div>
        <div>F</div>
        <div>S</div>
        <div>S</div>
      </div>
      <div
        className="svg-container"
        onWheel={(event) => event.stopPropagation()}
      >
        <svg
          width={WIDTH + MARGIN_LEFT}
          height={HEIGHT + MARGIN_TOP}
          viewBox={`-${MARGIN_LEFT} -${MARGIN_TOP} ${WIDTH + MARGIN_LEFT} ${
            HEIGHT + MARGIN_TOP
          }`}
        >
          {monthBorders(startDate, data.length)}
          {data.map((tripCount, index) => {
            const weekIndex = Math.floor((startDay + index) / 7)
            const monthDayIndex = addDays(startDate, index).getDate()
            const onClick = () => {
              const virtualTime = computeVirtualTime({
                virtualTimeZero,
                setAt,
                speed,
              })
              const time = formatInTimeZone(
                virtualTime,
                'Europe/Berlin',
                'HH:mm:ss',
              )
              const newDateB = toDate(`${gtfsToIso(tripCount.date)}T${time}`, {
                timeZone: 'Europe/Berlin',
              })

              setVirtualTimeZero(+newDateB)
              return replace({ query: queryNoLiveUrl }, undefined, {
                shallow: true,
              })
            }
            return (
              <Rect
                tabIndex={0}
                onKeyDown={(event) => {
                  if (event.key === 'Enter') void onClick()
                }}
                monthDayIndex={monthDayIndex}
                active={todayGtfs === tripCount.date}
                x={(CELL_PX + GAP_PX) * weekIndex}
                y={(CELL_PX + GAP_PX) * ((startDay + index) % 7)}
                key={tripCount.date}
                fillOpacity={
                  0.25 +
                  (0.7 * (tripCount.trip_count - minCount)) /
                    (maxCount - minCount)
                }
                onClick={onClick}
              />
            )
          })}
        </svg>
      </div>

      <style jsx>{`
        .container {
          //display: flex;
          height: ${HEIGHT + MARGIN_TOP}px;
        }

        .svg-container {
          pointer-events: auto;
          overflow: auto;
          height: ${HEIGHT + MARGIN_TOP}px;
          //flex: 1 1 auto;
        }

        .svg-container::-webkit-scrollbar {
          display: none;
        }

        .week-days {
          position: absolute;
          margin-top: ${MARGIN_TOP}px;
          //flex: 0 0 auto;
          font-size: 8px;
          vertical-align: middle;
          line-height: ${CELL_PX}px;
          z-index: 2;
          pointer-events: none;
        }

        .week-days div {
          height: ${CELL_PX}px;
          margin-bottom: ${GAP_PX}px;
          font-weight: bold;
        }

        svg :global(text) {
          fill: ${colorMode === 'light' ? '#333' : '#ddd'};
        }
      `}</style>
    </div>
  )
}
