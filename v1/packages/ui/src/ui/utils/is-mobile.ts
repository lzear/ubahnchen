import { useMediaQuery } from '@chakra-ui/react'

export const useIsMobile = () => {
  const [isLessThan600px] = useMediaQuery(['(max-width: 600px)'])
  return isLessThan600px
}
