/* eslint-disable unicorn/no-null */

import pos from '../berlin/u/stops-positions.json'

const svgns = 'http://www.w3.org/2000/svg'

const insertCircles = () => {
  const svg = document.querySelector('svg')
  const circles = []
  for (const p of pos) {
    const c = document.createElementNS(svgns, 'circle')
    c.setAttributeNS(null, 'cx', p.point[0])
    c.setAttributeNS(null, 'cy', p.point[1])
    c.setAttributeNS(null, 'r', 3)
    c.setAttributeNS(null, 'stroke-width', 3)
    c.setAttributeNS(
      null,
      'style',
      'fill: none; stroke: blue; stroke-width: 2px;',
    )
    svg.append(c)
    circles.push(c)
  }
  return circles
}

function eliminateDuplicates(array) {
  let index,
    length = array.length,
    out = [],
    object = {}

  for (index = 0; index < length; index++) {
    object[array[index]] = 0
  }
  for (index in object) {
    out.push(index)
  }
  return out
}

const findDuplicates = (array) => {
  const sorted_array = [...array].sort() // You can define the comparing function here.
  // JS by default uses a crappy string compare.
  // (we use slice to clone the array so the
  // original array won't be modified)
  const results = []
  for (let index = 0; index < sorted_array.length - 1; index++) {
    if (sorted_array[index + 1] == sorted_array[index]) {
      results.push(sorted_array[index])
    }
  }
  return results
}

const assignStopIds = () => {
  const svg = document.querySelector('svg')
  const stationsGroup = document.querySelector('#stations')

  if (!svg || !stationsGroup) throw new Error('#stations not found')

  const circles = insertCircles()
  const stations = [
    ...stationsGroup.querySelectorAll('path'),
    ...stationsGroup.querySelectorAll('rect'),
  ]

  const sss = stations.map((s) => {
    const bbox = s.getBoundingClientRect()
    const center = [bbox.x + bbox.width / 2, bbox.y + bbox.height / 2]
    const ccc = [...circles]
      .map((circle, index) => {
        const bbox = circle.getBoundingClientRect()
        const centerCircle = [bbox.x + bbox.width / 2, bbox.y + bbox.height / 2]

        return {
          ...pos[index],
          distance: Math.sqrt(
            (center[0] - centerCircle[0]) ** 2 +
              (center[1] - centerCircle[1]) ** 2,
          ),
          centerCircle,
          bbox,
        }
      })
      .sort((a, b) => a.distance - b.distance)
    const [closest] = ccc

    // s.dataset.stopid = closest.stop_id
    // s.dataset.stopname = closest.stop_name
    s.id = closest.stop_id

    return closest.stop_id
  })

  const unduplicated = eliminateDuplicates(sss)
  const duplicates = findDuplicates(sss)

  const unused = pos.filter((p) => !unduplicated.includes(p.stop_id))

  console.log('%c pos', 'background: #222; color: #bada55', pos)

  console.log('%c station IDs', 'background: #222; color: #bada55', sss)
  console.log('%c duplicates', 'background: #222; color: #bada55', duplicates)

  console.log(
    '%c unduplicated',
    'background: #222; color: #bada55',
    unduplicated,
  )
  console.log(
    '%c unused',
    'background: #222; color: #bada55',
    unused,
  )
}

assignStopIds()
