/* eslint-disable unicorn/no-null */
import { Tag } from '@chakra-ui/react'
import { ResponsiveStream } from '@nivo/stream'
import _ from 'lodash'

import React from 'react'
import { useTranslation } from 'next-i18next'
import { lineColors, lineTextColors } from '../../lib/line-colors'

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const NivoBarMinutes: React.FC<{
  data: ({
    time: string
    minute: number
  } & { [routeName: string]: number })[]
  routeNames: string[]
}> = ({ data, routeNames }) => {
  const { t } = useTranslation('stats')
  return (
    <div className="container">
      <ResponsiveStream
        offsetType="none"
        // height={400}
        // width={300}
        curve="step"
        data={data}
        colors={(r) => (lineColors as Record<string, string>)[r.id] || '#000'}
        keys={routeNames}
        // indexBy="time"
        role="application"
        ariaLabel="Nivo bar chart demo"
        enableStackTooltip
        stackTooltip={(tooltipProps) => {
          const stack = [
            {
              layerId: 'total',
              layerLabel: t('total'),
              color: '#333',
              value: _.sum(tooltipProps.slice.stack.map((s) => s.value)),
            },
            ...tooltipProps.slice.stack,
          ]
          return (
            <div className="tooltip">
              <span className="tag-container">
                <Tag size="xs" fontWeight="bold" padding="0 4px" margin={0}>
                  {data[tooltipProps.slice.index]?.time}
                </Tag>
              </span>
              {stack.map((s) => (
                <span key={s.layerId} className="tag-container">
                  <Tag size="xs" paddingRight="4px" margin={0}>
                    <Tag
                      size="xs"
                      color={
                        (lineTextColors as Record<string, string>)[s.layerId] ||
                        '#fff'
                      }
                      background={s.color}
                      margin="0 4px 0 0"
                      padding="0 4px"
                    >
                      {s.layerLabel}
                    </Tag>{' '}
                    {Math.round(s.value * 10) / 10}
                  </Tag>
                </span>
              ))}
            </div>
          )
        }}
        margin={{ bottom: 50 }}
        axisBottom={{
          format: (r) => {
            if (r % 5) return ''
            return data[r]?.time || ''
          },
          // orient: 'bottom',
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: '',
          legendOffset: 36,
        }}
        // barAriaLabel={function (element) {
        //   return element.id + ': ' + element.formattedValue + ' in country: ' + element.indexValue
        // }}
      />
      <style jsx>{`
        .tooltip {
          display: inline-flex;
          flex-wrap: wrap;
          max-width: 250px;
          //background: #8888;
          //gap: 3px;
          justify-content: center;
        }
        .tag-container {
          padding: 1px 3px;
          //background: #fff9;
        }
        .container {
          display: flex;
          height: 400px;
          flex: 1 1 auto;
        }
      `}</style>
    </div>
  )
}

export default NivoBarMinutes
