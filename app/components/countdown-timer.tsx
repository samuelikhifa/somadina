'use client'

import { useState, useEffect } from 'react'
import { Clock } from 'lucide-react'

export default function CountdownTimer() {
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Set a deadline: midnight tonight
    const now = new Date()
    const midnight = new Date(now)
    midnight.setHours(23, 59, 59, 0)
    const diff = midnight.getTime() - now.getTime()
    
    if (diff > 0) {
      setHours(Math.floor(diff / (1000 * 60 * 60)))
      setMinutes(Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)))
      setSeconds(Math.floor((diff % (1000 * 60)) / 1000))
    }

    const timer = setInterval(() => {
      setSeconds((prev: number) => {
        if (prev <= 0) {
          setMinutes((m: number) => {
            if (m <= 0) {
              setHours((h: number) => Math.max(0, h - 1))
              return 59
            }
            return m - 1
          })
          return 59
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  if (!mounted) {
    return (
      <div className="flex items-center justify-center gap-2 text-[#b5534e] font-bold">
        <Clock className="w-5 h-5" />
        <span>Limited time offer!</span>
      </div>
    )
  }

  return (
    <div className="flex items-center justify-center gap-3">
      <Clock className="w-5 h-5 text-[#b5534e]" />
      <span className="text-[#2b1a10] font-semibold text-sm">Offer ends in:</span>
      <div className="flex gap-1">
        {[
          { val: hours, label: 'HRS' },
          { val: minutes, label: 'MIN' },
          { val: seconds, label: 'SEC' },
        ].map((item: any, i: number) => (
          <div key={i} className="bg-[#2b1a10] text-[#c9973a] rounded-md px-2.5 py-1 text-center min-w-[45px]">
            <div className="text-lg font-bold font-mono leading-tight">
              {String(item?.val ?? 0).padStart(2, '0')}
            </div>
            <div className="text-[8px] tracking-wider text-[#fdf6ee]/60">{item?.label ?? ''}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
