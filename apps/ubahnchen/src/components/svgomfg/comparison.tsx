import { parseAsInteger, parseAsStringLiteral, useQueryStates } from 'nuqs'

import { Slider } from '../ui/slider'

export const comparisonMethodEnum = [
  'mix-blend',
  'webkit-filter',
  'opacity',
  'animate',
] as const

export type ComparisonMethod = (typeof comparisonMethodEnum)[number]

const DEFAULT_COMPARISON_METHOD = 'mix-blend'

export const useComparisonMethod = () => {
  const [comp, setComp] = useQueryStates({
    comparison:
      parseAsStringLiteral(comparisonMethodEnum).withDefault('mix-blend'),
    opacity: parseAsInteger.withDefault(50),
  })

  const toggleComparisonMethod = () =>
    setComp((prev) => {
      const comp = prev.comparison || DEFAULT_COMPARISON_METHOD
      const currentIndex = comparisonMethodEnum.indexOf(comp)
      const nextIndex = (currentIndex + 1) % comparisonMethodEnum.length
      const v = comparisonMethodEnum[nextIndex]
      return {
        comparison: v ?? DEFAULT_COMPARISON_METHOD,
        opacity: null,
      }
    })

  return [comp, setComp, toggleComparisonMethod] as const
}

type ComparisonMethodProps =
  | { comparison: 'mix-blend' | 'webkit-filter' | 'animate' }
  | { comparison: 'opacity'; opacity: number }

export const TopBarComparisonInput = ({
  comparison,
}: {
  comparison: ComparisonMethodProps
}) => <>{comparison.comparison === 'opacity' && <TopBarOpacityInput />}</>

const TopBarOpacityInput = () => {
  const [comparison, setComp] = useComparisonMethod()
  return (
    <Slider
      min={0}
      max={100}
      value={[comparison.opacity]}
      onValueChange={([v]) =>
        v !== undefined && void setComp({ ...comparison, opacity: v })
      }
    />
  )
}
