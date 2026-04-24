'use client'

import { useInView } from 'react-intersection-observer'
import { ReactNode } from 'react'

interface ScrollAnimateProps {
  children: ReactNode
  className?: string
  delay?: number
}

export default function ScrollAnimate({ children, className, delay }: ScrollAnimateProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <div
      ref={ref}
      className={className ?? ''}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(24px)',
        transition: `opacity 0.6s ease-out ${delay ?? 0}ms, transform 0.6s ease-out ${delay ?? 0}ms`,
      }}
    >
      {children}
    </div>
  )
}
