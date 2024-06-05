'use client'

import { LoaderCircle, Pause, Play } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Slider } from '@/components/ui/slider'
import { useUbahnStore } from '@/store'
import { INITIAL_SPEED } from '@/store/clock'

export const Speed = () => {
  const speed = useUbahnStore(({ speed }) => speed)
  const paused = useUbahnStore(({ paused }) => paused)
  const loading = useUbahnStore(({ loading }) => loading)
  const setSpeed = useUbahnStore((s) => s.setSpeed)
  const pause = useUbahnStore((s) => s.pause)
  const unpause = useUbahnStore((s) => s.unpause)

  return (
    <div className="tabular-nums">
      <div className="flex  items-center gap-2">
        {loading ? (
          <LoaderCircle size={16} className="animate-spin" />
        ) : (
          <Button
            className="size-6 p-0.5"
            variant="toggle"
            onClick={() => {
              if (speed === 0) setSpeed(INITIAL_SPEED)
              else if (paused) unpause()
              else pause()
            }}
          >
            {paused || speed === 0 ? <Pause size={16} /> : <Play size={16} />}
          </Button>
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
