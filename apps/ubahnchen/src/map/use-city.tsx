import { useParams } from 'next/navigation'

export const useCity = () => {
  const parameters = useParams()
  console.log('🦺 antoinelog params', parameters)
}
