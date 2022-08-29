/* eslint-disable unicorn/no-null */
import { Tag } from '@chakra-ui/react'
import { ResponsiveBar } from '@nivo/bar'
import _ from 'lodash'

import React from 'react'
import stopById from '../../generated/stops-by-id.json'
import { lineColors, lineTextColors } from '../../lib/line-colors'

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const NivoStations: React.FC<{
  data: ({
    stopId: string
  } & { [routeName: string]: number })[]
  routeNames: string[]
}> = ({ data, routeNames }) => {
  return (
    <div className="container">
      <ResponsiveBar
        axisLeft={{
          format: (df) => (stopById as Record<string, string>)[df],
        }}
        // height={400}
        axisBottom={{
          tickRotation: -80,
        }}
        layout="horizontal"
        enableLabel={false}
        tooltip={(datum) => {
          const stationId = datum.indexValue
          const stationName = (stopById as Record<string, string>)[stationId]
          if (!stationName) return <div>Error</div>
          const data0 = data.find((d) => d.stopId === stationId)
          // @ts-ignore
          const { stopId, ...values } = data0
          return (
            <div className="tooltip">
              <div>
                <Tag size="xs" fontWeight="bold" padding="0 4px" margin={0}>
                  {stationName}:<br />
                  {Math.round(_.sum(Object.values(values)) * 10) / 10} stops/day
                </Tag>
              </div>
              <div className="inline">
                {Object.keys(values).map((routeName) => {
                  const vv = values[routeName]
                  if (!vv) return null
                  return (
                    <Tag
                      key={routeName}
                      size="xs"
                      // background="#fffb"
                      paddingRight="4px"
                      margin="2px 4px"
                    >
                      <Tag
                        size="xs"
                        color={
                          (lineTextColors as Record<string, string>)[
                            routeName
                          ] || '#fff'
                        }
                        background={
                          (lineColors as Record<string, string>)[routeName] ||
                          '#888'
                        }
                        margin="0 4px 0 0"
                        padding="0 4px"
                      >
                        {routeName}
                      </Tag>
                      {Math.round(vv * 10) / 10}
                    </Tag>
                  )
                })}
              </div>
            </div>
          )
        }}
        data={data}
        indexBy="stopId"
        colors={(r) => (lineColors as Record<string, string>)[r.id] || '#000'}
        keys={routeNames}
        // indexBy="time"
        role="application"
        ariaLabel="Nivo bar chart demo"
        margin={{ left: 160, bottom: 40, top: -30 }}
        // barAriaLabel={function (element) {
        //   return element.id + ': ' + element.formattedValue + ' in country: ' + element.indexValue
        // }}
      />
      <style jsx>{`
        .tooltip {
          max-width: 250px;
          //background: #8888;
          //gap: 3px;
        }
        .inline {
          display: inline-flex;
          flex-wrap: wrap;
          justify-content: center;
        }
        .tag-container {
          padding: 1px 3px;
          //background: #fff9;
        }
        .container {
          display: flex;
          height: ${data.length * 15}px;
          flex: 1 1 auto;
          margin-left: -50px;
        }
      `}</style>
    </div>
  )
}

export default NivoStations
