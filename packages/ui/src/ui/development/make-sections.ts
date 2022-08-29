import { Junction, Section } from '../sections'
import { isBetween, looseClamp } from '../../lib/lib/is-between'
import type { AbsStop, SectionWithAbs } from '../../lib/intineraries'

const findJunction = (
  from: { path: string; stop_id: string },
  to: { path: string; stop_id: string },
  junctions: Junction[],
) => {
  const junction = junctions.find(
    (junction) =>
      junction.some(
        (junctionPoint) =>
          junctionPoint.pathName === from.path &&
          junctionPoint.stop_id === from.stop_id,
      ) &&
      junction.some(
        (junctionPoint) =>
          junctionPoint.pathName === to.path &&
          junctionPoint.stop_id === to.stop_id,
      ),
  )
  if (!junction) return

  const junctionFrom = junction.find(
    (junctionPoint) =>
      junctionPoint.pathName === from.path &&
      junctionPoint.stop_id === from.stop_id,
  )
  const junctionTo = junction.find(
    (junctionPoint) =>
      junctionPoint.pathName === to.path &&
      junctionPoint.stop_id === to.stop_id,
  )

  if (!junctionFrom || !junctionTo) return

  return { junctionFrom, junctionTo }
}

const makeSectionOffsets = (
  sections: Section[],
  junctions: Junction[],
): SectionWithAbs[] => {
  const s: SectionWithAbs[] = []
  for (const [index, section] of sections.entries()) {
    const sectionBefore = s[index - 1]
    const sectionAfter = sections[index + 1]
    const absStart = sectionBefore?.absEnd ?? 0
    if (absStart === undefined) throw new Error('FOJB')
    const stop0 = section.stops[0]
    const stopN = section.stops.at(-1)
    if (!stop0 || !stopN) throw new Error('stop0')

    let end: number
    if (index === sections.length - 1) {
      end = stopN.offset
    } else {
      if (!sectionAfter) throw new Error('sectionAfter')
      const nextStop = sectionAfter.stops[0]
      if (!nextStop) throw new Error('nextStop')
      const junctionAfter = findJunction(
        { stop_id: stopN.stop_id, path: section.path },
        { stop_id: nextStop.stop_id, path: sectionAfter.path },
        junctions,
      )
      if (!junctionAfter) {
        throw new Error('junctionAfter')
      }
      end = junctionAfter.junctionFrom.offset
    }
    let start: number
    if (index === 0) {
      start = stop0.offset
    } else {
      if (!sectionBefore) throw new Error('sectionBefore')
      const previousStop = sectionBefore.stops.at(-1)
      if (!previousStop) throw new Error('prevStop')
      const junctionBefore = findJunction(
        { stop_id: previousStop.stop_id, path: sectionBefore.path },
        { stop_id: stop0.stop_id, path: section.path },
        junctions,
      )
      if (!junctionBefore) {
        throw new Error('junctionBefore')
      }
      start = junctionBefore.junctionTo.offset
    }
    const absEnd = absStart + Math.abs(end - start)

    s.push({
      ...section,
      absStart,
      absEnd,
      start,
      end,
      stops: section.stops.map((stop) => {
        if (!isBetween(stop.offset, [start, end]))
          if (isBetween(stop.offset, [start, end], 0.2))
            stop.offset = looseClamp(stop.offset, [start, end])
          else throw new Error('isBetween234, start, end, stop.offset')
        return {
          ...stop,
          absOffset: absStart + Math.abs(stop.offset - start),
        }
      }),
    })
  }
  return s
}

const makeSectionStops = (
  stations: { station: paper.Item; path: paper.Path }[],
) => {
  const sections: Section[] = []
  for (const s of stations) {
    const stop = {
      stop_id: s.station.name,
      offset: s.path.getNearestLocation(s.station.position).offset,
    }
    if (sections.length === 0) {
      sections.push({
        path: s.path.name,
        stops: [stop],
      })
      continue
    }

    const lastSection = sections.at(-1)
    const lastStop = lastSection?.stops.at(-1)
    if (!lastSection || !lastStop) throw new Error('alksdfh')

    const specialNewSection =
      ['S41', 'S42'].includes(lastSection.path) &&
      Math.abs(lastStop.offset - stop.offset) > 1000

    if (lastSection.path === s.path.name && !specialNewSection) {
      lastSection.stops.push(stop)
    } else {
      const previousStop = lastSection.stops.at(-1)
      if (!previousStop) throw new Error('alksdfh')

      sections.push({
        path: s.path.name,
        stops: [stop],
      })
    }
  }
  return sections
}

export const makeSections = ({
  stations,
  junctions,
}: {
  route_name: string
  stations: { station: paper.Item; path: paper.Path }[]
  junctions: Junction[]
}): SectionWithAbs[] => {
  const sectionStops = makeSectionStops(stations)
  return verifySections(makeSectionOffsets(sectionStops, junctions))
}

const verifySections = (sections: SectionWithAbs[]) => {
  for (const [index, section] of (sections as SectionWithAbs[]).entries()) {
    const previous = sections[index - 1]
    if (previous && previous.absEnd !== section.absStart) {
      throw new Error('prev.absEnd !== section.absStart')
    }

    for (const [stopIndex, stop] of (section.stops as AbsStop[]).entries()) {
      const previousStop = section.stops[stopIndex - 1]

      if (previousStop && previousStop.absOffset >= stop.absOffset) {
        throw new Error(
          'previousStop && previousStop.absOffset <= stop.absOffset',
        )
      }
      if (
        stop.absOffset < section.absStart ||
        section.absEnd < stop.absOffset
      ) {
        throw new Error(
          'stop.absOffset < section.absStart || stop.absOffset > section.absEnd',
        )
      }
    }
  }
  return sections
}
