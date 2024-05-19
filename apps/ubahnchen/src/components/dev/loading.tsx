import { twMerge } from 'tailwind-merge'

export const Loading = ({ className }: { className?: string }) => {
  return (
    <span
      className={twMerge('loading loading-spinner loading-md', className)}
    />
  )
}
