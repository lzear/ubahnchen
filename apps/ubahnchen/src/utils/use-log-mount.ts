import { useEffect } from 'react'

export const useLogMount = (name: string) => {
  useEffect(() => {
    console.log(
      `%cantoinelog%cuseLogMount`,
      `color:#fff;background:pink;`,
      `color:#000;background:#ced0a7;border-radius:5px;font-weight:bold;padding:3px;margin-left:-2px;`,
      name,
    )
  }, [name])
}
