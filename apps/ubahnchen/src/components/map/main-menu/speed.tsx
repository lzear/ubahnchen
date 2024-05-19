'use client'

import { LoaderCircle, Pause, Play } from 'lucide-react'

import { Slider } from '@/components/ui/slider'
import { useUbahnStore } from '@/store'

export const Speed = () => {
  const speed = useUbahnStore(({ speed }) => speed)
  const paused = useUbahnStore(({ paused }) => paused)
  const setSpeed = useUbahnStore((s) => s.setSpeed)
  return (
    <div className="tabular-nums">
      <div className="flex  items-center gap-2">
        {paused ? (
          <LoaderCircle size={16} className="animate-spin" />
        ) : speed === 0 ? (
          <Pause size={16} />
        ) : (
          <Play size={16} />
        )}
        <span>Speed: x{speed}</span>
      </div>
      <Slider
        min={0}
        max={2000}
        value={[speed]}
        onValueChange={([v]) => v !== undefined && setSpeed(v)}
      />
    </div>
  )
}
